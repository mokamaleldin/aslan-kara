import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { projects, type PortfolioWork } from "../../data/portfolio";
import { routeHref } from "../../lib/routes";
import { ProjectCard } from "./ProjectCard";

export function ProjectPage({
  work,
  onPlay,
}: {
  work: PortfolioWork;
  onPlay: (work: PortfolioWork) => void;
}) {
  const { language, t } = useLanguage();
  const params = new URLSearchParams(window.location.search);
  params.delete("lang");
  const backUrl = `${routeHref(language, "/work")}${params.size ? `?${params}` : ""}`;
  const related = projects
    .filter((item) => item.category === work.category && item.id !== work.id)
    .slice(0, 3);
  const published = work.published
    ? new Intl.DateTimeFormat(language === "ar" ? "ar" : "en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${work.published}T12:00:00Z`))
    : undefined;
  return (
    <article className="project-page container">
      <a className="back-link" href={backUrl}>
        <ArrowLeft size={17} aria-hidden="true" />
        {t.backWork}
      </a>
      <header className="project-page-heading">
        <p className="section-label">
          {t.filters[work.category]}{" "}
          {work.collection ? ` / ${t.collection}` : ""}
        </p>
        <h1>{work.title[language]}</h1>
        <p>{work.description[language]}</p>
      </header>
      {work.videoTitle && (
        <p className="episode-label">
          {t.selectedEpisode}: {work.videoTitle[language]}
        </p>
      )}
      {work.youtubeId ? (
        <button
          className="project-preview"
          onClick={() => onPlay(work)}
          aria-label={`${t.play}: ${(work.videoTitle || work.title)[language]}`}
        >
          <img
            src={work.image}
            alt=""
            width="1280"
            height="720"
            fetchPriority="high"
          />
          <span className="preview-shade" />
          <span className="preview-play">
            <Play size={25} fill="currentColor" aria-hidden="true" />
          </span>
          <span className="preview-caption">
            {t.watch}
            {work.duration && <bdi>{work.duration}</bdi>}
          </span>
        </button>
      ) : (
        <a
          className={`project-preview${work.imageContain ? " project-preview-logo" : ""}`}
          href={work.url}
          target="_blank"
          rel="noreferrer"
          aria-label={work.collection ? t.openCollection : t.openSource}
        >
          <img
            src={work.image}
            alt={work.title[language]}
            width="1280"
            height="720"
            fetchPriority="high"
          />
          <span className="preview-shade" />
          <span className="preview-source">
            {work.collection ? t.openCollection : t.openSource}
            <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </a>
      )}
      <dl className="project-metadata">
        <div>
          <dt>{t.projectRole}</dt>
          <dd>{work.role[language]}</dd>
        </div>
        <div>
          <dt>{t.projectCategory}</dt>
          <dd>{t.filters[work.category]}</dd>
        </div>
        <div>
          <dt>{t.projectSource}</dt>
          <dd dir="ltr">{work.source}</dd>
        </div>
        {work.duration && (
          <div>
            <dt>{t.projectDuration}</dt>
            <dd dir="ltr">{work.duration}</dd>
          </div>
        )}
        {published && (
          <div>
            <dt>{t.projectDate}</dt>
            <dd>{published}</dd>
          </div>
        )}
      </dl>
      <div className="project-description-grid">
        <div>
          <h2>{t.contributions}</h2>
          <ul className="contribution-list">
            {work.contributions[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="project-source-panel">
          {work.category === "reports" ? (
            <p>{t.reportCredit}</p>
          ) : work.collection ? (
            <p>{t.collectionNote}</p>
          ) : null}
          <a
            href={work.url}
            className="button button-dark"
            target="_blank"
            rel="noreferrer"
          >
            {work.collection ? t.openCollection : t.openSource}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="related-section" aria-labelledby="related-heading">
          <div className="section-header">
            <h2 id="related-heading">{t.related}</h2>
            <a className="text-link" href={backUrl}>
              {t.allWork}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="project-grid related-grid">
            {related.map((item) => (
              <ProjectCard key={item.id} work={item} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
