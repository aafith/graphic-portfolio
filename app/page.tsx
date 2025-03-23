import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
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
