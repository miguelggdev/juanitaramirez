import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">{t('footer.copyright', { year: currentYear })}</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/juanita._rami?igsh=anh0YnU3bHkyOHRr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="mailto:juanitaramirezmora@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
          <a href="https://wa.me/573112905298" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Phone size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;