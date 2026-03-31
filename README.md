# Moku Kreativ Asia

Next.js + Sanity website configured for **static export** deployment.

## Scripts

- `npm run dev`: run local development server
- `npm run build`: create production static export (`out/`)
- `npm run start`: start Next production server (not required for static hosting)
- `npm run lint`: lint codebase

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Set required environment variables in `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-29
```

3. Start development server:

```bash
npm run dev
```

## Static Deployment

This project is set for static hosting using:

- `next.config.ts` with `output: "export"`
- `netlify.toml` publishing `out/`

Build output is generated into `out/`.

## CMS Publish -> Auto Rebuild

To make content updates low-maintenance on static hosting, configure **Sanity Webhook -> Netlify Build Hook**.

Setup guide:

- [docs/sanity-netlify-build-hook.md](docs/sanity-netlify-build-hook.md)

This is the recommended low-cost flow for Hostinger/Netlify static deployment while keeping Sanity as the content source.
