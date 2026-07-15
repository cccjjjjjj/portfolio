# Portfolio Implementation Plan

Status: approved for implementation  
Approved by Charles Jr Ancheta: 14 July 2026  
Original constraint: documentation and resources were approved before the application scaffold was created

## Implementation checkpoint

Local refined version completed and verified on 15 July 2026.

- 16 static routes and assets export successfully.
- Home, Work, five case studies, Profile, Contact, metadata, sitemap, robots, social image, and custom 404 are implemented.
- Subtle signal-field motion, immediate navigation, reduced motion, and static fallbacks are implemented.
- GitHub Pages deployment automation and repository-subpath handling are implemented.
- 33 browser tests pass across Chromium, Firefox, and WebKit.
- Automated accessibility scans report no serious or critical violations on the sampled public routes.
- The production dependency audit reports zero known vulnerabilities.
- Exported HTML contains the approved public email link, but no phone number or confidential Curia Regis platform claims.

External release configuration remains:

1. Create the GitHub repository and set its final public URL.
2. Create the Formspree form and add its form ID as a repository secret.
3. Perform final review on physical iOS and Android devices.
4. Add the final résumé and confirmed SMU conferral date when available.

## Refinement pass: less, clearer, more attributable

Status: approved on 15 July 2026

### Context and goals

The refinement keeps the portfolio's quiet architectural shell while making Charles's ownership and strongest evidence faster to understand. It must reduce duplication rather than introduce new visual features.

### Design tokens and foundations

- Retain the dark `Signal Room` palette, Instrument Sans, IBM Plex Mono, and existing semantic colour tokens.
- Retain the golden-ratio spacing sequence: 8, 13, 21, 34, 55, and 89 pixels.
- Retain the 1.618 / 1 case-study image stage and 1.618 / 1 content columns.
- Keep display titles below the existing 3.25rem desktop cap and 2.625rem mobile cap.
- Body copy must remain left aligned. Do not justify paragraph text because uneven word spacing reduces readability.
- Do not add colours, hover previews, background effects, or decorative animation in this pass.

### Information architecture

1. Replace separate About and Experience destinations with one `Profile` route.
2. Use the primary navigation order `Home / Work / Profile / Contact`.
3. Remove About and Experience from the sitemap and accessibility route set.
4. Preserve the homepage as an identity-only, scrollless composition.
5. Remove the homepage Work call-to-action because Work remains permanently available in the primary navigation.

### Profile page

1. Lead with a short positioning statement of no more than two sentences.
2. Present experience and education as factual timelines with concise descriptions.
3. Present capabilities as compact grouped lists rather than large cards.
4. Keep Curia Regis as employment and title-only until public company copy is approved.
5. Keep the unconfirmed SMU conferral date explicitly marked as pending confirmation.

### Work index

1. Use concise display titles on the index: `Grace`, `Embargo Breach`, `Motor Risk Myths`, `Poverty Forecasting`, and `ENSO Forecasting`.
2. Preserve complete project titles in metadata and evidence content.
3. Keep each project row text-only with one compact metadata line.
4. Preserve chronological and editorial ordering already defined in project frontmatter.

### Case-study opening screen

1. Surface `Role`, `Team`, and `Year` before the guided walkthrough.
2. Keep each value short and attributable; do not imply sole ownership of team work.
3. Replace the undifferentiated result strip with three labelled facts: `Scope`, `Finding`, and `Status`.
4. Keep technical detail, tools, methodology, and long-form evidence inside the collapsed Evidence drawer.
5. Preserve the four-step walkthrough, illustration, pointer response, keyboard controls, reduced-motion behaviour, and next-project link.

### Contact page and form

1. Reduce the form to `Name`, `Email`, and `Message`.
2. Preserve native browser validation, loading, success, error, honeypot, and privacy states.
3. Provide direct email and LinkedIn alternatives.
4. Do not publish the phone number.
5. Keep the complete Contact composition within one viewport on desktop, phone portrait, and phone landscape.

### Interaction and accessibility requirements

- Every interactive control must remain usable with keyboard, pointer, and touch.
- Focus-visible indicators must retain at least a 2px outline and 3px offset.
- Navigation and project metadata must not overflow at 320px width or 200% zoom.
- The homepage must have no horizontal or vertical overflow in desktop, portrait-phone, or landscape-phone viewports.
- Reduced-motion mode must suppress non-essential movement without removing content.
- Changed public routes must have no serious or critical automated accessibility violations.
- Form states must use `status` or `alert` semantics and move focus to feedback after submission.

