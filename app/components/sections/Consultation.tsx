import Link from "next/link";
import { CalendarDays, Mail, MessageCircle } from "lucide-react";

export default function Consultation() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#734F96,#4B306C)] p-8 text-white shadow-soft md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                A Future Beyond Borders
              </div>
              <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                Speak with Tour Study Uganda Ltd about your next academic step.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Whether you need help with university placement, country selection, applications, visas, or transition planning, our team is ready to guide you.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-ink">
              <h3 className="text-xl font-semibold text-primary">Reach us directly</h3>
              <div className="mt-6 space-y-4">
                <Link
                  href="https://wa.me/256758335558"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-mist px-5 py-4 font-medium text-primary transition hover:bg-slate-100"
                >
                  <span className="flex items-center gap-3"><MessageCircle size={18} /> WhatsApp</span>
                  <span>0758 335558</span>
                </Link>
                <Link
                  href="tel:+256701882166"
                  className="flex items-center justify-between rounded-2xl bg-mist px-5 py-4 font-medium text-primary transition hover:bg-slate-100"
                >
                  <span className="flex items-center gap-3"><CalendarDays size={18} /> Phone</span>
                  <span>0701 882166</span>
                </Link>
                <Link
                  href="mailto:tourstudyug@gmail.com"
                  className="flex items-center justify-between rounded-2xl bg-mist px-5 py-4 font-medium text-primary transition hover:bg-slate-100"
                >
                  <span className="flex items-center gap-3"><Mail size={18} /> Email</span>
                  <span>tourstudyug@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
