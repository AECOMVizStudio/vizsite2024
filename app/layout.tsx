import type { Metadata } from "next";
import "./globals.css";

import Header from '@/ui/header';
import Footer from '@/ui/footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AECOM Visualization Studio',
  description: "AECOM's highest rated visualization experts. We specialize in 3D modeling, realtime 3D, simulations, and more for business lines such as Water, Power, and Transportation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
