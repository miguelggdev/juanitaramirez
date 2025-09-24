import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="https://videos.pexels.com/video-files/4782055/4782055-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>

      <div className="z-10 flex flex-col items-center px-4">
        <img
          src="/images/imag1.jpeg"
          alt="Emmy Juanita Ramirez Mora"
          className="w-36 h-36 rounded-full border-4 border-white/50 object-cover shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Emmy Juanita Ramirez Mora
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Deportista de Alto Rendimiento
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Apóyame
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Contáctame
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;