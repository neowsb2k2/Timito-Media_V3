# Hero & Process Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the Hero and Process sections for a studio-level premium feel with GSAP/Framer Motion animations, problem-first CEO messaging, and cinematic scroll-driven experiences.

**Architecture:** Astro 5 static site with new GSAP + ScrollTrigger for scroll-driven animations loaded as vanilla JS, Framer Motion via React islands (`@astrojs/react`) for micro-interactions (burning counter, magnetic buttons). Hero gets gradient mesh background + split-text GSAP animation. Process gets horizontal pinned-scroll with 3 full-viewport scenes.

**Tech Stack:** Astro 5, GSAP + ScrollTrigger (vanilla JS), Framer Motion + React (islands), CSS custom properties, Lenis smooth scroll (existing).

**Design Doc:** `docs/plans/2026-03-01-hero-process-redesign.md`

---

### Task 1: Install dependencies and configure Astro React integration

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs`

**Step 1: Install GSAP, React, and Framer Motion**

Run:
```bash
npm install gsap @astrojs/react react react-dom framer-motion
npm install -D @types/react @types/react-dom
```

**Step 2: Add React integration to Astro config**

Modify `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://timito-media.at',
  output: 'static',
  adapter: netlify(),
  integrations: [sitemap(), react()],
  build: {
    inlineStylesheets: 'auto',
  },
});
```

**Step 3: Verify build succeeds**

Run: `npm run build`
Expected: Build completes with no errors. React integration registered.

**Step 4: Commit**

```bash
git add package.json package-lock.json astro.config.mjs
git commit -m "chore: add GSAP, React, Framer Motion dependencies and Astro React integration"
```

---

### Task 2: Create BurningCounter React island component

**Files:**
- Create: `src/components/react/BurningCounter.tsx`

**Step 1: Create the react directory**

Run: `mkdir -p src/components/react`

**Step 2: Write BurningCounter component**

Create `src/components/react/BurningCounter.tsx`:

```tsx
import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';

/**
 * BurningCounter — shows real-time ad spend waste calculation.
 * €50,000/month * 40% loss = €20,000/month = ~€0.00771/second
 */
const LOSS_PER_SECOND = (50_000 * 0.4) / (30 * 24 * 60 * 60); // ~€0.00771/s

export default function BurningCounter() {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number>(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      // Show a static average instead
      setValue(12.47);
      return;
    }

    startTimeRef.current = Date.now();
    let frameId: number;

    function tick() {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      setValue(elapsed * LOSS_PER_SECOND);
      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [prefersReduced]);

  const euros = value.toFixed(2);
  const isNewEuro = Math.floor(value) > Math.floor(value - LOSS_PER_SECOND);

  return (
    <div className="burning-counter">
      <span className="burning-counter__label">
        Ø Adspend-Verlust seit Seitenaufruf
      </span>
      <span
        className={`burning-counter__value${isNewEuro ? ' burning-counter__value--pulse' : ''}`}
      >
        €&thinsp;{euros}
      </span>
      <span className="burning-counter__footnote">
        * bei €50k/Monat mit branchenüblichem Datenverlust
      </span>
    </div>
  );
}
```

**Step 3: Verify the file compiles**

Run: `npm run build`
Expected: Build succeeds (component isn't used yet, but no TS errors).

**Step 4: Commit**

```bash
git add src/components/react/BurningCounter.tsx
git commit -m "feat: add BurningCounter React island component"
```

---

### Task 3: Rewrite Hero section — HTML structure and content

**Files:**
- Modify: `src/components/Hero.astro` (full rewrite)

**Step 1: Rewrite Hero.astro template and frontmatter**

Replace the entire content of `src/components/Hero.astro` with the new structure. Keep the `BrandMarquee` import at bottom.

```astro
---
import SectionLabel from './SectionLabel.astro';
import SplitWords from './SplitWords.astro';
import BrandMarquee from './BrandMarquee.astro';
import BurningCounter from './react/BurningCounter.tsx';
---

