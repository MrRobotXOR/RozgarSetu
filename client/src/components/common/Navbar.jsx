import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-teal-700"
        >
          RozgarSetu
        </Link>

        <div className="flex gap-6 items-center">

          <Link to="/" className="font-medium">
            Home
          </Link>

          <Link to="/login" className="font-medium">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-teal-700 text-white px-4 py-2 rounded-lg"
          >
            Signup
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;