### Content standards

- Prefer factual labels and concrete evidence over self-evaluative language.
- Keep visible project descriptions to one sentence.
- Use `Scope / Finding / Status` consistently; never label an output as an outcome.
- Avoid em dashes and generic calls to action.
- Keep paragraphs to approximately 60 to 70 characters per line and no more than two visible paragraphs per introductory block.

### Prohibited implementations

- No extra homepage section or homepage scrolling.
- No duplicate Work call-to-action beside the primary navigation.
- No separate About and Experience navigation items.
- No justified body copy.
- No fabricated performance, business-impact, or model-quality claims.
- No new animation, colour, illustration, or card system.

### QA checklist

1. Verify the four-item navigation and active states on every public route.
2. Verify Home remains scrollless in representative desktop and phone orientations.
3. Verify all five Work rows use concise display titles and compact metadata.
4. Verify every case study exposes Role, Team, Year, Scope, Finding, and Status before the walkthrough.
5. Verify the Evidence drawer remains collapsed by default and contains tools and detailed source material.
6. Verify the Contact form exposes only Name, Email, and Message, plus the hidden honeypot.
7. Run type checking, linting, static production export, Chromium, Firefox, WebKit, and automated accessibility checks.
8. Capture representative Home, Work, Profile, case-study, and Contact screens for visual inspection.

## Locked decisions

- Equal emphasis on project management and data analytics
- RegTech as a differentiating domain
- Dark-only original `Signal Room` art direction
- Instrument Sans and IBM Plex Mono
- Muted copper and sage accents
- Separate routes rather than one long page
- Five curated case studies
- Grace shown as in progress
- Curia Regis platform work excluded from public case-study content
- Responsive interaction with reduced-motion and low-power fallbacks
- Next.js with TypeScript and static export
- GitHub Pages as the initial hosting target
- MDX for case-study content
- No analytics
- SEO and social-sharing metadata included
- Contact form with a direct public email fallback and no public phone number
- Identity-only Home and title-only Work index
- Shared `Ink and Signal` editorial illustration system
- Four-chapter guided project walkthroughs with optional technical evidence
- Scroll-free Home and Contact compositions
- Versioned graphite-and-charcoal project illustrations derived from user-supplied concepts

## Phase 0: Resource and claim lock

Status: in progress

### Work

1. Maintain `resources/README.md` as the evidence manifest.
2. Record Charles's personal contribution to each team project.
3. Identify public-safe screenshots and figures.
4. Confirm Arman Home Furnishing employment months.
5. Confirm the SMU degree's formal conferral date when available.
6. Obtain an approved Curia Regis public sentence or retain title-only treatment.
7. Select two or three Tableau visualisations for an optional external gallery link.
8. Verify whether research figures can be reproduced under the relevant publication terms.

### Exit gate

- Every public claim has a source.
- Every project has a role statement, asset list, and privacy status.
- No confidential source has entered the public content set.

## Phase 1: Content architecture

### Work

1. Create the route and MDX content structure.
2. Define project frontmatter:

```yaml
title:
slug:
year:
status:
disciplines: []
summary:
role:
team:
tools: []
featured:
publicLinks: []
```

3. Draft Home, About, Experience, and Contact content.
4. Draft each case study from its evidence source.
5. Run an accuracy review before visual implementation.

### Exit gate

- All routes have approved copy or explicitly marked placeholders.
- No case study exceeds the evidence available.
- Hiring-manager review can understand the story from plain text alone.

## Phase 2: Technical foundation

### Work

1. Scaffold Next.js with TypeScript and the App Router.
2. Configure static export for GitHub Pages.
3. Add linting, formatting, type checking, and test commands.
4. Implement semantic tokens, fonts, reset, layout primitives, and responsive containers.
5. Implement MDX parsing and typed project metadata.
6. Add a no-JavaScript-safe navigation and content baseline.

### Exit gate

- Production static export succeeds.
- Every route loads directly and after client navigation.
- The site works without WebGL or motion.
- No dependency lacks a documented purpose.

## Phase 3: Core interface

### Work

