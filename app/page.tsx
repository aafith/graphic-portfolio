import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/components/LenisProvider";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import { Contact } from "lucide-react";


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
