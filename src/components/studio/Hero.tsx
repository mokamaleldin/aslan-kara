import { ArrowDown, ArrowDownRight, ArrowUpRight, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { featuredWork, type PortfolioWork } from '../../data/portfolio';

export function Hero({ onPlay }: { onPlay: (film: PortfolioWork) => void }) {
  const { language, t } = useLanguage();
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-intro">
        <div className="hero-identity">
          <p className="eyebrow"><span className="tiny-square" />{t.eyebrow}</p>
          <h1 id="hero-title">{t.name}<span className="name-period">.</span></h1>
          <p className="hero-line">{t.heroLine}</p>
        </div>
        <div className="hero-description">
          <p>{t.intro}</p>
          <div className="hero-actions">
            <a href="#work" className="button button-dark">{t.explore}<ArrowDown size={16} aria-hidden="true" /></a>
            <a href={`/cv/ASLAN_KARA_CV_${language.toUpperCase()}.pdf`} className="text-link" download>{t.cv}<ArrowDownRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <button className="featured-film" onClick={() => onPlay(featuredWork)} aria-label={`${t.watch}: ${featuredWork.title[language]}`}>
        <img src={featuredWork.image} alt="" width="1280" height="720" fetchPriority="high" />
        <span className="film-shade" />
        <span className="film-topline"><span className="film-kicker"><span className="tiny-square" />{t.featured}</span><span className="mono" dir="ltr">01 / 04:41</span></span>
        <span className="film-center"><span className="play-circle"><Play size={25} fill="currentColor" strokeWidth={1.5} aria-hidden="true" /></span></span>
        <span className="film-bottomline"><span className="film-title-group"><span className="film-category">{t.music}</span><span className="film-title">{featuredWork.title[language]}</span><span className="film-role">{featuredWork.role[language]}</span></span><span className="film-watch">{t.watch}<ArrowUpRight size={19} aria-hidden="true" /></span></span>
      </button>
      <div className="proof-strip" aria-label={language === 'ar' ? 'المسيرة المهنية بالأرقام' : 'Career highlights'}>
        {[
          ['2017', t.since], ['1,500+', t.talkShows], ['1,000+', t.news], ['50+', t.podcasts],
        ].map(([value, label]) => <div className="proof-item" key={value}><strong dir="ltr">{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  );
}
