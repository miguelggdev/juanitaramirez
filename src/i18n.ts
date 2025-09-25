import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';
import translationIT from './locales/it/translation.json';
import translationPT from './locales/pt/translation.json';
import translationDE from './locales/de/translation.json';
import translationJA from './locales/ja/translation.json';
import translationZH from './locales/zh/translation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  fr: { translation: translationFR },
  it: { translation: translationIT },
  pt: { translation: translationPT },
  de: { translation: translationDE },
  ja: { translation: translationJA },
  zh: { translation: translationZH },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'en', // fallback language if translation is missing

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;