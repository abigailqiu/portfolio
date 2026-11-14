# abigail qiu — portfolio

Vite + React + TypeScript. CSS Modules + design tokens in `src/styles/global.css`. Framer Motion for motion.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build → dist/
npm run preview    # serve dist/ locally
```

## Edit content

- **You**: `src/data/site.ts` — name, hero sentence, rotating identity words, annotations, "currently" list, about paragraphs, skills, marquee, email, links. Anything in `[brackets]` is a placeholder.
- **Projects**: `src/data/projects.ts` — one object per project. Adding an entry adds a card on the home page, a page at `/work/<slug>`, and prev/next links. Put images in `public/work/<slug>/` and set `cover`, `gallery[].src`, or `sections[].media` to `/work/<slug>/file.jpg`.
- **Résumé**: drop `resume.pdf` into `public/`.

## Deploy

Vercel: import the repo, framework = Vite, build = `npm run build`, output = `dist`. `vercel.json` already rewrites all routes to `index.html` for client-side routing.

## Structure

```
src/
  data/        site.ts, projects.ts        ← content lives here
  components/  Nav, Hero, Marquee, WorkGrid, About, Footer, Cursor, Magnetic, Squiggle, Doodles
  pages/       Home, ProjectPage, NotFound
  styles/      global.css (tokens, utilities)
```
