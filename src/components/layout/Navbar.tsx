import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUpRight, Film, Radio } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const { language, toggleLanguage, isRtl, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#work', label: t.nav.work },
    { href: '#reports', label: t.nav.reports },
    { href: '#podcasts', label: t.nav.podcasts },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'nav-backdrop border-b border-[#373A40]/80 py-3 shadow-lg'
          : 'bg-gradient-to-b from-[#101217]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9FF43] rounded-lg"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#17191F] border border-[#373A40] group-hover:border-[#D9FF43] transition-colors">
              <span className="font-mono font-bold text-xs text-[#D9FF43]">AK</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF6548] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors">
                {t.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#A4A6AB] uppercase -mt-0.5">
                {language === 'ar' ? 'محرر فيديو أول' : 'SENIOR VIDEO EDITOR'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#17191F]/70 border border-[#373A40]/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-[#A4A6AB] hover:text-[#F5F4EF] hover:bg-[#24272D]/60 rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9FF43]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher & Contact Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#17191F] border border-[#373A40] text-[#F5F4EF] hover:border-[#D9FF43] hover:text-[#D9FF43] transition-all focus-visible:ring-2 focus-visible:ring-[#D9FF43]"
              aria-label={`Switch to ${language === 'ar' ? 'English' : 'Arabic'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#D9FF43]" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Restrained Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#D9FF43] text-[#101217] hover:bg-white transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D9FF43]"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 text-[#A4A6AB] hover:text-[#F5F4EF] hover:bg-[#17191F] rounded-lg border border-[#373A40] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9FF43]"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
