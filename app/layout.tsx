import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "AECOM Visualization Studio",
  description: "We are AECOM's finest visualization experts. Extensive 3D modeling, realtime simulations, virtual environments and more.",
};

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
