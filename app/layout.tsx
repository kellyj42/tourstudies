import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tour Study Uganda | Study Abroad Guidance for Ugandan Students",
  description:
    "Tour Study Uganda helps students explore universities abroad with application guidance, visa preparation, and relocation support.",
  openGraph: {
    title: "Tour Study Uganda",
    description:
      "A student-first study abroad advisory for Ugandan students seeking trusted support from consultation to departure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full text-ink flex flex-col">
        <Navbar />
        <div className="pt-20 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
