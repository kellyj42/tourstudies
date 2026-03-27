"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="font-bold text-primary text-lg">
          Tour Study UG
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-gray-700"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/256758335558"
          className="hidden md:block bg-accent text-white px-5 py-2 rounded-lg"
        >
          Get Started
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-6 space-y-4 shadow">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/256758335558"
            className="block bg-accent text-white text-center py-2 rounded-lg"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}