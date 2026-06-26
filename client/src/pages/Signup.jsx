import { useState } from "react";
import { registerUser } from "../services/authService";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "worker",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(formData);
      alert("Registered Successfully");
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white shadow-xl rounded-3xl overflow-hidden">

        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center items-center bg-teal-700 text-white p-10">

          <h1 className="text-4xl font-bold">Join RozgarSetu 🚀</h1>

          <p className="mt-4 text-center text-white/90">
            Find jobs or hire workers instantly with trusted platform.
          </p>

          <div className="mt-10 text-6xl animate-bounce">👷‍♂️</div>

        </div>

        {/* FORM */}
        <div className="p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
            />

            <select
              name="role"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
            >
              <option value="worker">Worker</option>
              <option value="employer">Employer</option>
            </select>

            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-xl transition transform hover:scale-105"
            >
              Signup
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Signup;