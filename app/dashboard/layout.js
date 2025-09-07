"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "📊 Dashboard" },
    { href: "/dashboard/customers", label: "👥 Customers" },
    { href: "/dashboard/partners", label: "🤝 Partners" },
    { href: "/dashboard/orders", label: "🛒 Orders" },
    { href: "/dashboard/products", label: "📦 Products" },
    { href: "/dashboard/settings", label: "⚙️ Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-600 to-blue-600 text-white shadow-lg p-5">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === link.href
                  ? "bg-white text-purple-600 font-semibold shadow-md"
                  : "hover:bg-purple-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <span className="font-semibold text-gray-700">👤 Admin</span>
          <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </header>

        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
