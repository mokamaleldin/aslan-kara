import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { copy } from '../data/copy';
import type { Language } from '../types';

function readLanguage(): Language {
  const url = new URL(window.location.href);
  const param = url.searchParams.get('lang');
  if (param === 'ar' || param === 'en') return param;
  if (/^\/en(?:\/|$)/.test(url.pathname)) return 'en';
  if (/^\/ar(?:\/|$)/.test(url.pathname)) return 'ar';
  try {
    const saved = localStorage.getItem('aslan_kara_lang');
    if (saved === 'ar' || saved === 'en') return saved;
  } catch { /* Language switching also works when storage is unavailable. */ }
  return 'ar';
}

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
  t: typeof copy.ar;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readLanguage);
  useEffect(() => {
    const onHistoryChange = () => setLanguage(readLanguage());
    window.addEventListener('popstate', onHistoryChange);
    return () => window.removeEventListener('popstate', onHistoryChange);
  }, []);

  useEffect(() => {
    const metadata = copy[language].metadata;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = metadata.title;
    const tags = {
      'meta[name="description"]': metadata.description,
      'meta[property="og:title"]': metadata.title,
      'meta[property="og:description"]': metadata.description,
      'meta[property="og:locale"]': language === 'ar' ? 'ar_AR' : 'en_US',
      'meta[name="twitter:title"]': metadata.title,
      'meta[name="twitter:description"]': metadata.description,
    };
    Object.entries(tags).forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute('content', content);
    });
    const canonical = `https://aslan-kara.vercel.app/?lang=${language}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical);
  }, [language]);

  const toggleLanguage = () => {
    const next = language === 'ar' ? 'en' : 'ar';
    setLanguage(next);
    try { localStorage.setItem('aslan_kara_lang', next); } catch { /* Optional persistence. */ }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    if (/^\/(ar|en)(?:\/|$)/.test(url.pathname)) url.pathname = `/${next}`;
    window.history.pushState({}, '', url);
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage, t: copy[language] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider is required');
  return context;
}