<section id="hero" class="hero">
  <!-- Gradient mesh background -->
  <div class="hero__mesh" aria-hidden="true">
    <div class="hero__blob hero__blob--cyan"></div>
    <div class="hero__blob hero__blob--pink"></div>
    <div class="hero__blob hero__blob--purple"></div>
    <div class="hero__grain"></div>
  </div>

  <div class="container hero__container">
    <!-- Monospace label -->
    <div class="hero__label" data-hero-label>
      <SectionLabel text="Performance Marketing Infrastruktur" />
    </div>

    <!-- Main headline (H1 for SEO + visual) -->
    <h1 class="hero__headline headline-reveal" data-hero-headline>
      <span class="h-line" style="overflow:hidden">
        <SplitWords text="Dein Marketing" />
      </span>
      <span class="h-line hero__headline--accent" style="overflow:hidden">
        <SplitWords text="könnte mehr." />
      </span>
    </h1>

    <!-- Subheadline -->
    <p class="hero__sub" data-hero-sub>
      Die meisten Unternehmen verlieren 40% ihrer Daten &mdash;
      und wundern sich, warum ihre Kampagnen nicht skalieren.
    </p>

    <!-- Service pillars -->
    <div class="hero__pillars" data-hero-pillars>
      <span class="hero__pillar">Google &amp; Social Ads</span>
      <span class="hero__pillar">Server-Side Tracking</span>
      <span class="hero__pillar">Webdesign &amp; CRO</span>
      <span class="hero__pillar">Strategie</span>
    </div>

    <!-- Resolution -->
    <p class="hero__resolution" data-hero-resolution>
      Wir bauen die Infrastruktur, die alles verbindet &mdash;
      von sauberem Tracking bis zur Kampagne, die performt.
    </p>

    <!-- Burning counter (React island) -->
    <div class="hero__counter" data-hero-counter>
      <BurningCounter client:visible />
    </div>

    <!-- CTA buttons -->
    <div class="hero__cta" data-hero-cta>
      <a href="#kontakt" class="btn-primary btn--lg" data-magnetic>
        Kostenloses Audit anfragen
      </a>
      <a href="#leistungen" class="btn-ghost btn--lg" data-magnetic>
        Was wir machen &darr;
      </a>
    </div>

    <!-- Trust bar -->
    <div class="hero__bar" data-hero-bar>
      <div class="hero__bar-founders">
        <img
          src="/assets/team/christina.webp"
          alt="Christina Bauer, Co-Founderin"
          width="80"
          height="80"
          class="hero__bar-avatar"
          loading="eager"
        />
        <img
          src="/assets/team/mike.webp"
          alt="Mike Wendl, Co-Founder"
          width="80"
          height="80"
          class="hero__bar-avatar hero__bar-avatar--overlap"
          loading="eager"
        />
      </div>

      <span class="hero__bar-divider" aria-hidden="true"></span>

      <div class="hero__bar-trust">
        <span>&#10003; 15 Jahre Expertise</span>
        <span>&middot;</span>
        <span>&#10003; &euro;8M+ verwaltetes Budget</span>
        <span>&middot;</span>
        <span>&#10003; DSGVO-konform</span>
      </div>

      <span class="hero__bar-divider" aria-hidden="true"></span>

      <div class="hero__bar-reviews">
        <span class="hero__bar-stars" aria-label="5 von 5 Sternen">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span class="hero__bar-rating">5.0 Google Reviews</span>
      </div>
    </div>
  </div>
</section>

<!-- Client logos marquee -->
<BrandMarquee />
```

**Step 2: Verify build with just the template**

Run: `npm run build`
Expected: May have missing styles — that's fine, we add those in the next task. No template/import errors.

**Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: rewrite Hero section HTML with problem-first messaging and service pillars"
```

---

### Task 4: Style the new Hero section

**Files:**
- Modify: `src/components/Hero.astro` (add `<style>` block)

**Step 1: Add the complete style block to Hero.astro**

Append after the `<BrandMarquee />` closing tag and before any `<script>`:

```css
<style>
  /* ==========================================================================
     HERO — Problem-first, gradient mesh background, premium typography
     ========================================================================== */

  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 8rem;
    padding-bottom: 3rem;
    overflow: hidden;
  }

  .hero__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  /* --- Gradient mesh background --- */

  .hero__mesh {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }

  .hero__blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    will-change: transform;
    animation: blobDrift 20s ease-in-out infinite alternate;
  }

  .hero__blob--cyan {
    width: 600px;
    height: 600px;
    top: -10%;
    left: 10%;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.12), transparent 70%);
    animation-delay: 0s;
  }

  .hero__blob--pink {
    width: 500px;
    height: 500px;
    top: 30%;
    right: -5%;
    background: radial-gradient(circle, rgba(255, 45, 120, 0.08), transparent 70%);
    animation-delay: -7s;
  }

  .hero__blob--purple {
    width: 450px;
    height: 450px;
    bottom: -10%;
    left: 30%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.06), transparent 70%);
    animation-delay: -14s;
  }

  @keyframes blobDrift {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -20px) scale(1.05); }
    66% { transform: translate(-20px, 15px) scale(0.95); }
    100% { transform: translate(10px, -10px) scale(1.02); }
  }

  .hero__grain {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
    pointer-events: none;
  }

  /* --- Label --- */

  .hero__label {
    opacity: 0;
  }

  .hero__label.is-revealed {
    opacity: 1;
  }

  /* --- Headline --- */

  .hero__headline {
    font-family: 'Unbounded', system-ui, sans-serif;
    font-size: clamp(2.8rem, 8vw, 5.5rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .hero__headline--accent {
    color: var(--accent-cyan);
    text-shadow: 0 0 40px rgba(0, 212, 255, 0.25);
  }

  /* --- Subheadline --- */

  .hero__sub {
    font: 400 clamp(1rem, 1.5vw, 1.2rem)/1.6 var(--font-body);
    color: var(--text-secondary);
    max-width: 600px;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .hero__sub.is-revealed {
    opacity: 1;
    transform: translateY(0);
  }

  /* --- Service pillars --- */

  .hero__pillars {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    opacity: 0;
  }

  .hero__pillars.is-revealed {
    opacity: 1;
  }

  .hero__pillar {
    font: 600 0.65rem/1 var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.4rem 0.75rem;
    border-radius: 4px;
    color: var(--accent-cyan);
    background: rgba(0, 212, 255, 0.06);
    border: 1px solid rgba(0, 212, 255, 0.12);
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .hero__pillars.is-revealed .hero__pillar {
    opacity: 1;
    transform: translateY(0);
  }

  .hero__pillars.is-revealed .hero__pillar:nth-child(1) { transition-delay: 0s; }
  .hero__pillars.is-revealed .hero__pillar:nth-child(2) { transition-delay: 0.1s; }
  .hero__pillars.is-revealed .hero__pillar:nth-child(3) { transition-delay: 0.2s; }
  .hero__pillars.is-revealed .hero__pillar:nth-child(4) { transition-delay: 0.3s; }

  /* --- Resolution --- */

  .hero__resolution {
    font: 500 clamp(1rem, 1.4vw, 1.125rem)/1.6 var(--font-body);
    color: var(--text-primary);
    max-width: 580px;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .hero__resolution.is-revealed {
    opacity: 1;
    transform: translateY(0);
  }

  /* --- Burning counter --- */

  .hero__counter {
    margin-bottom: 2rem;
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  .hero__counter.is-revealed {
    opacity: 1;
  }

  /* Counter component styles (global because React island) */
  :global(.burning-counter) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  :global(.burning-counter__label) {
    font: 500 0.7rem/1 var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  :global(.burning-counter__value) {
    font: 700 clamp(1.5rem, 3vw, 2.2rem)/1 var(--font-mono);
    color: var(--accent-cyan);
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
    transition: text-shadow 0.3s ease;
    tabular-nums: true;
    font-variant-numeric: tabular-nums;
  }

  :global(.burning-counter__value--pulse) {
    text-shadow: 0 0 30px rgba(255, 45, 120, 0.5);
  }

  :global(.burning-counter__footnote) {
    font: 400 0.65rem/1.4 var(--font-body);
    color: var(--text-faint);
  }

  /* --- CTA --- */

  .hero__cta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .hero__cta.is-revealed {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-primary.btn--lg {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .btn-ghost.btn--lg {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  /* --- Trust bar --- */

  .hero__bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    margin-top: auto;
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  .hero__bar.is-revealed {
    opacity: 1;
  }

  .hero__bar-founders {
    display: flex;
    align-items: center;
  }

  .hero__bar-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--bg-primary);
    display: block;
  }

  .hero__bar-avatar--overlap {
    margin-left: -20px;
  }

  .hero__bar-divider {
    width: 1px;
    height: 40px;
    background: var(--border);
    flex-shrink: 0;
  }

  .hero__bar-trust {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--accent-cyan);
  }

  .hero__bar-reviews {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .hero__bar-stars {
    color: var(--accent-yellow);
    font-size: 1.125rem;
    letter-spacing: 0.05em;
  }

  .hero__bar-rating {
    font-size: 0.875rem;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  /* --- Responsive --- */

  @media (max-width: 1023px) {
    .hero {
      min-height: auto;
      padding-top: 7rem;
      padding-bottom: 2.5rem;
    }

    .hero__bar-divider {
      display: none;
    }

    .hero__bar {
      gap: 1rem;
    }

    .hero__bar-avatar {
      width: 56px;
      height: 56px;
    }
  }

  @media (max-width: 639px) {
    .hero {
      padding-top: 6rem;
    }

    .hero__cta {
      flex-direction: column;
      width: 100%;
    }

    .hero__cta a {
      text-align: center;
    }

    .hero__pillars {
      gap: 0.35rem;
    }

    .hero__pillar {
      font-size: 0.55rem;
      padding: 0.3rem 0.6rem;
    }

    .hero__blob--cyan {
      width: 350px;
      height: 350px;
    }

    .hero__blob--pink {
      width: 300px;
      height: 300px;
    }

    .hero__blob--purple {
      width: 250px;
      height: 250px;
    }
  }

  /* --- Reduced motion --- */

  @media (prefers-reduced-motion: reduce) {
    .hero__blob {
      animation: none;
    }

    .hero__label,
    .hero__sub,
    .hero__pillars,
    .hero__resolution,
    .hero__counter,
    .hero__cta,
    .hero__bar {
      opacity: 1;
      transform: none;
    }

    .hero__pillar {
      opacity: 1;
      transform: none;
    }
  }
</style>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Clean build, no CSS errors.

**Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Hero styles — gradient mesh, pillars, counter, responsive"
```

---

### Task 5: Add Hero GSAP animation sequence

**Files:**
- Modify: `src/components/Hero.astro` (add `<script>` block)

**Step 1: Add the GSAP animation script to Hero.astro**

Append the following `<script>` block at the end of `Hero.astro` (after the `<style>` block):

```html
<script>
  import { gsap } from 'gsap';

  (function () {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Elements
    const label = hero.querySelector('[data-hero-label]');
    const headline = hero.querySelector('[data-hero-headline]');
    const sub = hero.querySelector('[data-hero-sub]');
    const pillars = hero.querySelector('[data-hero-pillars]');
    const resolution = hero.querySelector('[data-hero-resolution]');
    const counter = hero.querySelector('[data-hero-counter]');
    const cta = hero.querySelector('[data-hero-cta]');
    const bar = hero.querySelector('[data-hero-bar]');

    if (prefersReduced) {
      // Show everything immediately
      [label, sub, pillars, resolution, counter, cta, bar].forEach(el => {
        if (el) el.classList.add('is-revealed');
      });
      // Also reveal headline words
      if (headline) {
        headline.querySelectorAll('.h-word').forEach(w => w.classList.add('is-visible'));
      }
      return;
    }

    function runSequence() {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Label type-in effect
      if (label) {
        tl.call(() => label.classList.add('is-revealed'), [], 0);
      }

      // 2. Headline word reveal (staggered)
      if (headline) {
        const words = headline.querySelectorAll('.h-word');
        tl.call(() => {
          let i = 0;
          words.forEach((w) => {
            (w as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
            w.classList.add('is-visible');
            i++;
          });
        }, [], 0.3);
      }

      // 3. Subheadline
      if (sub) {
        tl.call(() => sub.classList.add('is-revealed'), [], 1.4);
      }

      // 4. Service pillars
      if (pillars) {
        tl.call(() => pillars.classList.add('is-revealed'), [], 1.6);
      }

      // 5. Resolution
      if (resolution) {
        tl.call(() => resolution.classList.add('is-revealed'), [], 2.0);
      }

      // 6. Counter
      if (counter) {
        tl.call(() => counter.classList.add('is-revealed'), [], 2.2);
      }

      // 7. CTA buttons
      if (cta) {
        tl.call(() => cta.classList.add('is-revealed'), [], 2.4);
      }

      // 8. Trust bar
      if (bar) {
        tl.call(() => bar.classList.add('is-revealed'), [], 2.8);
      }
    }

    // Wait for preloader to finish
    if (document.querySelector('.preloader')) {
      window.addEventListener('preloader-done', runSequence, { once: true });
    } else {
      runSequence();
    }

    // Cleanup for Astro SPA navigation
    document.addEventListener('astro:before-swap', () => {
      gsap.killTweensOf('*');
    }, { once: true });
  })();
</script>
```

**Step 2: Verify dev server**

Run: `npm run dev`
Expected: Hero loads with staggered animation sequence after preloader. All elements reveal in order.

**Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Hero GSAP animation sequence with staggered reveals"
```

---

### Task 6: Rewrite Process section — HTML structure with cinematic scenes

**Files:**
- Modify: `src/components/Process.astro` (full rewrite)

**Step 1: Rewrite Process.astro with pinned scroll scene structure**

Replace the entire content of `src/components/Process.astro`:

```astro
---
import SectionLabel from './SectionLabel.astro';
import SplitWords from './SplitWords.astro';

const scenes = [
  {
    phase: '01',
    accent: '--accent-cyan',
    accentRgb: '0, 212, 255',
    headline: 'Du siehst, wo dein Geld verschwindet.',
    description: 'Vollständiges Audit deines Trackings, deiner Ads und deiner Website. Du bekommst eine klare Roadmap — keine PowerPoint-Wüste.',
    time: 'Woche 2',
    deliverables: [
      'Tracking Audit',
      'Ads & Channel Analyse',
      'Budget-Potenzial Report',
      'Quick-Win Liste',
    ],
  },
  {
    phase: '02',
    accent: '--accent-pink',
    accentRgb: '255, 45, 120',
    headline: 'Deine Kampagnen bringen Ergebnisse.',
    description: 'Google Ads, Social Ads und Landing Pages — live, optimiert und mit sauberem Tracking verbunden.',
    time: 'Woche 3–8',
    deliverables: [
      'Google & Social Ads Setup',
      'Server-Side Tracking',
      'Landing Pages & CRO',
      'Live Performance Dashboard',
    ],
  },
  {
    phase: '03',
    accent: '--accent-green',
    accentRgb: '63, 185, 80',
    headline: 'Dein Marketing skaliert von allein.',
    description: 'Cross-Channel Optimierung, systematisches Testing und monatliche Strategie-Calls direkt mit den Gründern.',
    time: 'Ab Monat 3',
    deliverables: [
      'Cross-Channel Optimierung',
      'Systematisches A/B Testing',
      'Budget Scaling Strategie',
      'Monatliche Founder Calls',
    ],
  },
];
---

<section id="ablauf" class="process-section">
  <!-- Header (before pin) -->
  <div class="container">
    <div class="process__header">
      <SectionLabel text="Unser Prozess" />
      <h2 class="giant-title headline-reveal">
        <span class="h-line" style="overflow:hidden"><SplitWords text="So arbeiten" /></span>
        <span class="h-line line-accent" style="overflow:hidden"><SplitWords text="wir." /></span>
      </h2>
      <p class="process__sub reveal">Drei Phasen. Ein Ziel: Marketing, das skaliert.</p>
    </div>
  </div>

  <!-- Pinned scroll area (desktop) / Snap scroll (mobile) -->
  <div class="process__pin" data-process-pin>
    <!-- Background gradient blob -->
    <div class="process__bg-blob" data-process-blob aria-hidden="true"></div>
    <!-- Grain overlay -->
    <div class="process__grain" aria-hidden="true"></div>

    <!-- Scene container -->
    <div class="process__scenes" data-process-scenes>
      {scenes.map((scene, i) => (
        <div
          class={`process__scene ${i === 0 ? 'is-active' : ''}`}
          data-scene={i}
          style={`--scene-accent: var(${scene.accent}); --scene-rgb: ${scene.accentRgb};`}
        >
          <!-- Decorative large number -->
          <span class="process__deco-num" aria-hidden="true" data-scene-deco>
            {scenes[i + 1]?.phase || '✓'}
          </span>

          <div class="process__scene-content">
            <!-- Phase label -->
            <span class="process__phase" data-scene-phase>Phase {scene.phase}</span>

            <!-- Headline -->
            <h3 class="process__scene-title" data-scene-title>
              {scene.headline}
            </h3>

            <!-- Description -->
            <p class="process__scene-desc" data-scene-desc>
              {scene.description}
            </p>

            <!-- Timeline badge -->
            <span class="process__time-badge" data-scene-badge>→ {scene.time}</span>

            <!-- Deliverables -->
            <ul class="process__deliverables" data-scene-deliverables>
              {scene.deliverables.map((d) => (
                <li class="process__deliverable">
                  <span class="process__check" aria-hidden="true">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    <!-- Progress bar -->
    <div class="process__progress" data-process-progress aria-hidden="true">
      <div class="process__progress-fill" data-process-fill></div>
      <div class="process__progress-dots">
        <span class="process__progress-dot" data-dot="0"></span>
        <span class="process__progress-dot" data-dot="1"></span>
        <span class="process__progress-dot" data-dot="2"></span>
      </div>
    </div>
  </div>

  <!-- CTA after section -->
  <div class="container">
    <div class="process__cta reveal">
      <a href="#kontakt" class="btn-primary btn--lg" data-magnetic>
        Kostenloses Audit starten &rarr;
      </a>
    </div>
  </div>
</section>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Builds with no template errors.

**Step 3: Commit**

```bash
git add src/components/Process.astro
git commit -m "feat: rewrite Process section with cinematic 3-scene layout"
```

---

### Task 7: Style the new Process section

**Files:**
- Modify: `src/components/Process.astro` (add `<style>` block)

**Step 1: Add complete style block**

Append after the closing `</section>` and CTA div:

```css
<style>
  /* ==========================================================================
     PROCESS — Cinematic pinned horizontal scroll, 3 scenes
     ========================================================================== */

  .process-section {
    position: relative;
    overflow: visible;
  }

  /* --- Header --- */

  .process__header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .process__header :global(.section-label) {
    justify-content: center;
  }

  .process__sub {
    color: var(--text-secondary);
    max-width: 500px;
    margin: 1rem auto 0;
    text-align: center;
  }

  /* --- Pin area --- */

  .process__pin {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .process__bg-blob {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(100px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(var(--scene-rgb, 0, 212, 255), 0.1), transparent 70%);
    transition: background 1s ease;
    pointer-events: none;
    z-index: 0;
  }

  .process__grain {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
    pointer-events: none;
    z-index: 1;
  }

  /* --- Scenes container --- */

  .process__scenes {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .process__scene {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 max(2rem, calc((100vw - var(--container, 1200px)) / 2 + 2rem));
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }

  .process__scene.is-active {
    opacity: 1;
    pointer-events: auto;
  }

  /* --- Decorative number --- */

  .process__deco-num {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Unbounded', system-ui, sans-serif;
    font-size: clamp(8rem, 15vw, 12rem);
    font-weight: 900;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.06);
    user-select: none;
    pointer-events: none;
  }

  /* --- Scene content --- */

  .process__scene-content {
    max-width: 560px;
  }

  .process__phase {
    display: inline-block;
    font: 700 0.65rem/1 var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--scene-accent);
    padding: 0.3rem 0.65rem;
    border-radius: 4px;
    background: rgba(var(--scene-rgb), 0.1);
    border: 1px solid rgba(var(--scene-rgb), 0.2);
    margin-bottom: 1.25rem;
  }

  .process__scene-title {
    font: 700 clamp(1.6rem, 3.5vw, 2.6rem)/1.15 var(--font-heading);
    color: var(--text-primary);
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
  }

  .process__scene-desc {
    font: 400 clamp(0.9rem, 1.2vw, 1.05rem)/1.6 var(--font-body);
    color: var(--text-secondary);
    margin-bottom: 1.25rem;
  }

  .process__time-badge {
    display: inline-block;
    font: 600 0.7rem/1 var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--scene-accent);
    margin-bottom: 1.25rem;
  }

  /* --- Deliverables --- */

  .process__deliverables {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .process__deliverable {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font: 400 0.85rem/1.4 var(--font-mono);
    color: var(--text-secondary);
  }

  .process__check {
    color: var(--scene-accent);
    font-size: 0.8rem;
    flex-shrink: 0;
  }

  /* --- Progress bar --- */

  .process__progress {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: min(400px, 80vw);
    height: 2px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 2px;
    z-index: 5;
  }

  .process__progress-fill {
    height: 100%;
    width: 0%;
    background: var(--accent-cyan);
    border-radius: 2px;
    transition: width 0.3s ease, background-color 0.6s ease;
  }

  .process__progress-dots {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

  .process__progress-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .process__progress-dot.is-active {
    background: var(--accent-cyan);
    border-color: var(--accent-cyan);
    box-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
  }

  /* --- CTA --- */

  .process__cta {
    text-align: center;
    padding: 3rem 0 1rem;
  }

  /* === RESPONSIVE: MOBILE === */

  @media (max-width: 767px) {
    .process__pin {
      height: auto;
      overflow: visible;
    }

    .process__scenes {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 1.25rem 3rem;
    }

    .process__scene {
      position: static;
      opacity: 1;
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      padding: 2rem 1.5rem;
      border-radius: var(--radius);
      background: rgba(17, 17, 24, 0.6);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(var(--scene-rgb), 0.12);
    }

    /* Mobile scroll-triggered reveal */
    .process__scene {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .process__scene.is-mobile-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .process__deco-num {
      position: static;
      transform: none;
      font-size: 3rem;
      opacity: 0.15;
      margin-bottom: -1rem;
    }

    .process__scene-content {
      max-width: 100%;
    }

    .process__progress {
      display: none;
    }

    .process__bg-blob {
      display: none;
    }
  }

  /* === REDUCED MOTION === */

  @media (prefers-reduced-motion: reduce) {
    .process__scene {
      opacity: 1;
      transition: none;
    }

    .process__progress-fill {
      transition: none;
    }

    .process__bg-blob {
      transition: none;
    }
  }
</style>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds, no CSS errors.

**Step 3: Commit**

```bash
git add src/components/Process.astro
git commit -m "feat: add Process section styles — scenes, progress bar, mobile, reduced motion"
```

---

### Task 8: Add Process GSAP ScrollTrigger animation

**Files:**
- Modify: `src/components/Process.astro` (add `<script>` block)

**Step 1: Add the GSAP ScrollTrigger script**

Append at the end of `Process.astro`:

```html
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  (function () {
    const section = document.querySelector<HTMLElement>('.process-section');
    const pinEl = document.querySelector<HTMLElement>('[data-process-pin]');
    if (!section || !pinEl) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const scenes = pinEl.querySelectorAll<HTMLElement>('[data-scene]');
    const progressFill = pinEl.querySelector<HTMLElement>('[data-process-fill]');
    const progressDots = pinEl.querySelectorAll<HTMLElement>('[data-dot]');
    const bgBlob = pinEl.querySelector<HTMLElement>('[data-process-blob]');

    const COLORS = [
      { rgb: '0, 212, 255', var: 'var(--accent-cyan)' },
      { rgb: '255, 45, 120', var: 'var(--accent-pink)' },
      { rgb: '63, 185, 80', var: 'var(--accent-green)' },
    ];

    // ── Mobile: intersection-based reveals ──
    if (isMobile || prefersReduced) {
      if (prefersReduced) {
        scenes.forEach(s => {
          s.classList.add('is-active');
          s.classList.add('is-mobile-visible');
        });
        return;
      }

      const mobileObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-mobile-visible');
            mobileObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.2 });

      scenes.forEach(s => mobileObs.observe(s));
      return;
    }

    // ── Desktop: GSAP ScrollTrigger pinned scroll ──

    // Set initial state
    scenes.forEach((s, i) => {
      if (i > 0) {
        gsap.set(s, { opacity: 0, x: 60 });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: pinEl,
        scrub: 1,
        start: 'top top',
        end: '+=300%',
        onUpdate: (self) => {
          const p = self.progress;

          // Update progress bar
          if (progressFill) {
            progressFill.style.width = `${p * 100}%`;
          }

          // Determine active scene
          let activeIdx = 0;
          if (p >= 0.66) activeIdx = 2;
          else if (p >= 0.33) activeIdx = 1;

          // Update progress dots
          progressDots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i <= activeIdx);
          });

          // Update progress bar color
          if (progressFill) {
            progressFill.style.backgroundColor = COLORS[activeIdx].var;
          }

          // Update blob color
          if (bgBlob) {
            bgBlob.style.background = `radial-gradient(circle, rgba(${COLORS[activeIdx].rgb}, 0.1), transparent 70%)`;
          }
        },
      },
    });

    // Scene 1 → Scene 2 transition (at 30%-36% of timeline)
    tl.to(scenes[0], {
      opacity: 0,
      x: -60,
      duration: 0.03,
    }, 0.30);

    tl.fromTo(scenes[1], {
      opacity: 0,
      x: 60,
    }, {
      opacity: 1,
      x: 0,
      duration: 0.04,
    }, 0.32);

    // Scene 2 → Scene 3 transition (at 63%-69%)
    tl.to(scenes[1], {
      opacity: 0,
      x: -60,
      duration: 0.03,
    }, 0.63);

    tl.fromTo(scenes[2], {
      opacity: 0,
      x: 60,
    }, {
      opacity: 1,
      x: 0,
      duration: 0.04,
    }, 0.65);

    // Cleanup
    document.addEventListener('astro:before-swap', () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf('*');
    }, { once: true });
  })();
