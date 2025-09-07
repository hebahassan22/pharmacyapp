"use client";

import CountUp from "react-countup";

const stats = [
  { title: "Customers", value: 3, color: "from-indigo-400 to-indigo-600" },
  { title: "Orders", value: 2, color: "from-purple-400 to-purple-600" },
  { title: "Revenue", value: 75, prefix: "rs", color: "from-pink-400 to-pink-600" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8 text-white bg-gradient-to-br from-indigo-900 via-gray-900 to-black">
      <h1 className="mb-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
        Dashboard ✨
      </h1>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-6 transition border border-gray-700 shadow-xl rounded-2xl bg-gray-900/60 backdrop-blur-xl hover:border-indigo-400"
          >
            <h2 className="text-lg font-semibold text-gray-300">{item.title}</h2>
            <p
              className={`mt-3 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
            >
              <CountUp
                end={item.value}
                duration={2.5}
                prefix={item.prefix || ""}
                separator=","
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
