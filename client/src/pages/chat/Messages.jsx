import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getConversations,
} from "../../services/chatService";

const Messages = () => {

  const [users, setUsers] =
    useState([]);

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations =
    async () => {
      try {

        const data =
          await getConversations();

        setUsers(
          data.users || []
        );

      } catch (error) {
        console.log(error);
      }
    };

  const formatTime = (
    date
  ) => {

    if (!date) return "";

    return new Date(
      date
    ).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Messages
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        {users.map((user) => (

          <Link
            key={user._id}
            to={`/chat/${user._id}`}
            className="flex justify-between items-center p-4 border-b hover:bg-slate-50"
          >

            <div className="flex-1">

              <h3 className="font-bold text-lg">
                {user.name}
              </h3>

              <p className="text-gray-600 text-sm truncate">
                {user.lastMessage}
              </p>

            </div>

            <div className="text-xs text-gray-500">
              {formatTime(
                user.createdAt
              )}
            </div>

          </Link>

        ))}

        {users.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No conversations yet
          </div>
        )}

      </div>

    </div>
  );
};

export default Messages;