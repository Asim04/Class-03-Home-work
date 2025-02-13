// import type { Metadata } from "next";
// import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
