import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Heart, Shield, Link as LinkIcon } from "lucide-react";

const values = [
  { icon: <Target className="h-8 w-8 text-purple-400" />, title: "Disciplina", description: "Compromiso diario con la excelencia y la mejora continua." },
  { icon: <Heart className="h-8 w-8 text-purple-400" />, title: "Pasión", description: "El motor que impulsa cada entrenamiento y competencia." },
  { icon: <Shield className="h-8 w-8 text-purple-400" />, title: "Resiliencia", description: "Superar obstáculos y convertir los desafíos en oportunidades." },
  { icon: <LinkIcon className="h-8 w-8 text-purple-400" />, title: "Compromiso", description: "Lealtad a mis metas, mi equipo y mis patrocinadores." },
];

const Valores = () => {
  return (
    <section id="valores" className="py-20 sm:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Mis Valores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-gray-800/50 border-purple-800/50 text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-gray-900 rounded-full p-3 w-fit mb-4">{value.icon}</div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-gray-300">{value.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;