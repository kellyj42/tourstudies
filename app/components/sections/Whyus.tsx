import Image from "next/image";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Empathy-Driven Guidance",
    description:
      "We guide students using firsthand experience from our own international journeys, offering practical insights and support.",
    icon: HeartHandshake,
  },
  {
    title: "Holistic Support",
    description:
      "Our services go beyond admission. We help students prepare for a smooth transition and successful settlement in the host country.",
    icon: ShieldCheck,
  },
  {
    title: "Specialized Program Focus",
    description:
      "We connect students to top-tier universities offering modern and in-demand programs not readily available locally.",
    icon: Sparkles,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold md:text-4xl">Why choose Tour Study Uganda Ltd</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Our support is built on empathy, experience, and a clear understanding of the opportunities students need beyond local limitations.
          </p>

          <div className="mt-10 space-y-5">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="flex gap-4">
                    <div className="mt-1 rounded-2xl bg-white/10 p-3 text-accent">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80"
            alt="A supportive meeting between advisor and student"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
