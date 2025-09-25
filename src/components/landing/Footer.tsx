import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {currentYear} Emmy Juanita Ramirez Mora. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={20} /></a>
          <a href="mailto:juanitaramirezmora@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;