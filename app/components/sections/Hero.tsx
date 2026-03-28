import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, ShieldCheck } from "lucide-react";

const highlights = [
  "Founded by two former international scholars",
  "Over 2 years of study abroad guidance",
  "Helping students access alternative opportunities abroad",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-grid text-white"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(213,154,67,0.3),transparent_25%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
              <BadgeCheck size={16} className="text-accent" />
              A Future Beyond Borders
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Tour Study Uganda Ltd bridges students to education opportunities abroad.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Tour Study Uganda Ltd was founded by two former international scholars.
              We assist students in navigating their study abroad journey seamlessly,
              from choosing the right path to preparing for life in a new country.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/256758335558"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-soft backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white px-5 py-6 text-ink">
                <Globe2 className="text-primary" />
                <p className="mt-4 text-3xl font-bold">2+</p>
                <p className="mt-2 text-sm text-slate-600">
                  Years of experience supporting students with study opportunities abroad.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-6">
                <ShieldCheck className="text-accent" />
                <p className="mt-4 text-3xl font-bold">53,000+</p>
                <p className="mt-2 text-sm text-slate-200">
                  Students left without local admission space by 2025 despite being eligible.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] bg-[#583a79]/90 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">
                Why this matters
              </p>
              <ul className="mt-4 space-y-4 text-sm text-slate-200">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" /> Local admission capacity stays around 60,000 students each year.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" /> The number of qualified students continues to rise sharply.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" /> TSUL helps close that gap with alternative opportunities abroad.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
