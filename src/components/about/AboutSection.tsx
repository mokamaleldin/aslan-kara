import React from 'react';
import { Download, FileText, Sparkles, CheckCircle2, Clapperboard, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#17191F] border-t border-[#373A40]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Pull Quote & Creative Slate */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
                  {t.about.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF] leading-tight">
                {t.about.title}
              </h2>
            </div>

            {/* Editorial Blockquote Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#101217] border border-[#373A40] space-y-4 relative overflow-hidden">
              <div className="w-2 h-12 bg-[#D9FF43] rounded-full absolute top-8 left-0 sm:left-2" />
              <p className="text-base sm:text-lg italic font-heading text-[#F5F4EF] leading-relaxed pl-4 sm:pl-6">
                {t.about.quote}
              </p>
              <div className="pt-2 pl-4 sm:pl-6 flex items-center justify-between text-xs font-mono text-[#A4A6AB]">
                <span>ASLAN KARA</span>
                <span className="text-[#D9FF43]">THE ART OF THE CUT</span>
              </div>
            </div>

            {/* Direct Downloadable CV Buttons */}
            <div className="p-6 rounded-2xl bg-[#24272D]/60 border border-[#373A40] space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#D9FF43]" />
                <h4 className="font-heading font-bold text-sm text-[#F5F4EF]">
                  {language === 'ar' ? 'السيرة الذاتية الرسمية المعتمدة' : 'Official Verified Curriculum Vitae'}
                </h4>
              </div>
              <p className="text-xs text-[#A4A6AB]">
                {language === 'ar'
                  ? 'يمكنك تحميل ملف السيرة الذاتية الكامل بصيغة PDF باللغتين العربية أو الإنجليزية.'
                  : 'Download the comprehensive PDF dossier in either Arabic or English.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="/cv/ASLAN_KARA_CV_AR.pdf"
                  download="ASLAN_KARA_CV_AR.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#101217] hover:bg-[#D9FF43] hover:text-[#101217] text-[#F5F4EF] text-xs font-semibold rounded-xl border border-[#373A40] transition-colors group"
                >
                  <Download className="w-3.5 h-3.5 text-[#D9FF43] group-hover:text-[#101217]" />
                  <span>{t.about.downloadCvAr}</span>
                </a>

                <a
                  href="/cv/ASLAN_KARA_CV_EN.pdf"
                  download="ASLAN_KARA_CV_EN.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#101217] hover:bg-[#D9FF43] hover:text-[#101217] text-[#F5F4EF] text-xs font-semibold rounded-xl border border-[#373A40] transition-colors group"
                >
                  <Download className="w-3.5 h-3.5 text-[#D9FF43] group-hover:text-[#101217]" />
                  <span>{t.about.downloadCvEn}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth First-Person Narrative */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#101217] border border-[#373A40] space-y-6">
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#A4A6AB] font-body">
                <p className="text-[#F5F4EF] font-medium leading-relaxed">
                  {t.about.bioP1}
                </p>
                <p>
                  {t.about.bioP2}
                </p>
                <p>
                  {t.about.bioP3}
                </p>
              </div>

              {/* Highlights Pill Badges */}
              <div className="pt-6 border-t border-[#373A40] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#17191F] border border-[#373A40]">
                  <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0" />
                  <span className="text-[#F5F4EF]">
                    {language === 'ar' ? 'خبرة مهنية متواصلة منذ 2017' : 'Professional experience since 2017'}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#17191F] border border-[#373A40]">
                  <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0" />
                  <span className="text-[#F5F4EF]">
                    {language === 'ar' ? 'محرر أول في Dawam Medya منذ 2022' : 'Senior Editor at Dawam Medya since 2022'}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#17191F] border border-[#373A40]">
                  <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0" />
                  <span className="text-[#F5F4EF]">
                    {language === 'ar' ? 'إنتاج ومونتاج 50+ حلقة بودكاست' : '50+ Independent podcast episodes'}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#17191F] border border-[#373A40]">
                  <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0" />
                  <span className="text-[#F5F4EF]">
                    {language === 'ar' ? 'إخراج ومونتاج كليب حلم الميدان' : 'Helm El Meidan concept & direct'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
