import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, isRtl, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D10] border-t border-[#373A40] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#373A40]/60">
          {/* Brand & Editorial Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#17191F] border border-[#373A40] font-mono font-bold text-xs text-[#D9FF43]">
                AK
              </span>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#F5F4EF]">
                {t.name}
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-[#A4A6AB]">
              {t.footer.brandTagline}
            </p>

            <p className="text-sm text-[#A4A6AB] font-body max-w-sm leading-relaxed">
              {language === 'ar'
                ? 'مونتاج البرامج والتقارير والبروموهات والمحتوى الرقمي، وإنتاج البودكاست المستقل بمسيرة مهنية منذ 2017.'
                : 'Crafting precision broadcast edits, narrative features, promos, and independent podcasts since 2017.'}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-[#D9FF43] uppercase tracking-wider block">
              {language === 'ar' ? 'فهرس الموقع' : 'INDEX'}
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#work" className="text-[#A4A6AB] hover:text-[#F5F4EF] transition-colors">
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a href="#reports" className="text-[#A4A6AB] hover:text-[#F5F4EF] transition-colors">
                  {t.nav.reports}
                </a>
              </li>
              <li>
                <a href="#podcasts" className="text-[#A4A6AB] hover:text-[#F5F4EF] transition-colors">
                  {t.nav.podcasts}
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A4A6AB] hover:text-[#F5F4EF] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#A4A6AB] hover:text-[#F5F4EF] transition-colors">
                  {t.nav.experience}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#A4A6AB] hover:text-[#F5F4EF] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Reference */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-[#D9FF43] uppercase tracking-wider block">
              {language === 'ar' ? 'روابط مهنية' : 'PROFILES'}
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://www.behance.net/aslan-kara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A4A6AB] hover:text-[#D9FF43] transition-colors"
                >
                  <span>Behance (aslan-kara)</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aslan-kara-ba425519b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A4A6AB] hover:text-[#D9FF43] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:abdalmonemkara052017@gmail.com"
                  className="text-[#A4A6AB] hover:text-[#D9FF43] transition-colors"
                  dir="ltr"
                >
                  abdalmonemkara052017@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A4A6AB]">
          <div>
            <span>{t.footer.rights}</span>
            <span className="mx-2">•</span>
            <span>{currentYear}</span>
          </div>

          <div className="text-[11px] text-[#A4A6AB]/80">
            <span>{t.footer.builtWith}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#17191F] border border-[#373A40] text-xs text-[#F5F4EF] hover:border-[#D9FF43] hover:text-[#D9FF43] transition-colors"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