1. Build the global frame and navigation.
2. Build the identity-only homepage introduction.
3. Build the project index with titles and compact tags only.
4. Build the reusable four-chapter guided case-study layout and expandable evidence section.
5. Build About and capability groups.
6. Build Experience and Education.
7. Build the Contact form interface and all states.
8. Build the custom 404 page.

### Exit gate

- Desktop and mobile layouts are complete without experimental effects.
- Full keyboard navigation works.
- Loading, empty, success, and error states exist where applicable.

## Phase 4: Case-study assets

### Work

1. Create the Grace `Ink and Signal` illustration as the style benchmark.
2. Create project-related illustrations for VAST, Motor Insurance, Poverty Forecasting, and ENSO in the same visual language.
3. Retain authentic Grace screens, VAST views, and Motor Insurance charts as evidence rather than index art.
4. Keep illustrations interpretive and avoid fabricating analytical results.
5. Redact personal emails and unnecessary identifiers.
6. Generate responsive AVIF or WebP images with PNG fallbacks where needed.
7. Write alt text and captions.

### Exit gate

- Every project has a coherent image set.
- No confidential or rights-restricted material is exposed.
- Every asset is optimised and attributed where needed.

## Phase 5: Signature interaction

### Work

1. Build the original signal-field background.
2. Add pointer and touch disturbances.
3. Add a short non-blocking page-entry fade.
4. Add restrained media scale and link-direction cues.
5. Preserve the native cursor and standard link behaviour.
6. Add reduced-motion, touch, low-power, and canvas-failure fallbacks.
7. Measure the performance impact before retaining each effect.

### Exit gate

- Content remains immediately available while animation initialises.
- No interaction blocks navigation.
- Reduced-motion mode has no page-entry movement or background pulses.
- Mobile scrolling remains stable and responsive.

## Phase 6: Contact, metadata, and publishing configuration

### Work

1. Select a static-site-compatible form processor with spam protection.
2. Publish only the approved contact email address and keep the phone number private.
3. Add canonical metadata, sitemap, robots file, structured data, and per-project social metadata.
4. Create the favicon and social-sharing image.
5. Configure the GitHub Actions deployment workflow.
6. Handle repository subpaths and a future custom domain.

### Exit gate

- Form success and failure are verified end to end.
- Spam protection is keyboard and screen-reader usable.
- Direct links and social previews resolve correctly.
- GitHub Pages deployment succeeds from a clean build.

## Phase 7: Quality assurance

### Work

1. Run type checking, linting, tests, and production export.
2. Run automated accessibility checks on every route.
3. Perform complete keyboard testing.
4. Perform screen-reader smoke testing.
5. Test Chrome, Edge, Firefox, desktop Safari, iOS Safari, and Android Chrome.
6. Test 320px width, 200% zoom, touch, reduced motion, and low-power fallback.
7. Review Core Web Vitals and Lighthouse results.
8. Proofread for accuracy, tone, unsupported claims, and em dashes.

### Exit gate

- No critical or serious accessibility issues remain.
- No broken direct route or asset path remains.
- No confidential or unsupported claim remains.
- Visual effects stay within the agreed performance budget.

## Phase 8: Release

### Work

1. Complete a final content approval pass.
2. Publish to a temporary GitHub Pages URL.
3. Review on real desktop and mobile devices.
4. Correct release-only issues.
5. Attach a custom domain later if desired.
6. Document how to add, edit, reorder, and archive projects.

### Definition of done

- A hiring manager can understand Charles's positioning in the first screen.
- The strongest evidence is reachable within one interaction from Work.
- Contact is reachable within two interactions from any case study.
- The experience is original, responsive, accessible, and performant.
- Charles can update project content without modifying page components.
- All public statements are accurate, source-backed, and privacy-safe.

## Decisions deliberately deferred

- Custom domain
- Final résumé route and download
- Exact contact-form provider
- Public Curia Regis description
- Final SMU conferral date
- Optional Tableau gallery treatment
- Whether a CMS is needed after the first release

## Approval gate before implementation

Approved on 14 July 2026. Implementation may proceed against:

1. `PORTFOLIO_SPEC.md`
2. `IMPLEMENTATION_PLAN.md`
3. The five-project lineup
4. The public evidence boundaries
5. The `Signal Room` creative direction
