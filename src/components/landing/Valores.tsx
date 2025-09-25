import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Heart, Shield, Link as LinkIcon, Users, Award, TrendingUp, Scale } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Valores = () => {
  const { t } = useTranslation();

  const values = [
    { icon: <Target className="h-8 w-8 text-purple-400" />, title: t('values.discipline_title'), description: t('values.discipline_description') },
    { icon: <Heart className="h-8 w-8 text-purple-400" />, title: t('values.passion_title'), description: t('values.passion_description') },
    { icon: <Shield className="h-8 w-8 text-purple-400" />, title: t('values.resilience_title'), description: t('values.resilience_description') },
    { icon: <LinkIcon className="h-8 w-8 text-purple-400" />, title: t('values.commitment_title'), description: t('values.commitment_description') },
    { icon: <Users className="h-8 w-8 text-purple-400" />, title: t('values.teamwork_title'), description: t('values.teamwork_description') },
    { icon: <Award className="h-8 w-8 text-purple-400" />, title: t('values.respect_title'), description: t('values.respect_description') },
    { icon: <TrendingUp className="h-8 w-8 text-purple-400" />, title: t('values.self_improvement_title'), description: t('values.self_improvement_description') },
    { icon: <Scale className="h-8 w-8 text-purple-400" />, title: t('values.integrity_title'), description: t('values.integrity_description') },
  ];

  return (
    <section id="valores" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          {t('values.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 text-center p-6">
              <CardHeader>
                <div className="mx-auto bg-black/20 rounded-full p-3 w-fit mb-4">{value.icon}</div>
                <CardTitle className="text-xl font-bold text-white">{value.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-white">{value.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;