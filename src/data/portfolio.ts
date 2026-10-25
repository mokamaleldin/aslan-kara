import { editorialReports } from "./reports";
import promos from "./promos.json";

export type LocalizedText = { ar: string; en: string };
export type WorkCategory =
  | "reports"
  | "promos"
  | "podcasts"
  | "motion"
  | "idents"
  | "films"
  | "videography";
export interface PortfolioWork {
  id: string;
  title: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  contributions: { ar: string[]; en: string[] };
  category: WorkCategory;
  image: string;
  url: string;
  source: string;
  youtubeId?: string;
  duration?: string;
  published?: string;
  collection?: boolean;
  imageContain?: boolean;
  videoTitle?: LocalizedText;
}

export const links = {
  email: "aslankaraproduction@gmail.com",
  behance: "https://www.behance.net/aslan-kara",
  linkedin: "https://www.linkedin.com/in/aslan-kara-ba425519b",
  promos:
    "https://www.youtube.com/playlist?list=PLT6mqv0ccw4emVoq0xFIMX6CL1_pNebd_",
  podcast1: "https://www.youtube.com/@7analaan",
  podcast2: "https://www.youtube.com/@28_podcast",
};

const promotionalWork: PortfolioWork[] = promos.map((entry) => {
  const music = entry.id === "EPi39RWqCAY";
  return {
    id: music ? "helm-el-meidan" : `promo-${entry.id}`,
    title: entry.title,
    role: music
      ? { ar: "الفكرة والإخراج والمونتاج", en: "Concept, direction & editing" }
      : {
          ar: "التنفيذ الإبداعي والمونتاج",
          en: "Creative execution & editing",
        },
    description: music
      ? {
          ar: "فيديو كليب «حلم الميدان». توليت تطوير الفكرة وإخراج المشروع ومونتاج النسخة النهائية.",
          en: "A music video for which I developed the concept, directed the project and completed the final edit.",
        }
      : {
          ar: "عمل تلفزيوني منشور ضمن مجموعة البروموهات والفواصل. توليت التنفيذ الإبداعي والمونتاج حتى إعداد النسخة النهائية.",
          en: "A broadcast piece from the supplied promos and idents collection. My work covered creative execution and editing through the final version.",
        },
    contributions: music
      ? {
          ar: ["تطوير الفكرة", "الإخراج", "المونتاج"],
          en: ["Concept development", "Direction", "Video editing"],
        }
      : {
          ar: [
            "التنفيذ الإبداعي للقطعة الترويجية",
            "المونتاج وإعداد النسخة النهائية",
          ],
          en: [
            "Creative execution of the promotional piece",
            "Editing and final version preparation",
          ],
        },
    category: music
      ? "films"
      : entry.id === "IIbwNL6QH_M"
        ? "idents"
        : "promos",
    image: entry.image,
    url: `https://www.youtube.com/watch?v=${entry.id}`,
    youtubeId: entry.id,
    duration: entry.duration,
    source: "YouTube",
  };
});

const reports: PortfolioWork[] = editorialReports.map((report) => ({
  id: report.id,
  title: { ar: report.titleAr, en: report.titleEn },
  role: { ar: "مونتاج الفيديو", en: "Video editing" },
  description: { ar: report.descriptionAr, en: report.descriptionEn },
  contributions: {
    ar: ["مونتاج الفيديو المصاحب للتقرير المنشور على الجزيرة نت"],
    en: ["Editing the video featured in the Al Jazeera Net report"],
  },
  category: "reports",
  image: report.localThumbnail,
  url: report.sourceUrl,
  source: "Al Jazeera Net",
  published: report.publishDate,
}));

const collections: PortfolioWork[] = [
  {
    id: "motion-graphics",
    title: { ar: "أعمال الموشن جرافيك", en: "Motion graphics" },
    category: "motion",
    role: { ar: "الموشن جرافيك", en: "Motion graphics" },
    description: {
      ar: "مجموعة أعمال الموشن جرافيك المنشورة في ملفي المهني على Behance.",
      en: "A motion graphics collection published on my Behance portfolio.",
    },
    contributions: {
      ar: ["أعمال الموشن جرافيك ضمن الملف المهني"],
      en: ["Motion graphics work in the portfolio collection"],
    },
    image: "/images/work/behance-motion.webp",
    url: "https://www.behance.net/gallery/143796527/motion-graphics",
    source: "Behance",
    collection: true,
  },
  {
    id: "videography",
    title: { ar: "التصوير والإنتاج المرئي", en: "Videography" },
    category: "videography",
    role: { ar: "أعمال التصوير والإنتاج المرئي", en: "Videography portfolio" },
    description: {
      ar: "مجموعة التصوير والإنتاج المرئي المنشورة ضمن أعمالي على Behance.",
      en: "The videography collection published on my Behance portfolio.",
    },
    contributions: {
      ar: ["أعمال التصوير والإنتاج المرئي ضمن المجموعة"],
      en: ["Videography work presented in the collection"],
    },
    image: "/images/work/behance-videography.webp",
    url: "https://www.behance.net/gallery/143793399/VIDEOGRAPHY",
    source: "Behance",
    collection: true,
  },
  {
    id: "broadcast-stings",
    title: { ar: "الفواصل والهوية المرئية", en: "Broadcast stings" },
    category: "idents",
    role: { ar: "الفواصل المرئية", en: "Broadcast stings" },
    description: {
      ar: "مجموعة الفواصل المرئية المنشورة في معرض أعمالي على Behance.",
      en: "A collection of broadcast stings published on my Behance portfolio.",
    },
    contributions: {
      ar: ["أعمال الفواصل المرئية ضمن المجموعة"],
      en: ["Sting work presented in the collection"],
    },
    image: "/images/work/behance-sting.webp",
    url: "https://www.behance.net/gallery/143773371/sting",
    source: "Behance",
    collection: true,
  },
  {
    id: "promos-collection",
    title: {
      ar: "مجموعة الأعمال الترويجية",
      en: "Promotional work collection",
    },
    category: "promos",
    role: { ar: "الأعمال الترويجية", en: "Promotional work" },
    description: {
      ar: "مجموعة البروموهات المنشورة في ملفي المهني على Behance، إلى جانب الأعمال المتاحة في معرض الفيديو.",
      en: "The promos collection on my Behance portfolio, alongside the individual works in the video archive.",
    },
    contributions: {
      ar: ["الأعمال الترويجية المعروضة في المجموعة"],
      en: ["Promotional pieces presented in the collection"],
    },
    image: "/images/work/behance-promos.webp",
    url: "https://www.behance.net/gallery/143773373/promos",
    source: "Behance",
    collection: true,
  },
  {
    id: "7anaalan-podcast",
    title: { ar: "بودكاست حان الآن", en: "7anaalan Podcast" },
    category: "podcasts",
    role: {
      ar: "إنتاج ومونتاج بودكاست مستقل",
      en: "Independent podcast production & editing",
    },
    description: {
      ar: "مشروع بودكاست مستقل شمل العمل على الإنتاج التقني وتنسيق الاستوديو ومونتاج الصورة والصوت وإعداد مواد النشر. تتوفر هنا حلقة مختارة مع الدكتور خالد الحداد.",
      en: "An independent podcast project involving technical production, studio coordination, picture and audio editing, and publishing deliverables. A selected episode with Dr. Khaled El-Haddad is available here.",
    },
    contributions: {
      ar: [
        "تجهيز الاستوديو والتنسيق التقني",
        "مونتاج الصورة ومعالجة الصوت",
        "إعداد البروموهات والمقاطع القصيرة",
      ],
      en: [
        "Studio preparation and technical coordination",
        "Picture editing and audio processing",
        "Promos and short-form deliverables",
      ],
    },
    image: "/images/work/podcast.webp",
    url: links.podcast1,
    source: "YouTube",
    collection: true,
    youtubeId: "X-H4PLqdGiE",
    videoTitle: {
      ar: "مفاتيح النجاة من الضغوط النفسية — د. خالد الحداد",
      en: "Finding a way through psychological stress — Dr. Khaled El-Haddad",
    },
  },
  {
    id: "28-podcast",
    title: { ar: "بودكاست 28", en: "28 Podcast" },
    category: "podcasts",
    role: {
      ar: "إنتاج ومونتاج بودكاست مستقل",
      en: "Independent podcast production & editing",
    },
    description: {
      ar: "أحد مشروعات البودكاست المستقلة التي عملت عليها ضمن خبرتي في الإنتاج والمونتاج. يمكن استعراض الحلقات من خلال القناة الأصلية.",
      en: "An independent podcast project within my production and editing experience. The original channel provides access to the episode collection.",
    },
    contributions: {
      ar: ["إنتاج ومونتاج البودكاست ضمن المشروعات المستقلة"],
      en: ["Podcast production and editing within independent projects"],
    },
    image: "/images/work/podcast-28.webp",
    imageContain: true,
    url: links.podcast2,
    source: "YouTube",
    collection: true,
  },
];

const allWork = [...reports, ...promotionalWork, ...collections];
const openingIds = [
  "report-fish-market",
  "promo-liJwzq9g7PQ",
  "motion-graphics",
  "7anaalan-podcast",
  "promo-1ZwoFwf3QGk",
  "report-papyrus",
  "videography",
  "promo-TnSnkp58Cmk",
];
export const projects: PortfolioWork[] = [
  ...openingIds.map((id) => allWork.find((work) => work.id === id)!),
  ...allWork.filter((work) => !openingIds.includes(work.id)),
];
export const homeSelectedWork = projects.filter((work) =>
  [
    "report-fish-market",
    "promo-liJwzq9g7PQ",
    "motion-graphics",
    "7anaalan-podcast",
  ].includes(work.id),
);
export const categories: Array<WorkCategory | "all"> = [
  "all",
  "reports",
  "promos",
  "podcasts",
  "motion",
  "idents",
  "videography",
  "films",
];
