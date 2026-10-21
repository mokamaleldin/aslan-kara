import React, { useEffect } from 'react';
import { X, ExternalLink, Film, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
  title: string;
  role?: string;
  runtime?: string;
  videoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  youtubeId,
  title,
  role,
  runtime,
  videoUrl,
}) => {
  const { t, isRtl } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  if (!isOpen) return null;

  const fallbackUrl = videoUrl || (youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#17191F] border border-[#373A40] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Slate */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#373A40] bg-[#101217]">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF6548] animate-pulse" />
            <div className="min-w-0">
              <h3
                id="video-modal-title"
                className="text-sm sm:text-base font-semibold text-[#F5F4EF] truncate font-heading"
              >
                {title}
              </h3>
              {role && (
                <p className="text-xs text-[#A4A6AB] truncate">
                  {role}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {runtime && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#D9FF43] bg-[#24272D] rounded border border-[#373A40]">
                <Clock className="w-3.5 h-3.5" />
                {runtime}
              </span>
            )}
            {fallbackUrl && (
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#A4A6AB] hover:text-[#D9FF43] transition-colors rounded-lg hover:bg-[#24272D]"
                title={t.modal.directYoutube}
                aria-label={t.modal.directYoutube}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#A4A6AB] hover:text-[#F5F4EF] hover:bg-[#24272D] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#D9FF43]"
              aria-label={t.modal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : fallbackUrl ? (
            <div className="text-center p-8 space-y-4">
              <Film className="w-12 h-12 mx-auto text-[#D9FF43]" />
              <p className="text-sm text-[#A4A6AB]">
                {isRtl
                  ? 'هذا العمل متاح للمشاهدة المباشرة عبر المنصة الأصلية'
                  : 'This video is hosted on an external broadcast platform.'}
              </p>
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9FF43] text-[#101217] font-semibold text-sm rounded-lg hover:bg-white transition-colors"
              >
                <span>{isRtl ? 'فتح في نافذة جديدة' : 'Open in New Window'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : null}
        </div>

        {/* Footer Bar / Slate Metadata */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3 text-xs text-[#A4A6AB] bg-[#101217] border-t border-[#373A40]">
          <div className="flex items-center gap-3 font-mono">
            <span>RES: 1080p FHD</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">ASPECT: 16:9</span>
            <span>|</span>
            <span className="text-[#D9FF43]">TIMELINE / MASTER CUT</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-[#A4A6AB] hover:text-[#F5F4EF] underline underline-offset-4"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
