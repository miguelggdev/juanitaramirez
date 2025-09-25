import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const backgroundImages = [
  "/images/imag1.jpeg",
  "/images/logo-bg.png",
];

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 30000); // 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentBgIndex ? 1 : 0,
          }}
        />
      ))}
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center px-4">
        <img
          src="/images/imag3a.jpg"
          alt="Emmy Juanita Ramirez Mora"
          className="w-36 h-36 rounded-full border-4 border-white/50 object-cover shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Emmy Juanita Ramírez Mora
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Deportista de Alto Rendimiento
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#apoyame">
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              Apóyame
            </Button>
          </a>
          <a href="#contacto">
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
              Contáctame
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;