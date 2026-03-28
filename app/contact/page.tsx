import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contactCards = [
  {
    title: "WhatsApp",
    detail: "0758 335558",
    href: "https://wa.me/256758335558",
    icon: MessageCircle,
    accent: "text-green-600",
  },
  {
    title: "Phone",
    detail: "0701 882166 / 0758 335558",
    href: "tel:+256701882166",
    icon: Phone,
    accent: "text-primary",
  },
  {
    title: "Email",
    detail: "tourstudyug@gmail.com",
    href: "mailto:tourstudyug@gmail.com",
    icon: Mail,
    accent: "text-accent",
  },
];

export default function Contact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="w-16 h-1 rounded-full bg-accent mx-auto mb-4"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary">Contact Tour Study Uganda Ltd</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-8">
            Reach out for support with university placement, country selection, applications, visa guidance, or your next step toward studying abroad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-[1.75rem] bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <Icon className={card.accent} size={32} />
                <h3 className="mt-4 text-lg font-semibold text-primary">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600 break-all">{card.detail}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 items-start">
          <div className="h-[460px] overflow-hidden rounded-[2rem] shadow-soft">
            <iframe
              src="https://www.google.com/maps?q=Lukuli+Road+Kampala&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tour Study Uganda map"
            ></iframe>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p><strong>Phone:</strong> 0701 882166, 0758 335558</p>
              <p><strong>WhatsApp:</strong> 0758 335558</p>
              <p><strong>Email:</strong> tourstudyug@gmail.com</p>
              <p><strong>Location:</strong> Lukuli Road, Kampala</p>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-mist p-5">
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="mt-1 text-primary" size={18} />
                <div>
                  <p className="font-semibold text-primary">Office Location</p>
                  <p className="mt-1">Lukuli Road, Kampala</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/256758335558"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full bg-accent px-6 py-3 font-semibold text-white"
              >
                Message on WhatsApp
              </Link>
              <Link
                href="mailto:tourstudyug@gmail.com"
                className="inline-flex justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-primary"
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
