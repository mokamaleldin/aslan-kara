import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export const ExpertiseServices: React.FC = () => {
  const { language, isRtl, t } = useLanguage();

  return (
    <section className="py-24 bg-[#17191F] border-t border-[#373A40]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
              {t.services.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* Considered Editorial Service List */}
        <div className="divide-y divide-[#373A40]/80 border-y border-[#373A40]/80">
          {servicesData.map((service) => {
            const title = language === 'ar' ? service.titleAr : service.titleEn;
            const description = language === 'ar' ? service.descriptionAr : service.descriptionEn;
            const deliverables = language === 'ar' ? service.deliverablesAr : service.deliverablesEn;

            return (
              <div
                key={service.id}
                className="py-10 sm:py-12 group hover:bg-[#101217]/50 transition-colors px-4 -mx-4 rounded-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Large Number + Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A4A6AB]/40 group-hover:text-[#D9FF43] transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors">
                        {title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#A4A6AB] uppercase tracking-wider mt-1 block">
                        POST-PRODUCTION DISCIPLINE
                      </span>
                    </div>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm sm:text-base text-[#A4A6AB] font-body leading-relaxed">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#101217] text-[#F5F4EF] border border-[#373A40]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF43]" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
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
