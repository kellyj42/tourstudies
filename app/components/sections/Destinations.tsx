import { BookOpenCheck, Building2, Globe2, Landmark, Microscope, PlaneTakeoff } from "lucide-react";

const destinations = [
  {
    name: "United Kingdom",
    note: "Popular for health sciences, business, and postgraduate pathways.",
    icon: Landmark,
  },
  {
    name: "Europe",
    note: "A mix of public and private institutions with diverse course options.",
    icon: Globe2,
  },
  {
    name: "Asia",
    note: "Strong value-for-money opportunities in emerging education hubs.",
    icon: Building2,
  },
  {
    name: "Science Programs",
    note: "Support for students searching for technical, medical, and laboratory-focused routes.",
    icon: Microscope,
  },
  {
    name: "Foundation Routes",
    note: "Alternative entry paths for students building toward degree-level admission.",
    icon: BookOpenCheck,
  },
  {
    name: "Travel Planning",
    note: "Guidance on timelines, travel readiness, and settling-in expectations.",
    icon: PlaneTakeoff,
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-white/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Opportunities that feel broader than the usual shortlist.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A stronger website looks more legitimate when it shows direction. This section gives
            visitors a quick sense of the countries, pathways, and program styles you can guide them through.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => {
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
