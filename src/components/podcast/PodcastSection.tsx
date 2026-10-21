import React from 'react';
import { Play, Mic, Radio, Sliders, ExternalLink, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { podcastChannels, podcastOverview } from '../../data/podcasts';
import { useLanguage } from '../../context/LanguageContext';
import { Project } from '../../types';

interface PodcastSectionProps {
  onPlayEpisode: (project: Project) => void;
}

export const PodcastSection: React.FC<PodcastSectionProps> = ({ onPlayEpisode }) => {
  const { language, isRtl, t } = useLanguage();

  const featuredEpisodeProject: Project = {
    id: 'podcast-featured-ep',
    titleAr: 'مفاتيح النجاة من الضغوط النفسية! | د. خالد الحداد',
    titleEn: 'Keys to Surviving Psychological Stress | Dr. Khaled El-Haddad',
    category: 'podcasts',
    rolesAr: ['تجهيز الاستوديو', 'الإشراف الإخراجي', 'المونتاج الكامل', 'معالجة الصوت'],
    rolesEn: ['Studio Setup', 'Visual Direction', 'Full Episode Edit', 'Audio Mastering'],
    descriptionAr: 'حلقة كاملة من بودكاست حان الآن المستقل بإشراف تقني وإخراجي ومونتاج كامل.',
    descriptionEn: 'Full 7anaalan independent podcast episode: complete studio setup, visual direction, and audio mastering.',
    duration: '58:20',
    youtubeId: 'X-H4PLqdGiE',
    videoUrl: 'https://youtu.be/X-H4PLqdGiE',
    thumbnail: 'https://img.youtube.com/vi/X-H4PLqdGiE/maxresdefault.jpg',
  };

  return (
    <section id="podcasts" className="py-24 bg-[#101217] relative border-t border-[#373A40]/60">
      {/* Studio Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF6548]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
              {t.podcastSection.badge}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
                {t.podcastSection.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl">
                {t.podcastSection.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#17191F] border border-[#373A40] text-xs font-mono text-[#D9FF43]">
              <Radio className="w-4 h-4 text-[#FF6548] animate-pulse" />
              <span>{language === 'ar' ? podcastOverview.totalEpisodesTextAr : podcastOverview.totalEpisodesTextEn}</span>
            </div>
          </div>
        </div>

        {/* Featured Episode Spotlight Card */}
        <div className="rounded-3xl bg-[#17191F] border border-[#373A40] p-6 sm:p-8 lg:p-10 mb-14 shadow-2xl relative overflow-hidden">
          {/* Subtle audio waveform graphics in background */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-between px-8 opacity-10 pointer-events-none">
            {[35, 60, 45, 80, 20, 95, 60, 75, 40, 90, 30, 85, 55, 70, 90, 40, 65, 80, 50, 85, 30, 60].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-[#D9FF43] rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Visual preview */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onPlayEpisode(featuredEpisodeProject)}
                className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#373A40] cursor-pointer group shadow-xl"
              >
                <img
                  src="https://img.youtube.com/vi/X-H4PLqdGiE/maxresdefault.jpg"
                  alt="Dr. Khaled El-Haddad Podcast Episode"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#101217]/90 border-2 border-[#D9FF43] text-[#D9FF43] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D9FF43] group-hover:text-[#101217] transition-all duration-300 shadow-2xl">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Frame Details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="px-2.5 py-1 text-xs font-mono text-[#D9FF43] bg-[#101217]/90 rounded border border-[#373A40]">
                    58:20 / MULTI-CAM 4K
                  </span>
                  <span className="text-xs font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded">
                    WATCH EPISODE
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Information */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="px-2.5 py-1 text-[11px] font-mono text-[#D9FF43] bg-[#24272D] rounded border border-[#373A40] uppercase tracking-wider inline-block">
                  {t.podcastSection.featuredEpisodeBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F4EF] leading-snug">
                  {t.podcastSection.episodeTitle}
                </h3>
                <p className="text-xs font-mono text-[#FF6548]">
                  {language === 'ar' ? 'بودكاست حان الآن المستقل' : '7anaalan Independent Podcast'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101217] border border-[#373A40] space-y-2">
                <h4 className="text-xs font-mono text-[#A4A6AB] uppercase tracking-wider">
                  {language === 'ar' ? 'الأدوار في الحلقة:' : 'ROLES IN EPISODE:'}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(language === 'ar'
                    ? ['تجهيز الاستوديو', 'الإشراف الإخراجي', 'المونتاج الكامل', 'هندسة الصوت']
                    : ['Studio Setup', 'Visual Direction', 'Full Episode Edit', 'Sound Design']
                  ).map((r, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium bg-[#24272D] text-[#F5F4EF] rounded border border-[#373A40]"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onPlayEpisode(featuredEpisodeProject)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#D9FF43] hover:bg-white text-[#101217] font-semibold text-xs rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'ar' ? 'مشاهدة الحلقة' : 'Watch Episode'}</span>
                </button>
                <a
                  href="https://youtu.be/X-H4PLqdGiE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A4A6AB] hover:text-[#D9FF43] transition-colors"
                >
                  <span>{language === 'ar' ? 'فتح في YouTube' : 'Open in YouTube'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Channels & Production Scope Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Scope of Production List */}
          <div className="lg:col-span-7 rounded-2xl bg-[#17191F] border border-[#373A40] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#D9FF43]" />
              <h3 className="font-heading font-bold text-lg text-[#F5F4EF]">
                {t.podcastSection.scopeTitle}
              </h3>
            </div>

            <div className="space-y-3">
              {t.podcastSection.scopes.map((scope, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#101217] border border-[#373A40]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#F5F4EF] leading-relaxed">
                    {scope}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-[#A4A6AB]">
              {language === 'ar' ? podcastOverview.natureNoteAr : podcastOverview.natureNoteEn}
            </p>
          </div>

          {/* Podcast Channel Cards */}
          <div className="lg:col-span-5 space-y-6">
            {podcastChannels.map((channel) => (
              <div
                key={channel.id}
                className="rounded-2xl bg-[#17191F] border border-[#373A40] p-6 space-y-4 hover:border-[#D9FF43]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#101217] border border-[#373A40] flex items-center justify-center text-[#D9FF43]">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#F5F4EF]">
                        {language === 'ar' ? channel.nameAr : channel.nameEn}
                      </h4>
                      <span className="text-xs font-mono text-[#A4A6AB]">
                        {channel.handle}
                      </span>
                    </div>
                  </div>

                  <a
                    href={channel.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#24272D] text-[#A4A6AB] hover:text-[#D9FF43] transition-colors"
                    title={t.podcastSection.visitChannel}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#A4A6AB] font-body leading-relaxed">
                  {language === 'ar' ? channel.descriptionAr : channel.descriptionEn}
                </p>

                <div className="pt-2">
                  <a
                    href={channel.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#D9FF43] hover:text-white transition-colors"
                  >
                    <span>{t.podcastSection.visitChannel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
