import type { Metadata } from "next";
import "./globals.css";

import Header from '@/ui/header';
import Footer from '@/ui/footer';
import { Montserrat, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const monstserrat = Montserrat({ subsets: ['latin'] });

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
      <body className={`${monstserrat.className} w-full h-full flex flex-col mx-auto`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
