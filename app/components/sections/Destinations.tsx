import { BriefcaseBusiness, Building2, Globe2, GraduationCap, Network, Sparkles } from "lucide-react";

const solutions = [
  {
    name: "Top-tier Institutions",
    note: "We connect students to reputable international institutions with stronger academic options.",
    icon: Building2,
  },
  {
    name: "Broader Programs",
    note: "Students can explore in-demand and emerging courses not readily available locally.",
    icon: GraduationCap,
  },
  {
    name: "Better Facilities",
    note: "International exposure often comes with stronger learning environments and resources.",
    icon: Sparkles,
  },
  {
    name: "Exposure",
    note: "Studying abroad expands a student&apos;s worldview and confidence in new environments.",
    icon: Globe2,
  },
  {
    name: "Work Experience",
    note: "Students gain access to practical learning and career-building opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Global Networking",
    note: "International study helps students build relationships beyond their local environment.",
    icon: Network,
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-white/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Our solution to the growing access gap.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tour Study Uganda Ltd expands students&apos; horizons by connecting them to top-tier international institutions, broader academic programs, better facilities, and the life-changing advantages that come with studying abroad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
                <div className="inline-flex rounded-2xl bg-mist p-3 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
