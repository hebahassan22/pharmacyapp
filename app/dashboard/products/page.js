"use client";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Paracetamol", price: "rs10" },
    { id: 2, name: "Vitamin C", price: "rs15" },
    { id: 3, name: "Cough Syrup", price: "rs12" },
  ];

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">📦 Products</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="p-6 transition bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="mt-2 text-gray-600">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
