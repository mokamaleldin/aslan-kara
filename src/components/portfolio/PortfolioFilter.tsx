import React from 'react';
import { ProjectCategory } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface PortfolioFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  const { t } = useLanguage();

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.portfolio.filters.all },
    { id: 'reports', label: t.portfolio.filters.reports },
    { id: 'promos', label: t.portfolio.filters.promos },
    { id: 'music_video', label: t.portfolio.filters.music_video },
    { id: 'podcasts', label: t.portfolio.filters.podcasts },
    { id: 'videographics', label: t.portfolio.filters.videographics },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-[#373A40]/50 mb-10">
      {filterTabs.map((tab) => {
        const isActive = activeCategory === tab.id;
        const count = counts[tab.id] || 0;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectCategory(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-xl transition-all whitespace-nowrap flex-shrink-0 ${
              isActive
                ? 'bg-[#D9FF43] text-[#101217] font-bold shadow-md shadow-[#D9FF43]/15'
                : 'bg-[#17191F] text-[#A4A6AB] hover:text-[#F5F4EF] hover:bg-[#24272D] border border-[#373A40]'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-[#101217]/20 text-[#101217]' : 'bg-[#24272D] text-[#A4A6AB]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
