import { ArrowUpRight, Layers3, Play } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import type { PortfolioWork } from "../../data/portfolio";
import { projectHref } from "../../lib/routes";

export function ProjectCard({
  work,
  wide = false,
  search = "",
}: {
  work: PortfolioWork;
  wide?: boolean;
  search?: string;
}) {
  const { language, t } = useLanguage();
  return (
    <a
      className={`work-card${wide ? " work-card-featured" : ""}${work.imageContain ? " work-card-logo" : ""}`}
      href={projectHref(language, work.id, search)}
      aria-label={`${t.viewProject}: ${work.title[language]}`}
    >
      <div className="work-card-visual">
        <img
          src={work.image}
          alt=""
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
        />
        <span className="work-card-source" dir="ltr">
          {work.source}
        </span>
        {(work.duration || work.collection) && (
          <span
            className="work-card-duration"
            dir={work.duration ? "ltr" : undefined}
          >
            {work.duration || t.collection}
          </span>
        )}
        <span className="work-card-play" aria-hidden="true">
          {work.youtubeId ? (
            <Play size={20} fill="currentColor" strokeWidth={1} />
          ) : (
            <Layers3 size={23} strokeWidth={1.4} />
          )}
        </span>
      </div>
      <div className="work-card-body">
        {wide && (
          <span className="work-card-feature-label">{t.featuredProject}</span>
        )}
        <span className="work-card-category">{t.filters[work.category]}</span>
        <h3>{work.title[language]}</h3>
        <p className="work-card-role">{work.role[language]}</p>
        {wide && (
          <p className="work-card-description">{work.description[language]}</p>
        )}
        <span className="work-card-link">
          {t.viewProject}
          <ArrowUpRight size={19} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
