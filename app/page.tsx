import Image from "next/image";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/Whyus";
import Background from "./components/sections/Background";

export default function Home() {
  return (
    <>
      <Hero />
      <Background/>
      <About/>
      <WhyUs/>
      <Services/>
    </>
  );
}
