"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Destinations", href: "/#destinations" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Tour Study Uganda logo"
            width={100}
            height={50}
            className="rounded-2xl object-cover shadow-soft"
          />
          <div>
            <p className="font-semibold text-primary leading-none">Tour Study Uganda</p>
            <p className="text-xs text-slate-500 mt-1">Student-first global admissions guidance</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-slate-700 transition hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="https://wa.me/256758335558"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
        >
          Free Consultation
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="https://wa.me/256758335558"
            target="_blank"
            rel="noreferrer"
            className="block rounded-full bg-accent px-4 py-3 text-center font-semibold text-white"
          >
            Chat on WhatsApp
          </Link>
        </div>
      )}
    </header>
  );
}
