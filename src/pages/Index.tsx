import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Profile from "@/components/landing/Profile";
import MiCamino from "@/components/landing/MiCamino";
import Logros from "@/components/landing/Logros";
import Galeria from "@/components/landing/Galeria";
import Valores from "@/components/landing/Valores";
import Patrocinadores from "@/components/landing/Patrocinadores";
import Apoyame from "@/components/landing/Apoyame";
import Contacto from "@/components/landing/Contacto";
import Footer from "@/components/landing/Footer";
import AnimatedSection from "@/components/landing/AnimatedSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-gradient-to-b from-purple-600 via-indigo-900 to-slate-950 bg-[length:100%_300%] animate-gradient-y">
          <AnimatedSection><Profile /></AnimatedSection>
          <AnimatedSection><MiCamino /></AnimatedSection>
          <AnimatedSection><Logros /></AnimatedSection>
          <AnimatedSection><Galeria /></AnimatedSection>
          <AnimatedSection><Valores /></AnimatedSection>
          <AnimatedSection><Patrocinadores /></AnimatedSection>
          <AnimatedSection><Apoyame /></AnimatedSection>
          <AnimatedSection><Contacto /></AnimatedSection>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;