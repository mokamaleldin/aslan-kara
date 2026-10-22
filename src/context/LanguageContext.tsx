import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { copy } from "../data/copy";
import type { Language } from "../types";
import { getPagePath, routeHref } from "../lib/routes";

function readLanguage(): Language {
  const path = window.location.pathname.match(/^\/(ar|en)(?:\/|$)/)?.[1];
  if (path === "ar" || path === "en") return path;
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "ar" || param === "en") return param;
  try {
    const saved = localStorage.getItem("aslan_kara_lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch {
    /* Optional preference. */
  }
  return "ar";
}

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
  t: typeof copy.ar;
} | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language] = useState<Language>(readLanguage);
  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  const toggleLanguage = () => {
    const next = language === "ar" ? "en" : "ar";
    try {
      localStorage.setItem("aslan_kara_lang", next);
    } catch {
      /* Optional preference. */
    }
    const url = new URL(window.location.href);
    url.pathname = routeHref(next, getPagePath());
    url.searchParams.delete("lang");
    window.location.assign(url.toString());
  };
  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: copy[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("LanguageProvider is required");
  return value;
}
