"use client";

import StudentGraph from "./Studentgraph";

export default function Background() {
  const challenges = [
    "High cut-off points for competitive courses",
    "Limited course variety across some local institutions",
    "Large demand for a smaller number of quality spaces",
  ];

  return (
    <section id="background" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid items-center gap-12 lg:grid-cols-2">
        <StudentGraph />

        <div>
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Why this service matters right now.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Many students are capable and motivated, but still struggle to find the right next step.
            That gap creates space for trusted guidance and better alternatives.
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
            Presenting this context makes the brand feel more thoughtful and professional because it shows
            visitors you understand the problem before offering the solution.
          </p>
        </div>
      </div>
    </section>
  );
}
