import React from 'react';
import { Play, ExternalLink, Clock, Sparkles, CheckCircle2, Film } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Project } from '../../types';

interface FeaturedProjectProps {
  onPlay: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
  project: Project;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  onPlay,
  onOpenDetails,
  project,
}) => {
  const { language, isRtl, t } = useLanguage();

  const title = language === 'ar' ? project.titleAr : project.titleEn;
  const description = language === 'ar' ? project.descriptionAr : project.descriptionEn;
  const roles = language === 'ar' ? project.rolesAr : project.rolesEn;

  return (
    <div className="relative rounded-3xl bg-[#17191F] border border-[#373A40] overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 mb-16">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9FF43]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left / Editorial Metadata */}
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          {/* Badge & Category */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6548] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
                {t.featuredCase.badge}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF] tracking-tight">
              {title}
            </h3>
            <div className="flex items-center gap-3 text-xs font-mono text-[#A4A6AB]">
              <span className="px-2.5 py-1 bg-[#24272D] rounded border border-[#373A40]">
                {t.featuredCase.category}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#24272D] rounded border border-[#373A40] text-[#D9FF43]">
                <Clock className="w-3.5 h-3.5" />
                {t.featuredCase.runtime}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#A4A6AB] font-body leading-relaxed">
            {description}
          </p>

          {/* Verified Roles Badges */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-mono text-[#A4A6AB] uppercase tracking-wider block">
              {t.featuredCase.roleLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              {roles.map((r, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#101217] text-[#F5F4EF] border border-[#373A40]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D9FF43]" />
                  <span>{r}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => onPlay(project)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D9FF43] hover:bg-white text-[#101217] font-semibold text-sm rounded-xl transition-all shadow-lg active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t.featuredCase.playAction}</span>
            </button>

            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#24272D] hover:bg-[#373A40] text-[#F5F4EF] font-medium text-sm rounded-xl border border-[#373A40] transition-colors"
              >
                <span>{t.featuredCase.externalAction}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => onOpenDetails(project)}
              className="text-xs font-mono text-[#A4A6AB] hover:text-[#D9FF43] underline underline-offset-4 px-2 py-1"
            >
              {t.portfolio.viewDetails}
            </button>
          </div>
        </div>

        {/* Right / Big Cinematic Video Card */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div
            onClick={() => onPlay(project)}
            className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#373A40] cursor-pointer group shadow-2xl"
          >
            <img
              src={project.thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#101217]/90 border-2 border-[#D9FF43] text-[#D9FF43] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D9FF43] group-hover:text-[#101217] transition-all duration-300 shadow-2xl">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Top Left Watermark */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded bg-[#101217]/80 backdrop-blur-md border border-[#373A40] text-[11px] font-mono text-[#F5F4EF]">
              <Film className="w-3.5 h-3.5 text-[#D9FF43]" />
              <span>4:41 / 24 FPS / 4K UHD</span>
            </div>

            {/* Bottom Left Title */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-xs font-mono text-[#D9FF43]">DIRECTED & EDITED BY ASLAN KARA</p>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                  {title}
                </h4>
              </div>
              <span className="text-xs font-mono text-white/70 bg-black/60 px-2.5 py-1 rounded">
                WATCH MASTER
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
