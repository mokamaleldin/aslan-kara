import React, { useEffect } from 'react';
import { X, Globe, Download, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { language, toggleLanguage, isRtl, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { num: '01', href: '#home', label: t.nav.home },
    { num: '02', href: '#work', label: t.nav.work },
    { num: '03', href: '#reports', label: t.nav.reports },
    { num: '04', href: '#podcasts', label: t.nav.podcasts },
    { num: '05', href: '#about', label: t.nav.about },
    { num: '06', href: '#experience', label: t.nav.experience },
    { num: '07', href: '#contact', label: t.nav.contact },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#101217] text-[#F5F4EF] p-6 sm:p-8 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#373A40]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
          <span className="font-heading font-bold text-lg tracking-tight">
            {t.name}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 text-[#A4A6AB] hover:text-[#F5F4EF] bg-[#17191F] border border-[#373A40] rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#D9FF43]"
          aria-label={t.modal.close}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Editorial Index Links */}
      <nav className="flex-1 py-8 flex flex-col justify-center space-y-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="flex items-center justify-between py-2 border-b border-[#373A40]/40 group text-left hover:border-[#D9FF43] transition-colors"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-[#A4A6AB] group-hover:text-[#D9FF43]">
                {link.num}
              </span>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors">
                {link.label}
              </span>
            </div>
            <ArrowUpRight
              className={`w-5 h-5 text-[#A4A6AB] group-hover:text-[#D9FF43] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                isRtl ? 'rotate-[-90deg]' : ''
              }`}
            />
          </a>
        ))}
      </nav>

      {/* Footer / Quick Actions */}
      <div className="pt-6 border-t border-[#373A40] space-y-4">
        <div className="flex items-center justify-between gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => {
              toggleLanguage();
            }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#17191F] border border-[#373A40] text-sm font-semibold hover:border-[#D9FF43] transition-colors"
          >
            <Globe className="w-4 h-4 text-[#D9FF43]" />
            <span>{language === 'ar' ? 'English Version' : 'النسخة العربية'}</span>
          </button>

          {/* CV Download */}
          <a
            href={language === 'ar' ? '/cv/ASLAN_KARA_CV_AR.pdf' : '/cv/ASLAN_KARA_CV_EN.pdf'}
            download
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#24272D] border border-[#373A40] text-sm font-medium hover:text-[#D9FF43] transition-colors"
            title="Download CV"
          >
            <Download className="w-4 h-4" />
            <span className="text-xs font-mono">CV (PDF)</span>
          </a>
        </div>

        {/* Contact Snippets */}
        <div className="text-xs font-mono text-[#A4A6AB] space-y-1 pt-2">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#D9FF43]" />
            <span dir="ltr">abdalmonemkara052017@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#FF6548]" />
            <span dir="ltr">+974 3347 7508 / +90 542 820 9492</span>
          </div>
        </div>
      </div>
    </div>
  );
};
