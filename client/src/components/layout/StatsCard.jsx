import {
  FaBriefcase,
  FaUsers,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

const StatsCard = ({ title, value }) => {

  const getIcon = () => {
    switch (title) {
      case "Total Jobs":
        return <FaBriefcase size={30} />;

      case "Applicants":
        return <FaUsers size={30} />;

      case "Applications":
        return <FaFileAlt size={30} />;

      case "Accepted":
      case "Hired":
        return <FaCheckCircle size={30} />;

      default:
        return <FaFileAlt size={30} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
      <div>
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>

      <div className="text-blue-600">
        {getIcon()}
      </div>
    </div>
  );
};

export default StatsCard;