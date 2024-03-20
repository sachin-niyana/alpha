import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alpha",
  description: "Welcome To Alpha Page...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-light-gray scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
