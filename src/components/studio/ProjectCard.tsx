import { ArrowUpRight } from "lucide-react";
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
      className={`project-card${wide ? " project-card-wide" : ""}${work.imageContain ? " project-card-logo" : ""}`}
      href={projectHref(language, work.id, search)}
      aria-label={`${t.viewProject}: ${work.title[language]}`}
    >
      <img
        src={work.image}
        alt=""
        width="1280"
        height="720"
        loading="lazy"
        decoding="async"
      />
      <span className="project-shade" />
      <span className="project-topline">
        <span>{t.filters[work.category]}</span>
        {work.duration ? (
          <span dir="ltr" className="mono">
            {work.duration}
          </span>
        ) : work.collection ? (
          <span>{t.collection}</span>
        ) : null}
      </span>
      <div className="project-card-bottom">
        <div>
          <span className="project-source" dir="ltr">
            {work.source}
          </span>
          <h3>{work.title[language]}</h3>
        </div>
        <span className="project-open" aria-hidden="true">
          <ArrowUpRight size={22} strokeWidth={1.5} />
        </span>
      </div>
    </a>
  );
}
