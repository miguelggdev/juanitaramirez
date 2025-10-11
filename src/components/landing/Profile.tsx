import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <section id="perfil" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-black/20 backdrop-blur-md rounded-xl border border-white/10 p-8 md:p-12 grid md:grid-cols-3 gap-12 items-center">
          <div className="relative md:col-span-1">
            <img
              src="images/imag3.jpg"
              alt="Emmy Juanita Ramirez Mora"
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {t('about_me.title')}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about_me.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-purple-400">
              <span>{t('about_me.tags.tag1')}</span>
              <span>{t('about_me.tags.tag2')}</span>
              <span>{t('about_me.tags.tag3')}</span>
              <span>{t('about_me.tags.tag4')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;