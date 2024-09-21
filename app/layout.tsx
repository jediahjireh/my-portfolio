import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const lavishlyYours = localFont({
  src: "./fonts/LavishlyYours-Regular.ttf",
  variable: "--font-lavishly-yours",
  weight: "10000 19000",
});

export const metadata: Metadata = {
  title: "Jediah's Portfolio",
  description: "Full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`p-2 ${geistSans.variable} ${geistMono.variable} ${lavishlyYours.variable} antialiased`}
      >
        <Toaster />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
