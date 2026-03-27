"use client";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔲 Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* 🏢 Brand */}
          <div>
            <h2 className="text-2xl font-bold">Tour Study UG</h2>
            <p className="mt-4 text-gray-200 text-sm">
              A Future Beyond Borders. We help Ugandan students access
              world-class education opportunities abroad with full support.
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">

              <li><a href="#home" className="hover:text-accent">Home</a></li>
              <li><a href="#about" className="hover:text-accent">About</a></li>
              <li><a href="#services" className="hover:text-accent">Services</a></li>
              <li><a href="#why-us" className="hover:text-accent">Why Us</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>

            </ul>
          </div>

          {/* 📞 Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>📞 0701 882166</li>
              <li>💬 0758 335558</li>
              <li>✉️ tourstudyug@gmail.com</li>
              <li>📍 Lukuli Road, Kampala</li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/256758335558"
              target="_blank"
              className="inline-block mt-4 bg-accent text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* 🟡 Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">

          © {new Date().getFullYear()} Tour Study Uganda Limited. All rights reserved.

        </div>

      </div>
    </footer>
  );
}