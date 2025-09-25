import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Megaphone, Award, HeartHandshake, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: <Megaphone className="h-8 w-8 text-purple-400" />,
    title: "Visibilidad de Marca Exponencial",
    description: "Asocia tu marca con la velocidad y el éxito. Obtén exposición en competencias nacionales e internacionales, redes sociales y medios de comunicación, llegando a miles de seguidores apasionados por el deporte."
  },
  {
    icon: <Award className="h-8 w-8 text-purple-400" />,
    title: "Asociación con Valores Positivos",
    description: "Alinear tu empresa con los valores de disciplina, superación y pasión inspira confianza y lealtad. Demuestra tu compromiso con el talento joven y la excelencia deportiva."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-purple-400" />,
    title: "Impacto Social y Comunitario",
    description: "Tu apoyo no solo impulsa mi carrera, sino que también inspira a una nueva generación de atletas. Conviértete en un pilar para la comunidad y un agente de cambio a través del deporte."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
    title: "Retorno de Inversión Tangible",
    description: "Ofrezco oportunidades de marketing únicas, desde contenido exclusivo en redes hasta la presencia de tu logo en mi equipamiento. Genera un retorno medible mientras apoyas un sueño."
  }
];

const PorquePatrocinarme = () => {
  return (
    <section id="patrocinio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
          ¿Por Qué Patrocinarme?
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Invertir en mi carrera es más que un patrocinio; es una alianza estratégica para crecer juntos y alcanzar nuevas cimas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 text-center p-6 h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="mx-auto bg-black/20 rounded-full p-3 w-fit mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl font-bold text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-white">{benefit.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorquePatrocinarme;