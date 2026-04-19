# Security Policy

## Supported Version

This repository is actively maintained on the `main` branch.

## Reporting a Vulnerability

If you discover a security issue, please report it privately:

- Open a private security advisory in GitHub (preferred), or
- Contact the repository owner directly before public disclosure.

Please include:

- A clear description of the issue
- Steps to reproduce
- Impact assessment
- Suggested mitigation (if available)

## Security Controls in This Repository

- TypeScript strict mode enabled
- ESLint + CI checks on push
- CodeQL code scanning workflow
- Dependabot updates for npm and GitHub Actions
- Reduced framework fingerprinting (`poweredByHeader: false`)
- Static CSP/referrer directives in app layout
