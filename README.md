# Infra-Forward Portfolio

A production-ready personal portfolio for a Computer Science graduate targeting Software Engineering, DevOps Engineering, Production Engineering, and Infrastructure Engineering roles.

## Highlights

- Next.js App Router with TypeScript
- Tailwind CSS design system with ShadCN-style primitives
- Framer Motion loading, reveal, hover, and layout animations
- Dark-first premium UI with light mode support
- Interactive command palette, smooth scroll progress, cursor glow, active navigation, project filtering, expandable project detail cards, live status widgets, and contact validation
- SEO metadata, OpenGraph image, sitemap, robots file, and Vercel-ready structure

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize

Most personal content lives in `lib/portfolio-data.ts`.

Update these before publishing:

- Name, email, website, GitHub, and LinkedIn links
- Project names, descriptions, links, screenshots, architecture, and challenges
- `public/resume.pdf` with the final resume
- `metadataBase` and sitemap domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
- Contact email in `components/sections/contact.tsx`

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Add a custom domain.
5. Replace placeholder links and resume before sharing with recruiters.

## Environment

No environment variables are required for the static portfolio. If you later connect a real contact API, add provider keys through Vercel project environment variables.
