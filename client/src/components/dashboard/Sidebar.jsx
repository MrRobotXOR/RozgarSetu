import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ role }) => {

  const location = useLocation();

  const workerLinks = [
    { name: "Dashboard", path: "/worker/dashboard" },
    { name: "Profile", path: "/worker/profile" },
    { name: "Applications", path: "/worker/applications" },
    { name: "Nearby Jobs", path: "/worker/nearby-jobs" },
    { name: "Messages", path: "/messages" },
  ];

  const employerLinks = [
    { name: "Dashboard", path: "/employer/dashboard" },
    { name: "Post Job", path: "/employer/post-job" },
    { name: "Manage Jobs", path: "/employer/manage-jobs" },
    { name: "Applicants", path: "/employer/applicants" },
    { name: "Messages", path: "/messages" },
  ];

  const links =
    role === "worker"
      ? workerLinks
      : employerLinks;

  return (

    <div className="fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-6 shadow-2xl flex flex-col">

      {/* Logo */}
      <h2 className="text-2xl font-bold mb-10 text-teal-400 tracking-wide">
        RozgarSetu
      </h2>

      {/* Links */}
      <div className="flex-1 flex flex-col gap-3">

        {links.map((link, index) => {

          const isActive =
            location.pathname ===
            link.path;

          return (

            <Link
              key={index}
              to={link.path}
              className={`relative px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-teal-700 text-white shadow-lg"
                  : "hover:bg-slate-800 text-gray-300"
              }`}
            >

              <span
                className={`absolute left-0 top-0 h-full w-1 bg-teal-400 rounded-r-full transition-all duration-300 ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <span className="group-hover:translate-x-1 transition duration-300 inline-block">
                {link.name}
              </span>

            </Link>

          );

        })}

      </div>

      {/* Footer */}
      <div className="text-xs text-slate-500 text-center pt-4 border-t border-slate-800">

        © RozgarSetu 2026

      </div>

    </div>

  );

};

export default Sidebar;