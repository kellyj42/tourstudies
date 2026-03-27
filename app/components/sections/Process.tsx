import { FileText, GraduationCap, PlaneTakeoff, Search } from "lucide-react";

const steps = [
  {
    title: "Discovery Call",
    description: "We start by understanding the student's goals, academic background, and preferred study direction.",
    icon: Search,
  },
  {
    title: "University Matching",
    description: "We help shortlist realistic universities and programs based on fit, requirements, and opportunities.",
    icon: GraduationCap,
  },
  {
    title: "Application Support",
    description: "We guide document preparation, application steps, and key submission milestones.",
    icon: FileText,
  },
  {
    title: "Travel Preparation",
    description: "We help students prepare for visa, departure, and transition expectations before they move.",
    icon: PlaneTakeoff,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">A process visitors can quickly trust.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Clear process sections make a service business feel more established because people can see what happens after they reach out.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-accent">Step {index + 1}</p>
                <div className="mt-4 inline-flex rounded-2xl bg-mist p-3 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
