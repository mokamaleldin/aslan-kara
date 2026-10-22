import { useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight, Play } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import {
  links,
  selectedWork,
  type PortfolioWork,
  type WorkCategory,
} from "../../data/portfolio";

export function Work({ onPlay }: { onPlay: (film: PortfolioWork) => void }) {
  const { language, t } = useLanguage();
  const [category, setCategory] = useState<WorkCategory | "all">("all");
  const [expanded, setExpanded] = useState(false);
  const filtered =
    category === "all"
      ? selectedWork
      : selectedWork.filter((work) => work.category === category);
  const visible =
    category === "all" && !expanded ? filtered.slice(0, 4) : filtered;
  const changeCategory = (next: WorkCategory | "all") => {
    setCategory(next);
    setExpanded(false);
  };
  const collapseWork = () => {
    setExpanded(false);
    document
      .getElementById("work")
      ?.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <section
      id="work"
      className="work-section container section-space"
      aria-labelledby="work-heading"
    >
      <p className="section-label">{t.workLabel}</p>
      <div className="section-heading-row">
        <h2 id="work-heading">{t.workHeading}</h2>
        <p>{t.workIntro}</p>
      </div>
      <div className="work-toolbar">
        <div
          className="work-filters"
          role="group"
          aria-label={language === "ar" ? "تصفية الأعمال" : "Filter work"}
        >
          {(["all", "promos", "reports", "podcasts"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => changeCategory(filter)}
              aria-pressed={category === filter}
            >
              {t.filters[filter]}
              <span className="filter-dot" />
            </button>
          ))}
        </div>
        <span className="work-counter mono" dir="ltr" aria-live="polite">
          {String(visible.length).padStart(2, "0")} /{" "}
          {String(filtered.length).padStart(2, "0")}
        </span>
      </div>
      <div className="work-grid" id="work-grid">
        {visible.map((work) => (
          <article key={work.id} className="work-card">
            {work.youtubeId ? (
              <button
                className="work-media"
                onClick={() => onPlay(work)}
                aria-label={`${t.play}: ${work.title[language]}`}
              >
                <img
                  src={work.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                />
                <span className="work-source" dir="ltr">
                  {work.source}
                </span>
                <span className="media-action">
                  <Play size={18} fill="currentColor" aria-hidden="true" />
                </span>
              </button>
            ) : (
              <a
                className="work-media"
                href={work.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.open}: ${work.title[language]}`}
              >
                <img
                  src={work.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                />
                <span className="work-source" dir="ltr">
                  {work.source}
                </span>
                <span className="media-action">
                  <ArrowUpRight size={22} aria-hidden="true" />
                </span>
              </a>
            )}
            <div className="work-caption">
              <div>
                <h3>{work.title[language]}</h3>
                <p>{work.role[language]}</p>
              </div>
              <span className="work-category">
                {work.category && t.filters[work.category]}
              </span>
            </div>
          </article>
        ))}
      </div>
      {category === "all" && (
        <div className="more-work">
          <button
            className="button button-outline"
            aria-expanded={expanded}
            aria-controls="work-grid"
            onClick={expanded ? collapseWork : () => setExpanded(true)}
          >
            {expanded ? t.fewer : t.more}
            {expanded ? (
              <ArrowUp size={16} aria-hidden="true" />
            ) : (
              <ArrowDown size={16} aria-hidden="true" />
            )}
          </button>
        </div>
      )}
      <div className="portfolio-links">
        <span>{t.browse}</span>
        <a href={links.promos} target="_blank" rel="noreferrer">
          {t.allPromos}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href={links.behance} target="_blank" rel="noreferrer" lang="en">
          Behance
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <span className="podcast-links-label">{t.channels}</span>
        <a href={links.podcast1} target="_blank" rel="noreferrer">
          {t.channel1}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href={links.podcast2} target="_blank" rel="noreferrer">
          {t.channel2}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
