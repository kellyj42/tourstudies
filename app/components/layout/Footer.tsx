import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#4b306c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">Tour Study Uganda</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200">
              We help ambitious Ugandan students find realistic study options abroad,
              prepare stronger applications, and move with confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Reach Us</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-3"><Phone size={16} /> 0701 882166</li>
              <li className="flex items-center gap-3"><MessageCircle size={16} /> 0758 335558</li>
              <li className="flex items-center gap-3"><Mail size={16} /> tourstudyug@gmail.com</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Lukuli Road, Kampala</li>
            </ul>

            <Link
              href="https://wa.me/256758335558"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 rounded-full bg-accent px-5 py-2.5 font-semibold text-white"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-slate-300">
          Copyright {new Date().getFullYear()} Tour Study Uganda Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
