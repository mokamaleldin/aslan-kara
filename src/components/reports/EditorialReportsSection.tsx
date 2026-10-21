import React from 'react';
import { ExternalLink, Calendar, ShieldCheck, Newspaper, FileText } from 'lucide-react';
import { editorialReports } from '../../data/reports';
import { useLanguage } from '../../context/LanguageContext';

export const EditorialReportsSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();

  return (
    <section id="reports" className="py-24 bg-[#17191F] border-t border-[#373A40]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6548]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6548]">
              {t.reportsSection.badge}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
                {t.reportsSection.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl">
                {t.reportsSection.subtitle}
              </p>
            </div>

            {/* Attribution Banner */}
            <div className="p-4 rounded-xl bg-[#101217] border border-[#373A40] max-w-lg flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D9FF43] flex-shrink-0 mt-0.5" />
              <p className="text-xs font-mono text-[#A4A6AB] leading-relaxed">
                {t.reportsSection.attributionNote}
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {editorialReports.map((report, idx) => {
            const title = language === 'ar' ? report.titleAr : report.titleEn;
            const description = language === 'ar' ? report.descriptionAr : report.descriptionEn;
            const dateFormatted = language === 'ar' ? report.dateFormattedAr : report.dateFormattedEn;

            return (
              <div
                key={report.id}
                className="flex flex-col rounded-2xl bg-[#101217] border border-[#373A40] overflow-hidden hover:border-[#D9FF43]/40 transition-all duration-300 group shadow-lg"
              >
                {/* Editorial Still Preview */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  <img
                    src={report.localThumbnail}
                    onError={(e) => {
                      // Fallback to remote if local fails
                      (e.target as HTMLImageElement).src = report.remoteThumbnail;
                    }}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Publication Source Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#101217]/90 border border-[#373A40] text-[10px] font-mono text-[#F5F4EF] backdrop-blur-md">
                    <Newspaper className="w-3 h-3 text-[#D9FF43]" />
                    <span>{report.source}</span>
                  </div>

                  {/* Publish Date */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-0.5 rounded bg-black/75 text-[10px] font-mono text-[#A4A6AB]">
                    <Calendar className="w-3 h-3 text-[#D9FF43]" />
                    <span>{dateFormatted}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-base text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors leading-snug line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-xs text-[#A4A6AB] font-body line-clamp-3 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Verified Role Attribution Card */}
                  <div className="pt-3 border-t border-[#373A40]/60 space-y-3">
                    <div className="p-2.5 rounded-lg bg-[#17191F] border border-[#373A40] text-[11px] font-mono text-[#D9FF43] leading-tight">
                      <span className="text-[#A4A6AB] block text-[9px] uppercase tracking-wider mb-0.5">
                        {language === 'ar' ? 'المساهمة المحددة:' : 'VERIFIED CREDIT:'}
                      </span>
                      {language === 'ar' ? report.roleAr : report.roleEn}
                    </div>

                    <a
                      href={report.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-lg bg-[#24272D] hover:bg-[#373A40] text-xs font-semibold text-[#F5F4EF] transition-colors group/btn"
                    >
                      <span>{t.reportsSection.readReport}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D9FF43] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
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
