import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building } from "lucide-react";

const sponsors = [
  {
    name: "Marca Deportiva",
    description: "Equipamiento de alto rendimiento.",
    logo: <Building className="h-10 w-10 text-gray-400" />,
  },
  {
    name: "Nutrición Pro",
    description: "Suplementos para atletas de élite.",
    logo: <Building className="h-10 w-10 text-gray-400" />,
  },
];

const Patrocinadores = () => {
  return (
    <section id="patrocinadores" className="py-20 sm:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Alianzas Estratégicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader className="flex-row items-center gap-4">
                {sponsor.logo}
                <div>
                  <CardTitle>{sponsor.name}</CardTitle>
                  <CardDescription>{sponsor.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
          <Card className="bg-purple-900/20 border-purple-600 flex flex-col items-center justify-center text-center p-6">
            <Handshake className="h-10 w-10 text-purple-400 mb-4" />
            <CardTitle className="mb-2">Tu Empresa Aquí</CardTitle>
            <CardDescription className="mb-4">Únete a mi equipo y creemos un impacto juntos.</CardDescription>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">Conviértete en Patrocinador</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Patrocinadores;