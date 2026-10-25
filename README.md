# Aslan Kara — professional portfolio

Bilingual portfolio built with React, TypeScript and Vite. Arabic uses formal
copy, with “Aslan Kara” and “Senior Video Editor” in English in both locales. The
visual identity uses deep violet (#1F0062) and warm ivory (#F9ECE5). Cairo variable fonts
are self-hosted, including Arabic and Latin subsets.

```sh
npm ci
npm run dev
npm run build
```

Vercel uses the Vite preset and `dist` output. No secrets are needed.

## Pages

- `/ar`, `/en`: professional profile, selected work, career, expertise, tools,
  training and direct contact.
- `/ar/work`, `/en/work`: the complete project archive with category filters
  and Arabic/English search.
- `/ar/work/:project`, `/en/work/:project`: individual project details,
  contribution, duration/date where verified, media preview and source links.

Legacy `/`, `/work`, `/work/:project`, and `?lang=` links remain supported.
Language switching preserves the current project, filters and search. Native
links preserve normal browser navigation and open-in-new-tab behavior.

## Content

- `src/data/copy.ts`: localized interface and professional copy.
- `src/data/portfolio.ts`: project models, collections and ordering.
- `src/data/promos.json`: verified playlist IDs, normalized display titles,
  original source titles and runtimes.
- `src/data/reports.ts`: report sources and publication dates.
- `src/data/courses.ts`: the supplied training topics.
- `public/images/`: authentic portfolio images.
- `public/fonts/`: Cairo font subsets and OFL license.
- `public/cv/`: the supplied CV PDFs with the current contact email and mailto links.

The public portfolio contains 28 distinct projects and collections: 17 videos
from the supplied playlist, 5 Al Jazeera Net reports, 4 Behance collections and
2 independent podcast projects. The music video is available in the archive,
not featured on the homepage. All cards open project detail pages; video
players load only after the visitor requests playback. Large image-led cards keep
titles and credits outside the image. The archive progressively reveals projects
in batches, and filtering or searching resets the visible batch.

The contact email is `aslankaraproduction@gmail.com`. The software section includes
DaVinci Resolve and its Fairlight audio tools alongside the Adobe applications.

## Attribution and verified facts

The professional chronology was supplied by the client: Ragab Media
2017–2021, MK+ 2021–2022, Dawam Medya 2022–present, with independent work
listed separately. Career figures and podcast scope follow the supplied brief.
Al Jazeera Net report credits refer to editing the accompanying video, not
article authorship or employment. Al Jazeera Media Institute is shown as a
training provider only.

On 22 October 2026 the original YouTube playlist supplied all 17 video IDs,
titles and runtimes. The public Behance profile supplied the four collection
titles, covers and URLs. Behance collection detail media
remain available at their original source; the site does not fabricate embeds.
Podcast 28 uses its public channel identity. Original video thumbnails
are stored locally; only public metadata and media assets
were retained, without cookies or visitor information.

Keep `public/sitemap.xml` synchronized when adding project IDs. The sitemap
currently includes all 60 localized home/archive/project routes.
