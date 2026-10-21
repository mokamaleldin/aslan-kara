import React from 'react';
import { Layers, Film, Radio, Tv, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AchievementsCounter: React.FC = () => {
  const { language, t } = useLanguage();

  const lifetimeStats = [
    {
      num: '1,500+',
      labelAr: 'حلقة برامج حوارية وتوك شو',
      labelEn: 'Talk Show Episodes',
      icon: Tv,
    },
    {
      num: '1,000+',
      labelAr: 'حلقة برامج اجتماعية وإنسانية',
      labelEn: 'Social Program Episodes',
      icon: Film,
    },
    {
      num: '1,000+',
      labelAr: 'تقرير إخباري متلفز ورقمي',
      labelEn: 'Broadcast News Reports',
      icon: CheckCircle2,
    },
    {
      num: '700+',
      labelAr: 'عمل فيديو جراف وإحصائي',
      labelEn: 'Videographics Packages',
      icon: Layers,
    },
    {
      num: '50+',
      labelAr: 'حلقة بودكاست مستقلة',
      labelEn: 'Independent Podcast Episodes',
      icon: Radio,
    },
  ];

  const dawamStats = [
    {
      num: '800+',
      labelAr: 'حلقة برامجية متكاملة',
      labelEn: 'Broadcast Program Episodes',
    },
    {
      num: '100+',
      labelAr: 'برومو ومادة ترويجية متقنة',
      labelEn: 'Promos & Promotional Pieces',
    },
  ];

  return (
    <section className="py-20 bg-[#17191F] border-y border-[#373A40]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#373A40]/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D9FF43] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D9FF43]" />
              <span>{t.metrics.sectionTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#F5F4EF]">
              {language === 'ar'
                ? 'الأرقام دي جزء من مسيرة بدأت سنة 2017'
                : 'A career measured in thousands of precision cuts'}
            </h2>
          </div>
          <p className="text-sm text-[#A4A6AB] font-body max-w-md leading-relaxed">
            {t.metrics.sectionSubtitle}
          </p>
        </div>

        {/* Lifetime Achievements Grid (5 items) */}
        <div className="pt-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2.5 py-1 text-xs font-mono text-[#D9FF43] bg-[#24272D] rounded border border-[#373A40]">
              {t.metrics.lifetimeTag}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {lifetimeStats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#101217] border border-[#373A40] hover:border-[#D9FF43]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#A4A6AB] group-hover:text-[#D9FF43] transition-colors">
                      0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-[#A4A6AB] group-hover:text-[#D9FF43] transition-colors" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-4xl font-extrabold font-mono text-[#F5F4EF] tracking-tight group-hover:text-[#D9FF43] transition-colors">
                      {item.num}
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[#A4A6AB] font-body leading-snug">
                      {language === 'ar' ? item.labelAr : item.labelEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dawam Medya Specific Achievement Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#24272D]/60 border border-[#373A40] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6548]" />
              <span className="text-xs font-mono text-[#FF6548] uppercase tracking-wider">
                {t.metrics.dawamTag}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-[#F5F4EF]">
              {language === 'ar'
                ? 'إنجازات محددة داخل Dawam Medya للإنتاج الإعلامي'
                : 'Key Milestones at Dawam Medya (Since June 2022)'}
            </h3>
            <p className="text-xs text-[#A4A6AB]">
              {language === 'ar'
                ? 'محرر أول لمونتاج البرامج والبروموهات ومراحل ما بعد الإنتاج الكاملة.'
                : 'Senior Editor spearheading episodic broadcast cuts and high-impact promos.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {dawamStats.map((d, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#D9FF43]">
                  {d.num}
                </span>
                <span className="text-xs sm:text-sm text-[#F5F4EF] font-medium max-w-[140px] leading-tight">
                  {language === 'ar' ? d.labelAr : d.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Reporting Footnote */}
        <p className="mt-4 text-[11px] font-mono text-[#A4A6AB]/80 text-center">
          {t.metrics.clarification}
        </p>
      </div>
    </section>
  );
};
