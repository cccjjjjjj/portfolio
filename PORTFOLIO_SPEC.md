# Charles Jr Ancheta Portfolio Specification

Status: approved for implementation  
Date: 14 July 2026  
Approved by Charles Jr Ancheta: 14 July 2026  
Implementation status: in progress

Revision approved through user feedback on 14 July 2026: typography must remain compact and calm; navigation must be immediate; circular route transitions and the custom cursor are removed; project imagery must lead the experience.

## Context and goals

### Design intent

Create a portfolio with two deliberate modes: a quiet, minimal index for orientation and expressive guided case studies for exploration. It must remain clear enough for a hiring manager to understand in seconds and original in composition, motion, illustration, and code.

### Positioning

**Name:** Charles Jr Ancheta  
**Professional label:** Project Management · Data Analytics · RegTech  
**Location:** Singapore  
**Availability:** Full-time and graduate roles from December 2026  
**Tagline:** I turn complex work into clear products and decisions.

The site must give project management and data analytics equal emphasis. RegTech is the differentiating domain, not the only employment target.

### Primary audience

- Hiring managers
- Graduate-program recruiters
- Project and product leaders
- Data and analytics leaders
- FinTech and RegTech teams

### Primary outcome

A visitor must be able to identify Charles's professional direction, open strong evidence, and reach the contact form without navigating more than three levels.

### Sitemap

```text
Home
├── Work
│   ├── Grace
│   ├── Embargo Breach
│   ├── Motor Risk Myths
│   ├── Poverty Forecasting
│   └── ENSO Forecasting
├── Profile
└── Contact
```

Résumé remains a future utility link until the document is final.

### Homepage content

**Opening statement**

> I bring structure to complex projects, turn data into useful decisions, and translate regulatory requirements into practical delivery.

**Supporting statement**

> Based in Singapore, I work across project management, data analytics, and regulatory technology, supported by a foundation in computer science and postgraduate training in fintech and analytics.

Work and Contact remain available through the persistent primary navigation. The homepage has no separate call to action.

### Selected work order

1. Grace: Purchase Readiness and Return Follow-up
2. VAST Challenge 2026: Investigating an AI-Agent Embargo Breach
3. Mythbusting Risk in a Motor-Insurance Portfolio
4. Satellite-Based Poverty Forecasting
5. Statistical ENSO Forecasting

Grace leads because it demonstrates product thinking and delivery. The two postgraduate analyses demonstrate current data capability. The research projects demonstrate model development, research depth, geospatial analysis, forecasting, and publication evidence.

### Public evidence boundaries

- Grace must be labelled `In progress`.
- Grace must distinguish tested business logic from prepared or parse-only iOS work.
- Curia Regis appears only as employer, role, location, and dates until Charles provides an approved public description.
- No Curia Regis platform counts, workflow details, screenshots, requirements, client types, or internal documents may be published.
- Academic projects must state `Role: Model developer and researcher` and retain team attribution.
- The poverty-forecasting project may link to its Springer publication record.
- Arman Home Furnishing must be named as the employer, with its relationship to the local Uratex branch explained accurately.
- No metric may appear without a source or an explicit qualifier.

## Design tokens and foundations

### Creative direction: Signal Room

The interface uses restrained typography, deliberate negative space, a low-light palette, and a generative signal field. It may borrow the references' simplicity and cinematic pacing, but it must not reproduce their layouts, WebGL effects, navigation patterns, typography, code, or transitions.

Home contains identity, positioning, availability, and navigation. It contains no embedded Work or Profile sections and must fit within one non-scrolling viewport in desktop, phone portrait, and phone landscape orientations. Work is a title-only index with compact year and discipline tags. Expressive media begins only after a project is opened.

### Colour tokens

```css
--color-bg: #090b0d;
--color-surface: #111417;
--color-surface-raised: #171b1f;
--color-text: #e8e4dc;
--color-text-muted: #a09b93;
--color-border: rgba(232, 228, 220, 0.18);
--color-border-strong: rgba(232, 228, 220, 0.42);
--color-accent: #c98b52;
--color-accent-secondary: #83a59a;
--color-focus: #f3b56f;
--color-success: #83b99c;
--color-danger: #e87979;
```

The copper accent indicates action and selection. Sage supports analytical or status information. Neither accent should become a decorative gradient wash.

### Typography

- Display and body: Instrument Sans, self-hosted variable font
- Metadata and labels: IBM Plex Mono, self-hosted
- Fallback: `Arial, Helvetica, sans-serif` and `ui-monospace, monospace`
- Body base: 16px on all devices
- Body line height: 1.5 to 1.65
- Small metadata: 12px minimum with 1.4 line height
- Display sizing: `clamp(2.5rem, 5.2vw, 5.4rem)` with a readable maximum line length
- Body measure: 58 to 72 characters
- Weights: 400 body, 500 labels, 600 emphasis; avoid excessive ultra-light text

### Spacing

Use a restrained golden-ratio scale, with 4px reserved only for optical correction:

```text
8, 13, 21, 34, 55, 89
```

- Desktop page gutter: `clamp(24px, 4vw, 72px)`
- Mobile page gutter: 20px
- Major section gap: 89px desktop, 55px mobile
- Component gap: 13px, 21px, or 34px
- Minimum touch target: 44 by 44px

### Layout

- Primary and secondary desktop regions use a 61.8% / 38.2% split where two-column hierarchy is useful.
- Project illustrations use an aspect ratio close to 1.618:1.
- The golden ratio controls proportion and must never appear as a decorative spiral or motif.
- Content must remain usable at 320px width.
- Main breakpoints: 640px, 960px, and 1280px.
- The fixed visual frame becomes an inset border on large screens and a simple top/bottom rule on narrow screens.
- Desktop projects use large media panels followed by compact captions.
- Mobile project media appears inline and never depends on hover.
- Text must wrap naturally. No page may require horizontal scrolling.

### Motion and signal field

- The background is an original field of faint paths, nodes, and slow pulses.
- Pointer movement produces a small local disturbance, not a full-screen chase effect.
- Section changes may alter density, direction, or pulse frequency.
- Route navigation uses immediate standard links without an interstitial overlay.
- New pages use a short 240ms opacity and vertical-entry fade.
- Navigation must remain usable if client-side JavaScript or animation fails.
- Small hover and focus transitions: 120 to 220ms.
- The WebGL or canvas layer must be decorative, `aria-hidden`, and non-blocking.
- Low-power and reduced-motion modes use a static texture or short opacity fade.

## Component-level rules

### Global navigation

**Anatomy:** name, professional label, route links, availability marker.  
**Desktop:** fixed within the page frame.  
**Mobile:** compact top bar with an accessible menu disclosure only if all five links cannot fit.

- Default: full-opacity current context and muted inactive links.
- Hover: text accent or underline movement, maximum 180ms.
- Focus-visible: 2px focus outline with 3px offset.
- Active route: text plus a non-colour indicator.
- Disabled: not applicable to ordinary navigation links.
- Long labels must wrap or shorten without clipping.

Do use real links that work without animation. Do not use non-semantic `div` elements as navigation controls.

### Homepage introduction

**Anatomy:** name, professional label, statement, supporting copy, two actions, background signal field.

- The statement must remain the strongest visual element.
- The introduction must be readable before background initialisation finishes.
- The two actions must not be styled as identical primary buttons.
- On mobile, actions stack or wrap with at least 12px separation.

Do prioritise the professional statement. Do not use a giant decorative headline that pushes all evidence below the first screen.

### Project index

**Anatomy:** dominant project media, project number, title, year, discipline, status, and concise summary.

- Default: media, title, and essential metadata are visible.
- Hover: apply only a restrained media scale and directional-link cue.
- Focus-visible: expose the same cue as hover with a visible outline.
- Active: slightly compress or shift the selected title without changing layout.
- Touch: first tap must navigate or use an explicit preview control. It must not create a hover trap.
- Empty image: use a deliberate dark media surface during development, then replace it before release.
- In-progress projects display a visible text label.

Do let real product and analytical outputs carry the project story. Do not hide project titles until interaction or use decorative generated imagery when authentic project evidence exists.

All five projects use an original `Ink and Signal` illustration system: charcoal ground, warm off-white drawing, muted sage light, fine grain, and no embedded text. Authentic screenshots and analytical figures remain unaltered inside optional evidence sections.

Each project case study uses four short guided chapters beside a sticky visual stage. The illustration changes position and emphasis as the visitor progresses. Full methodology, claims, tools, and links remain available through an expandable evidence section.

### Project case study

Every case study uses this sequence:

1. Overview
2. Context and problem
3. Role and team
4. Constraints
5. Process
6. Key decisions
7. Deliverables
8. Challenges
9. Results or evidence
10. Reflection
11. Related links

- Team projects must visually separate Charles's role from the team's outcome.
- Long research content must be summarised, not pasted.
- Figures require captions and alt text.
- A next-project link and contact prompt appear at the end.
- Grace includes an explicit current-status block.

Do write evidence-led narratives. Do not manufacture business impact, adoption, accuracy, or ownership.

### Experience timeline

**Anatomy:** employer, role, location, dates, approved summary, selected evidence.

- Current role receives a text `Current` label.
- Curia Regis contains no description until public wording is approved.
- Education follows experience or appears in a parallel section on desktop.
- SMU wording: `Master of IT in Business, expected completion December 2026; degree conferral date to be confirmed.`

Do distinguish completion from degree conferral. Do not guess a July graduation date.

### Contact form

**Fields:** name, email, message.

- Default: visible persistent labels, not placeholder-only labels.
- Focus: border and focus ring change.
- Loading: submit label changes and button becomes busy without disappearing.
- Success: confirmation appears in a live region and focus moves to it.
- Error: field-level text plus summary, with focus moved to the summary.
- Disabled: only during an active submission.
- The public page may contain the approved contact email address. It must not contain Charles's phone number.
- Spam protection must not block keyboard or screen-reader completion.

