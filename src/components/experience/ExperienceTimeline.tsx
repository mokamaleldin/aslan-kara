import React from 'react';
import { Calendar, Building2, CheckCircle2, Tv, Radio, Sparkles } from 'lucide-react';
import { careerMilestones } from '../../data/experience';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceTimeline: React.FC = () => {
  const { language, isRtl, t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-[#101217] relative border-t border-[#373A40]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
              {t.experience.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          {careerMilestones.map((milestone, idx) => {
            const isDawam = milestone.id === 'dawam-medya';
            const isIndependent = milestone.type === 'independent';

            const title = language === 'ar' ? milestone.titleAr : milestone.titleEn;
            const org = language === 'ar' ? milestone.organizationAr : milestone.organizationEn;
            const period = language === 'ar' ? milestone.periodAr : milestone.periodEn;
            const description = language === 'ar' ? milestone.descriptionAr : milestone.descriptionEn;
            const responsibilities = language === 'ar' ? milestone.responsibilitiesAr : milestone.responsibilitiesEn;
            const achievements = language === 'ar' ? milestone.achievementsAr : milestone.achievementsEn;

            return (
              <div
                key={milestone.id}
                className={`p-6 sm:p-8 lg:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  isDawam
                    ? 'bg-[#17191F] border-[#D9FF43]/40 shadow-xl'
                    : 'bg-[#17191F]/60 border-[#373A40]'
                }`}
              >
                {/* Active Indicator Top Tag */}
                {isDawam && (
                  <div className="absolute top-0 right-8 px-4 py-1 text-[11px] font-mono font-bold bg-[#D9FF43] text-[#101217] rounded-b-lg shadow">
                    {t.experience.currentBadge}
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-2.5 py-1 text-xs font-mono text-[#D9FF43] bg-[#24272D] rounded-lg border border-[#373A40]">
                        {period}
                      </span>
                      <span
                        className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${
                          isIndependent
                            ? 'bg-[#FF6548]/10 text-[#FF6548] border-[#FF6548]/30'
                            : 'bg-[#24272D] text-[#A4A6AB] border-[#373A40]'
                        }`}
                      >
                        {isIndependent
                          ? t.experience.independentBadge
                          : t.experience.broadcastBadge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F4EF]">
                      {title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#D9FF43] font-mono">
                      <Building2 className="w-4 h-4" />
                      <span>{org}</span>
                    </div>
                  </div>

                  {/* Achievements Pill Counter for this milestone */}
                  {achievements.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#101217] border border-[#373A40] flex-shrink-0 lg:max-w-xs space-y-1">
                      <span className="text-[10px] font-mono text-[#A4A6AB] uppercase tracking-wider block">
                        {t.experience.achievementsLabel}
                      </span>
                      {achievements.map((ach, i) => (
                        <p key={i} className="text-xs font-mono text-[#D9FF43] font-semibold">
                          • {ach}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#A4A6AB] font-body leading-relaxed mb-6">
                  {description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-3 pt-4 border-t border-[#373A40]/60">
                  <h4 className="text-xs font-mono text-[#A4A6AB] uppercase tracking-wider">
                    {t.experience.responsibilitiesLabel}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#F5F4EF]">
                    {responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
