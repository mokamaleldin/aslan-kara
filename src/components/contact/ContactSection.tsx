import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Send, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const email = 'abdalmonemkara052017@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    // Construct prefilled mailto so the inquiry opens in user's default email client
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType || 'Video Editing'} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#101217] relative border-t border-[#373A40]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6548] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF6548]">
                  {t.contact.badge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F4EF]">
                {t.contact.title}
              </h2>

              <p className="text-sm sm:text-base text-[#A4A6AB] font-body leading-relaxed max-w-lg">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* Email Card with One-Click Copy */}
              <div className="p-5 rounded-2xl bg-[#17191F] border border-[#373A40] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-[#D9FF43]/50 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#101217] border border-[#373A40] flex items-center justify-center text-[#D9FF43]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A4A6AB] uppercase tracking-wider block">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="font-mono text-sm sm:text-base text-[#F5F4EF] hover:text-[#D9FF43] transition-colors"
                      dir="ltr"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#24272D] hover:bg-[#373A40] text-xs font-mono text-[#F5F4EF] transition-colors border border-[#373A40] flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D9FF43]" />
                      <span className="text-[#D9FF43]">{t.contact.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A4A6AB]" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Numbers Grid (Qatar & Turkey) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Qatar Phone */}
                <a
                  href="tel:+97433477508"
                  className="p-5 rounded-2xl bg-[#17191F] border border-[#373A40] hover:border-[#D9FF43]/50 transition-colors group flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#101217] border border-[#373A40] flex items-center justify-center text-[#FF6548]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A4A6AB] uppercase tracking-wider block">
                      {t.contact.phoneQatar}
                    </span>
                    <span className="font-mono text-sm text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors" dir="ltr">
                      +974 3347 7508
                    </span>
                  </div>
                </a>

                {/* Turkey Phone */}
                <a
                  href="tel:+905428209492"
                  className="p-5 rounded-2xl bg-[#17191F] border border-[#373A40] hover:border-[#D9FF43]/50 transition-colors group flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#101217] border border-[#373A40] flex items-center justify-center text-[#FF6548]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A4A6AB] uppercase tracking-wider block">
                      {t.contact.phoneTurkey}
                    </span>
                    <span className="font-mono text-sm text-[#F5F4EF] group-hover:text-[#D9FF43] transition-colors" dir="ltr">
                      +90 542 820 9492
                    </span>
                  </div>
                </a>
              </div>

              {/* Geographic Locations */}
              <div className="p-4 rounded-xl bg-[#17191F]/60 border border-[#373A40] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#D9FF43] flex-shrink-0" />
                <div className="text-xs font-mono text-[#A4A6AB]">
                  <span className="text-[#F5F4EF] font-semibold">{t.contact.locations}</span>
                  <span className="mx-2">•</span>
                  <span>{language === 'ar' ? 'متاح للمشروعات عن بُعد وحضورياً' : 'Remote & On-Site Availability'}</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.behance.net/aslan-kara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#17191F] border border-[#373A40] text-xs font-mono text-[#F5F4EF] hover:border-[#D9FF43] hover:text-[#D9FF43] transition-colors"
                >
                  <span>{t.contact.behanceLabel}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>

                <a
                  href="https://www.linkedin.com/in/aslan-kara-ba425519b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#17191F] border border-[#373A40] text-xs font-mono text-[#F5F4EF] hover:border-[#D9FF43] hover:text-[#D9FF43] transition-colors"
                >
                  <span>{t.contact.linkedinLabel}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Project Inquiry Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#17191F] border border-[#373A40] shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F4EF]">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-[#A4A6AB]">
                  {language === 'ar'
                    ? 'سيتم توجيه رسالتك مباشرة لبريد أسلان كارا لبدء المناقشة.'
                    : 'Your inquiry opens directly with pre-structured details.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#101217] border border-[#D9FF43]/40 text-center space-y-3 animate-in fade-in">
                  <Check className="w-10 h-10 text-[#D9FF43] mx-auto" />
                  <p className="text-sm font-semibold text-[#F5F4EF]">
                    {t.contact.sentSuccess}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#A4A6AB] hover:text-[#D9FF43] underline underline-offset-4"
                  >
                    {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-[#A4A6AB] block mb-1.5">
                      {language === 'ar' ? 'الاسم أو جهة الإنتاج' : 'Name / Studio'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#101217] border border-[#373A40] text-sm text-[#F5F4EF] placeholder-[#A4A6AB]/50 focus:border-[#D9FF43] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-[#A4A6AB] block mb-1.5">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Your Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#101217] border border-[#373A40] text-sm text-[#F5F4EF] placeholder-[#A4A6AB]/50 focus:border-[#D9FF43] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-[#A4A6AB] block mb-1.5">
                      {language === 'ar' ? 'نوع المشروع' : 'Project Category'}
                    </label>
                    <input
                      type="text"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      placeholder={t.contact.projectTypePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#101217] border border-[#373A40] text-sm text-[#F5F4EF] placeholder-[#A4A6AB]/50 focus:border-[#D9FF43] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-[#A4A6AB] block mb-1.5">
                      {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details & Vision'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#101217] border border-[#373A40] text-sm text-[#F5F4EF] placeholder-[#A4A6AB]/50 focus:border-[#D9FF43] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D9FF43] hover:bg-white text-[#101217] font-semibold text-sm rounded-xl transition-all shadow-lg active:scale-95"
                  >
                    <span>{t.contact.sendButton}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