</script>
```

**Step 2: Test on dev server**

Run: `npm run dev`
Expected: Process section pins on scroll. 3 scenes transition with crossfade. Progress bar fills. Blob color shifts. Mobile shows vertical cards with scroll reveal.

**Step 3: Commit**

```bash
git add src/components/Process.astro
git commit -m "feat: add Process GSAP ScrollTrigger pinned animation with scene transitions"
```

---

### Task 9: Integrate Lenis with GSAP ScrollTrigger

**Files:**
- Modify: `src/layouts/BaseLayout.astro:185-201` (the Lenis init script)

**Step 1: Update BaseLayout Lenis script to sync with GSAP ScrollTrigger**

In `BaseLayout.astro`, find the existing Lenis initialization (around line 186-200) and update it to integrate with GSAP's ScrollTrigger:

Replace the Lenis initialization block:
```ts
import Lenis from 'lenis';

// ===== 1. Smooth Scroll =====
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
(window as any).__lenis = lenis;
```

With:
```ts
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ===== 1. Smooth Scroll (Lenis + GSAP ScrollTrigger sync) =====
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});

// Sync Lenis scroll position with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time: number) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

(window as any).__lenis = lenis;
```

**Step 2: Verify dev server**

Run: `npm run dev`
Expected: Smooth scroll still works. ScrollTrigger animations (Process section) sync with Lenis — no jank or double-scrolling.

**Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: sync Lenis smooth scroll with GSAP ScrollTrigger"
```

