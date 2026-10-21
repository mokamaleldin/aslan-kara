import React, { useState, useMemo } from 'react';
import { ExternalLink, Film, ArrowUpRight } from 'lucide-react';
import { Project, ProjectCategory } from '../../types';
import { projectsData } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { FeaturedProject } from './FeaturedProject';
import { PortfolioFilter } from './PortfolioFilter';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  onPlay: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  onPlay,
  onOpenDetails,
}) => {
  const { language, isRtl, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  // Featured project is Helm El Meidan
  const featuredProject = useMemo(() => {
    return projectsData.find((p) => p.id === 'helm-el-meidan') || projectsData[0];
  }, []);

  // Filter logic
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projectsData;
    }
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      all: projectsData.length,
      reports: 0,
      promos: 0,
      music_video: 0,
      podcasts: 0,
      videographics: 0,
    };

    projectsData.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  return (
    <section id="work" className="py-24 bg-[#101217] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D9FF43]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF43]">
              {language === 'ar' ? 'معرض الأعمال' : 'PORTFOLIO TIMELINE'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F5F4EF]">
            {t.portfolio.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A4A6AB] font-body max-w-2xl leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Featured Case Study Card: Helm El Meidan */}
        <FeaturedProject
          project={featuredProject}
          onPlay={onPlay}
          onOpenDetails={onOpenDetails}
        />

        {/* Category Filters */}
        <PortfolioFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={categoryCounts}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPlay={onPlay}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        {/* External Portfolio Gateways (Behance & Playlist) */}
        <div className="mt-16 pt-8 border-t border-[#373A40]/60 flex flex-wrap items-center justify-between gap-4">
          <a
            href="https://www.youtube.com/playlist?list=PLT6mqv0ccw4emVoq0xFIMX6CL1_pNebd_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D9FF43] hover:text-white transition-colors"
          >
            <span>{t.portfolio.allPromosCta}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="https://www.behance.net/aslan-kara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F5F4EF] hover:text-[#D9FF43] transition-colors"
          >
            <span>{t.portfolio.behanceCta}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
};
