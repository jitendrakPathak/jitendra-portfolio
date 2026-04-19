# Jitendra Pathak Portfolio

A card-first, reference-inspired portfolio built with Next.js App Router and TypeScript.

## What is implemented

- Dark, modern visual direction inspired by your shared screenshots
- Fixed profile sidebar with updated social/coding links
- Exactly **18 portfolio cards** in a consistent **3-column desktop grid**
- Clickable cards routing to individual case detail pages (`/work/[slug]`)
- Dummy case content ready for real project content replacement

## Updated links

- LinkedIn: `https://www.linkedin.com/in/jitendrakumarpathak`
- X/Twitter: `https://x.com/himali_boy`
- GitHub: `https://github.com/jitendrakPathak`
- LeetCode: `https://leetcode.com/u/jitendrakpathak/`
- HackerRank: `https://www.hackerrank.com/profile/jitendrapathako1`
- Stack Overflow: `https://stackoverflow.com/users/10345966/jitendra`

Instagram and YouTube links were removed as requested.

## Clean architecture structure

```text
src/
  domain/
    portfolio/
      entities/
      repositories/
  application/
    portfolio/
      use-cases/
  infrastructure/
    portfolio/
      data/
      repositories/
  composition/
  presentation/
    portfolio/
      components/
app/
  page.tsx
  work/[slug]/page.tsx
  not-found.tsx
```

### Dependency direction

- `domain` has business types and repository contracts only
- `application` depends on `domain` contracts via use-cases
- `infrastructure` implements repository contracts with static data
- `presentation` renders reusable UI components
- `app` layer composes use-cases and components

This keeps concerns separated and avoids direct domain-to-application coupling.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
```

Static output is generated in `out/` and deployed through GitHub Pages workflow.
