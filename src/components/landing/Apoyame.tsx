import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import PaymentModal from "./PaymentModal";
import { useTranslation } from 'react-i18next';

const Apoyame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const wishlistItems = [
    { name: t('support_me_section.wishlist_items.item1_name'), goal: 1500, current: 650 },
    { name: t('support_me_section.wishlist_items.item2_name'), goal: 3000, current: 1200 },
    { name: t('support_me_section.wishlist_items.item3_name'), goal: 800, current: 750 },
  ];

  const fanClubTiers = [
    { name: t('support_me_section.fanclub_tiers.bronze_name'), price: 5, features: [t('support_me_section.fanclub_tiers.bronze_feature1'), t('support_me_section.fanclub_tiers.bronze_feature2')] },
    { name: t('support_me_section.fanclub_tiers.silver_name'), price: 15, features: [t('support_me_section.fanclub_tiers.silver_feature1'), t('support_me_section.fanclub_tiers.silver_feature2'), t('support_me_section.fanclub_tiers.silver_feature3')] },
    { name: t('support_me_section.fanclub_tiers.gold_name'), price: 50, features: [t('support_me_section.fanclub_tiers.gold_feature1'), t('support_me_section.fanclub_tiers.gold_feature2'), t('support_me_section.fanclub_tiers.gold_feature3')] },
  ];

  return (
    <>
      <section id="apoyame" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            {t('support_me_section.title')}
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            {t('support_me_section.subtitle')}
          </p>
          <Tabs defaultValue="wishlist" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-white/10">
              <TabsTrigger value="wishlist">{t('support_me_section.tabs.wishlist')}</TabsTrigger>
              <TabsTrigger value="fanclub">{t('support_me_section.tabs.fanclub')}</TabsTrigger>
              <TabsTrigger value="donate">{t('support_me_section.tabs.one_time_donation')}</TabsTrigger>
            </TabsList>
            <TabsContent value="wishlist" className="mt-8">
              <div className="grid gap-6">
                {wishlistItems.map(item => (
                  <Card key={item.name} className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white font-bold">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={(item.current / item.goal) * 100} className="w-full" />
                      <p className="text-sm text-gray-400 mt-2">{t('support_me_section.wishlist_items.item1_raised', { current: item.current, goal: item.goal })}</p>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => setIsModalOpen(true)} className="bg-purple-600 hover:bg-purple-700">{t('support_me_section.wishlist_items.contribute_button')}</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="fanclub" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {fanClubTiers.map(tier => (
                  <Card key={tier.name} className="bg-white/5 backdrop-blur-md border border-white/10 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-white font-bold">{tier.name}</CardTitle>
                      <CardDescription className="text-3xl font-bold text-white">${tier.price}<span className="text-sm font-normal text-gray-400">/mes</span></CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2 text-white">
                        {tier.features.map(feature => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => setIsModalOpen(true)} className="w-full bg-purple-600 hover:bg-purple-700">{t('support_me_section.fanclub_tiers.join_button')}</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="donate" className="mt-8">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-center p-8">
                <CardTitle className="text-white font-bold">{t('support_me_section.donate_card.title')}</CardTitle>
                <CardDescription className="mt-2 mb-6">{t('support_me_section.donate_card.description')}</CardDescription>
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-purple-600 hover:bg-purple-700">{t('support_me_section.donate_card.donate_button')}</Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Apoyame;