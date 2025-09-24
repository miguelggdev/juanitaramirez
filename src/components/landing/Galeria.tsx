import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/images/JuanitaRamirez.png",
  "https://via.placeholder.com/800x600/6b21a8/ffffff?text=Acción+1",
  "https://via.placeholder.com/800x600/1e1b4b/ffffff?text=Podio",
  "https://via.placeholder.com/800x600/4c1d95/ffffff?text=Entrenamiento",
  "https://via.placeholder.com/800x600/312e81/ffffff?text=Equipo",
];

const Galeria = () => {
  return (
    <section id="galeria" className="py-20 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Galería
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-transparent border-0">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <img src={src} alt={`Galería imagen ${index + 1}`} className="rounded-lg object-cover w-full h-full" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-black/50 hover:bg-black/80" />
          <CarouselNext className="text-white bg-black/50 hover:bg-black/80" />
        </Carousel>
      </div>
    </section>
  );
};

export default Galeria;