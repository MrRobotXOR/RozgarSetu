import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  sendMessage,
  getMessages,
  getConversations,
} from "../controllers/chatController.js";
const router = express.Router();

router.post(
  "/send",
  protect,
  sendMessage
);

router.get(
  "/conversations",
  protect,
  getConversations
);

router.get(
  "/:userId",
  protect,
  getMessages
);

export default router;