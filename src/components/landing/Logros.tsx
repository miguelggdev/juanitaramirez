import { Trophy, Medal, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Logros = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      year: t('achievements.item1_year'),
      title: t('achievements.item1_title'),
      description: t('achievements.item1_description'),
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
    },
    {
      year: t('achievements.item2_year'),
      title: t('achievements.item2_title'),
      description: t('achievements.item2_description'),
      icon: <Medal className="h-6 w-6 text-slate-400" />,
    },
    {
      year: t('achievements.item3_year'),
      title: t('achievements.item3_title'),
      description: t('achievements.item3_description'),
      icon: <Calendar className="h-6 w-6 text-purple-400" />,
    },
  ];

  return (
    <section id="logros" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          {t('achievements.title')}
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-800"></div>
          {achievements.map((item, index) => (
            <div key={index} className="relative mb-8 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                <p className="text-purple-400 font-semibold">{item.year}</p>
              </div>
              <div className="z-10 order-2 bg-purple-600 rounded-full h-4 w-4 ring-4 ring-purple-900"></div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {item.icon}
                    <CardTitle className="text-lg text-white font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">{item.description}</p>
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