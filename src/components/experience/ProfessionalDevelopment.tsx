import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, GraduationCap, CheckCircle2, BookOpen } from 'lucide-react';
import { coursesData } from '../../data/courses';
import { useLanguage } from '../../context/LanguageContext';

export const ProfessionalDevelopment: React.FC = () => {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const aljazeeraCourses = coursesData.filter((c) => c.institution === 'aljazeera');
  const udemyCourses = coursesData.filter((c) => c.institution === 'udemy');
  const edraakCourses = coursesData.filter((c) => c.institution === 'edraak');

  // Initial highlight slice
  const displayedAljazeera = isExpanded ? aljazeeraCourses : aljazeeraCourses.slice(0, 6);

  return (
    <section className="py-24 bg-[#17191F] border-t border-[#373A40]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
              {t.courses.badge}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
                {t.courses.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl">
                {t.courses.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101217] border border-[#373A40] text-xs font-mono text-[#A4A6AB]">
              <Award className="w-4 h-4 text-[#D9FF43]" />
              <span>25 SPECIALIZED SUBJECTS</span>
            </div>
          </div>
        </div>

        {/* Section 1: Al Jazeera Media Institute (17 subjects) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#101217] border border-[#373A40] mb-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#373A40]/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#17191F] border border-[#373A40] flex items-center justify-center text-[#D9FF43]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#F5F4EF]">
                  {t.courses.aljazeeraSection}
                </h3>
                <p className="text-xs text-[#A4A6AB]">
                  {language === 'ar' ? 'جهة تدريب مهني معتمدة في الصحافة والتلفزيون' : 'Specialized Media & Broadcast Journalism Training'}
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-[#D9FF43] hidden sm:inline-block">
              {aljazeeraCourses.length} {language === 'ar' ? 'موضوع تدريبي' : 'Subjects'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedAljazeera.map((course) => (
              <div
                key={course.id}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#17191F] border border-[#373A40]/60 hover:border-[#D9FF43]/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F4EF]">
                  {language === 'ar' ? course.titleAr : course.titleEn}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#24272D] hover:bg-[#373A40] text-xs font-semibold text-[#F5F4EF] border border-[#373A40] transition-colors"
            >
              <span>{isExpanded ? t.courses.viewLessButton : t.courses.viewAllButton}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Section 2: Udemy & Edraak Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Udemy */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#101217] border border-[#373A40] space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-[#373A40]/60">
              <div className="w-9 h-9 rounded-xl bg-[#17191F] border border-[#373A40] flex items-center justify-center text-[#D9FF43]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#F5F4EF]">
                  {t.courses.udemySection}
                </h4>
                <p className="text-xs text-[#A4A6AB]">
                  {language === 'ar' ? 'مساقات احترافية في حزمة Adobe وتصحيح الألوان' : 'Adobe Masterclasses & Color Correction'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {udemyCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#17191F] border border-[#373A40]/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D9FF43] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#F5F4EF]">
                    {language === 'ar' ? course.titleAr : course.titleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Edraak */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#101217] border border-[#373A40] space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-[#373A40]/60">
              <div className="w-9 h-9 rounded-xl bg-[#17191F] border border-[#373A40] flex items-center justify-center text-[#FF6548]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#F5F4EF]">
                  {t.courses.edraakSection}
                </h4>
                <p className="text-xs text-[#A4A6AB]">
                  {language === 'ar' ? 'التفكير التصميمي والإنفوجرافيك المتحرك' : 'Design Thinking & Motion Infographics'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {edraakCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#17191F] border border-[#373A40]/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF6548] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#F5F4EF]">
                    {language === 'ar' ? course.titleAr : course.titleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
