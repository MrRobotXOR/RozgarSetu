import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = ({
  children,
  role,
}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Right Side */}
      <div className="flex-1">

        {/* Header */}
        <div className="bg-white shadow p-4 flex justify-between items-center">

          <h1 className="text-xl font-bold">
            RozgarSetu
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;