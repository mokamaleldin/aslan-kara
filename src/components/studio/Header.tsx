import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home" aria-label={t.name}>
            <span className="brand-symbol" aria-hidden="true" dir="ltr">
              a<span>/</span>k
            </span>
            <span className="brand-name" dir="ltr">
              ASLAN KARA<span>VIDEO EDITOR</span>
            </span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={
              language === "ar" ? "التنقل الرئيسي" : "Main navigation"
            }
          >
            <a href="#work">{t.nav.work}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">
              {t.nav.contact}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="language-switch"
              onClick={toggleLanguage}
              lang={language === "ar" ? "en" : "ar"}
              aria-label={
                language === "ar" ? "Switch to English" : "التبديل إلى العربية"
              }
            >
              {language === "ar" ? "EN" : "عربي"}
            </button>
            <a className="header-cta" href="#contact">
              {t.nav.contact}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              ref={menuButton}
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? t.closeMenu : t.menu}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav container"
          hidden={!menuOpen}
          aria-label={
            language === "ar" ? "قائمة الموبايل" : "Mobile navigation"
          }
        >
          {(["work", "about", "contact"] as const).map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mono">0{index + 1}</span>
              {t.nav[section]}
              <ArrowUpRight size={24} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
