import { BriefcaseBusiness, Globe2, Network } from "lucide-react";

const benefits = [
  {
    title: "Exposure",
    description:
      "Studying abroad expands perspective, confidence, and awareness of global opportunities.",
    icon: Globe2,
  },
  {
    title: "Work Experience",
    description:
      "Students gain access to practical experience that can strengthen both academic and career growth.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Global Networking",
    description:
      "International study creates relationships and connections that extend beyond local boundaries.",
    icon: Network,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold md:text-4xl">Studying abroad is more than academics.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            The value of international education also comes from the wider exposure, work opportunities, and networks students build along the way.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="inline-flex rounded-2xl bg-white/10 p-3 text-accent">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
