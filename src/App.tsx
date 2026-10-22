import { useEffect, useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Header } from "./components/studio/Header";
import { Home } from "./components/studio/Home";
import { Work } from "./components/studio/Work";
import { ProjectPage } from "./components/studio/ProjectPage";
import { Contact } from "./components/studio/Contact";
import { FilmDialog } from "./components/studio/FilmDialog";
import { projects, type PortfolioWork } from "./data/portfolio";
import { getPagePath, routeHref } from "./lib/routes";

function Portfolio() {
  const { language, t } = useLanguage();
  const [activeFilm, setActiveFilm] = useState<PortfolioWork | null>(null);
  const path = getPagePath();
  const project = path.startsWith("/work/")
    ? projects.find((item) => item.id === path.slice(6))
    : undefined;
  const isHome = path === "/";
  const isWork = path === "/work";
  const notFound = !isHome && !isWork && !project;
  useEffect(() => {
    const metadata = isWork ? t.worksMetadata : t.metadata;
    const title = project
      ? `${project.title[language]} | ${t.name}`
      : notFound
        ? `${t.notFound} | ${t.name}`
        : metadata.title;
    const description = project
      ? `${project.description[language]} ${project.role[language]}`
      : metadata.description;
    const canonical = `https://aslan-kara.com${routeHref(language, path)}`;
    document.title = title;
    const tags = {
      'meta[name="description"]': description,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': description,
      'meta[property="og:url"]': canonical,
      'meta[property="og:locale"]': language === "ar" ? "ar_AR" : "en_US",
      'meta[name="twitter:title"]': title,
      'meta[name="twitter:description"]': description,
    };
    Object.entries(tags).forEach(([selector, content]) =>
      document.querySelector(selector)?.setAttribute("content", content),
    );
    for (const [attribute, key] of [
      ["property", "og:image"],
      ["name", "twitter:image"],
    ]) {
      const existing = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      if (project) {
        const meta = existing || document.createElement("meta");
        meta.setAttribute(attribute, key);
        meta.content = `https://aslan-kara.com${project.image}`;
        if (!existing) document.head.appendChild(meta);
      } else existing?.remove();
    }
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", canonical);
    for (const locale of ["ar", "en"] as const)
      document
        .querySelector(`link[hreflang="${locale}"]`)
        ?.setAttribute(
          "href",
          `https://aslan-kara.com${routeHref(locale, path)}`,
        );
  }, [language, path, project, isWork, notFound, t]);
  return (
    <div id="top">
      <Header />
      <main id="main-content" tabIndex={-1}>
        {isHome ? (
          <Home />
        ) : isWork ? (
          <Work />
        ) : project ? (
          <ProjectPage work={project} onPlay={setActiveFilm} />
        ) : (
          <section className="not-found container">
            <h1>{t.notFound}</h1>
            <a className="button button-dark" href={routeHref(language)}>
              {t.returnHome}
            </a>
          </section>
        )}
      </main>
      <Contact compact={!isHome} />
      <FilmDialog film={activeFilm} onClose={() => setActiveFilm(null)} />
    </div>
  );
}
export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
