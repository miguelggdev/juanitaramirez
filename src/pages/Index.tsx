import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import VideoHighlight from "@/components/landing/VideoHighlight";
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
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 bg-[length:400%_400%] animate-gradient-xy text-white">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection><VideoHighlight /></AnimatedSection>
        <AnimatedSection><Profile /></AnimatedSection>
        <AnimatedSection><MiCamino /></AnimatedSection>
        <AnimatedSection><Logros /></AnimatedSection>
        <AnimatedSection><Galeria /></AnimatedSection>
        <AnimatedSection><Valores /></AnimatedSection>
        <AnimatedSection><Patrocinadores /></AnimatedSection>
        <AnimatedSection><Apoyame /></AnimatedSection>
        <AnimatedSection><Contacto /></AnimatedSection>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;