import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // ⏳ 2 sec fake loading animation
      await new Promise((res) => setTimeout(res, 2000));

      const data = await loginUser({ email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.role === "worker") navigate("/worker/dashboard");
      else if (data.user.role === "employer") navigate("/employer/dashboard");
      else navigate("/admin/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">

      {/* 🔥 LOADING OVERLAY */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 border-4 border-white border-t-teal-500 rounded-full animate-spin"></div>
            <p className="text-white mt-4 font-semibold">Logging in...</p>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white shadow-xl rounded-3xl overflow-hidden">

        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center items-center bg-teal-700 text-white p-10">
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

          <p className="mt-4 text-center text-white/90">
            Login to continue your job journey or hiring process.
          </p>

          <div className="mt-10 text-6xl animate-pulse">💼</div>
        </div>

        {/* FORM */}
        <div className="p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Login to Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-600 outline-none"
            />

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-xl transition transform hover:scale-105 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;