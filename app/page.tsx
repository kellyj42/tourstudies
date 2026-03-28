import Hero from "./components/sections/Hero";
import CredibilityStrip from "./components/sections/CredibilityStrip";
import About from "./components/sections/About";
import Destinations from "./components/sections/Destinations";
import Background from "./components/sections/Background";
import WhyUs from "./components/sections/Whyus";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Consultation from "./components/sections/Consultation";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <About />
      <Destinations />
      <Background />
      <WhyUs />
      <Process />
      <Services />
      <Testimonials />
      <Consultation />
    </>
  );
}
