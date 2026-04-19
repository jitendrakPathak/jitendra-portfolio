# Jitendra Pathak Portfolio

Modern, card-based portfolio built with Next.js App Router and TypeScript.

## Highlights

- Reference-inspired 3-column work card layout (desktop)
- Dedicated case detail pages: `/work/[slug]`
- Dedicated About page: `/about`
- Clean architecture structure with strict separation of concerns
- Static export compatible for GitHub Pages

## Architecture

```text
src/
  domain/          # entities + repository contracts
  application/     # use-cases
  infrastructure/  # data + repository implementations
  composition/     # dependency wiring
  presentation/    # UI components
app/               # Next.js routes/pages only
```

Dependency direction:

`domain <- application <- infrastructure`

`presentation` consumes composed use-cases from `app`.

## Security

This repository includes:

- CodeQL scanning workflow (`.github/workflows/codeql.yml`)
- Dependabot updates (`.github/dependabot.yml`)
- Security policy (`SECURITY.md`)
- `poweredByHeader: false` and `reactStrictMode: true` in Next config
- Static CSP/referrer directives in root layout
- `security.txt` endpoint at `/security.txt`

## Links

- LinkedIn: <https://www.linkedin.com/in/jitendrakumarpathak>
- X/Twitter: <https://x.com/himali_boy>
- GitHub: <https://github.com/jitendrakPathak>
- LeetCode: <https://leetcode.com/u/jitendrakpathak/>
- HackerRank: <https://www.hackerrank.com/profile/jitendrapathako1>
- Stack Overflow: <https://stackoverflow.com/users/10345966/jitendra>

## Development

```bash
npm install
npm run lint
npm run build
npm run dev
```

## License & Copyright

All rights reserved. See [LICENSE](LICENSE).
