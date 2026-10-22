import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { links } from "../../data/portfolio";
import { routeHref } from "../../lib/routes";

export function Contact({ compact = false }: { compact?: boolean }) {
  const { t, language } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(
    () => () => {
      clearTimeout(resetTimer.current);
    },
    [],
  );
  const copyEmail = async () => {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(links.email);
      setCopyStatus("copied");
      resetTimer.current = setTimeout(() => setCopyStatus("idle"), 3000);
    } catch {
      setCopyStatus("error");
    }
  };
  return (
    <>
      <section
        id="contact"
        className={`contact-section container section-space${compact ? " contact-compact" : ""}`}
        aria-labelledby="contact-heading"
      >
        <p className="section-label">{t.contactLabel}</p>
        <div className="contact-top">
          <h2 id="contact-heading">{t.contactHeading}</h2>
          <a
            className="contact-arrow"
            href={`mailto:${links.email}`}
            aria-label={t.emailAction}
          >
            <ArrowUpRight strokeWidth={1.2} aria-hidden="true" />
          </a>
        </div>
        <p className="contact-intro">{t.contactIntro}</p>
        <div className="email-row">
          <a className="email-link" href={`mailto:${links.email}`} dir="ltr">
            {links.email}
          </a>
          <button
            className="copy-email"
            onClick={copyEmail}
            aria-label={copyStatus === "copied" ? t.copied : t.copy}
          >
            {copyStatus === "copied" ? (
              <Check size={19} aria-hidden="true" />
            ) : (
              <Copy size={18} aria-hidden="true" />
            )}
          </button>
          <span className="copy-status" role="status">
            {copyStatus === "copied"
              ? t.copied
              : copyStatus === "error"
                ? t.copyFailed
                : ""}
          </span>
        </div>
        <div className="contact-bottom">
          <div className="phone-contact">
            <span>{t.qatar}</span>
            <a href="tel:+97433477508" dir="ltr">
              +974 3347 7508
            </a>
          </div>
          <div className="phone-contact">
            <span>{t.turkey}</span>
            <a href="tel:+905428209492" dir="ltr">
              +90 542 820 9492
            </a>
          </div>
          <div className="social-links">
            <a href={links.behance} target="_blank" rel="noreferrer" lang="en">
              Behance
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" lang="en">
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer container">
        <a
          className="footer-brand"
          href={routeHref(language)}
          lang="en"
          dir="ltr"
        >
          ASLAN KARA
        </a>
        <p>{t.footer}</p>
        <span className="copyright">
          © {new Date().getFullYear()} {t.rights}
        </span>
        <a className="back-to-top" href="#top" aria-label={t.back}>
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
