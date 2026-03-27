"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🖼️ Image */}
        <div className="animate-in fade-in slide-in-from-left duration-700">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Students studying"
            className="rounded-xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* 📄 Content */}
        <div className="animate-in fade-in slide-in-from-right duration-700">
          {/* 🟡 Accent */}
          <div className="w-16 h-1 bg-accent mb-6"></div>

          {/* 🧠 Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About Tour Study Uganda
          </h2>

          {/* ✍️ Text (Typography plugin used) */}
          <div className="prose mt-6 max-w-none">
            <p>
              Tour Study Uganda Limited bridges Ugandan students to global
              education opportunities. Founded by former international scholars,
              we help students navigate their study abroad journey seamlessly.
            </p>

            <p>
              Uganda has a growing education sector, but many students face
              challenges such as high cut-off points, limited program options,
              and overcrowded institutions.
            </p>

            <p>
              We expand students’ horizons by connecting them to top-tier
              universities abroad with better facilities, diverse programs, and
              international exposure.
            </p>
          </div>

          {/* 🎯 Vision & Mission */}
          <div className="mt-8 space-y-4">
            <div className="p-4 border-l-4 border-accent bg-gray-50">
              <h4 className="font-semibold text-primary">Our Vision</h4>
              <p className="text-sm">
                To be the bridge connecting Ugandan students to world-class
                academic opportunities that transform lives and communities.
              </p>
            </div>

            <div className="p-4 border-l-4 border-accent bg-gray-50">
              <h4 className="font-semibold text-primary">Our Mission</h4>
              <p className="text-sm">
                To empower students by connecting them with the best education
                opportunities abroad and ensuring a smooth transition into their
                new environments.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-primary">2+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-primary">Global</h3>
              <p className="text-gray-600">University Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
