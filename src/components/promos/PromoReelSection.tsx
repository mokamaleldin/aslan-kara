import React from 'react';
import { Play, ExternalLink, Sparkles, Film, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';
import { projectsData } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

interface PromoReelSectionProps {
  onPlay: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
}

export const PromoReelSection: React.FC<PromoReelSectionProps> = ({
  onPlay,
  onOpenDetails,
}) => {
  const { language, isRtl, t } = useLanguage();

  const promos = projectsData.filter((p) => p.category === 'promos');

  const playlistUrl = 'https://www.youtube.com/playlist?list=PLT6mqv0ccw4emVoq0xFIMX6CL1_pNebd_';

  return (
    <section className="py-24 bg-[#101217] relative border-t border-[#373A40]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
              {t.promosSection.badge}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
                {t.promosSection.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl">
                {t.promosSection.subtitle}
              </p>
            </div>

            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#17191F] hover:bg-[#D9FF43] hover:text-[#101217] text-xs font-semibold text-[#F5F4EF] border border-[#373A40] transition-all group flex-shrink-0"
            >
              <span>{t.promosSection.viewFullPlaylist}</span>
              <ExternalLink className="w-4 h-4 text-[#D9FF43] group-hover:text-[#101217]" />
            </a>
          </div>
        </div>

        {/* Promo Reel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {promos.map((promo) => {
            const title = language === 'ar' ? promo.titleAr : promo.titleEn;
            const description = language === 'ar' ? promo.descriptionAr : promo.descriptionEn;
            const roles = language === 'ar' ? promo.rolesAr : promo.rolesEn;

            return (
              <div
                key={promo.id}
                className="flex flex-col rounded-2xl bg-[#17191F] border border-[#373A40] overflow-hidden hover:border-[#D9FF43]/50 transition-all duration-300 group shadow-lg"
              >
                {/* 16:9 Thumbnail Visual */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={promo.thumbnail}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[10px] font-mono text-[#D9FF43] bg-[#101217]/90 rounded border border-[#373A40]">
                      PROMO REEL
                    </span>
                    {promo.duration && (
                      <span className="text-[10px] font-mono text-white/90 bg-black/75 px-2 py-0.5 rounded">
                        {promo.duration}
                      </span>
                    )}
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <button
                      onClick={() => onPlay(promo)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#D9FF43] text-[#101217] font-semibold text-xs rounded-xl shadow-xl hover:bg-white transition-all transform group-hover:scale-105 active:scale-95"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{t.portfolio.watchButton}</span>
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-base text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-xs text-[#A4A6AB] font-body line-clamp-2 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#373A40]/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {roles.slice(0, 2).map((r, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] font-medium bg-[#24272D] text-[#F5F4EF] rounded border border-[#373A40]"
                        >
                          {r}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onPlay(promo)}
                      className="text-xs font-semibold text-[#D9FF43] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>{t.portfolio.watchButton}</span>
                      <Play className="w-3 h-3 fill-current" />
                    </button>
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
