import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://alpha-two-swart.vercel.app/",
  title: "Alpha",
  description: "Welcome To Alpha Page ...",
  openGraph: {
    title: "Alpha",
    description: "Welcome To Alpha Page ...",
    images: ["/assets/images/meta/meta-img.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-light-gray scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
