"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary text-white scroll-mt-24"
    >
      {/* 🔳 Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🌍 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
        }}
      ></div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        
        {/* 🟡 Accent Line */}
        <div className="w-20 h-1 bg-accent mx-auto mb-6 animate-in fade-in duration-700"></div>

        {/* 🧠 Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-bottom duration-700">
          A Future Beyond Borders
        </h1>

        {/* 📄 Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000">
          Tour Study Uganda Limited bridges Uganda students to alternative options abroad. Founded by 
two former international scholars. We assist you to navigate your study abroad journey 
seamlessly.  
        </p>

        {/* 🎯 Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center animate-in fade-in zoom-in duration-1000">
          
          {/* CTA */}
          <a
            href="https://wa.me/256758335558"
            target="_blank"
            className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Start Your Journey
          </a>

          {/* Secondary */}
          <a
            href="#about"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}