"use client";

import StudentGraph from "./Studentgraph";

export default function Background() {
  const challenges = [
    "High cut-off points for competitive courses such as medicine, law, and engineering",
    "Limited program variety, especially in modern fields like AI, Robotics, and Bioinformatics",
    "Capacity issues caused by overcrowding, strikes, and limited resources in public universities",
  ];

  return (
    <section id="background" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid items-center gap-12 lg:grid-cols-2">
        <StudentGraph />

        <div>
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Uganda&apos;s university access gap is growing.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Uganda has a growing education sector, but it remains limited compared to global standards.
            Between 2022 and 2025, local universities consistently admitted about 60,000 students each year while the number of eligible students kept increasing.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            By 2025, eligible students reached 113,291, leaving a surplus of over 53,000 students unable to secure admission locally. This is where Tour Study Uganda Ltd comes in.
          </p>

          <div className="mt-8 space-y-4">
            {challenges.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-500">
            The graph keeps the same data and shows a clear trend: admissions remain steady while the number of qualified students continues to rise sharply.
          </p>
        </div>
      </div>
    </section>
  );
}
