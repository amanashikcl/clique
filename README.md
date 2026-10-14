# Clique (cliquev2)

Next.js (App Router) landing page with GSAP + Lenis.

## Run locally
    npm install
    npm run dev      # http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo (the repo root must be this folder).
2. In Vercel: Add New > Project > import the repo.
3. Framework preset is detected as Next.js. Leave build settings as default and deploy.

Or with the CLI: `npm i -g vercel` then run `vercel` in this folder.

## Structure
    app/          layout, page, global styles
    components/   Intro, Hero, Marquee, Vision, SmoothScroll
    public/       static assets (logos, videos, fonts)
