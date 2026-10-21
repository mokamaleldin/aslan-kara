import React from 'react';
import { Cpu, Layers, Sparkles, CheckCircle2, Film, Sliders, Palette, Music } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ToolsArsenal: React.FC = () => {
  const { language, t } = useLanguage();

  const toolCategories = [
    {
      roleAr: 'المونتاج والقطع الرئيسي',
      roleEn: 'Core Editing & Timeline Assembly',
      icon: Film,
      software: [
        { name: 'Adobe Premiere Pro', code: 'Pr', descAr: 'المونتاج التلفزيوني الاحترافي والقطع متعدد الكاميرات', descEn: 'Broadcast timeline assembly, multi-camera switching & mastering' },
      ]
    },
    {
      roleAr: 'الموشن جرافيك والمؤثرات',
      roleEn: 'Motion Graphics & Compositing',
      icon: Layers,
      software: [
        { name: 'Adobe After Effects', code: 'Ae', descAr: 'الفيديو جراف، العناوين المتحركة، والمؤثرات البصرية', descEn: 'Data-driven videographics, kinetic typography & visual effects' },
      ]
    },
    {
      roleAr: 'الهندسة الصوتية والمكساج',
      roleEn: 'Audio Post-Production',
      icon: Music,
      software: [
        { name: 'Adobe Audition', code: 'Au', descAr: 'تنقية الصوت، إزالة الضوضاء، وضبط معايير البث', descEn: 'Spectral noise suppression, dynamic EQ & broadcast loudness' },
      ]
    },
    {
      roleAr: 'التصميم ومعالجة الألوان',
      roleEn: 'Visual Design & Color Finishing',
      icon: Palette,
      software: [
        { name: 'Adobe Photoshop', code: 'Ps', descAr: 'تصميم البوسترات ومعالجة الصور التحريرية', descEn: 'Key art, editorial thumbnail design & image retouching' },
        { name: 'Adobe Illustrator', code: 'Ai', descAr: 'تصميم الشعارات والعناصر المتجهة للفيديو جراف', descEn: 'Vector assets for animated videographics' },
        { name: 'Adobe Lightroom', code: 'Lr', descAr: 'المعالجة المتقدمة للألوان والتباين', descEn: 'Color correction & tonal curve balancing' },
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#101217] border-t border-[#373A40]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
              {t.tools.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
            {t.tools.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl">
            {t.tools.subtitle}
          </p>
        </div>

        {/* Software Suite Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {toolCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#17191F] border border-[#373A40] flex flex-col justify-between space-y-6 hover:border-[#D9FF43]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D9FF43] mb-4">
                    <Icon className="w-4 h-4" />
                    <span>{language === 'ar' ? cat.roleAr : cat.roleEn}</span>
                  </div>

                  <div className="space-y-4">
                    {cat.software.map((sw, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="flex items-center justify-center w-7 h-7 rounded bg-[#101217] border border-[#373A40] font-mono font-bold text-xs text-[#D9FF43]">
                            {sw.code}
                          </span>
                          <span className="font-heading font-bold text-sm text-[#F5F4EF]">
                            {sw.name}
                          </span>
                        </div>
                        <p className="text-xs text-[#A4A6AB] font-body pl-9 rtl:pr-9 rtl:pl-0 leading-relaxed">
                          {language === 'ar' ? sw.descAr : sw.descEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#373A40]/60 text-[10px] font-mono text-[#A4A6AB]">
                  PROFESSIONAL MASTERY
                </div>
              </div>
            );
          })}
        </div>

        {/* AI & Broadcast Workflows Integration Card */}
        <div className="p-8 rounded-3xl bg-[#17191F] border border-[#373A40] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#D9FF43]" />
                <span className="text-xs font-mono text-[#D9FF43] uppercase tracking-wider">
                  {language === 'ar' ? 'سير العمل المتطور والذكاء الاصطناعي' : 'AI-ASSISTED CREATIVE WORKFLOWS'}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#F5F4EF]">
                {t.tools.workflowsLabel}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#A4A6AB] px-3 py-1.5 rounded-lg bg-[#101217] border border-[#373A40]">
              BROADCAST STANDARDS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.tools.workflows.map((wf, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#101217] border border-[#373A40]/70"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F4EF] leading-snug">
                  {wf}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
