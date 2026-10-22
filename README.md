# Aslan Kara — portfolio

A compact Arabic/English portfolio built with React, TypeScript and Vite.

```sh
npm ci
npm run dev
```

`npm run build` checks TypeScript and creates the production site in `dist/`.
Vercel uses the Vite preset, `npm run build`, and the `dist` output directory.
No secrets or environment variables are required.

## Editing content

- `src/data/copy.ts`: Arabic and English interface copy.
- `src/data/portfolio.ts`: featured film and selected projects.
- `src/data/reports.ts`: original publication links and report images.
- `src/data/courses.ts`: professional development, collapsed by default.
- `public/cv/`: the supplied Arabic and English CV PDFs.
- `public/images/work/`: optimized stills from the actual linked videos.

The homepage shows four selected projects. Category filters show their full
collection; “View more work” opens the full archive. The main film appears only
once. Videos load in a native accessible dialog after a visitor clicks play;
original-source links remain available. Reports open the original publication
and credit video editing only. Contact links open the visitor’s email or phone
app. There is no contact delivery backend or simulated success form.

Language is selected with `?lang=ar` or `?lang=en`, with RTL/LTR layout and optional
local preference persistence. `/ar` and `/en` are supported by the Vite SPA
fallback. Keep the canonical/alternate links, sitemap and robots file in sync
with the public domain if it changes.

Thumbnails and video titles were checked against YouTube oEmbed on 22 October
2026. Dates and durations are shown only where supplied or confirmed. Source
credits and career figures follow the supplied brief; podcast projects are
independent, and the Al Jazeera report links are not employment claims.
