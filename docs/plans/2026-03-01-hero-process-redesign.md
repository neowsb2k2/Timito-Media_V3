# Hero & Process Section Redesign

## Context

Timito Media is a performance marketing agency (Astro 5, pure CSS, dark cyberpunk aesthetic). The CEO wants a more premium, studio-level feel (Locomotive/Cuberto) with stronger motion design. Two sections need redesigning:

1. **Hero** — weak messaging + weak visual impact
2. **Process ("Zusammenarbeit")** — generic timeline, template-like visual execution

**Target audience**: CEOs wasting ad budget due to bad data/tracking across industries.
**Animation stack**: Adding GSAP + ScrollTrigger + Framer Motion (React islands in Astro).
**CWV**: Important but animation takes priority.

---

## 1. Hero Section Redesign

### Messaging (Problem-First, Soft Tone)

```
[Monospace label, cyan]
PERFORMANCE MARKETING INFRASTRUKTUR

[Main headline — Unbounded 900, clamp(3rem, 9vw, 6rem)]
Dein Marketing
könnte mehr.

[Subheadline — Inter 400, text-secondary]
Die meisten Unternehmen verlieren 40% ihrer Daten —
und wundern sich, warum ihre Kampagnen nicht skalieren.

[Service pillars — monospace, horizontal row, each with subtle glow]
[GOOGLE & SOCIAL ADS]  [SERVER-SIDE TRACKING]  [WEBDESIGN & CRO]  [STRATEGIE]

[Resolution — text-primary]
Wir bauen die Infrastruktur, die alles verbindet —
von sauberem Tracking bis zur Kampagne, die performt.

[Burning counter — industry average framing]
Ø €12.47 Adspend-Verlust seit Seitenaufruf*
* bei €50k/Monat mit branchenüblichem Datenverlust

[CTAs]
[Primary: Kostenloses Audit anfragen]  [Ghost: Was wir machen ↓]

[Trust bar + Founder avatars (Christina & Mike) + 5.0 Google Reviews]
```

### Visual Design

**Background**: Animated gradient mesh replacing particle canvas
- 3-4 large soft gradient blobs (cyan, pink, deep purple)
- CSS `filter: blur(80px)` for organic movement
- SVG noise grain overlay at 2-3% opacity
- Lighter GPU load than canvas particles

**Key changes from current**:
- Kill "ADS. TRACKING. WEBDESIGN." giant text — replaced with problem-first headline
- Service pillars row shows full scope (not just tracking)
- Burning counter makes the pain tangible but framed as industry average
- Gradient mesh background replaces dated particle network

### Animation Sequence (GSAP)

| Step | Element | Animation | Timing |
|------|---------|-----------|--------|
| 1 | Monospace label | Letter-by-letter type-in | 0ms, 80ms/char |
| 2 | Main headline | Split-word slide-up + opacity, staggered | 400ms, 100ms/word |
| 3 | Pause | — | 800ms |
| 4 | Subheadline | Block fade-in | 1600ms |
| 5 | Service pillars | Stagger fade-in left to right | 1800ms, 150ms each |
| 6 | Counter starts | Number begins ticking (~€0.38/s) | 2000ms |
| 7 | Resolution line | Fade-in + slight slide-up | 2200ms |
| 8 | CTAs | Slide-up with spring easing | 2600ms |
| 9 | Trust bar + avatars | Fade-in | 3000ms |

Total sequence: ~3.5s from preloader completion.

### Burning Counter Spec

- Calculates: €50,000/month * 40% loss = €20,000/month = ~€0.0077/second
- Display updates at 60fps via GSAP ticker
- Format: `€ XX.XX` with monospace font
- Subtle red glow pulse at each full euro milestone
- Small footnote with calculation basis for credibility
- Respects `prefers-reduced-motion` (shows static average instead)

---

## 2. Process Section Redesign (Cinematic Pinned Scroll)

### Concept

Replace the SVG timeline roadmap with a GSAP ScrollTrigger horizontal pinned scroll. The section pins to viewport, user scrolls through 3 cinematic "scenes" — each phase gets full attention.

### Section Header (Before Pin)

```
[Monospace label, cyan]
UNSER PROZESS

[Headline — Unbounded 700]
So arbeiten wir.

[Subheadline]
Drei Phasen. Ein Ziel: Marketing, das skaliert.
```

### Scene Layout (Each Phase)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Mono, accent color]        [Decorative, outline]  │
│  PHASE 01                              02           │
│                                   (faded, next)     │
│  [Headline, large]                                  │
│  Du siehst, wo                                      │
│  dein Geld                                          │
│  verschwindet.                                      │
│                                                     │
│  [Description, text-secondary]                      │
│  Vollständiges Audit deines                         │
│  Trackings, deiner Ads und                          │
│  deiner Website...                                  │
│                                                     │
│  [Badge] → WOCHE 2                                  │
│                                                     │
│  ✓ Tracking Audit                                   │
│  ✓ Ads & Channel Analyse                            │
│  ✓ Budget-Potenzial Report                          │
│  ✓ Quick-Win Liste                                  │
│                                                     │
│  ▬▬▬▬▬▬▬▬▬▬▬░░░░░░░░░░░░░░░░░░░░  33%            │
└─────────────────────────────────────────────────────┘
```

### Three Scenes

**Scene 1 — PHASE 01 (Cyan accent)**
- Headline: "Du siehst, wo dein Geld verschwindet."
- Description: Vollständiges Audit deines Trackings, deiner Ads und deiner Website. Du bekommst eine klare Roadmap — keine PowerPoint-Wüste.
- Timeline: WOCHE 2
- Deliverables: Tracking Audit, Ads & Channel Analyse, Budget-Potenzial Report, Quick-Win Liste

**Scene 2 — PHASE 02 (Pink accent)**
- Headline: "Deine Kampagnen bringen Ergebnisse."
- Description: Google Ads, Social Ads und Landing Pages — live, optimiert und mit sauberem Tracking verbunden.
- Timeline: WOCHE 3–8
- Deliverables: Google & Social Ads Setup, Server-Side Tracking, Landing Pages & CRO, Live Performance Dashboard

**Scene 3 — PHASE 03 (Green accent)**
- Headline: "Dein Marketing skaliert von allein."
- Description: Cross-Channel Optimierung, systematisches Testing und monatliche Strategie-Calls direkt mit den Gründern.
- Timeline: AB MONAT 3
- Deliverables: Cross-Channel Optimierung, Systematisches A/B Testing, Budget Scaling Strategie, Monatliche Founder Calls

### GSAP ScrollTrigger Spec

```
Pin configuration:
- trigger: .process-section
- pin: true
- scrub: 1 (smooth scrubbing, 1s catch-up)
- start: "top top"
- end: "+=300%" (3x viewport height of scroll distance)

Scene transitions:
- 0%–33%: Scene 1 active
- 33%–35%: Crossfade transition (Scene 1 out left, Scene 2 in from right)
- 35%–66%: Scene 2 active
- 66%–68%: Crossfade transition
- 68%–100%: Scene 3 active

Per-scene entrance:
- Phase label: clipPath reveal left-to-right
- Headline: split-word stagger slide-up (100ms/word)
- Description: fade-in (300ms delay after headline)
- Timeline badge: scale from 0 + fade
- Deliverables: stagger fade-in (100ms each, 200ms after badge)
- Decorative number on right: parallax slide (moves slower than content)

Color transitions:
- Background gradient blob shifts: cyan(0,212,255) → pink(255,45,120) → green(63,185,80)
- Accent color on labels/badges transitions in sync
- Progress bar color matches current phase accent

Exit:
- On scroll past 300%, section unpins
- Last scene content stays visible as section scrolls away
```

### Progress Indicator

- Thin horizontal line (2px) at bottom of pinned viewport
- Fills left-to-right as user scrolls through pin
- Color matches current phase accent
- 3 small dot markers at 33%, 66%, 100%

### Mobile Adaptation

On screens < 768px:
- No horizontal pin (poor mobile UX for pinned scroll)
- Instead: vertical scroll with snap-to-scene behavior
- Each scene is a near-full-viewport card
- Swipe/scroll between scenes naturally
- Same content, same animations (triggered by intersection instead of scrub)

### Visual Design Details

- No glass cards, no feature tile grids
- Clean, editorial layout — typography + whitespace
- Phase numbers: `clamp(8rem, 15vw, 12rem)`, outline stroke, 10% opacity — decorative only
- Deliverables: monospace checkmarks, compact list, no wrappers
- Background: dark base with one large gradient blob that color-shifts per phase
- Grain texture consistent with Hero

---

## 3. Technical Requirements

### New Dependencies

```
gsap (with ScrollTrigger plugin)
framer-motion (via @astrojs/react for React islands)
@astrojs/react
```

### Astro Integration

- GSAP: loaded as vanilla JS in `<script>` blocks (no framework needed)
- Framer Motion: used in `.tsx` React island components for micro-interactions (buttons, hover states, card entrances)
- `@astrojs/react` added to astro.config.mjs for island support

### Performance Considerations

- GSAP + ScrollTrigger: ~30KB gzipped — acceptable for the animation quality gained
- Framer Motion: ~16KB gzipped — loaded only on islands that need it
- Gradient mesh: CSS-based, no canvas — lighter than current particle system
- Lazy-load GSAP animations below fold (register ScrollTrigger only when needed)
- `will-change: transform` on animated elements, remove after animation completes
- Respect `prefers-reduced-motion`: disable scrubbing, show static layout

### Files to Modify

- `src/components/Hero.astro` — full rewrite
- `src/components/Process.astro` — full rewrite
- `src/layouts/BaseLayout.astro` — add GSAP script loading
- `astro.config.mjs` — add @astrojs/react integration
- `package.json` — add dependencies
- New: `src/components/react/MagneticButton.tsx` (Framer Motion island)
- New: `src/components/react/BurningCounter.tsx` (Framer Motion island)

---

## 4. Design Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Hero messaging | Problem-first, soft tone | CEOs need to feel understood, not attacked |
| Hero background | Gradient mesh | More modern than particles, lighter on GPU |
| Service visibility | Pillars row in Hero | Shows full scope immediately — not just tracking |
| Process format | Pinned horizontal scroll | Signature studio-agency pattern, premium feel |
| Process copy | Outcome-focused | "Du siehst wo dein Geld verschwindet" > "Full-Stack Audit" |
| Animation library | GSAP + ScrollTrigger | Industry standard for scroll-driven experiences |
| Micro-interactions | Framer Motion via React islands | Spring physics for buttons, counters, hover states |
| Mobile process | Vertical snap scroll | Pinned scroll is poor UX on mobile |
| CWV vs animation | Animation wins | Accepted trade-off per stakeholder decision |