---

### Task 10: Visual QA and polish pass

**Files:**
- Possibly modify: `src/components/Hero.astro` (tweaks)
- Possibly modify: `src/components/Process.astro` (tweaks)

**Step 1: Run dev server and test the full flow**

Run: `npm run dev`

Check these items:
- [ ] Hero: Preloader finishes → animation sequence plays in order
- [ ] Hero: Gradient mesh blobs animate smoothly
- [ ] Hero: Service pillars display horizontally, wrap on mobile
- [ ] Hero: BurningCounter ticks up in real-time
- [ ] Hero: CTAs have magnetic effect
- [ ] Hero: Trust bar with avatars and stars displays correctly
- [ ] Process: Header text reveals on scroll
- [ ] Process: Section pins and scenes transition on scroll
- [ ] Process: Progress bar fills and dots activate
- [ ] Process: Background blob color shifts per phase
- [ ] Process: Decorative numbers visible and faded
- [ ] Process: CTA button appears after unpin
- [ ] Mobile: Hero stacks vertically, counter works
- [ ] Mobile: Process shows vertical cards with scroll reveal (no pin)
- [ ] Reduced motion: All animations disabled, content visible
- [ ] Lenis + ScrollTrigger: No jank, smooth scroll throughout
- [ ] Build: `npm run build` completes without errors

**Step 2: Fix any issues found**

Apply targeted fixes for visual bugs, spacing, or timing issues.

**Step 3: Final build verification**

Run: `npm run build && npm run preview`
Expected: Production build works, preview shows correct behavior.

**Step 4: Commit**

```bash
git add -A
git commit -m "fix: visual QA polish for Hero and Process sections"
```

---

## Task Dependencies

```
Task 1 (deps) → Task 2 (counter) → Task 3 (hero HTML) → Task 4 (hero CSS) → Task 5 (hero GSAP)
                                                                                       ↓
Task 1 (deps) → Task 6 (process HTML) → Task 7 (process CSS) → Task 8 (process GSAP) → Task 9 (Lenis sync)
                                                                                       ↓
                                                                               Task 10 (QA)
```

**Note:** Tasks 3-5 (Hero) and Tasks 6-8 (Process) can be worked in parallel after Task 1 completes, but Task 9 depends on both being done. Task 10 is the final pass after everything is integrated.
