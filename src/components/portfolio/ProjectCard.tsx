import React from 'react';
import { Play, ExternalLink, Clock, Calendar, ArrowUpRight, Film, Info } from 'lucide-react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onPlay: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onPlay,
  onOpenDetails,
}) => {
  const { language, isRtl, t } = useLanguage();

  const title = language === 'ar' ? project.titleAr : project.titleEn;
  const description = language === 'ar' ? project.descriptionAr : project.descriptionEn;
  const roles = language === 'ar' ? project.rolesAr : project.rolesEn;
  const context = language === 'ar' ? project.contextAr : project.contextEn;

  return (
    <div className="flex flex-col rounded-2xl bg-[#17191F] border border-[#373A40] overflow-hidden hover:border-[#D9FF43]/50 transition-all duration-300 group shadow-lg">
      {/* 16:9 Thumbnail Visual Container */}
      <div className="relative aspect-video bg-black overflow-hidden">
        <img
          src={project.thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#101217]/90 text-[#D9FF43] rounded border border-[#373A40]/80 backdrop-blur-md">
            {project.category.replace('_', ' ')}
          </span>

          {project.duration && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-white/90 bg-[#101217]/90 rounded border border-[#373A40]/80 backdrop-blur-md">
              <Clock className="w-3 h-3 text-[#D9FF43]" />
              {project.duration}
            </span>
          )}
        </div>

        {/* Quick Play Trigger (if YouTube) */}
        {project.youtubeId ? (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <button
              onClick={() => onPlay(project)}
              className="flex items-center gap-2 px-4 py-2 bg-[#D9FF43] text-[#101217] font-semibold text-xs rounded-xl shadow-xl hover:bg-white transition-all transform group-hover:scale-105 active:scale-95"
              aria-label={`Play ${title}`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{t.portfolio.watchButton}</span>
            </button>
          </div>
        ) : project.externalUrl ? (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#D9FF43] text-[#101217] font-semibold text-xs rounded-xl shadow-xl hover:bg-white transition-all"
            >
              <span>{isRtl ? 'فتح الرابط' : 'Open Link'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : null}

        {/* Bottom Platform Indicator */}
        {project.sourcePlatform && (
          <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-[#A4A6AB]">
            {project.sourcePlatform}
          </div>
        )}
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Title */}
          <h4 className="font-heading font-bold text-base text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors line-clamp-2 leading-snug">
            {title}
          </h4>

          {/* Short description */}
          <p className="text-xs text-[#A4A6AB] font-body line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Roles & Footer Controls */}
        <div className="pt-3 border-t border-[#373A40]/60 space-y-3">
          {/* Roles */}
          <div className="flex flex-wrap gap-1.5">
            {roles.slice(0, 2).map((r, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] font-medium bg-[#24272D] text-[#F5F4EF] rounded border border-[#373A40]"
              >
                {r}
              </span>
            ))}
            {roles.length > 2 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#A4A6AB] bg-[#24272D] rounded">
                +{roles.length - 2}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between text-xs pt-1">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-xs text-[#A4A6AB] hover:text-[#D9FF43] transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
              <span>{t.portfolio.viewDetails}</span>
            </button>

            {project.youtubeId ? (
              <button
                onClick={() => onPlay(project)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#D9FF43] hover:text-white transition-colors"
              >
                <span>{t.portfolio.watchButton}</span>
                <Play className="w-3 h-3 fill-current" />
              </button>
            ) : project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#A4A6AB] hover:text-[#D9FF43] transition-colors"
              >
                <span>{isRtl ? 'المصدر' : 'Source'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
