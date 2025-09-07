"use client";

export default function CustomersPage() {
  const customers = [
    { id: 1, name: "Heba Hassan", email: "heba@example.com" },
    { id: 2, name: "Jhon", email: "jhon@example.com" },
    { id: 3, name: "Aliya", email: "aliya@example.com" },
  ];

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">👥 Customers</h1>

      <div className="overflow-hidden bg-white shadow-lg rounded-xl">
        <table className="w-full text-left border-collapse">
          {/* Table Head */}
          <thead className="text-white bg-gradient-to-r from-purple-600 to-blue-600">
            <tr>
              <th className="p-4 text-sm font-semibold">ID</th>
              <th className="p-4 text-sm font-semibold">Name</th>
              <th className="p-4 text-sm font-semibold">Email</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {customers.map((c, index) => (
              <tr
                key={c.id}
                className={`transition duration-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-purple-100 hover:scale-[1.01]`}
              >
                <td className="p-4 font-medium text-gray-700 border-b border-gray-200">
                  {c.id}
                </td>
                <td className="p-4 text-gray-800 border-b border-gray-200">
                  {c.name}
                </td>
                <td className="p-4 text-gray-600 border-b border-gray-200">
                  {c.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
