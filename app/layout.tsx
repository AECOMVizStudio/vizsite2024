import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "AECOM Visualization Studio",
  description: "AECOM's highest rated visualization experts. We specialize in 3D modeling, realtime 3D, simulations, and more for business lines such as Water, Power, and Transportation",
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
