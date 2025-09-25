import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Megaphone, Award, HeartHandshake, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

const PorquePatrocinarme = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Megaphone className="h-8 w-8 text-purple-400" />,
      title: t('why_sponsor_me.benefit1_title'),
      description: t('why_sponsor_me.benefit1_description')
    },
    {
      icon: <Award className="h-8 w-8 text-purple-400" />,
      title: t('why_sponsor_me.benefit2_title'),
      description: t('why_sponsor_me.benefit2_description')
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-purple-400" />,
      title: t('why_sponsor_me.benefit3_title'),
      description: t('why_sponsor_me.benefit3_description')
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
      title: t('why_sponsor_me.benefit4_title'),
      description: t('why_sponsor_me.benefit4_description')
    }
  ];

  return (
    <section id="patrocinio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
          {t('why_sponsor_me.title')}
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          {t('why_sponsor_me.subtitle')}
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