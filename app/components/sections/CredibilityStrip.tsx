const stats = [
  { value: "Student-first", label: "Guidance shaped around each applicant's goals and budget" },
  { value: "Clear process", label: "Simple steps from consultation to departure preparation" },
  { value: "Practical advice", label: "No vague promises, just realistic pathways and support" },
  { value: "Kampala based", label: "Local support with international study perspective" },
];

export default function CredibilityStrip() {
  return (
    <section className="-mt-10 relative z-10 px-6">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/60 bg-white/95 p-6 shadow-soft backdrop-blur">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-mist px-5 py-5">
              <p className="text-lg font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
