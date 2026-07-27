import About from "../components/About/About";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Process from "../components/Process/Process";
import Services from "../components/Services/Services";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <CTA />
    </>
  );
}

export default Home;