import { BriefcaseBusiness } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();
  const entries = [
    {
      from: "2017",
      to: "2021",
      title: t.ragab,
      role: t.roleEditor,
      description: t.ragabText,
    },
    {
      from: "2021",
      to: "2022",
      title: t.mk,
      role: t.roleEditor,
      description: t.mkText,
    },
    {
      from: "2022",
      to: t.present,
      title: t.dawam,
      role: t.currentTitle,
      description: t.dawamText,
      achievement: t.dawamAchievement,
    },
  ];
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="container section-space">
        <p className="section-label">{t.experienceLabel}</p>
        <div className="section-heading-row">
          <h2 id="experience-heading">{t.experienceHeading}</h2>
          <p>{t.experienceIntro}</p>
        </div>
        <ol className="career-timeline">
          {entries.map((entry, i) => (
            <li className="career-stop" key={entry.title}>
              <div className="timeline-marker">
                <span />
                <span className="mono" dir="ltr">
                  0{i + 1}
                </span>
              </div>
              <p className="career-period">
                <bdi>{entry.from}</bdi>
                <span>—</span>
                <bdi>{entry.to}</bdi>
              </p>
              <h3>
                <bdi>{entry.title}</bdi>
              </h3>
              <p className="career-role">
                <bdi lang="en">{entry.role}</bdi>
              </p>
              <p className="career-description">{entry.description}</p>
              {entry.achievement && (
                <p className="career-achievement">{entry.achievement}</p>
              )}
            </li>
          ))}
        </ol>
        <div className="freelance-row">
          <span className="freelance-symbol">
            <BriefcaseBusiness size={22} strokeWidth={1.3} aria-hidden="true" />
          </span>
          <div>
            <h3>{t.freelance}</h3>
            <p>{t.freelanceText}</p>
          </div>
          <span className="freelance-date">{t.freelanceDate}</span>
        </div>
      </div>
    </section>
  );
}
