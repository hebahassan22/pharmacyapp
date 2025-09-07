"use client";

export default function PartnersPage() {
  const partners = [
    { id: 1, name: "MediPlus Pharmacy", status: "Active" },
    { id: 2, name: "Wellness Drugs", status: "Inactive" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🤝 Partners</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {partners.map((p) => (
          <div
            key={p.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p
              className={`mt-2 font-medium ${
                p.status === "Active" ? "text-green-600" : "text-red-600"
              }`}
            >
              {p.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
