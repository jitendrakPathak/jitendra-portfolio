# Jitendra Pathak Portfolio

A modern, executive-style portfolio built with Next.js App Router and TypeScript, designed to represent senior engineering leadership and entrepreneur profile.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Static export for GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

This generates the static site in `out/`.

## GitHub Pages Deployment

This repo includes a workflow at `.github/workflows/deploy-pages.yml`.

1. Push to the `main` branch.
2. In GitHub repo settings, open **Pages** and set **Build and deployment** source to **GitHub Actions**.
3. The workflow builds and deploys automatically.

The `next.config.ts` is configured for project pages (`/<repo-name>`) by detecting `GITHUB_REPOSITORY` during CI.

## TypeScript-Only Cleanup

The old JavaScript component/pages folders were removed and the project now runs as TypeScript-only (`allowJs: false`).
