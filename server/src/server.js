import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log(
    "User Connected:",
    socket.id
  );

  socket.on("join", (userId) => {
    socket.join(userId);

    onlineUsers.set(
      userId,
      socket.id
    );

    io.emit(
      "onlineUsers",
      Array.from(
        onlineUsers.keys()
      )
    );

    console.log(
      "ONLINE USERS:",
      Array.from(
        onlineUsers.keys()
      )
    );
  });

  socket.on(
    "sendMessage",
    (data) => {
      io.to(
        data.receiver
      ).emit(
        "receiveMessage",
        data
      );
    }
  );
  socket.on(
  "typing",
  (data) => {
    io.to(
      data.receiver
    ).emit(
      "userTyping",
      {
        sender:
          data.sender,
      }
    );
  }
);

socket.on(
  "stopTyping",
  (data) => {
    io.to(
      data.receiver
    ).emit(
      "userStopTyping"
    );
  }
);

  socket.on(
    "disconnect",
    () => {
      for (const [
        userId,
        socketId,
      ] of onlineUsers.entries()) {
        if (
          socketId ===
          socket.id
        ) {
          onlineUsers.delete(
            userId
          );
          break;
        }
      }

      io.emit(
        "onlineUsers",
        Array.from(
          onlineUsers.keys()
        )
      );

      console.log(
        "User Disconnected:",
        socket.id
      );
    }
  );
});

const PORT =
  process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});