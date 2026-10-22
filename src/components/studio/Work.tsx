import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import {
  projects,
  categories,
  type WorkCategory,
  links,
} from "../../data/portfolio";
import { ProjectCard } from "./ProjectCard";

function normalized(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي");
}
export function Work() {
  const { language, t } = useLanguage();
  const [category, setCategory] = useState<WorkCategory | "all">(() => {
    const saved = new URLSearchParams(window.location.search).get("category");
    return categories.includes(saved as WorkCategory)
      ? (saved as WorkCategory)
      : "all";
  });
  const [search, setSearch] = useState(
    () => new URLSearchParams(window.location.search).get("q") || "",
  );
  useEffect(() => {
    const url = new URL(window.location.href);
    if (category !== "all") url.searchParams.set("category", category);
    else url.searchParams.delete("category");
    if (search.trim()) url.searchParams.set("q", search.trim());
    else url.searchParams.delete("q");
    window.history.replaceState({}, "", url);
  }, [category, search]);
  const query = normalized(search.trim());
  const filtered = projects.filter(
    (work) =>
      (category === "all" || work.category === category) &&
      (!query ||
        normalized(
          `${work.title.ar} ${work.title.en} ${work.role.ar} ${work.role.en} ${t.filters[work.category]} ${work.source}`,
        ).includes(query)),
  );
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (search.trim()) params.set("q", search.trim());
  return (
    <section className="container work-page" aria-labelledby="work-heading">
      <div className="page-intro">
        <p className="section-label">{t.workLabel}</p>
        <div className="work-page-title">
          <h1 id="work-heading">{t.workHeading}</h1>
          <span className="archive-number" dir="ltr">
            {projects.length}
            <span>PROJECTS</span>
          </span>
        </div>
        <p>{t.workIntro}</p>
      </div>
      <div className="archive-toolbar">
        <div
          className="archive-filters"
          role="group"
          aria-label={
            language === "ar"
              ? "تصفية الأعمال حسب النوع"
              : "Filter projects by format"
          }
        >
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => setCategory(filter)}
              aria-pressed={category === filter}
            >
              {t.filters[filter]}
              <span dir="ltr">
                {filter === "all"
                  ? projects.length
                  : projects.filter((work) => work.category === filter).length}
              </span>
            </button>
          ))}
        </div>
        <div className="archive-search">
          <Search size={17} aria-hidden="true" />
          <input
            aria-label={t.search}
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t.searchPlaceholder}
          />
          {search && (
            <button onClick={() => setSearch("")} aria-label={t.clearSearch}>
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      <p className="archive-results" role="status">
        <bdi>{filtered.length}</bdi> {t.results}
      </p>
      <div className="project-grid archive-grid">
        {filtered.map((work, i) => (
          <ProjectCard
            key={work.id}
            work={work}
            wide={i === 0 && !query && category === "all"}
            search={params.toString()}
          />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-results">
          <p>{t.noResults}</p>
          <button
            className="button button-outline"
            onClick={() => {
              setCategory("all");
              setSearch("");
            }}
          >
            {t.clearSearch}
          </button>
        </div>
      )}
      <div className="archive-sources">
        <span>
          {language === "ar"
            ? "مصادر إضافية للأعمال"
            : "Explore the source collections"}
        </span>
        <a href={links.promos} target="_blank" rel="noreferrer">
          YouTube ↗
        </a>
        <a href={links.behance} target="_blank" rel="noreferrer">
          Behance ↗
        </a>
      </div>
    </section>
  );
}
