import Image from "next/image";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Empathy-led guidance",
    description:
      "We understand the emotional and practical weight behind a study abroad decision, so our advice is patient, realistic, and personal.",
    icon: HeartHandshake,
  },
  {
    title: "Support beyond admission",
    description:
      "Students need help with documents, next steps, travel readiness, and expectations. We support the full journey, not just the first form.",
    icon: ShieldCheck,
  },
  {
    title: "Focused on better-fit pathways",
    description:
      "We help students explore strong alternatives, including science and niche program routes that may be harder to access locally.",
    icon: Sparkles,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold md:text-4xl">Why families feel safer working with us.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Legitimacy comes from clarity, care, and confidence. These are the qualities this section now communicates more strongly.
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
