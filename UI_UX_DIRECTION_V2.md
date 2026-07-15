# UI/UX Direction V2: Quiet Shell, Controlled Impact

Status: proposed for review  
Reference audit: [ARKKHE](https://www.arkkhe.com/)  
Existing foundation: Signal Room, dark-only palette, graphite project illustrations, golden-ratio layout, scroll-free Home and Contact

## 1. Context and goals

The portfolio should feel calm, precise, and architectural on arrival, then become more forceful as a visitor interacts with Work and enters a case study.

The intended balance is approximately:

- 80% quiet: legibility, negative space, stable navigation, factual copy, restrained colour
- 20% impact: weight changes, decisive line movement, aperture transitions, chapter reveals, strong findings

Aggression must come from contrast and timing, not oversized paragraphs, excessive motion, loud colour, or visual clutter.

### Experience goals

1. A hiring manager understands Charles's positioning within three seconds.
2. Work feels selectable and alive before any project is opened.
3. Each case study feels like a guided investigation rather than a document.
4. Interactions reward attention without becoming required for comprehension.
5. The site remains fast, keyboard accessible, touch safe, and reduced-motion compatible.

## 2. Reference audit

### Keep and translate

| ARKKHE quality | Why it works | Translation for this portfolio |
| --- | --- | --- |
| One dominant object per scene | Creates an immediate focal point | Use one graphite illustration or one typographic statement, never both at equal intensity |
| Large quiet fields around content | Builds tension and perceived quality | Preserve the current golden-ratio negative space and architectural framing |
| Thin and heavy type in one statement | Creates aggression without relying only on size | Keep Instrument Sans and contrast weight 300 against 600 for one key phrase |
| Viewport-sized visual acts | Makes scrolling feel cinematic | Treat each case-study chapter as a composed scene while preserving normal scrolling |
| Light-to-dark phase change | Clearly signals a new part of the experience | Stay dark-only, but move between black, charcoal, and raised graphite surfaces |
| Persistent navigation | Maintains orientation during expressive scenes | Keep the existing four-item fixed navigation |
| Small directional arrows and line movement | Makes controls feel active | Use restrained arrow travel, underline sweeps, and progress lines |
| Strong final contact moment | Gives the journey a decisive ending | Keep Contact scroll-free and make its form response feel deliberate |

### Do not copy

- No bright orange 3D blob. The graphite drawings are the portfolio's own material language.
- No ten-screen agency marketing sequence. Charles needs evidence, not repeated positioning statements.
- No giant copy that competes with project content.
- No bento grid of unsupported metrics.
- No custom cursor, sound, scroll hijacking, or mandatory parallax.
- No WebGL or video dependency for first content. A browser audit of the reference found one canvas, two videos, and a mobile capture where the visual field appeared before the content.
- No interaction that exists only on hover.

## 3. Desired emotional journey

### Act 1: Arrival

Feeling: quiet confidence, precision, slight mystery.

The visitor sees Charles, his three working domains, availability, and navigation. The signal field responds faintly, but nothing asks for attention twice.

### Act 2: Selection

Feeling: controlled tension.

Work remains a title-only index. Hover or keyboard focus changes typographic weight, extends one copper rule, and quiets the other rows. No image preview is introduced.

### Act 3: Investigation

Feeling: tactile, guided, increasingly expressive.

Opening a project uses a short expanding aperture. Ownership and evidence appear first. The graphite drawing then anchors four chapters whose visual treatment changes with the active step.

### Act 4: Resolution

Feeling: evidence, clarity, restraint.

The final chapter lands on the main finding or honest limitation. Technical details remain optional. The next project appears as one decisive route, not a recommendation carousel.

### Act 5: Contact

Feeling: direct and composed.

The scroll-free Contact page closes the journey. Field focus and submission states provide the final interactive response without adding copy.

## 4. Design tokens and foundations

### Colour

Retain the existing semantic palette.

- Background: `#090b0d`
- Raised graphite: `#111417`
- Text: `#e8e4dc`
- Muted text: `#a09b93`
- Copper action: `#c98b52`
- Sage evidence: `#83a59a`

Copper should occupy less than approximately 5% of any viewport. It marks action, not decoration.

### Typography

- Primary: Instrument Sans
- Metadata: IBM Plex Mono
- Default display weight: 300
- Impact weight: 600
- Body weight: 400
- Metadata weight: 400 or 500

Use weight contrast inside a heading only once per scene. Do not bold entire headings.

Recommended maximums:

- Homepage name: 52px desktop, 42px mobile
- Work title: 42px desktop, 34px mobile
- Case-study title: 52px desktop, 42px mobile
- Chapter title: 34px desktop, 24px mobile
- Body: 16px desktop, 15px mobile
- Metadata: 11px to 12px

### Space and proportion

Retain the golden-ratio sequence:

`8 / 13 / 21 / 34 / 55 / 89`

- Primary split: 61.8% / 38.2%
- Case image: 1.618 / 1
- Minimum touch target: 44px
- Readable paragraph width: 34rem or approximately 60 to 70 characters
- Body paragraphs remain left aligned, never justified

### Lines and surfaces

- Structural rule: 1px muted border
- Active rule: 1px copper or sage
- Focus outline: 2px with 3px offset
- No decorative card shadows
- Raised surfaces use colour contrast, not blur-heavy glass effects

## 5. Global shell and navigation

### Anatomy

`Identity / Home / Work / Profile / Contact`

### Default

- Header remains fixed and visually quiet.
- Current route uses the existing dot marker.
- Header background gains opacity only after content passes beneath it.

### Hover and focus

- Label translates upward by 3px while a duplicate label enters from below.
- Marker scales from 0 to 1.
- Duration: 160ms.
- Keyboard focus receives the same visual state plus the existing focus outline.

### Mobile

- Keep all four routes visible.
- Do not introduce a full-screen menu for four links.
- Disable label rolling if it causes wrapping or clipping.

## 6. Route transition: the aperture

This is the signature aggressive interaction and should be used sparingly.

### Behavior

1. A copper or graphite ring starts from the activated link position.
2. The ring expands to cover the viewport using `transform: scale()`.
3. The new page appears underneath as the ring fades.
4. Navigation must begin immediately; the visual transition may not delay routing.

### Timing

- Expansion: 320ms
- Reveal: 180ms
- Total perceived transition: no more than 420ms
- Easing: `cubic-bezier(.22, 1, .36, 1)`

### Fallbacks

- Reduced motion: 100ms opacity change only
- No JavaScript: standard link navigation
- Touch: origin uses the centre of the activated control

## 7. Homepage

The homepage remains scroll-free.

### Keep

- Name
- Positioning line
- Singapore and availability
- Persistent navigation
- Signal field

### Add

- A faint graphite aperture or incomplete circle behind the identity, using CSS or canvas rather than another image asset.
- Pointer movement may offset the aperture by no more than 6px.
- On first interaction, the signal field briefly converges toward the pointer, then returns to rest.

### Do not add

- Work previews
- Biography copy
- Additional call to action
- Large slogan
- Auto-rotating roles

## 8. Work index

The Work page remains title-only and should become aggressive through typography.

### Row anatomy

`Index / Project title / Year and compact tags`

### Default

- Title weight 300
- Metadata remains muted
- One structural rule separates rows

### Hover and keyboard focus

- Active title changes to weight 600.
- Active row translates 8px horizontally.
- Copper rule grows from 0% to 38.2% width.
- Other rows reduce to 36% opacity.
- Metadata moves 5px in the opposite direction.
- Duration: 180ms to 220ms.

### Touch

- No first-tap preview state.
- A tap opens the project immediately.
- Pressed feedback uses a 0.985 scale for no more than 100ms.

### Prohibited

- No hover image.
- No marquee title.
- No horizontal scroll.
- No filters for only five projects.

## 9. Case studies

Case studies carry most of the expressiveness.

### Opening screen

Retain:

- Status
- Title
- One-sentence lede
- Role, Team, Year
- Scope, Finding, Status

Add one short entrance sequence:

1. Back link and metadata fade in.
2. Title reveals through a 12px vertical mask.
3. Evidence rules draw from left to right.
4. The visual stage enters last.

Total duration must remain below 600ms, and content must already exist in the document.

### Guided chapters

Keep four steps. Each step changes the same illustration through restrained treatments rather than replacing it with unrelated media.

- Step 1, Problem: 72% exposure, close crop
- Step 2, Evidence: 100% exposure, normal crop
- Step 3, Decision: slight 1.025 scale and copper tracing line
- Step 4, Result: normal scale, sage finding marker, strongest contrast

The image must never move more than 10px from pointer or scroll input.

### Aggressive finding moment

The final chapter may use one stronger typographic sentence at 34px desktop and 24px mobile. It should state a finding or limitation, never a generic slogan.

Examples:

- `The breach exposed a coverage gap.`
- `Lead on absolute error, not every metric.`
- `Unknown is a product state, not missing polish.`

### Evidence drawer

- Remains collapsed by default.
- Opening uses a 220ms opacity and translate transition.
- The plus rotates 45 degrees.
- Content remains available without animation.

## 10. Profile

Profile remains factual and quieter than Work.

### Experience rows

- Hover or focus strengthens the role from weight 300 to 500.
- Organisation colour shifts from copper-muted to full copper.
- A 1px timeline rule fills to 38.2% width.
- No cards or company logos.

### Capabilities

- Keep the current compact definition list.
- Each category may reveal its tools through opacity only.
- No skill meters, percentages, or animated charts.

## 11. Contact

Contact remains scroll-free across desktop, portrait phone, and landscape phone.

### Field interactions

- Default rule: muted grey.
- Hover rule: 42% text colour.
- Focus rule: copper line draws left to right in 180ms.
- Error: danger token plus concise text; do not shake the field.
- Success: form reduces to 61.8% opacity and a clear status appears.

### Send action

- Text rolls upward by 1em.
- Arrow moves 4px diagonally.
- Button scales to 0.985 while pressed.
- Loading preserves width and changes text to `Sending`.

Direct Email and LinkedIn remain visible at all times.

## 12. Motion system

### Durations

- Micro response: 100ms
- Hover and focus: 160ms
- Component reveal: 220ms
- Chapter change: 320ms
- Route aperture: 420ms maximum
- One-time page composition: 600ms maximum

### Rules

- Animate only `transform` and `opacity` wherever possible.
- No more than one dominant motion per viewport.
- No perpetual foreground animation.
- Pause the signal field when the document is hidden.
- Do not use `transition: all`.
- Motion must confirm navigation, hierarchy, or progress.

## 13. Accessibility and testable acceptance criteria

- Every pointer interaction must have a keyboard equivalent.
- Touch users must receive all content without hover.
- All links and controls must retain a minimum 44px target.
- Reduced motion must remove aperture scaling, pointer parallax, chapter movement, and label rolling.
- Static content must remain in the same reading order with motion disabled.
- No animation may flash more than three times in one second.
- Focus indicators must remain visible over every surface.
- Home and Contact must have no vertical or horizontal overflow at 320x568, 390x844, 844x390, and 1440x1000.
- Work and every case study must remain usable at 200% zoom.
- No serious or critical automated accessibility violations may remain.

## 14. Content and tone

- Use one-sentence visible descriptions.
- Prefer nouns and findings over adjectives.
- Avoid generic statements such as `creating unforgettable experiences`.
- Avoid em dashes in public copy.
- Do not repeat a destination already present in navigation.
- Do not label outputs as outcomes.
- Every aggressive typographic line must communicate evidence, ownership, or a decision.

## 15. Anti-patterns

- Giant type used only to look experimental
- Bright ARKKHE-style orange glow
- Full-screen video or WebGL as required content
- Scroll locking or forced scroll snapping
- Custom cursor
- Hidden navigation
- Hover-only project understanding
- Repeated typewriter effects
- Continuous marquee text
- Excessive blur and glass surfaces
- Generic bento cards
- More than one animated background system
- Animating layout properties such as width, height, top, or left when a transform can produce the same effect

## 16. Implementation sequence

### Phase 1: Motion prototype

Build three isolated prototypes before changing page layouts:

1. Navigation label roll
2. Work row weight and rule interaction
3. Route aperture with reduced-motion fallback

Gate: all three work with keyboard, touch, and reduced motion.

### Phase 2: Global shell and Home

1. Add motion tokens and shared easing.
2. Refine active navigation behavior.
3. Add the restrained graphite aperture to Home.
4. Preserve the scroll-free viewport tests.

Gate: Home remains immediately understandable and does not feel busier at rest.

### Phase 3: Work

1. Add project indices.
2. Add weight contrast, line growth, and sibling dimming.
3. Verify no hover dependency on touch.

Gate: selecting Work feels more forceful without introducing preview media.

### Phase 4: Case studies

1. Sequence the opening screen.
2. Add four stage treatments tied to active chapter state.
3. Add the stronger finding moment.
4. Refine Evidence drawer motion.

Gate: the walkthrough feels progressive while all claims remain unchanged.

### Phase 5: Profile and Contact

1. Add restrained timeline response.
2. Add field-line and send-button microinteractions.
3. Recheck every scroll-free Contact state.

Gate: these pages remain quieter than Work and case studies.

### Phase 6: Performance and accessibility QA

1. Test Chromium, Firefox, WebKit, Edge, iOS Safari, and Android Chrome.
2. Test keyboard, touch, reduced motion, 200% zoom, and short-height landscape.
3. Record animation performance and remove any effect that causes layout or paint spikes.
4. Verify direct routes, static export, and no-JavaScript navigation.
5. Capture Home, Work default, Work active, one case-study opening, one final finding, Profile, and Contact.

## 17. Definition of done

- The site feels calm before interaction and decisive during interaction.
- Aggression comes from contrast, timing, and evidence rather than scale or clutter.
- Home and Contact remain scroll-free.
- Work remains title-only.
- Project interiors remain the expressive centre of the portfolio.
- The graphite illustration system remains visually dominant over effects.
- Every interaction is optional for comprehension and safe under reduced motion.
- Performance, accessibility, and cross-browser tests pass.