Do invite full-time and graduate opportunities. Do not imply freelance services that Charles does not currently offer.

### Navigation reliability

- Every internal destination uses a standard semantic link.
- Navigation starts immediately and cannot wait for an animation timer.
- Direct entry, browser back and forward, modified clicks, and keyboard activation must work normally.

Do preserve browser navigation behaviour. Do not insert a full-screen overlay between routes.

## Accessibility requirements and testable acceptance criteria

- Meet WCAG 2.2 AA for the completed interface.
- Normal text contrast must be at least 4.5:1. Large text and non-text UI contrast must be at least 3:1.
- Every interactive element must be reachable and operable by keyboard.
- Focus order must match visual and reading order.
- Focus indicators must remain visible against every background state.
- Touch targets must be at least 44 by 44px unless an inline-text exception applies.
- `prefers-reduced-motion: reduce` must remove background pulses and page-entry movement.
- No information may exist only on hover, through colour, or inside the canvas.
- Route changes must update the document title, move focus appropriately, and announce the new page context.
- Heading levels must form a logical outline with one page-level `h1`.
- Images require useful alt text or an empty alt attribute when decorative.
- Form errors must be programmatically associated with their fields.
- The site must remain readable at 200% browser zoom and 320 CSS pixels wide.
- Automated checks must include axe or an equivalent tool, but manual keyboard and screen-reader smoke tests remain required.

## Content and tone standards with examples

### Voice

Conversational, observant, specific, and calm. The copy should sound like a capable early-career professional, not a consultancy or a generated marketing page.

### Writing rules

- Use short sentences and plain international English.
- Avoid em dashes.
- Prefer verbs such as `planned`, `analysed`, `documented`, `tested`, and `built` when accurate.
- Use `contributed to` or `worked with` for team outcomes.
- State limitations directly.
- Keep section headings descriptive.
- Do not use inflated phrases such as `revolutionary`, `cutting-edge`, `world-class`, or `seamless`.

**Good**

> I transformed nested agent communication logs into timelines and network views to explain how an embargo control was bypassed.

**Avoid**

> I leveraged cutting-edge analytics to unlock transformative insights from complex data.

**Good**

> Grace is in progress. Its business logic is tested on Windows, while the iOS interface still requires Xcode and device verification.

**Avoid**

> Grace is a fully functional iOS app redefining purchase management.

### Employment privacy

Until approved wording exists, Curia Regis displays only:

```text
Project Management Intern
Curia Regis, Singapore
May 2026 to Present
Expected completion October 2026
```

## Anti-patterns and prohibited implementations

- No copied source, shader, layout, or transition from either reference site.
- No generic bento grid, glowing gradient cards, floating blobs, decorative dashboard widgets, or excessive rounded pills.
- No full-screen autoplay video or heavy preloader that delays content.
- No animation that blocks navigation or exceeds 700ms for routine route changes.
- No custom cursor.
- No skill percentages, star ratings, or unsupported proficiency labels.
- No extra or obfuscated contact address beyond the approved public email link.
- No public Curia Regis platform material.
- No unsupported metrics or solo attribution for team research.
- No project card that becomes understandable only after hover.
- No low-contrast thin typography used for body copy.
- No collection of libraries without a measured reason for each dependency.

## QA checklist

### Content

- [ ] Every claim maps to an approved source.
- [ ] Team and individual contributions are separated.
- [ ] Grace is labelled in progress.
- [ ] Curia Regis is limited to approved public facts.
- [ ] SMU completion and conferral wording is accurate.
- [ ] No em dashes appear in public copy.

### Interaction

- [ ] All routes work through clicks, direct entry, and browser history.
- [ ] Hover, focus, touch, loading, success, and error states are implemented where relevant.
- [ ] Project previews have keyboard and touch equivalents.
- [ ] Reduced motion removes non-essential movement.
- [ ] Low-power fallback works without WebGL.

### Accessibility

- [ ] Contrast thresholds pass.
- [ ] Full keyboard journey passes.
- [ ] Focus remains visible and logical.
- [ ] Screen-reader smoke test passes on navigation, case studies, and contact form.
- [ ] 200% zoom and 320px layout pass.
- [ ] Form errors and success messages are announced.

### Responsive and browser

- [ ] Chrome, Edge, Firefox, and Safari current versions pass.
- [ ] iOS Safari and Android Chrome pass.
- [ ] No horizontal overflow at supported widths.
- [ ] Touch interactions do not depend on hover.

### Performance

- [ ] Initial content renders without waiting for WebGL.
- [ ] Fonts are self-hosted, subset where practical, and preloaded selectively.
- [ ] Images use responsive sizes and modern formats.
- [ ] Background animation pauses when the page is hidden.
- [ ] Lighthouse performance, accessibility, best-practices, and SEO results are reviewed on mobile and desktop.
