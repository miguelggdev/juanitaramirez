import { Mountain } from "lucide-react";

const MiCamino = () => {
  return (
    <section id="camino" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md rounded-xl border border-white/10 p-8 md:p-12">
          <Mountain className="mx-auto h-12 w-12 text-purple-400 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Mi Camino
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Desde mis primeros pasos sobre ruedas, supe que mi lugar estaba en la pista. Mi trayectoria no es solo una serie de competencias, sino una historia de perseverancia, sacrificio y una pasión inquebrantable por la velocidad. Cada día es una oportunidad para ser más fuerte, más rápida y más resiliente. Mi meta no es solo ganar medallas, sino inspirar a otros a perseguir sus sueños con la misma determinación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiCamino;