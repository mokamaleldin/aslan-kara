import React, { useEffect } from 'react';
import { X, Play, ExternalLink, Calendar, Clock, Film, Layers, Award } from 'lucide-react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onPlay,
}) => {
  const { language, isRtl, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const title = language === 'ar' ? project.titleAr : project.titleEn;
  const description = language === 'ar' ? project.descriptionAr : project.descriptionEn;
  const roles = language === 'ar' ? project.rolesAr : project.rolesEn;
  const context = language === 'ar' ? project.contextAr : project.contextEn;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#17191F] border border-[#373A40] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#373A40] bg-[#101217]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#A4A6AB]">
              {isRtl ? 'تفاصيل المشروع' : 'PROJECT DOSSIER'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A4A6AB] hover:text-[#F5F4EF] hover:bg-[#24272D] rounded-lg transition-colors"
            aria-label={t.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Media Header Preview */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-[#373A40] group">
            <img
              src={project.thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div className="flex items-center gap-4">
                {project.youtubeId && (
                  <button
                    onClick={() => onPlay(project)}
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-[#D9FF43] hover:bg-white text-[#101217] font-semibold text-sm rounded-lg shadow-lg transition-transform active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{t.portfolio.watchButton}</span>
                  </button>
                )}
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#24272D]/90 hover:bg-[#373A40] text-[#F5F4EF] text-sm rounded-lg border border-[#373A40] transition-colors"
                  >
                    <span>{isRtl ? 'المصدر الأصلي' : 'Original Source'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Title and Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono uppercase bg-[#24272D] text-[#D9FF43] rounded border border-[#373A40]">
                {project.category}
              </span>
              {project.duration && (
                <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#A4A6AB] bg-[#24272D] rounded border border-[#373A40]">
                  <Clock className="w-3.5 h-3.5" />
                  {project.duration}
                </span>
              )}
              {project.year && (
                <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#A4A6AB] bg-[#24272D] rounded border border-[#373A40]">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#F5F4EF] font-heading">
              {title}
            </h2>
            {context && (
              <p className="text-xs text-[#FF6548] font-mono">
                {context}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="p-4 rounded-xl bg-[#101217] border border-[#373A40] space-y-2">
            <h4 className="text-xs font-mono text-[#A4A6AB] uppercase tracking-wider">
              {isRtl ? 'نبذة عن العمل' : 'PROJECT OVERVIEW'}
            </h4>
            <p className="text-sm leading-relaxed text-[#F5F4EF]">
              {description}
            </p>
          </div>

          {/* Verified Roles / Contribution */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#A4A6AB] uppercase tracking-wider">
              {t.portfolio.roleLabel}
            </h4>
            <div className="flex flex-wrap gap-2">
              {roles.map((r, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium bg-[#24272D] text-[#F5F4EF] rounded-lg border border-[#373A40]"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#373A40] bg-[#101217]">
          <span className="text-xs font-mono text-[#A4A6AB]">
            ASLAN KARA — SELECTED PORTFOLIO
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#F5F4EF] hover:bg-[#24272D] rounded-lg transition-colors"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
