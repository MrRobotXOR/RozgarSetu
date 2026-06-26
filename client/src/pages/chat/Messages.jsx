import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { getConversations } from "../../services/chatService";

const Messages = () => {

  const [users, setUsers] =
    useState([]);

  const currentUser =
    JSON.parse(
      localStorage.getItem("user")
    );

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

  const formatTime =
    (date) => {

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

    <DashboardLayout
      role={currentUser?.role}
    >

      <div className="min-h-full bg-gradient-to-br from-slate-100 via-slate-50 to-teal-50 rounded-3xl">

        {/* MAIN AREA */}
        <div className="max-w-4xl mx-auto py-10 px-4">

          {/* HEADER */}
          <div className="mb-8">

            <h1 className="text-4xl font-bold text-gray-900">
              Messages{" "}
              <span className="text-teal-700">
                Inbox
              </span>
            </h1>

            <p className="text-gray-500 mt-1">
              Your conversations appear here
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

            {users.map(
              (user) => (

                <Link
                  key={user._id}
                  to={`/chat/${user._id}`}
                  className="flex items-center gap-4 px-6 py-5 border-b border-gray-100 hover:bg-gradient-to-r hover:from-teal-50 hover:to-white transition group"
                >

                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center font-bold shadow-md">

                    {user.name
                      ?.charAt(0)
                      .toUpperCase()}

                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">

                    <div className="flex justify-between items-center">

                      <h3 className="font-semibold text-gray-900 group-hover:text-teal-700 transition">

                        {user.name}

                      </h3>

                      <span className="text-xs text-gray-400 bg-slate-100 px-2 py-1 rounded-full">

                        {formatTime(
                          user.createdAt
                        )}

                      </span>

                    </div>

                    <p className="text-sm text-gray-500 truncate mt-1">

                      {user.lastMessage ||
                        "Start your conversation..."}

                    </p>

                  </div>

                </Link>

              )
            )}

            {users.length === 0 && (

              <div className="p-16 text-center">

                <div className="text-xl font-semibold text-gray-700">
                  No Messages Yet
                </div>

                <p className="text-gray-400 mt-2">
                  Start chatting with workers or employers
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default Messages;