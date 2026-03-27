"use client";

import StudentGraph from "./Studentgraph";

export default function Background() {
  return (
    <section
      id="background"
      className="py-20 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <StudentGraph/>
    

        {/* 📄 Content */}
        <div className="animate-in fade-in slide-in-from-right duration-700">

          <div className="w-16 h-1 bg-accent mb-6"></div>

          <h2 className="text-3xl font-bold text-primary">
            The Challenge Students Face
          </h2>

          <p className="mt-4 text-gray-600">
            Uganda has a growing education sector, but many students struggle
            to access quality higher education opportunities.
          </p>

          <p className="mt-4 text-gray-600">
            Each year, a significant number of students miss out due to:
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• High cut-off points for competitive courses</li>
            <li>• Limited program variety in local institutions</li>
            <li>• Overcrowding and limited resources</li>
          </ul>

          <p className="mt-4 text-gray-600">
            This creates a growing gap between qualified students and available
            opportunities.
          </p>

        </div>

      </div>
    </section>
  );
}