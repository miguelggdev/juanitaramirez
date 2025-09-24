"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Instagram, Twitter, Languages, Sun, Moon, Menu, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <SheetClose asChild>
    <a href={href} className="block py-2 text-lg text-gray-300 hover:text-white transition-colors">
      {children}
    </a>
  </SheetClose>
);

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center text-xl font-bold tracking-wider text-white">
          <img
            src="/images/imag1.jpeg"
            alt="Emmy Juanita Ramirez Mora Logo"
            className="w-8 h-8 rounded-full object-cover mr-3"
          />
          <span>EMMY JUANITA</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#perfil">Perfil</NavLink>
          <NavLink href="#logros">Logros</NavLink>
          <NavLink href="#galeria">Galería</NavLink>
          <NavLink href="#apoyame">Apóyame</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Youtube size={20} /></a>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10"><Languages size={20} /></Button>
          <Button variant="ghost" size="icon" onClick={() => setIsDarkTheme(!isDarkTheme)} className="text-gray-300 hover:text-white hover:bg-white/10">
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900/95 text-white border-l-gray-800">
              <nav className="flex flex-col gap-4 mt-8">
                <MobileNavLink href="#perfil">Perfil</MobileNavLink>
                <MobileNavLink href="#logros">Logros</MobileNavLink>
                <MobileNavLink href="#galeria">Galería</MobileNavLink>
                <MobileNavLink href="#apoyame">Apóyame</MobileNavLink>
                <MobileNavLink href="#contacto">Contacto</MobileNavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;