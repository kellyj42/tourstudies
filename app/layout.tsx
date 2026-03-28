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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tour Study Uganda Ltd | A Future Beyond Borders",
    template: "%s | Tour Study Uganda Ltd",
  },
  description:
    "Tour Study Uganda Ltd helps students access alternative education opportunities abroad through university placement, application guidance, visa support, and transition preparation.",
  keywords: [
    "Tour Study Uganda",
    "study abroad Uganda",
    "university placement Uganda",
    "visa guidance Uganda",
    "study abroad consultants Kampala",
    "education opportunities abroad",
    "Tour Study Uganda Ltd",
  ],
  applicationName: "Tour Study Uganda Ltd",
  authors: [{ name: "Tour Study Uganda Ltd" }],
  creator: "Tour Study Uganda Ltd",
  publisher: "Tour Study Uganda Ltd",
  category: "education",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/fevacon.jpeg", type: "image/jpeg" },
      { url: "/imglogo.png", type: "image/png" },
    ],
    shortcut: "/fevacon.jpeg",
    apple: "/fevacon.jpeg",
  },
  openGraph: {
    title: "Tour Study Uganda Ltd | A Future Beyond Borders",
    description:
      "Supporting students with alternative education opportunities abroad through placement, guidance, and transition support.",
    url: "/",
    siteName: "Tour Study Uganda Ltd",
    type: "website",
    locale: "en_UG",
    images: [
      {
        url: "/imglogo.png",
        width: 1200,
        height: 630,
        alt: "Tour Study Uganda Ltd logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Study Uganda Ltd | A Future Beyond Borders",
    description:
      "Supporting students with alternative education opportunities abroad through placement, guidance, and transition support.",
    images: ["/imglogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
