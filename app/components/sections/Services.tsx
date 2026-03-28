import { FileCheck, GraduationCap, Home, Plane } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Personalized university placement and country selection",
      description:
        "We help students identify the right university and the right country based on their goals and available opportunities.",
      icon: GraduationCap,
    },
    {
      title: "Expert application and visa guidance",
      description:
        "Students receive practical support through application preparation and visa guidance for a smoother process.",
      icon: FileCheck,
    },
    {
      title: "Pre-departure orientation and cultural preparation",
      description:
        "We prepare students for life abroad by explaining expectations, culture, and key travel considerations before departure.",
      icon: Plane,
    },
    {
      title: "Post-arrival support",
      description:
        "We support students with housing, mentorship, and integration tips as they settle into the host country.",
      icon: Home,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Services</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tour Study Uganda Ltd supports students before departure and after arrival with practical guidance at every stage.
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
