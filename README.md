# Developer Portfolio

Senior .NET Engineer portfolio focused on distributed systems, enterprise automation, and agentic AI engineering.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Testing | [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com) |
| Linting | ESLint (eslint-config-next) |

## Architecture

The project uses **vertical slice architecture**: code is organized by feature, not by technical layer. Each feature owns its components, types, content data, and tests.

```
src/
  app/                   # Next.js App Router root (layout, page, globals)
  features/
    hero/                # Hero section + diagram + tests
    projects/            # Project cards, types, content, tests
    writeups/            # Writeup cards, types, content, tests
    skills/              # Skills grid, content, tests
    resume/              # Resume section + tests
    contact/             # Contact section + tests
  shared/
    ui/                  # Button, Card, Section — only truly reusable components
    lib/                 # cn() utility
```

Content is fully separated from presentation. Each feature's `*.content.ts` file holds all copy and data; components only render what they are given.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Testing

```bash
# Run all tests once
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## Type Checking & Linting

```bash
# TypeScript strict check
npm run type-check

# ESLint
npm run lint
```

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration required.
4. Set environment variables if needed (none required for this project by default).

## Personalisation Checklist

All `// TODO:` comments mark placeholders to replace before going live:

- [ ] Your name in `layout.tsx`, `page.tsx`
- [ ] Your domain in `layout.tsx` (Open Graph URL)
- [ ] GitHub URL in `hero.content.ts` and `contact/ContactSection.tsx`
- [ ] Email, LinkedIn, GitHub in `contact/ContactSection.tsx`
- [ ] Company names and experience in `resume/ResumeSection.tsx`
- [ ] Article URLs in `writeups/writeups.content.ts`
- [ ] Project GitHub URLs in `projects/projects.content.ts`
- [ ] Add `public/resume.pdf`
- [ ] Add `public/og-image.png` (1200×630 recommended)
