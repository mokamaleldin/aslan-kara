import { editorialReports } from "./reports";

export type WorkCategory = "promos" | "reports" | "podcasts";
export interface PortfolioWork {
  id: string;
  title: { ar: string; en: string };
  role: { ar: string; en: string };
  category?: WorkCategory;
  image: string;
  url: string;
  youtubeId?: string;
  duration?: string;
  source: string;
}

export const featuredWork: PortfolioWork = {
  id: "helm-el-meidan",
  title: { ar: "حلم الميدان", en: "Helm El Meidan" },
  role: { ar: "الفكرة، الإخراج والمونتاج", en: "Concept, direction & editing" },
  image: "/images/work/helm.webp",
  url: "https://www.youtube.com/watch?v=EPi39RWqCAY",
  youtubeId: "EPi39RWqCAY",
  duration: "4:41",
  source: "YouTube",
};

const reports: PortfolioWork[] = editorialReports.map((report) => ({
  id: report.id,
  title: { ar: report.titleAr, en: report.titleEn },
  role: {
    ar: "مونتاج الفيديو المصاحب للتقرير المنشور على الجزيرة نت",
    en: "Video editing for the video featured in the Al Jazeera report",
  },
  category: "reports",
  image: report.localThumbnail,
  url: report.sourceUrl,
  source: "Al Jazeera Net",
}));

export const selectedWork: PortfolioWork[] = [
  {
    id: "egyptian-stories",
    title: {
      ar: "برومو حكايات مصرية 2023",
      en: "Egyptian Stories — 2023 promo",
    },
    role: { ar: "التنفيذ الإبداعي الكامل", en: "Full creative execution" },
    category: "promos",
    image: "/images/work/promo-stories.webp",
    url: "https://www.youtube.com/watch?v=liJwzq9g7PQ",
    youtubeId: "liJwzq9g7PQ",
    source: "YouTube",
  },
  reports[1],
  {
    id: "7anaalan-episode",
    title: {
      ar: "مفاتيح النجاة من الضغوط النفسية",
      en: "Finding a way through psychological stress",
    },
    role: {
      ar: "إنتاج ومونتاج بودكاست مستقل",
      en: "Independent podcast production & editing",
    },
    category: "podcasts",
    image: "/images/work/podcast.webp",
    url: "https://www.youtube.com/watch?v=X-H4PLqdGiE",
    youtubeId: "X-H4PLqdGiE",
    source: "7anaalan",
  },
  reports[2],
  {
    id: "post-eid",
    title: {
      ar: "برومو العودة بعد عيد الأضحى 2024",
      en: "Back after Eid — 2024 promo",
    },
    role: { ar: "التنفيذ الإبداعي الكامل", en: "Full creative execution" },
    category: "promos",
    image: "/images/work/promo-eid.webp",
    url: "https://www.youtube.com/watch?v=Rf1vc3q_fV4",
    youtubeId: "Rf1vc3q_fV4",
    source: "YouTube",
  },
  {
    id: "harvest",
    title: { ar: "برومو الحصاد 2022", en: "The Harvest — 2022 promo" },
    role: { ar: "التنفيذ الإبداعي الكامل", en: "Full creative execution" },
    category: "promos",
    image: "/images/work/promo-harvest.webp",
    url: "https://www.youtube.com/watch?v=1ZwoFwf3QGk",
    youtubeId: "1ZwoFwf3QGk",
    source: "YouTube",
  },
  reports[0],
  reports[3],
  reports[4],
];

export const links = {
  email: "abdalmonemkara052017@gmail.com",
  behance: "https://www.behance.net/aslan-kara",
  linkedin: "https://www.linkedin.com/in/aslan-kara-ba425519b",
  promos:
    "https://www.youtube.com/playlist?list=PLT6mqv0ccw4emVoq0xFIMX6CL1_pNebd_",
  podcast1: "https://www.youtube.com/@7analaan",
  podcast2: "https://www.youtube.com/@28_podcast",
};
