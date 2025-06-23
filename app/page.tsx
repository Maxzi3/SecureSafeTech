import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Training from "@/components/Training";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Training />
      <About />
      <Contact />
    </>
  );
}
