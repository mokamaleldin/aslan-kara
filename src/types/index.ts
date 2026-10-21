export type Language = 'ar' | 'en';

export type ProjectCategory = 
  | 'all' 
  | 'reports' 
  | 'promos' 
  | 'music_video' 
  | 'podcasts' 
  | 'videographics';

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  category: ProjectCategory;
  rolesAr: string[];
  rolesEn: string[];
  descriptionAr: string;
  descriptionEn: string;
  year?: string;
  duration?: string;
  videoUrl?: string;
  youtubeId?: string;
  externalUrl?: string;
  thumbnail: string;
  isFeatured?: boolean;
  sourcePlatform?: string;
  contextAr?: string;
  contextEn?: string;
}

export interface EditorialReport {
  id: string;
  titleAr: string;
  titleEn: string;
  publishDate: string;
  dateFormattedAr: string;
  dateFormattedEn: string;
  source: string;
  sourceUrl: string;
  localThumbnail: string;
  remoteThumbnail: string;
  descriptionAr: string;
  descriptionEn: string;
  roleAr: string;
  roleEn: string;
}

export interface PodcastChannel {
  id: string;
  nameAr: string;
  nameEn: string;
  handle: string;
  channelUrl: string;
  featuredEpisode?: {
    id: string;
    youtubeId: string;
    titleAr: string;
    titleEn: string;
    guestAr?: string;
    guestEn?: string;
    url: string;
  };
  descriptionAr: string;
  descriptionEn: string;
  thumbnail: string;
  responsibilitiesAr: string[];
  responsibilitiesEn: string[];
}

export interface CareerMilestone {
  id: string;
  periodAr: string;
  periodEn: string;
  titleAr: string;
  titleEn: string;
  organizationAr: string;
  organizationEn: string;
  type: 'employment' | 'broadcast' | 'independent';
  isCurrent?: boolean;
  descriptionAr: string;
  descriptionEn: string;
  responsibilitiesAr: string[];
  responsibilitiesEn: string[];
  achievementsAr: string[];
  achievementsEn: string[];
}

export interface Course {
  id: number;
  institution: 'aljazeera' | 'udemy' | 'edraak';
  institutionAr: string;
  institutionEn: string;
  titleAr: string;
  titleEn: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
}
