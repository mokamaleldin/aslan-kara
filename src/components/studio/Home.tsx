import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { homeSelectedWork, projects } from "../../data/portfolio";
import { routeHref } from "../../lib/routes";
import { ProjectCard } from "./ProjectCard";
import { Experience } from "./Experience";
import { Tools } from "./Tools";
import { Courses } from "./Courses";

export function Home() {
  const { language, t } = useLanguage();
  return (
    <>
      <section
        className="profile-hero container"
        aria-labelledby="profile-heading"
      >
        <div className="profile-title">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 id="profile-heading">{t.name}</h1>
          <p className="professional-title">{t.heroLine}</p>
        </div>
        <div className="profile-main">
          <figure className="profile-photo">
            <img
              src="/images/profile/aslan-kara.webp"
              alt={t.portraitAlt}
              width="276"
              height="276"
              fetchPriority="high"
            />
            <figcaption>{t.portraitCaption}</figcaption>
          </figure>
          <div className="profile-summary">
            <p className="profile-lead">{t.intro}</p>
            <p>{t.introDetail}</p>
            <div className="profile-actions">
              <a
                href={routeHref(language, "/work")}
                className="button button-dark"
              >
                {t.explore}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={`/cv/ASLAN_KARA_CV_${language.toUpperCase()}.pdf`}
                download
              >
                {t.cv}
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="profile-side-note" aria-hidden="true" dir="ltr">
            BROADCAST
            <br />
            DIGITAL
            <br />
            POST-PRODUCTION<span>2017 — {new Date().getFullYear()}</span>
          </div>
        </div>
        <div className="proof-strip">
          {[
            ["2017", t.since],
            ["1,500+", t.talkShows],
            ["1,000+", t.news],
            ["700+", t.videographics],
            ["50+", t.podcasts],
          ].map(([value, label]) => (
            <div key={value} className="proof-item">
              <strong dir="ltr">{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section
        className="container section-space home-work"
        aria-labelledby="selected-heading"
      >
        <div className="section-header">
          <div>
            <p className="section-label">{t.homeWorkLabel}</p>
            <h2 id="selected-heading">{t.homeWorkHeading}</h2>
          </div>
          <a href={routeHref(language, "/work")} className="text-link">
            {t.allWork}
            <span className="count-badge" dir="ltr">
              {projects.length}
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="section-intro">{t.homeWorkIntro}</p>
        <div className="project-grid home-project-grid">
          {homeSelectedWork.map((work) => (
            <ProjectCard key={work.id} work={work} />
          ))}
        </div>
      </section>
      <Experience />
      <Tools />
      <Courses />
    </>
  );
}
