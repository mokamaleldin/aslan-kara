import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Hero } from './components/hero/Hero';
import { AchievementsCounter } from './components/about/AchievementsCounter';
import { PortfolioGrid } from './components/portfolio/PortfolioGrid';
import { EditorialReportsSection } from './components/reports/EditorialReportsSection';
import { PromoReelSection } from './components/promos/PromoReelSection';
import { PodcastSection } from './components/podcast/PodcastSection';
import { AboutSection } from './components/about/AboutSection';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { ExpertiseServices } from './components/experience/ExpertiseServices';
import { ToolsArsenal } from './components/experience/ToolsArsenal';
import { ProfessionalDevelopment } from './components/experience/ProfessionalDevelopment';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { VideoModal } from './components/video/VideoModal';
import { ProjectDetailModal } from './components/portfolio/ProjectDetailModal';
import { Project } from './types';
import { projectsData } from './data/projects';

const MainContent: React.FC = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Video Modal State
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{
    youtubeId?: string;
    title: string;
    role?: string;
    runtime?: string;
    videoUrl?: string;
  }>({
    title: '',
  });

  // Project Detail Modal State
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Play handler
  const handlePlayProject = (project: Project) => {
    setActiveVideo({
      youtubeId: project.youtubeId,
      title: language === 'ar' ? project.titleAr : project.titleEn,
      role: language === 'ar' ? project.rolesAr.join(' • ') : project.rolesEn.join(' • '),
      runtime: project.duration,
      videoUrl: project.videoUrl || project.externalUrl,
    });
    setIsVideoModalOpen(true);
  };

  // Quick showreel / Helm El Meidan trigger from Hero
  const handlePlayShowreel = () => {
    const helmProject = projectsData.find((p) => p.id === 'helm-el-meidan') || projectsData[0];
    handlePlayProject(helmProject);
  };

  // Open Details handler
  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#101217] text-[#F5F4EF] flex flex-col film-grain selection:bg-[#D9FF43] selection:text-[#101217]">
      {/* Sticky Navigation */}
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

      {/* Fullscreen Mobile Editorial Index Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1">
        {/* 01. Cinematic Hero */}
        <Hero onPlayShowreel={handlePlayShowreel} />

        {/* 02. Career Highlights in Numbers (Lifetime vs Dawam Medya) */}
        <AchievementsCounter />

        {/* 03. Selected Work & Portfolio (Includes Helm El Meidan Feature & Filters) */}
        <PortfolioGrid
          onPlay={handlePlayProject}
          onOpenDetails={handleOpenDetails}
        />

        {/* 04. Al Jazeera Editorial Reports Showcase */}
        <EditorialReportsSection />

        {/* 05. Promos & Trailers Reel */}
        <PromoReelSection
          onPlay={handlePlayProject}
          onOpenDetails={handleOpenDetails}
        />

        {/* 06. Independent Podcast Production Showcase */}
        <PodcastSection onPlayEpisode={handlePlayProject} />

        {/* 07. About Aslan & First-Person Philosophy */}
        <AboutSection />

        {/* 08. Experience Timeline */}
        <ExperienceTimeline />

        {/* 09. Areas of Expertise & Services */}
        <ExpertiseServices />

        {/* 10. Tools & Technical Arsenal */}
        <ToolsArsenal />

        {/* 11. Professional Development (25 Certified Subjects) */}
        <ProfessionalDevelopment />

        {/* 12. Contact & Project Inquiries */}
        <ContactSection />
      </main>

      {/* 13. Editorial Footer */}
      <Footer />

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        youtubeId={activeVideo.youtubeId}
        title={activeVideo.title}
        role={activeVideo.role}
        runtime={activeVideo.runtime}
        videoUrl={activeVideo.videoUrl}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isDetailModalOpen}
        project={selectedProject}
        onClose={() => setIsDetailModalOpen(false)}
        onPlay={handlePlayProject}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
