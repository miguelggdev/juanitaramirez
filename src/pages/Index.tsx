import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder sections for future development */}
        <div id="perfil" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold">Perfil (Próximamente)</h2>
        </div>
        <div id="logros" className="min-h-screen flex items-center justify-center bg-black">
          <h2 className="text-3xl font-bold">Logros (Próximamente)</h2>
        </div>
        <div id="galeria" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold">Galería (Próximamente)</h2>
        </div>
        <div id="apoyame" className="min-h-screen flex items-center justify-center bg-black">
          <h2 className="text-3xl font-bold">Apóyame (Próximamente)</h2>
        </div>
        <div id="contacto" className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold">Contacto (Próximamente)</h2>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;