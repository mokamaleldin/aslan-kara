import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { getPagePath, routeHref } from "../../lib/routes";

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const path = getPagePath();
  const nav = [
    { title: t.nav.home, href: routeHref(language), active: path === "/" },
    {
      title: t.nav.work,
      href: routeHref(language, "/work"),
      active: path.startsWith("/work"),
    },
    {
      title: t.nav.experience,
      href: `${routeHref(language)}#experience`,
      active: false,
    },
  ];
  useEffect(() => {
    if (!menuOpen) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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
          <a
            className="wordmark"
            href={routeHref(language)}
            aria-label={t.name}
          >
            <span className="brand-symbol" aria-hidden="true" dir="ltr">
              a/k
            </span>
            <span className="brand-name" dir="ltr">
              ASLAN KARA<span>SENIOR VIDEO EDITOR</span>
            </span>
          </a>
          <nav
            className="desktop-nav"
            aria-label={
              language === "ar" ? "التنقل الرئيسي" : "Main navigation"
            }
          >
            {nav.map((item) => (
              <a
                key={item.title}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
              >
                {item.title}
              </a>
            ))}
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
              {language === "ar" ? "EN" : "العربية"}
            </button>
            <a className="header-cta" href={`${routeHref(language)}#contact`}>
              {t.nav.contact}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              className="menu-toggle"
              ref={menuButton}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? t.closeMenu : t.menu}
            >
              {menuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav container"
          hidden={!menuOpen}
          aria-label={language === "ar" ? "قائمة التنقل" : "Mobile navigation"}
        >
          {[
            ...nav,
            {
              title: t.nav.contact,
              href: `${routeHref(language)}#contact`,
              active: false,
            },
          ].map((item, i) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={item.active ? "page" : undefined}
            >
              <span className="mono" dir="ltr">
                0{i + 1}
              </span>
              {item.title}
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
