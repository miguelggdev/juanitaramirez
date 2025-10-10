import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Patrocinadores = () => {
  const { t } = useTranslation();

  const sponsors = [
    {
      name: t('sponsors.sponsor1_name'),
      description: t('sponsors.sponsor1_description'),
      logo: <Building className="h-10 w-10 text-gray-400" />,
    },
    {
      name: t('sponsors.sponsor2_name'),
      description: t('sponsors.sponsor2_description'),
      logo: <Building className="h-10 w-10 text-gray-400" />,
    },
  ];

  return (
    <section id="patrocinadores" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          {t('sponsors.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 flex flex-col p-6">
              <CardHeader className="flex-row items-center gap-4 p-0">
                {sponsor.logo}
                <div>
                  <CardTitle className="text-white font-bold">{sponsor.name}</CardTitle>
                  <CardDescription className="text-white">{sponsor.description}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="mt-auto pt-6 p-0">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 w-full">
                  {t('sponsors.more_info_button')}
                </Button>
              </CardFooter>
            </Card>
          ))}
          <Card className="bg-purple-900/30 backdrop-blur-md border border-purple-400 flex flex-col items-center justify-center text-center p-6 shadow-lg shadow-purple-500/20">
            <Handshake className="h-10 w-10 text-purple-400 mb-4" />
            <CardTitle className="mb-2 text-white font-bold">{t('sponsors.your_company_title')}</CardTitle>
            <CardDescription className="mb-4 text-white">{t('sponsors.your_company_description')}</CardDescription>
            <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">{t('sponsors.become_sponsor_button')}</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Patrocinadores;