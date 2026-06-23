# Personal Portfolio — Senior / Staff Engineer

A fast, accessible, single-page CV / accomplishments site built with **Astro 7** +
**Tailwind v4**, deployed free on **GitHub Pages**. Ships almost no JavaScript, so
it scores near-perfect on Lighthouse and loads instantly.

```
src/
├── data/
│   ├── site.ts        ← name, role, tagline, socials, hero stats  (EDIT FIRST)
│   └── resume.ts      ← experience, open source, projects, skills, education (EDIT)
├── layouts/Layout.astro   ← <head>, SEO/OG tags, fonts, JSON-LD
├── components/            ← one file per section (Hero, Experience, …)
└── pages/
    ├── index.astro        ← assembles the sections
    └── 404.astro
```

## ✍️ Customize (the only files you need to touch)

1. **`src/data/site.ts`** — your name, role, tagline, email, social links, hero stats.
2. **`src/data/resume.ts`** — experience, open-source work, projects, skills, writing,
   education, certs. Each is a plain array; delete entries or empty an array to hide a section.
3. **`astro.config.mjs`** — set `site:` to your final URL (see deploy step 2).
4. Optional: drop `public/resume.pdf` to enable the "Résumé" buttons, and
   `public/og.png` (1200×630) for nice link previews.

Search the repo for `USERNAME` and replace every occurrence with your GitHub username.

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Local dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the built site locally               |

## 🚀 Deploy to GitHub Pages (free)

A workflow is already included at `.github/workflows/deploy.yml`. It builds and
deploys automatically on every push to `main`.

**1. Create the repo.** The simplest, prettiest URL comes from a *user page*:

   - Name the repo **`<your-username>.github.io`** → site serves at
     `https://<your-username>.github.io` (no `base` config needed).
   - Any other repo name works too, but it's a *project page* served at
     `https://<your-username>.github.io/<repo>` — in that case uncomment and set
     `base: '/<repo>'` in `astro.config.mjs`.

**2. Set your URL** in `astro.config.mjs` (`site:`), `src/data/site.ts` (`url`),
   and `public/robots.txt`.

**3. Push:**

   ```sh
   git init
   git add -A
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

**4. Enable Pages:** Repo → **Settings → Pages → Build and deployment →
   Source: GitHub Actions**. The next push (or "Run workflow") publishes the site.

### Custom domain later
Add a `public/CNAME` file containing just your domain (e.g. `andrew.dev`), set it
under Settings → Pages → Custom domain, and point a DNS `CNAME` record at
`<username>.github.io`. Then update `site:` to the new URL.

## Notes
- Fonts (Inter + JetBrains Mono) load from Google Fonts. To self-host for privacy/offline,
  install `@fontsource-variable/inter` + `@fontsource-variable/jetbrains-mono` and import them
  in `Layout.astro`.
- Respects `prefers-reduced-motion`; all content is visible without JavaScript.
