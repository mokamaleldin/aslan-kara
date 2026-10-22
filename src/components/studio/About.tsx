import { ArrowDownRight, Plus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { coursesData } from '../../data/courses';

export function About() {
  const { language, t } = useLanguage();
  const experience = [
    { period: t.current, title: t.currentTitle, org: 'Dawam Medya', text: t.currentText },
    { period: t.previous, title: t.previousTitle, org: '', text: t.previousText },
    { period: t.independent, title: t.independentTitle, org: '', text: t.independentText },
  ];
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="container section-space">
        <div className="about-grid"><div className="about-bio"><p className="section-label">{t.aboutLabel}</p><h2 id="about-heading">{t.aboutHeading}</h2><p className="about-intro">{t.aboutIntro}</p><p className="about-body">{t.aboutBody}</p><div className="cv-links"><a href="/cv/ASLAN_KARA_CV_AR.pdf" download>{t.cvAr}<ArrowDownRight size={16} aria-hidden="true" /></a><a href="/cv/ASLAN_KARA_CV_EN.pdf" download>{t.cvEn}<ArrowDownRight size={16} aria-hidden="true" /></a></div></div><div className="career-list" aria-label={t.experienceLabel}>{experience.map((entry, index) => <article className="career-entry" key={entry.period}><div className="career-meta"><span className="career-number mono" dir="ltr">0{index + 1}</span><span>{entry.period}</span>{index === 0 && <span className="current-dot" aria-hidden="true" />}</div><h3>{entry.title}{entry.org && <span dir="ltr"> / {entry.org}</span>}</h3><p>{entry.text}</p></article>)}</div></div>
        <div className="craft-grid"><div><h3 className="small-heading">{t.craft}</h3><ul className="craft-list">{t.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div><div><h3 className="small-heading">{t.tools}</h3><p className="tools-list" dir="ltr">Premiere Pro <span>/</span> After Effects <span>/</span> Audition <span>/</span> Photoshop <span>/</span> Illustrator <span>/</span> Lightroom</p></div></div>
        <details className="development"><summary>{t.development}<Plus size={20} aria-hidden="true" /></summary><div className="courses-grid">{(['aljazeera', 'udemy', 'edraak'] as const).map((institution) => {
          const courses = coursesData.filter((course) => course.institution === institution);
          return <div key={institution}><h3>{language === 'ar' ? courses[0].institutionAr : courses[0].institutionEn}</h3><ul>{courses.map((course) => <li key={course.id}>{language === 'ar' ? course.titleAr : course.titleEn}</li>)}</ul></div>;
        })}</div></details>
      </div>
    </section>
  );
}
