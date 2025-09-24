import { Trophy, Medal, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  {
    year: "2023",
    title: "Campeonato Nacional",
    description: "Medalla de Oro en 500m Sprint.",
    icon: <Trophy className="h-6 w-6 text-yellow-400" />,
  },
  {
    year: "2022",
    title: "Juegos Panamericanos Junior",
    description: "Clasificación y participación destacada.",
    icon: <Medal className="h-6 w-6 text-slate-400" />,
  },
  {
    year: "2021",
    title: "Récord Regional",
    description: "Nuevo récord en la categoría juvenil de 1000m.",
    icon: <Calendar className="h-6 w-6 text-purple-400" />,
  },
];

const Logros = () => {
  return (
    <section id="logros" className="py-20 sm:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Logros Destacados
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-800"></div>
          {achievements.map((item, index) => (
            <div key={index} className="relative mb-8 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                <p className="text-purple-400 font-semibold">{item.year}</p>
              </div>
              <div className="z-10 order-2 bg-purple-600 rounded-full h-4 w-4"></div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <Card className="bg-gray-800/50 border-purple-800/50">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {item.icon}
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logros;