import { Plus } from "lucide-react";
import { coursesData } from "../../data/courses";
import { useLanguage } from "../../context/LanguageContext";

export function Courses() {
  const { language, t } = useLanguage();
  return (
    <section className="courses-section" aria-labelledby="courses-heading">
      <div className="container section-space">
        <div className="section-header">
          <div>
            <p className="section-label">{t.coursesLabel}</p>
            <h2 id="courses-heading">{t.coursesHeading}</h2>
          </div>
          <span className="training-total">
            <strong dir="ltr">25</strong>
            {t.courseTopics}
          </span>
        </div>
        <p className="section-intro">{t.coursesIntro}</p>
        <div className="training-grid">
          {(["aljazeera", "udemy", "edraak"] as const).map((institution, i) => {
            const items = coursesData.filter(
              (course) => course.institution === institution,
            );
            const courseTitle = (course: (typeof items)[number]) =>
              language === "ar" ? course.titleAr : course.titleEn;
            return (
              <article className="training-card" key={institution}>
                <div className="training-top">
                  <span className="mono" dir="ltr">
                    0{i + 1}
                  </span>
                  <span className="training-number" dir="ltr">
                    {items.length}
                  </span>
                </div>
                <h3>
                  {language === "ar"
                    ? items[0].institutionAr
                    : items[0].institutionEn}
                </h3>
                <ul>
                  {items.slice(0, 5).map((course) => (
                    <li key={course.id}>{courseTitle(course)}</li>
                  ))}
                </ul>
                {items.length > 5 && (
                  <details>
                    <summary>
                      {t.viewCourses}
                      <Plus size={17} aria-hidden="true" />
                    </summary>
                    <ul>
                      {items.slice(5).map((course) => (
                        <li key={course.id}>{courseTitle(course)}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
