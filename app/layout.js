import "./globals.css";

export const metadata = {
  title: "Pharmacist Admin Portal",
  description: "Modern dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
