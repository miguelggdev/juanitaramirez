import { Mountain } from "lucide-react";
import { useTranslation } from 'react-i18next';

const MiCamino = () => {
  const { t } = useTranslation();

  return (
    <section id="camino" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md rounded-xl border border-white/10 p-8 md:p-12">
          <Mountain className="mx-auto h-12 w-12 text-purple-400 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            {t('my_path.title')}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('my_path.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiCamino;