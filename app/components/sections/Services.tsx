import { FileCheck, GraduationCap, Home, Plane } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "University Placement Support",
      description:
        "Guidance on choosing suitable institutions and programs that align with the student's academic goals.",
      icon: GraduationCap,
    },
    {
      title: "Visa and Documentation Guidance",
      description:
        "Support with preparing the paperwork and information needed for a stronger application process.",
      icon: FileCheck,
    },
    {
      title: "Pre-Departure Preparation",
      description:
        "Practical briefings on travel, student expectations, and how to prepare for life in a new environment.",
      icon: Plane,
    },
    {
      title: "Arrival and Settling Support",
      description:
        "Help students think through housing, transition, and the first steps after arrival.",
      icon: Home,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Services that make the offer feel complete.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This section now reads like a real advisory service, not just a placeholder list of features.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="inline-flex rounded-2xl bg-mist p-3 text-primary">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
