"use client";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden text-white bg-gradient-to-br from-indigo-900 via-gray-900 to-black">
      {/* Branding */}
      <div className="absolute text-center top-8">
        <h2 className="text-2xl font-bold tracking-widest text-gray-300 uppercase">
          Pharmacist Admin Portal
        </h2>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-3xl p-12 mt-16 text-center transition-all duration-300 border border-gray-700 shadow-2xl bg-gray-900/60 backdrop-blur-xl rounded-3xl hover:border-indigo-500">
        {/* Glow background */}
        <div className="absolute inset-0 opacity-40 -z-10 rounded-3xl bg-gradient-to-r from-purple-600/40 to-pink-600/40 blur-3xl"></div>

        <h1 className="mb-6 text-6xl font-extrabold leading-tight text-transparent sm:text-7xl bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 drop-shadow-lg">
          Welcome ✨
        </h1>

        <p className="mb-10 text-lg font-light leading-relaxed text-gray-300">
          Step into a <span className="font-semibold text-indigo-400">modern</span> and{" "}
          <span className="font-semibold text-pink-400">secure</span> admin portal. <br />
          Manage your dashboard with <span className="italic">ease and style</span>.
        </p>

        {/* CTA button */}
        <button
          onClick={goToLogin}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-semibold shadow-lg transition-transform duration-300 hover:scale-110"
        >
          {/* Gradient border */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x"></span>

          {/* Button inner */}
          <span className="relative inline-flex items-center gap-3 px-10 py-4 text-lg text-white transition-colors duration-300 bg-gray-900 rounded-full group-hover:bg-transparent">
            Enter Portal
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </span>
        </button>
      </div>
    </div>
  );
}
