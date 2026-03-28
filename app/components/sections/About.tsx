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
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">
            About Tour Study Uganda Ltd
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Helping students access a future beyond borders.
          </h2>

          <div className="prose prose-slate mt-6 max-w-none text-slate-600">
            <p>
              Tour Study Uganda Ltd bridges Uganda&apos;s students to alternative education opportunities abroad.
            </p>
            <p>
              Founded by two former international scholars, TSUL supports students who need guidance in choosing the right institutions, preparing applications, and transitioning smoothly into international study environments.
            </p>
            <p>
              With over 2 years of experience, we are committed to helping students access broader academic programs, better facilities, and global exposure.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">Our Vision</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                To be the bridge connecting Uganda&apos;s students to world-class academic institutions, cutting-edge programs, and international opportunities that transform lives and communities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary">Our Mission</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                To empower students by connecting them with the best education opportunities abroad, fostering academic excellence, and ensuring a seamless transition into the culture of host institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
