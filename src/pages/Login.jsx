import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, email);
    navigate("/");
  };

  return (
    <div className="bg-[#F7F3EC] min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-[#D8D1C7] rounded-xl p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold text-[#22211F] mb-1">Welcome to VORA.</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to continue</p>

        <label className="text-xs font-medium text-gray-700">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-[#D8D1C7] rounded-lg px-3 py-2 text-sm mt-1 mb-4 outline-none focus:border-gray-900"
          placeholder="Your name"
        />

        <label className="text-xs font-medium text-gray-700">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="w-full border border-[#D8D1C7] rounded-lg px-3 py-2 text-sm mt-1 mb-6 outline-none focus:border-gray-900"
          placeholder="you@example.com"
        />

        <button
          type="submit"
          className="w-full bg-[#1C1C1B] hover:bg-black text-white text-sm font-medium py-3 rounded-lg transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;