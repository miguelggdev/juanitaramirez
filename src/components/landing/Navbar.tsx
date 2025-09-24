"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Languages, Sun, Moon, Zap } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center text-xl font-bold tracking-wider text-white">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 mr-3">
            <Zap size={18} className="text-white" />
          </div>
          <span>EMMY JUANITA</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#perfil" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Perfil
          </a>
          <a href="#logros" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Logros
          </a>
          <a href="#galeria" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Galería
          </a>
          <a href="#apoyame" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Apóyame
          </a>
          <a href="#contacto" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
            <Languages size={20} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsDarkTheme(!isDarkTheme)} className="text-gray-300 hover:text-white hover:bg-white/10">
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;