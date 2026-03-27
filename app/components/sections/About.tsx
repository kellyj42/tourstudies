import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid items-center gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
            alt="Students in a collaborative learning environment"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <div className="w-16 h-1 rounded-full bg-accent mb-6"></div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">About Us</p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            A more grounded way to start the study abroad journey.
          </h2>

          <div className="prose prose-slate mt-6 max-w-none text-slate-600">
            <p>
              Tour Study Uganda supports students who want better educational opportunities
              abroad but need practical guidance to understand where to begin.
            </p>
            <p>
              We help students and families make informed choices by explaining entry routes,
              university options, documentation, and the preparation needed before travel.
            </p>
            <p>
              Our approach is warm, realistic, and personal. The goal is not just to secure an
              offer, but to help each student move with clarity and confidence.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">Our Vision</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                To widen access to quality global education for Ugandan students through trusted guidance.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">Our Mission</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                To guide students through applications, preparation, and transition with honesty and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
