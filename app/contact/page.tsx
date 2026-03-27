"use client";

import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔝 Heading */}
        <div className="text-center animate-in fade-in duration-700">
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600">
            Reach out via WhatsApp or send us a message below.
          </p>
        </div>

        {/* 🔲 Contact Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <a href="https://wa.me/256758335558" target="_blank" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <MessageCircle className="mx-auto text-green-500" size={32} />
            <h3 className="mt-4 font-semibold text-lg text-center">WhatsApp</h3>
            <p className="text-sm text-gray-500 text-center">0758 335558</p>
          </a>

          <a href="tel:+256701882166" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <Phone className="mx-auto text-primary" size={32} />
            <h3 className="mt-4 font-semibold text-lg text-center">Call</h3>
            <p className="text-sm text-gray-500 text-center">0701 882166</p>
          </a>

          <a href="mailto:tourstudyug@gmail.com" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <Mail className="mx-auto text-accent" size={32} />
            <h3 className="mt-4 font-semibold text-lg text-center">Email</h3>
            <p className="text-sm text-gray-500 text-center break-all">
              tourstudyug@gmail.com
            </p>
          </a>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <MapPin className="mx-auto text-red-500" size={32} />
            <h3 className="mt-4 font-semibold text-lg text-center">Location</h3>
            <p className="text-sm text-gray-500 text-center">
              Lukuli Road, Kampala
            </p>
          </div>

        </div>

        {/* 📝 FORM SECTION */}
        {/* 🔲 Map + Contact Grid */}
<div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">

  {/* 🗺️ Google Map */}
  <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-left duration-700">
    <iframe
      src="https://www.google.com/maps?q=Lukuli+Road+Kampala&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* 📞 Contact + Form */}
  <div className="space-y-10">

    {/* Contact Cards */}
   
    {/* 📝 Form */}
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-primary mb-4">
        Send Us a Message
      </h3>

      <form className="grid gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="rounded-md border-gray-300"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="rounded-md border-gray-300"
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          className="rounded-md border-gray-300"
        ></textarea>

        <button className="bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition">
          Send Message
        </button>

      </form>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}