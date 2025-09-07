"use client";

export default function OrdersPage() {
  const orders = [
    { id: 101, customer: "Heba", total: "rs50", status: "Delivered" },
    { id: 102, customer: "Jhon", total: "rs25", status: "Pending" },
  ];

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">🛒 Orders</h1>

      <div className="overflow-hidden bg-white rounded-lg shadow-md">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Order ID</th>
              <th className="p-3 border-b">Customer</th>
              <th className="p-3 border-b">Total</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{o.id}</td>
                <td className="p-3 border-b">{o.customer}</td>
                <td className="p-3 border-b">{o.total}</td>
                <td
                  className={`p-3 border-b rs{
                    o.status === "Delivered" ? "text-green-600" : "text-yellow-600"
                  }`}
                >
                  {o.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
