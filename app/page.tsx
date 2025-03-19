import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider />
      <Navbar />
        <div className="container mx-auto max-w-6xl py-16">
          <Hero />
          <About />
          <Portfolio />
          <Testimonials />
          <Contact />
        </div>
      <Footer />
    </>
  );
}
