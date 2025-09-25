"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Instagram, Languages, Sun, Moon, Menu, Facebook, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

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
  const { t, i18n } = useTranslation(); // Initialize useTranslation

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Define languages with their codes
  const languages = [
    { name: t("languages.spanish"), code: "es" },
    { name: t("languages.english"), code: "en" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-indigo-900 to-slate-950 bg-[length:200%_200%] animate-gradient-xy">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center text-xl font-bold tracking-wider text-white">
          <img
            src="/images/imag1.jpeg"
            alt="Emmy Juanita Ramirez Mora Logo"
            className="w-8 h-8 rounded-full object-cover mr-3"
          />
          <span>Juanita Ramírez</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#perfil">{t('navbar.profile')}</NavLink>
          <NavLink href="#logros">{t('navbar.achievements')}</NavLink>
          <NavLink href="#galeria">{t('navbar.gallery')}</NavLink>
          <NavLink href="#patrocinio">{t('navbar.sponsorship')}</NavLink>
          <NavLink href="#apoyame">{t('navbar.support_me')}</NavLink>
          <NavLink href="#contacto">{t('navbar.contact')}</NavLink>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="https://www.instagram.com/juanita._rami?igsh=anh0YnU3bHkyOHRr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="mailto:juanitaramirezmora@gmail.com" className="text-gray-300 hover:text-white transition-colors"><Mail size={20} /></a>
          <a href="https://wa.me/573112905298" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Phone size={20} /></a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Languages size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900/95 text-white border-gray-800">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)} className="hover:bg-white/10 focus:bg-white/10">
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
                <MobileNavLink href="#perfil">{t('navbar.profile')}</MobileNavLink>
                <MobileNavLink href="#logros">{t('navbar.achievements')}</MobileNavLink>
                <MobileNavLink href="#galeria">{t('navbar.gallery')}</MobileNavLink>
                <MobileNavLink href="#patrocinio">{t('navbar.sponsorship')}</MobileNavLink>
                <MobileNavLink href="#apoyame">{t('navbar.support_me')}</MobileNavLink>
                <MobileNavLink href="#contacto">{t('navbar.contact')}</MobileNavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;