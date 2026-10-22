import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import type { PortfolioWork } from "../../data/portfolio";

export function FilmDialog({
  film,
  onClose,
}: {
  film: PortfolioWork | null;
  onClose: () => void;
}) {
  const { language, t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!film || !dialog) return;
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [film]);
  if (!film) return null;
  return createPortal(
    <dialog
      ref={dialogRef}
      className="film-dialog"
      aria-labelledby="film-dialog-title"
      aria-describedby="film-dialog-role"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <div className="dialog-heading">
          <div>
            <h2 id="film-dialog-title">
              {(film.videoTitle || film.title)[language]}
            </h2>
            <p id="film-dialog-role">{film.role[language]}</p>
          </div>
          <button
            autoFocus
            className="dialog-close"
            onClick={onClose}
            aria-label={t.closeVideo}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="dialog-player">
          <iframe
            key={film.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
            title={(film.videoTitle || film.title)[language]}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="dialog-bottom">
          <p>{t.videoNote}</p>
          <a
            href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
            target="_blank"
            rel="noreferrer"
          >
            {t.onYouTube}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
