import { useEffect, useState, useRef } from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { io } from "socket.io-client";

import {
  sendMessage,
  getMessages,
} from "../../services/chatService";

const socket = io(
  "http://localhost:5000"
);

const ChatPage = () => {
  const [messages, setMessages] =
    useState([]);
    

  const [text, setText] =
    useState("");

  const [onlineUsers, setOnlineUsers] =
    useState([]);
const [isTyping, setIsTyping] =
  useState(false);
  const messagesEndRef =
    useRef(null);

  const { userId } = useParams();

  const navigate =
    useNavigate();

  const receiverId = userId;

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    if (
      !receiverId ||
      receiverId === "........"
    ) {
      navigate("/");
      return;
    }

    fetchMessages();
  }, [receiverId]);

  useEffect(() => {
    if (!currentUser?._id) return;

    socket.emit(
      "join",
      currentUser._id
    );

    const handleReceiveMessage =
      (message) => {
        console.log(
          "REALTIME RECEIVED:",
          message
        );

        if (
          message.sender ===
            receiverId ||
          message.receiver ===
            receiverId
        ) {
          setMessages(
            (prev) => [
              ...prev,
              message,
            ]
          );
        }
      };

    const handleOnlineUsers =
      (users) => {
        setOnlineUsers(users);
      };
      const handleTyping = () => {
  setIsTyping(true);
};

const handleStopTyping = () => {
  setIsTyping(false);
};

    socket.on(
      "receiveMessage",
      handleReceiveMessage
    );

    socket.on(
      "onlineUsers",
      handleOnlineUsers
    );
    socket.on(
  "userTyping",
  handleTyping
);

socket.on(
  "userStopTyping",
  handleStopTyping
);

    return () => {
      socket.off(
        "receiveMessage",
        handleReceiveMessage
      );

      socket.off(
        "onlineUsers",
        handleOnlineUsers
      );
      socket.off(
  "userTyping",
  handleTyping
);

socket.off(
  "userStopTyping",
  handleStopTyping
);
    };
  }, [
    receiverId,
    currentUser?._id,
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const fetchMessages =
    async () => {
      try {
        const data =
          await getMessages(
            receiverId
          );

        setMessages(
          data.messages || []
        );
      } catch (error) {
        console.log(
          "FETCH ERROR:",
          error.response?.data
        );
      }
    };

  const handleSend =
    async () => {
      if (!text.trim())
        return;

      if (
        currentUser?._id ===
        receiverId
      ) {
        alert(
          "You cannot chat with yourself"
        );
        return;
      }

      try {
        const data =
          await sendMessage(
            receiverId,
            text
          );

        if (data?.message) {
          setMessages(
            (prev) => [
              ...prev,
              data.message,
            ]
          );
        }

        socket.emit(
          "sendMessage",
          {
            sender:
              currentUser._id,
            receiver:
              receiverId,
            text,
          }
        );

        setText("");
      } catch (error) {
        console.log(
          "SERVER ERROR:",
          error.response?.data
        );
      }
    };

  return (
   <div className="h-[100vh] bg-slate-200 p-3">
  <div className="max-w-6xl mx-auto h-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">

        {/* Header */}
       <div className="bg-teal-700 text-white px-6 py-4 flex-shrink-0">
          <h1 className="text-xl font-bold">
            Chat
          </h1>

          <p className="text-sm mt-1">
            {onlineUsers.includes(
              receiverId
            )
              ? "🟢 Online"
              : "⚫ Offline"}
          </p>
        </div>

        {/* Messages */}
   <div className="flex-1 overflow-y-auto bg-slate-100 p-5 pb-10">
          {messages.map(
            (
              msg,
              index
            ) => {
              const isMine =
                msg.sender ===
                currentUser?._id;

              return (
                <div
                  key={
                    msg._id ||
                    `${index}-${msg.text}`
                  }
                  className={`flex mb-3 ${
                    isMine
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-2xl shadow ${
                      isMine
                        ? "bg-teal-600 text-white rounded-br-sm"
                        : "bg-white text-black rounded-bl-sm"
                    }`}
                  >
                    <p>
                      {msg.text}
                    </p>

                    <p
                      className={`text-[10px] mt-1 ${
                        isMine
                          ? "text-teal-100"
                          : "text-gray-500"
                      }`}
                    >
                      {msg.createdAt
                        ? new Date(
                            msg.createdAt
                          ).toLocaleTimeString(
                            [],
                            {
                              hour:
                                "2-digit",
                              minute:
                                "2-digit",
                            }
                          )
                        : "Now"}
                    </p>
                  </div>
                </div>
              );
            }
          )}
          {isTyping && (
  <div className="flex justify-start mb-4">
    <div className="bg-white px-4 py-2 rounded-xl shadow text-sm text-gray-500 italic">
      Typing...
    </div>
  </div>
)}

<div
  ref={messagesEndRef}
  className="h-8"
/>
     <div
            ref={
              messagesEndRef
            }
          />
        </div>

        {/* Input */}
       <div className="flex gap-3 p-4 border-t bg-white flex-shrink-0">
          <input
  value={text}
  onChange={(e) => {

    setText(
      e.target.value
    );

    socket.emit(
      "typing",
      {
        sender:
          currentUser._id,
        receiver:
          receiverId,
      }
    );

    clearTimeout(
      window.typingTimer
    );

    window.typingTimer =
      setTimeout(() => {

        socket.emit(
          "stopTyping",
          {
            sender:
              currentUser._id,
            receiver:
              receiverId,
          }
        );

      }, 1000);

  }}
            onKeyDown={(e) => {
              if (
                e.key === "Enter"
              ) {
                handleSend();
              }
            }}
           className="flex-1 border rounded-full px-5 h-12 outline-none"
            placeholder="Type a message..."
          />

          <button
            onClick={
              handleSend
            }
           className="bg-teal-700 text-white px-8 h-12 rounded-full hover:bg-teal-800"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
};

export default ChatPage;