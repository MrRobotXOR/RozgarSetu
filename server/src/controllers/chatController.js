import Message from "../models/Message.js";
import User from "../models/User.js";

// Send Message
export const sendMessage = async (
  req,
  res
) => {
  try {
    const { receiver, text } =
      req.body;

    if (req.user.id === receiver) {
      return res.status(400).json({
        message:
          "Cannot send message to yourself",
      });
    }

    const message =
      await Message.create({
        sender: req.user.id,
        receiver,
        text,
      });

    res.status(201).json({
      success: true,
      message,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Messages Between Two Users
export const getMessages = async (
  req,
  res
) => {
  try {
    const messages =
      await Message.find({
        $or: [
          {
            sender: req.user.id,
            receiver:
              req.params.userId,
          },
          {
            sender:
              req.params.userId,
            receiver:
              req.user.id,
          },
        ],
      }).sort({
        createdAt: 1,
      });

    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Conversations
export const getConversations =
  async (req, res) => {
    try {

      const messages =
        await Message.find({
          $or: [
            {
              sender:
                req.user.id,
            },
            {
              receiver:
                req.user.id,
            },
          ],
        }).sort({
          createdAt: -1,
        });

      const conversationMap =
        new Map();

      for (const msg of messages) {

        const otherUserId =
          msg.sender.toString() ===
          req.user.id
            ? msg.receiver.toString()
            : msg.sender.toString();

        if (
          !conversationMap.has(
            otherUserId
          )
        ) {
          conversationMap.set(
            otherUserId,
            {
              lastMessage:
                msg.text,
              createdAt:
                msg.createdAt,
            }
          );
        }
      }

      const userIds = [
        ...conversationMap.keys(),
      ];

      const users =
        await User.find({
          _id: {
            $in: userIds,
          },
        }).select(
          "name email role"
        );

      const conversations =
        users.map((user) => ({
          ...user.toObject(),
          lastMessage:
            conversationMap.get(
              user._id.toString()
            )?.lastMessage,
          createdAt:
            conversationMap.get(
              user._id.toString()
            )?.createdAt,
        }));

      conversations.sort(
        (a, b) =>
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
      );

      res.json({
        success: true,
        users:
          conversations,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };