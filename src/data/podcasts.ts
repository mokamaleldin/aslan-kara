import { PodcastChannel } from '../types';

export const podcastChannels: PodcastChannel[] = [
  {
    id: '7anaalan',
    nameAr: 'بودكاست حان الآن',
    nameEn: '7anaalan Podcast',
    handle: '@7analaan',
    channelUrl: 'https://www.youtube.com/@7analaan',
    thumbnail: 'https://img.youtube.com/vi/X-H4PLqdGiE/hqdefault.jpg',
    descriptionAr: 'منصة حوارية مستقلة تركز على القضايا الفكرية والنفسية والاجتماعية المعاصرة من خلال استضافة نخبة من المتخصصين.',
    descriptionEn: 'Independent conversational podcast exploring contemporary intellectual, psychological, and social perspectives with leading experts.',
    featuredEpisode: {
      id: 'ep-khaled-haddad',
      youtubeId: 'X-H4PLqdGiE',
      titleAr: 'مفاتيح النجاة من الضغوط النفسية! | بودكاست حان الآن مع الدكتور خالد الحداد',
      titleEn: 'Keys to Surviving Psychological Stress | 7analaan Podcast with Dr. Khaled El-Haddad',
      guestAr: 'د. خالد الحداد',
      guestEn: 'Dr. Khaled El-Haddad',
      url: 'https://youtu.be/X-H4PLqdGiE'
    },
    responsibilitiesAr: [
      'تجهيز الاستوديو وتنسيق الزوايا وتوزيع الكاميرات',
      'الإشراف العملي على الإخراج البصري أثناء التسجيل',
      'المونتاج الكامل والقطع الإيقاعي المتعدد (Multi-cam Editing)',
      'معالجة وتنقية الصوت (Spectral Noise Reduction & Master EQ)',
      'تصحيح الألوان وضبط الهوية المرئية لكل حلقة',
      'إعداد البروموهات ومقاطع الـ Shorts والـ Reels للنشر الرقمي'
    ],
    responsibilitiesEn: [
      'Studio setup, lighting calibration, and multi-camera choreography',
      'Hands-on visual and technical direction during live recording',
      'Multi-camera dynamic cutting calibrated to conversation rhythm',
      'Spectral noise suppression, dynamic EQ, and broadcast mastering',
      'Color grading ensuring chromatic consistency across all sensor profiles',
      'Production of episodic promos, teasers, and vertical social shorts'
    ]
  },
  {
    id: '28_podcast',
    nameAr: 'بودكاست 28',
    nameEn: '28 Podcast',
    handle: '@28_podcast',
    channelUrl: 'https://www.youtube.com/@28_podcast',
    thumbnail: 'https://img.youtube.com/vi/liJwzq9g7PQ/hqdefault.jpg',
    descriptionAr: 'سلسلة بودكاست مستقلة تطرح حوارات نوعية في مجالات الإنسانيات، وتجارب الحياة، والثقافة الرقمية.',
    descriptionEn: 'An independent podcast series examining human experiences, cultural dialogues, and digital culture through focused discussions.',
    responsibilitiesAr: [
      'تنسيق المتطلبات الفنية للتصوير الداخلي وتجهيز المعدات',
      'المونتاج التحريري للحلقات وبناء المسار الحواري المتماسك',
      'مكساج الصوت ومطابقة المعايير التلفزيونية والرقمية',
      'تجهيز النسخ الصالحة للنشر على YouTube والمنصات الصوتية'
    ],
    responsibilitiesEn: [
      'Technical coordination for studio gear and recording ergonomics',
      'Editorial episode assembly and conversational narrative pacing',
      'Loudness normalization for YouTube and podcast distribution networks',
      'Final mastering and packaging for multi-platform delivery'
    ]
  }
];

export const podcastOverview = {
  totalEpisodes: '50+',
  totalEpisodesTextAr: 'أكثر من 50 حلقة بودكاست مستقلة',
  totalEpisodesTextEn: '50+ Independent Podcast Episodes Produced & Edited',
  natureNoteAr: 'مشروعات مستقلة تم إنجازها بالتوازي مع المسيرة المهنية؛ تبرز القدرة على إدارة العمليات من الاستوديو إلى البث.',
  natureNoteEn: 'Independent productions executed in parallel with broadcast commitments, demonstrating complete full-stack studio capabilities.'
};
