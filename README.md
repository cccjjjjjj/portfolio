# Charles Jr Ancheta Portfolio

A dark portfolio with an identity-only Home, a title-only Work index, and expressive guided case studies. Each project uses a related graphite-and-charcoal drawing from a shared hand-rendered illustration system, while original evidence remains available in expandable technical sections. The site uses Next.js, TypeScript, MDX, and a static export suitable for GitHub Pages.

## Current status

- Five case studies are implemented.
- Home, Work, Profile, Contact, and custom 404 routes are implemented.
- The original signal-field background is intentionally subtle and includes reduced-motion and low-power fallbacks.
- Navigation uses immediate standard links with a short page-entry fade.
- Project pages use four short guided chapters, a responsive interactive visual stage, and optional long-form evidence.
- Home and Contact are responsive, non-scrolling viewports; scrolling remains enabled everywhere else.
- Primary layouts use a quiet 61.8% / 38.2% proportion and an 8 / 13 / 21 / 34 / 55 / 89 spacing rhythm.
- Curia Regis is shown only as employment. Confidential work is not included.
- The contact interface is implemented but needs a Formspree form ID before public release.

## Local development

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```powershell
npm run check
```

This runs TypeScript checking, ESLint, and the production static export. Exported files are written to `out/`.

Run browser and automated accessibility checks with:

```powershell
npm run test:e2e
```

The suite runs in Chromium, Firefox, and WebKit and stores approved Chromium reference captures in `artifacts/screenshots/`.

## Content editing

Project case studies live in `content/projects/` as MDX files. Frontmatter controls ordering and project metadata:

```yaml
title:
shortTitle:
order:
year:
status:
disciplines: []
summary:
role:
team:
tools: []
accent:
externalUrl:
externalLabel:
```

The main contact links live in `lib/site.ts`. Profile, experience, education, and capabilities live in `app/profile/page.tsx`.

## Contact form setup

1. Create a Formspree form for the public contact address.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_FORMSPREE_ID` to the assigned form ID.
4. Test success, validation, provider spam filtering, and failure states.
5. In GitHub, add the form ID as the `NEXT_PUBLIC_FORMSPREE_ID` Actions secret.

Until configured, the form shows a controlled message directing visitors to the public email link.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` validates and deploys `out/` when `main` is pushed.

Before the first deployment:

1. Create the GitHub repository.
2. Set Pages source to GitHub Actions.
3. Add a repository variable named `NEXT_PUBLIC_SITE_URL` containing the final public URL.
4. Add the Formspree ID secret.
5. Push the repository to `main`.

The Next.js configuration automatically adds a repository base path during GitHub Actions builds for project Pages sites. A username Pages site or custom domain uses the root path.

## Evidence and privacy

`resources/` contains private working evidence. It is excluded from the TypeScript build and must not be copied into `public/` without a content and rights review. See `resources/README.md` for the source boundaries.

## Approved contracts

- `PORTFOLIO_SPEC.md`
- `IMPLEMENTATION_PLAN.md`
