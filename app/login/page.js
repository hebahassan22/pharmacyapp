"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "password123") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-900 via-gray-900 to-black">
      <div className="flex w-full max-w-4xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-900/70 backdrop-blur-xl rounded-3xl">
        {/* Login Form */}
        <div className="w-full p-12 lg:w-1/2">
          <h2 className="mb-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            Login
          </h2>
          <p className="mb-8 text-gray-400">Welcome to Pharmacist Platform</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" />
              <input
                type="email"
                placeholder="Username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 pl-12 text-white bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 pl-12 text-white bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <a href="#" className="hover:underline hover:text-indigo-400">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white transition rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90"
            >
              Login
            </button>
          </form>
        </div>

        {/* Illustration */}
        <div className="items-center justify-center hidden w-1/2 lg:flex bg-gradient-to-br from-indigo-600/40 to-purple-600/40">
          <h3 className="text-xl font-semibold text-white">Secure Access 🔐</h3>
        </div>
      </div>
    </div>
  );
}
