# Sandeep Satheesh

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Run locally

Use Node.js 20 or newer and npm.

```sh
npm ci
npm run dev
```

`npm run lint` checks the source. `npm run build` type-checks and writes the production site to `dist/`. `npm run preview` serves that build locally.

## Content

Education, experience, projects, research, skills, and leadership details are based on **Sandeep_resume.pdf**, supplied by Sandeep, and his direct corrections. The degree at the University of Illinois Urbana-Champaign is **Master of Computer Science (MCS), 2026–2028**. Other résumé variants are not the source for this site.

The downloadable résumé is `public/assets/resume.pdf`. Shared name and contact links live in `src/data/profile.ts`. DRES remains an ongoing role based on Sandeep’s confirmation.

Update structured content in `src/data/` and presentation in `src/components/sections/` and `src/pages/`. Keep public claims, dates, metrics, and résumé downloads consistent with the approved résumé and confirmed updates.

## Deployment and routes

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages on pushes to `main`, or when run manually. The repository's Pages source must be set to **GitHub Actions**.

The app uses clean client routes: `/`, `/about`, `/projects`, and `/contact`. The Vite build emits an `index.html` inside each named route directory so opening or refreshing those URLs works on static hosting. It also emits `404.html` to display the app's not-found page for unknown URLs on GitHub Pages. Assets use absolute paths from the site root, matching deployment at `sandeepstele.github.io`.

When adding a route, update both `src/App.tsx` and the route-entry list in `vite.config.ts`. The generated route entries share the application shell; they are not prerendered page content.
