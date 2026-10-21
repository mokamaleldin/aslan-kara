import React from 'react';
import { Play, ArrowDown, ArrowUpRight, Download, Clapperboard, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { TimecodeTicker } from './TimecodeTicker';

interface HeroProps {
  onPlayShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayShowreel }) => {
  const { language, isRtl, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-[#101217]"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle timeline track lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-white/[0.04]" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-white/[0.04]" />
        
        {/* Subtle radial glow focused on editing workspace */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D9FF43]/[0.03] blur-[140px] rounded-full" />
        <div className="absolute top-2/3 right-10 w-[450px] h-[400px] bg-[#FF6548]/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Production Slate / Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-[#373A40]/50"
        >
          {/* Eyebrow & REC status */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider text-[#FF6548] bg-[#FF6548]/10 rounded border border-[#FF6548]/25">
              <span className="w-2 h-2 rounded-full bg-[#FF6548] animate-pulse-rec" />
              <span>{t.hero.recBadge}</span>
            </span>
            <span className="text-xs font-mono tracking-widest text-[#A4A6AB] uppercase">
              {t.hero.eyebrow}
            </span>
          </div>

          {/* Timecode & Framerate */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#A4A6AB]">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#17191F] border border-[#373A40] text-[#D9FF43]">
              {t.hero.fps}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#17191F] border border-[#373A40]">
              {t.hero.aspectRatio}
            </span>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#17191F] border border-[#373A40] text-[#F5F4EF]">
              <span className="text-[#A4A6AB] text-[10px] uppercase">{t.hero.timecodeLabel}:</span>
              <TimecodeTicker className="text-[#D9FF43] font-bold" />
            </div>
          </div>
        </motion.div>

        {/* Main Hero Grid: Huge Typography + Cinematic Frame Slate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Expressive Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tight text-[#F5F4EF] font-heading leading-[1.08]"
              >
                <span className="block">{t.hero.headlinePart1}</span>
                <span className="block text-[#D9FF43] mt-1">
                  {t.hero.headlinePart2}
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#A4A6AB] font-body leading-relaxed max-w-2xl"
            >
              {t.hero.subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D9FF43] text-[#101217] font-semibold text-sm rounded-xl hover:bg-white transition-all shadow-lg shadow-[#D9FF43]/10 active:scale-95"
              >
                <span>{t.hero.ctaWork}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#17191F] text-[#F5F4EF] font-medium text-sm rounded-xl border border-[#373A40] hover:border-[#D9FF43] hover:text-[#D9FF43] transition-all"
              >
                <span>{t.hero.ctaContact}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>

              <a
                href={language === 'ar' ? '/cv/ASLAN_KARA_CV_AR.pdf' : '/cv/ASLAN_KARA_CV_EN.pdf'}
                download
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono text-[#A4A6AB] hover:text-[#F5F4EF] hover:bg-[#17191F] rounded-xl transition-colors"
                title="Download verified CV"
              >
                <Download className="w-4 h-4 text-[#D9FF43]" />
                <span>{language === 'ar' ? 'السيرة الذاتية (PDF)' : 'CV (PDF)'}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Video Frame Slate (Helm El Meidan) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#17191F] border border-[#373A40] p-3 shadow-2xl overflow-hidden group">
              {/* Outer Slate Frame */}
              <div className="relative aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden bg-black">
                <img
                  src="https://img.youtube.com/vi/EPi39RWqCAY/maxresdefault.jpg"
                  alt="Helm El Meidan — Concept, Direction & Edit by Aslan Kara"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Film Crop Mask & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

                {/* Framing Markers on 4 Corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D9FF43] pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D9FF43] pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D9FF43] pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D9FF43] pointer-events-none" />

                {/* Central Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={onPlayShowreel}
                    className="relative group/btn flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#101217]/85 border-2 border-[#D9FF43] text-[#D9FF43] hover:bg-[#D9FF43] hover:text-[#101217] transition-all duration-300 shadow-2xl focus-visible:ring-4 focus-visible:ring-[#D9FF43]"
                    aria-label="Play Helm El Meidan Video"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    {/* Ring ping animation */}
                    <span className="absolute inset-0 rounded-full border border-[#D9FF43] animate-ping opacity-25 pointer-events-none" />
                  </button>
                </div>

                {/* Bottom Frame Caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#D9FF43] uppercase tracking-wider block">
                      {language === 'ar' ? 'فيديو كليب مميز' : 'FEATURED MUSIC VIDEO'}
                    </span>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#F5F4EF]">
                      {language === 'ar' ? 'حلم الميدان — 4:41' : 'Helm El Meidan — 4:41'}
                    </h4>
                  </div>
                  <span className="px-2 py-1 font-mono text-[10px] text-[#A4A6AB] bg-[#101217]/80 rounded border border-[#373A40]">
                    {language === 'ar' ? 'فكرة • إخراج • مونتاج' : 'Concept • Direct • Edit'}
                  </span>
                </div>
              </div>

              {/* Bottom Slate Information */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-[11px] font-mono text-[#A4A6AB]">
                <div className="flex items-center gap-2">
                  <Clapperboard className="w-3.5 h-3.5 text-[#FF6548]" />
                  <span>TAKE 01 / SCENE 04</span>
                </div>
                <span className="text-[#D9FF43]">MASTER TIMELINE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Scroll Prompt */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 flex items-center justify-between text-xs font-mono text-[#A4A6AB]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF43]" />
          <span>{t.hero.currentProject}</span>
        </div>
        <a
          href="#work"
          className="hidden md:flex items-center gap-2 hover:text-[#D9FF43] transition-colors"
        >
          <span>{t.hero.scrollPrompt}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
