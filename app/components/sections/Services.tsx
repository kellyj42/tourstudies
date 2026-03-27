"use client";

import { GraduationCap, FileCheck, Plane, Home } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "University Placement",
      description:
        "We help you choose the right university and program based on your goals and qualifications.",
      icon: <GraduationCap size={32} />,
    },
    {
      title: "Visa Guidance",
      description:
        "Expert assistance to ensure your visa application is accurate and successful.",
      icon: <FileCheck size={32} />,
    },
    {
      title: "Pre-Departure Preparation",
      description:
        "We prepare you for life abroad with orientation and cultural guidance.",
      icon: <Plane size={32} />,
    },
    {
      title: "Post-Arrival Support",
      description:
        "We support you after arrival with housing, mentorship, and settling in.",
      icon: <Home size={32} />,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* 🟡 Heading */}
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We provide complete support throughout your study abroad journey —
            from choosing a university to settling in your new country.
          </p>
        </div>

        {/* 🔲 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition animate-in fade-in zoom-in duration-700"
            >
              {/* Icon */}
              <div className="text-primary mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-primary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}