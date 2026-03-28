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
  title: "Tour Study Uganda Ltd | A Future Beyond Borders",
  description:
    "Tour Study Uganda Ltd helps students access alternative education opportunities abroad through university placement, application guidance, visa support, and transition preparation.",
  openGraph: {
    title: "Tour Study Uganda Ltd",
    description:
      "A Future Beyond Borders. Supporting students with study abroad placement, guidance, and transition support.",
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
