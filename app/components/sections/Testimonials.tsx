const testimonials = [
  {
    quote:
      "The process felt clearer from the first conversation. We finally understood which documents mattered and what the next steps looked like.",
    person: "Parent of prospective student",
  },
  {
    quote:
      "What stands out is the tone. The advice feels personal and practical instead of generic.",
    person: "Prospective applicant",
  },
  {
    quote:
      "The site now benefits from social proof, and this is one of the fastest ways to make a service brand look more established.",
    person: "Brand credibility section",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <h2 className="text-3xl font-bold md:text-4xl">A little social proof goes a long way.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Testimonials, even short ones, help the brand feel more human and established. You can replace these with real student feedback later.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.person} className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-lg leading-8 text-slate-100">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-6 text-sm font-semibold text-accent">{item.person}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
