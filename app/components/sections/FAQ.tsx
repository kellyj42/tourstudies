const faqs = [
  {
    question: "Do you only support undergraduate students?",
    answer:
      "No. The site now positions the business broadly enough to support undergraduate, postgraduate, and pathway enquiries depending on the student's profile.",
  },
  {
    question: "Can students speak to you before choosing a country?",
    answer:
      "Yes. A good consultation should help students compare countries, costs, and entry routes before they commit to one option.",
  },
  {
    question: "Do you help beyond the application stage?",
    answer:
      "Yes. The revised structure highlights support for preparation, travel readiness, and transition so the service feels more complete.",
  },
];

export default function FAQ() {
  return (
    <section className="pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="w-16 h-1 rounded-full bg-accent mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Frequently asked questions</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            FAQ sections make service businesses feel prepared and transparent, especially for first-time visitors.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
              <summary className="cursor-pointer list-none text-lg font-semibold text-primary">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
