"use client";

import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Empathy-Driven Guidance",
      description: `Empathy Driven Guidance: We approach our clients’ study abroad journey with firsthand 
experience drawn from our personal experiences. Giving our clients the best guidance 
and travel insights.`,
      icon: <HeartHandshake size={28} />,
    },
    {
      title: "Holistic Support",
      description: `Holistic support: Our commitment extends far beyond securing an admission letter. Tour 
Study Uganda Limited provides comprehensive support to ensure a seamless transition 
and successfully settling into the new country`,
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Specialized Programs",
      description:
        `Specialized Science and Niche program focus: We tackle the present limitations in 
Uganda education through connecting our clients to top tier universities abroad.`,
      icon: <Sparkles size={28} />,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-primary text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            We go beyond just securing admission — we guide, support, and
            empower you.
          </p>
        </div>

        {/* 🔲 Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 🤝 Image Side */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
              alt="Handshake partnership"
              className="rounded-xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          {/* 💡 Content Side */}
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/20 transition animate-in fade-in zoom-in duration-700"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-accent mt-1">{item.icon}</div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
