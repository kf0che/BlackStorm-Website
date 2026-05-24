# BlackStorm, LLC — Design System & Visual/UX Direction
## Version 1.0 · May 2026

This document is the authoritative design reference for the BlackStorm public website,
customer portal, operational dashboards, knowledge base, and future mobile applications.
Every decision here is justified by its effect on user trust, readability, and operational
clarity — not aesthetics alone.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Typography](#2-typography)
3. [Color Palette](#3-color-palette)
4. [Light Mode Design](#4-light-mode-design)
5. [Dark Mode Design](#5-dark-mode-design)
6. [Navigation Structure](#6-navigation-structure)
7. [Mobile Experience](#7-mobile-experience)
8. [Accessibility Standards](#8-accessibility-standards)
9. [Homepage Visual Layout](#9-homepage-visual-layout)
10. [Customer Portal Visual Direction](#10-customer-portal-visual-direction)
11. [Dashboard Design Philosophy](#11-dashboard-design-philosophy)
12. [Knowledge Base Design](#12-knowledge-base-design)
13. [Trust-Building UX Patterns](#13-trust-building-ux-patterns)
14. [Call-To-Action Strategy](#14-call-to-action-strategy)
15. [Visual Hierarchy Standards](#15-visual-hierarchy-standards)
16. [Spacing System](#16-spacing-system)
17. [Border Radius Guidance](#17-border-radius-guidance)
18. [Card Design Philosophy](#18-card-design-philosophy)
19. [Icon Usage Guidance](#19-icon-usage-guidance)
20. [Chart & Dashboard Guidance](#20-chart--dashboard-guidance)
21. [Table Readability](#21-table-readability)
22. [Form UX](#22-form-ux)
23. [Responsive Breakpoints](#23-responsive-breakpoints)
24. [Night & Low-Light Operation](#24-night--low-light-operation)

---

## 1. Brand Identity

### Character

BlackStorm is a small, US-based technology company. Its brand character must reflect:

- **Calm authority** — we know what we're doing without needing to announce it loudly
- **Honest restraint** — we don't oversell, overdesign, or overdramatize
- **Operational reliability** — the UI should feel like a tool that will work tomorrow
- **Accessibility** — the brand must read as friendly to homeowners, churches, and nonprofits, not just IT departments

What the brand must NOT suggest:
- "Hacker aesthetic" (dark green terminals, skull icons, aggressive cyberpunk)
- "Fortune 500 enterprise" (cold blue gradients, stock photography of servers)
- "Consumer startup" (pastel cards, bouncy micro-animations, playful copy)

### Logo Usage

The BlackStorm mark is a lightning bolt (⚡) inside a rounded rectangle with a blue-to-cyan gradient fill. The mark represents:
- **Lightning bolt**: speed of alert delivery, operational monitoring
- **Gradient**: the primary-to-secondary brand color transition (#4F8EF7 → #22D3EE)
- **Rounded rectangle**: approachability, not aggression

**Usage rules:**
- Always render the gradient via `url(#bsLogoGrad)` SVG defs (rendered once in Layout via `GlobalSVGDefs.tsx`)
- Minimum clear space: equal to the height of the "B" in "BlackStorm" on all sides
- Never stretch, rotate, or recolor the mark
- In contexts where gradient cannot be used, use `--color-primary` (#4F8EF7) as a solid fill

### Brand Voice (UI Copy)

| Principle | Example of the wrong approach | Example of the right approach |
|---|---|---|
| Plain language | "Leverage real-time telemetry infrastructure" | "See your devices — online or not — right now" |
| Honest scale | "Enterprise-grade monitoring platform" | "Professional monitoring for every budget" |
| No fear | "Protect your network from threats" | "Know when something stops working" |
| No exaggeration | "Military-grade security" | "We monitor availability. We do not manage security." |
| Specific and concrete | "Fast alerts" | "Alerts within 60 seconds" |

---

## 2. Typography

### Font Stack

```
Primary UI: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Monospace:  'JetBrains Mono', 'Fira Code', 'Consolas', monospace
```

**Why Inter:** Inter was designed specifically for digital screen readability. Its letterforms
are optimized for small sizes and variable weight rendering. It has excellent numerics (critical
for dashboards displaying latency, uptime percentages, and alert counts) and renders cleanly
at 11px through 72px. Compared to system fonts like San Francisco or Segoe UI, Inter provides
consistent cross-platform rendering — important for a tool that runs in field operations.

**Why a monospace secondary:** Technical values (IP addresses, device identifiers, latency
readings, configuration snippets) should always render in a monospace font. This prevents
character confusion (0 vs O, 1 vs l) and signals to the reader that this content is
precision data, not editorial text.

### Type Scale

```
--text-xs:   0.72rem  /  11.5px   — Status labels, metadata, badges
--text-sm:   0.82rem  /  13px     — Secondary captions, table footnotes
--text-base: 1rem     /  16px     — Body text default
--text-md:   1.05rem  /  16.8px   — Slightly emphasized body
--text-lg:   1.15rem  /  18.4px   — Lead paragraphs, intro text
--text-xl:   1.35rem  /  21.6px   — h4, card titles
--text-2xl:  1.6rem   /  25.6px   — h3
--text-3xl:  2rem     /  32px     — h2 (min, before clamp)
--text-4xl:  2.5rem   /  40px     — h2 (max)
--text-5xl:  3rem     /  48px     — h1 (min, before clamp)
--text-6xl:  3.5rem   /  56px     — h1 (max)
```

**Responsive scaling:** Use CSS `clamp()` for h1–h3 to prevent text overflow on mobile
without JavaScript. The existing implementation is correct:
```css
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.6rem, 3.5vw, 2.5rem); }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.6rem); }
```

### Font Weights

```
400  — Body text, descriptions, secondary content
500  — Medium emphasis, captions, table data
600  — Semibold: card titles, form labels, nav items, button text
700  — Bold: section headings (h3–h5)
800  — Extrabold: hero h1 only, stat display values
```

**Why avoid 300 (light):** Light weight text below 16px fails WCAG AA contrast requirements
on most backgrounds. It also reads as "design blog aesthetic" rather than "operational tool."

### Line Heights

```
Headings (h1–h3):   1.1–1.2   — Tight, impactful, editorial
Headings (h4–h6):   1.3       — Readable at smaller sizes
Body text:          1.7       — Generous for long-form reading
Lead paragraphs:    1.7       — Same as body, slightly larger size
Table cells:        1.4       — Dense data should not waste row height
Labels/badges:      1.0–1.2   — Single-line UI labels
```

### Letter Spacing

```
Headings:        -0.02em to -0.03em   — Tight tracking improves readability at large sizes
Section labels:  0.10em to 0.12em     — Wide tracking on ALL CAPS emphasizes structure
Body:            0 (default)          — Inter is optimized; do not adjust body tracking
Monospace data:  0 (default)
```

### Section Labels

Section labels (the small uppercase line above headings like "Available Today") follow this pattern:
```css
font-size: 0.75rem;
font-weight: 600;
letter-spacing: 0.12em;
text-transform: uppercase;
color: var(--color-primary);
background: var(--color-primary-dim);
padding: 5px 14px;
border-radius: var(--radius-full);
```
**Why:** The pill format makes section labels scannable on fast scroll. Uppercase small caps
combined with primary color creates a visual anchor that helps users orient without reading.

---

## 3. Color Palette

### Primary Brand Colors

```
Blue Primary (dark mode):  #4F8EF7   — Main interactive color
Blue Primary (light mode): #2563EB   — Slightly deeper for contrast on light backgrounds
Cyan Accent:               #22D3EE   — Gradient endpoint only; use sparingly for accents
```

**Why #4F8EF7 and not a darker blue:** Darker blues (#1A3FAA, #003087) read as corporate
insurance or banking. A slightly elevated electric blue reads as modern and technical without
being aggressive. It provides sufficient contrast on the deep navy dark mode backgrounds
(WCAG AA compliant at 4.6:1 against #0B0E1A) while being distinctive from competitors.

**Why cyan only in gradients:** Using cyan #22D3EE as a fill color in UI would create visual
noise. Reserved as a gradient tail and occasional accent, it adds energy to the brand mark and
hero backgrounds without competing with interactive elements.

### Status Colors

```
Success / Online:   #22C55E (dark)  /  #16A34A (light)
Warning / Review:   #EAB308 (dark)  /  #CA8A04 (light)
Error / Offline:    #EF4444 (dark)  /  #DC2626 (light)
Info / Neutral:     #4F8EF7 (dark)  /  #2563EB (light)
```

**Critical rule:** Status colors must NEVER be the only way information is communicated.
Every status indicator must include text ("Online", "Offline", "Review") alongside any color
dot or icon. This is required for accessibility and for low-light operation environments where
color perception may be impaired.

### Semantic Alert Colors (UI Alert Boxes)

```
Blue info:    background var(--color-primary-dim),  border --border-default
Orange warn:  background rgba(249,115,22,0.10),     border rgba(249,115,22,0.25)
Green ok:     background var(--color-success-dim),  border rgba(34,197,94,0.25)
Red error:    background rgba(239,68,68,0.10),      border rgba(239,68,68,0.25)
```

### Neutral Text Scale

```css
/* Dark Mode */
--text-primary:   #E8F0FF   /* High-contrast body, headings */
--text-secondary: #94A3B8   /* Descriptions, supporting copy */
--text-muted:     #64748B   /* Placeholder text, metadata */

/* Light Mode */
--text-primary:   #0F172A
--text-secondary: #475569
--text-muted:     #94A3B8
```

---

## 4. Light Mode Design

Light mode is the secondary theme (dark is default). It must feel clean and professional —
not "airy startup" or "medical white."

### Background Layers

```css
--bg-base:       #EEF3FF   /* Page body — slightly blue-tinted off-white */
--bg-surface:    #FFFFFF   /* Alt sections (section-alt) */
--bg-elevated:   #F5F8FF   /* Trust strip, nav background, tooltips */
--bg-card:       #FFFFFF   /* Card backgrounds */
--bg-card-hover: #EEF3FF   /* Hover state on cards */
```

**Why not pure white (#FFFFFF) as the base:** Pure white creates harsh contrast with dark
text, triggering eye fatigue on long sessions. A slightly blue-tinted off-white (#EEF3FF)
reduces perceived glare while making pure-white cards "pop" naturally — creating depth
without shadows.

### Borders in Light Mode

```css
--border-subtle:   #E2EAF8   /* Card edges, section dividers */
--border-default:  #C8D5E8   /* Active form fields, dropdown edges */
--border-emphasis: #94A3B8   /* Focused states, selected items */
```

**Border weight:** Always 1px. Never 2px for structural borders (2px is reserved for focus
rings). Heavier borders signal separation that does not exist; they create visual noise.

### Shadow System (Light Mode)

```css
--shadow-sm:  0 1px 4px rgba(0,0,0,0.07)    /* Subtle card lift */
--shadow-md:  0 4px 16px rgba(0,0,0,0.08)   /* Modals, popovers */
--shadow-lg:  0 8px 36px rgba(0,0,0,0.10)   /* Hero elements */
```

Use shadows conservatively. More than 2–3 layers of shadow on a single page view creates
visual weight that makes the interface feel heavy. Light mode cards should feel "placed"
on the surface, not floating.

### What to Avoid in Light Mode

- Pure white (#FFFFFF) as page background
- Pure black (#000000) as text — use `--text-primary` (#0F172A) instead
- Gradient backgrounds in section bodies (reserve gradients for hero only)
- Heavy box shadows that create depth cues inconsistent with a flat document surface

---

## 5. Dark Mode Design

Dark mode is the default. It must feel like a professional operational environment, not
a "dark theme" that was bolted onto a light design as an afterthought.

### Background Layer Philosophy

The five background layers form a deliberate z-axis stack:

```
Layer 0 — Page body:     #060C1A   (deepest, never used as card bg)
Layer 1 — Surfaces:      #0A1628   (section-alt, subtle containers)
Layer 2 — Elevated:      #0D1E35   (section-dark, nav background)
Layer 3 — Cards:         #0E2040   (card backgrounds)
Layer 4 — Card hover:    #132848   (interactive card feedback)
```

**Why deep navy instead of black (#000000) or near-black (#1A1A1A):**
- Pure black reads as "hacker terminal" or "high-contrast mode" — aggressive, not calm
- Near-black (#1A1A1A) reads as generic dark mode — the default iOS / macOS appearance
- Deep navy (#060C1A) reads as "operational tool at night" — professional, purposeful
- The blue tint allows the electric blue accent (#4F8EF7) to feel harmonious rather than
  jarring, since the background already has blue in its hue family

**Why five layers and not two:** Real operational interfaces have depth. Alert panels
sit above cards. Cards sit above sections. Without distinct layers, everything looks flat
and ambiguous. Five layers is enough for the UI without requiring custom shadow values
everywhere.

### Dark Mode Section Rhythm

The homepage uses three background values for alternating sections:
```
Default section:  var(--bg-base)       — darkest
Section-alt:      var(--bg-surface)    — mid
Section-dark:     var(--bg-elevated)   — also mid, but used for high-contrast steps
```

This prevents the "gray soup" problem where alternating sections look too similar. Each
transition should be perceptible without being dramatic.

### Glow Effects

Used **only** on:
- Hero sections (ambient radial gradients, not elements)
- Primary CTA buttons on hover (`--shadow-glow`)
- No glow on cards, text, or icons

```css
--shadow-glow: 0 0 40px rgba(79,142,247,0.22)
```

Glow radius of 40px is intentionally diffuse. Tight glows (4–8px) look like neon signs.
A 40px diffuse glow creates ambient atmosphere without looking cheap.

### What to Avoid in Dark Mode

- Green text on dark backgrounds (reads as "terminal hacker")
- Bright white (#FFFFFF) text — use `--text-primary` (#E8F0FF) instead
- Gradients inside cards or content areas (reserve for hero only)
- Animation on text (it distracts and is inaccessible)
- Pure black borders — they disappear into dark backgrounds; use semi-transparent instead

---

## 6. Navigation Structure

### Desktop Navigation

```
[Logo/Brand]          [Services ▾] [Pricing] [About] [Support]        [Theme Toggle] [Contact ▸]
```

- **Logo:** brand mark + "BlackStorm" + "LLC" subtext, left-aligned
- **Primary nav items:** 4–5 items maximum (cognitive load increases steeply beyond 7)
- **Services dropdown:** CSS `:hover` + `:focus-within` only — no JavaScript required for the open state
- **Theme toggle:** right side, icon-only (sun/moon), with aria-label
- **Contact CTA:** pill button, right of theme toggle — distinguishes it from nav links

**Nav height:** `--nav-height: 72px` — tall enough for touch-friendly targets, compact
enough to leave content space. Sticky on scroll with shadow on `scroll > 10px`.

### Dropdown Behavior

- Opens on hover (desktop) and on Enter/Space (keyboard)
- Contains: service name, brief description (one line), status badge
- Coming-soon items: displayed with `opacity: 0.6`, `cursor: not-allowed`, no link
- Never more than 6–8 items in a dropdown; use columns if needed

**Why CSS-only for hover:** JavaScript dropdown solutions introduce timing bugs, ARIA
complexity, and performance overhead for a feature that CSS handles better. The `:focus-within`
approach ensures keyboard users can navigate the dropdown without a JavaScript state machine.

### Mobile Navigation

- Hamburger icon at ≤768px
- Full-screen overlay menu (100vw × 100vh minus header height)
- All nav items as full-width tap targets (≥48px height each)
- Escape key closes the overlay
- Body scroll locked while menu is open (`overflow: hidden`)
- Animated: slide-in from right preferred (not fade-only — fade is harder to track)

---

## 7. Mobile Experience

### Breakpoints

```
--bp-sm:   480px    /* Large phone landscape, small tablet portrait */
--bp-md:   768px    /* Tablet portrait, small laptop */
--bp-lg:   1024px   /* Tablet landscape, standard laptop */
--bp-xl:   1280px   /* Desktop */
--bp-2xl:  1440px   /* Wide desktop */
```

**Why these values:** 480px is the approximate threshold where small phones become
usably wide for two-column layouts. 768px is the historical iPad portrait width and the
most common mobile nav breakpoint. 1024px catches tablet landscape and 13" laptops.

### Mobile-First Content Strategy

On screens ≤768px:
- All multi-column grids collapse to single column
- Section padding reduces from 96px to 64px
- Hero h1 uses the lower end of its clamp range
- Card grids use `minmax(100%, 1fr)` override
- No hover interactions — ensure all interactive states are tap-accessible
- CTAs: full-width (`width: 100%`) for easy tap access

### Touch Targets

**Minimum 44×44px** for all interactive elements (WCAG 2.5.5 target size, Level AAA).
Practically, this means:
- Nav links: `min-height: 48px`
- Buttons: `padding: 12px 20px` minimum
- Dropdown items: `padding: 12px 14px`
- FAQ accordion buttons: `padding: 18px 0`
- Form elements: `height: 44px` minimum

### Tablet Field-Operations Usability

For Professional plan customers who may access the portal from a tablet in a server room,
network closet, or mechanical room:

- **Minimum text size on portal:** 14px — never smaller (gloved hands, poor lighting)
- **Status indicators:** at least 12×12px colored dot, always paired with text label
- **Alert count badges:** minimum 20×20px, high-contrast pill shape
- **Table rows:** minimum 48px height — easy to tap a row to expand
- **Confirmation dialogs:** large targets, never auto-close on a timer
- **Portrait and landscape tested:** the portal must be fully functional in both orientations

### Offline/Low-Connectivity States

For future mobile app and progressive web app contexts:
- Stale data must be clearly labeled ("Last updated 4 minutes ago")
- Loading states use skeleton screens, not spinners (skeletons feel faster and less anxious)
- Error states explain what failed in plain language — not "Error 503" but "We couldn't
  reach the server. Check your connection and try again."

---

## 8. Accessibility Standards

### Target Compliance: WCAG 2.1 Level AA

Every page and component must meet AA. Level AAA is aspirational for high-usage surfaces
(portal dashboard, support articles).

### Color Contrast Requirements

```
Normal text (<18px or <14px bold):  Minimum 4.5:1 contrast ratio
Large text (≥18px or ≥14px bold):   Minimum 3:1 contrast ratio
UI components (borders, icons):     Minimum 3:1 against adjacent background
```

**Pre-verified dark mode values:**
- `--text-primary` (#E8F0FF) on `--bg-base` (#060C1A): ~15:1 ✓
- `--text-secondary` (#94A3B8) on `--bg-base` (#060C1A): ~5.8:1 ✓
- `--color-primary` (#4F8EF7) on `--bg-base` (#060C1A): ~4.7:1 ✓

**Pre-verified light mode values:**
- `--text-primary` (#0F172A) on `--bg-base` (#EEF3FF): ~13.2:1 ✓
- `--color-primary` (#2563EB) on `--bg-base` (#EEF3FF): ~5.1:1 ✓

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```

**Never use** `outline: none` without providing an alternative focus indicator. Focus rings
must be visible in both light and dark mode — the `color-scheme` CSS property helps, but
test manually.

### Skip Navigation

Every page must include a skip-to-main link as the first focusable element:
```html
<a href="#main-content" class="skip-nav">Skip to main content</a>
```
Visually hidden until focused. **Why:** Screen reader users and keyboard-only users should
not have to tab through the entire navigation on every page load.

### ARIA Usage

- `aria-label` on all icon-only buttons (theme toggle, close, hamburger)
- `aria-expanded` on accordion triggers (FAQ) — updated by JavaScript
- `aria-hidden="true"` on all decorative SVG icons
- `role="contentinfo"` on `<footer>`
- `aria-labelledby` on modal dialogs and complex sections
- Never use `aria-label` to contradict visible text — use it only for icon-only elements

### Reduced Motion

The existing `prefers-reduced-motion` media query disables all animations and transitions.
This is correct and must not be removed. Users with vestibular disorders can trigger nausea
from animations even when they appear subtle on a standard display.

### Form Accessibility

- Every input has a `<label>` with a matching `for` / `id` pair — never rely on `placeholder` alone
- Error states describe the error in text, not just with a red border
- Required fields marked with `required` attribute and visible indicator
- Autocomplete attributes on appropriate fields (name, email, organization)

---

## 9. Homepage Visual Layout

### Section Hierarchy (Top to Bottom)

```
┌─────────────────────────────────────────────────────────────────┐
│ HERO                  bg-base + hero-gradient                   │
│ Full viewport height, centered. H1 + lead + 2 CTAs + trust strip│
├─────────────────────────────────────────────────────────────────┤
│ TRUST STATEMENT       bg-elevated, compact ~110px               │
│ 4 brand pillars inline. No section padding — acts as divider.   │
├─────────────────────────────────────────────────────────────────┤
│ SERVICES OVERVIEW     bg-base                                   │
│ 3-column auto-fill card grid. All 6 current services.           │
├─────────────────────────────────────────────────────────────────┤
│ HOW IT WORKS          section-dark (deepest bg)                 │
│ 4-step process, NMS focus. Strong visual break.                 │
├─────────────────────────────────────────────────────────────────┤
│ PORTAL PREVIEW        bg-base                                   │
│ Reverse split. Product visual (mock/screenshot) right.          │
├─────────────────────────────────────────────────────────────────┤
│ WHY BLACKSTORM        section-alt                               │
│ Split: intro left, 2×2 differentiator cards right.              │
├─────────────────────────────────────────────────────────────────┤
│ PRIVACY & INTEGRITY   bg-base                                   │
│ Split: manifesto left, commitment checklist right.              │
├─────────────────────────────────────────────────────────────────┤
│ EDUCATION             section-alt                               │
│ Centered header + 3-card grid + inline CTA bar.                 │
├─────────────────────────────────────────────────────────────────┤
│ FUTURE VISION         bg-base                                   │
│ Roadmap with Live/Research/Planning status cards.               │
├─────────────────────────────────────────────────────────────────┤
│ PRICING               section-alt                               │
│ 3 pricing cards, enterprise note, full comparison link.         │
├─────────────────────────────────────────────────────────────────┤
│ FAQ                   section-dark                              │
│ Accordion, max-width 780px, 8 questions.                        │
├─────────────────────────────────────────────────────────────────┤
│ CTA SECTION           section-alt + cta-section gradient        │
│ 3 support channels + final primary CTA on gradient background.  │
└─────────────────────────────────────────────────────────────────┘
```

### Background Alternation Pattern

The pattern alternates backgrounds to create visual rhythm:
```
base → elevated → base → dark → base → alt → base → alt → base → alt → dark → alt + cta
```
Every dark section (HowItWorks, FAQ) uses `section-dark` and sits between two lighter
sections to avoid a heavy block of similar backgrounds. Never stack two `section-dark`
sections adjacently.

### Whitespace Philosophy

- Sections breathe with 96px vertical padding (`.section`)
- Content within sections breathes with 48px section-header margin-bottom
- Card grids use 20–24px gaps — dense enough to look organized, spacious enough to read
- The container max-width (1200px) means content never stretches awkwardly on wide screens

**Why 96px section padding and not 64px or 128px:**
64px feels cramped on large screens. 128px creates vast empty deserts on mobile. 96px
hits the sweet spot — enough breathing room that sections feel distinct, not so much
that the page feels padded. On mobile, it reduces to 64px via media query.

---

## 10. Customer Portal Visual Direction

The portal is an operational tool, not a marketing page. It must be designed for people
who check it at 7am before a meeting, at 2pm during an incident, and at 11pm when
something has been broken for hours.

### Portal Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ PORTAL HEADER    [Logo] [Account name] [Alerts ●] [Profile ▾]  │
│ 60px height, sticky                                             │
├─────────────────────────────────────────────────────────────────┤
│ SIDEBAR          │  MAIN CONTENT AREA                           │
│ 240px (desktop)  │                                              │
│ ─────────────── │  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│ Dashboard        │  │ ONLINE   │  │ OFFLINE  │  │ ALERTS   │   │
│ Devices          │  │  11      │  │   1      │  │   1      │   │
│ Alerts           │  └──────────┘  └──────────┘  └──────────┘   │
│ Reports          │                                              │
│ Settings         │  [Device list table]                         │
│ ─────────────── │                                              │
│ Support          │  [30-day uptime chart]                       │
│ Sign Out         │                                              │
└─────────────────────────────────────────────────────────────────┘
```

### Portal Header (60px)

Separate from the public site nav (72px). Smaller because portal users know where they
are — they don't need brand reinforcement with every interaction.

Contents:
- Left: compact logo mark + "BlackStorm Portal"
- Center: nothing (avoid center-heavy nav in operational tools)
- Right: alert count badge (only visible when > 0), account name, user menu

**Alert badge:** red pill, white number, minimum 20px. Visible at a glance from across
the room on a mounted monitor. Updates in real time.

### Sidebar Navigation (240px)

```
Dashboard           — Overview stats + recent alerts
Devices             — Full device list with status
Alerts              — Alert history + acknowledgment
Reports             — Download monthly/weekly reports
Settings            — Account, notifications, users
───────────────
Support             — Link to KB / contact form
Sign Out
```

Sidebar width is fixed at 240px on desktop. On tablet (≤1024px), it collapses to a
64px icon-only rail. On mobile (≤768px), it becomes a bottom tab bar (4 items max)
or a hamburger-triggered overlay.

### Sidebar Visual Treatment

```css
sidebar-bg: var(--bg-elevated)         /* Slightly lighter than page bg */
sidebar-border-right: 1px solid var(--border-subtle)
nav-item-height: 44px
nav-item-active: bg var(--color-primary-dim), left-border 3px var(--color-primary)
nav-item-hover: bg rgba(255,255,255,0.03)
nav-item-text-size: 0.875rem
```

The 3px left border on active state is a reliable, accessible "you are here" indicator
that works without color alone.

### Status Summary Cards (Top of Dashboard)

Three cards at the top of the dashboard main area:

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│     ONLINE      │  │    OFFLINE      │  │     ALERTS      │
│       11        │  │       1         │  │       1         │
│   devices       │  │   devices       │  │  in last 24h    │
│ ● All healthy   │  │ ● View now →    │  │ ● View history → │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

- Online card: green status dot + count. Calm — most of the time, this is the only card that matters.
- Offline card: red status dot + count. Only appears visually distinct when count > 0 (amber border).
- Alerts card: neutral. Shows last 24h count regardless of current status.

**Why 3 cards and not 1 big number:** Single-number dashboards require users to remember
context. Three focused cards — online, offline, alerts — answer the three questions users
actually have when they open the portal.

---

## 11. Dashboard Design Philosophy

### Density Target: Moderate

BlackStorm's customers are not professional network operations center (NOC) staff who
need Bloomberg-terminal density. They are homeowners, small business owners, and local
organization administrators who look at the portal once a day, maybe twice.

**Moderate density means:**
- Maximum 3–4 data points visible without scrolling on the primary view
- No more than 12–15 rows in the default device list view (paginate beyond that)
- Charts are summary-level, not analysis tools — they answer "is this trending good or bad?"
- Every data point has a plain-English label; no unlabeled numbers

### Device List Table

```
| Device Name    | Status   | IP Address    | Last Seen   | Latency |
|----------------|----------|---------------|-------------|---------|
| Main Router    | ● Online | 192.168.1.1   | Just now    | 2ms     |
| File Server    | ● Online | 192.168.1.10  | Just now    | 4ms     |
| NAS Drive      | ● Offline| 192.168.1.50  | 12 min ago  | —       |
```

- Status column: colored dot (≥10px) + text label. Never dot alone.
- "Last Seen": human-relative time ("Just now", "12 min ago", "2 hours ago") — not ISO timestamps
  in the default view. ISO timestamp available on row expand or hover.
- Latency: right-aligned, monospace font. "—" for offline devices.
- Offline rows: subtle amber or red left-border on the row (not full red highlight — that is alarming
  if the customer left a device offline intentionally)

### Uptime Chart

- 30-day area chart, primary color fill with 20% opacity
- X-axis: last 30 days, abbreviated ("Dec 1", "Dec 15", "Jan 1")
- Y-axis: 0–100%, not auto-scaled (auto-scaled uptime charts make 99.7% look like a collapse)
- No hover tooltips with excessive precision (99.9723% is noise — show 99.97%)
- No animation on data load; skeleton placeholder while loading

**Why fixed Y-axis for uptime:** If uptime drops from 99.9% to 99.6%, an auto-scaled chart
shows a dramatic cliff. On a fixed 0–100% axis, that same drop is nearly imperceptible —
which is the appropriate emotional signal. Alerting handles urgency; charts provide context.

### Alert History List

```
● OFFLINE — NAS Drive (192.168.1.50)
  Dec 21, 2025 at 11:42 PM · Recovered at 11:49 PM (7 min)

● OFFLINE — Main Router (192.168.1.1)
  Dec 18, 2025 at 3:14 AM · Recovered at 3:16 AM (2 min)
```

- Most recent first
- Each entry: icon (offline = ●, recovered = ✓), device name, timestamp, duration
- Resolved alerts: muted styling, not removed — history is important for pattern recognition
- Unresolved alerts: primary color or error color left-border, full opacity

---

## 12. Knowledge Base Design

### Article Layout

```
[Breadcrumb: Home › Support › Alerts & Notifications]

[Section label pill: Alerts & Notifications]
# Article Title Here

Estimated reading time: 3 min

[Body content — max-width 720px, generous line-height]

[Was this helpful? Yes / No]

───────────────────────────────────────
Related articles:
- How alert notifications work
- Understanding recovery alerts
```

**Max-width 720px for article body:** This is the optimal reading line length for English
prose at 16px. 45–75 characters per line is the ergonomic sweet spot. On a 1200px container,
unconstrained text creates 100+ character lines that cause readers to lose their place.

### Knowledge Base Category Page

```
[Search bar — prominent, centered, with placeholder]

[6 category cards in a 3-column grid]
  Each card: icon + category name + article count + 3 most popular article links
```

The search bar must be the first interactive element after the hero text. Users arrive
at the knowledge base with a specific question, not to browse. Get them to the search
immediately.

### Article Formatting Rules

- **One idea per paragraph** — long paragraphs hide information from scanning users
- **Numbered lists** for sequential steps (installation, configuration)
- **Bulleted lists** for non-sequential options (what can be monitored)
- **Code blocks** in monospace for any value the user must type exactly (IP addresses, passwords)
- **Screenshots** with descriptive alt text; annotated arrows on instructional screenshots
- **Warning boxes** (orange) for actions that can cause data loss
- **Info boxes** (blue) for notes that add context without being critical

### What the Knowledge Base Must NOT Do

- Use technical abbreviations without explanation on first use
- Assume the reader knows what "ICMP" or "VLAN" means
- Link to manufacturer documentation as the primary answer (supplement, don't replace)
- Display a "last updated" date that is more than 18 months old (signals neglect)

---

## 13. Trust-Building UX Patterns

Trust is built through dozens of small design decisions, not one "trust badge." These are
the most impactful patterns.

### Transparency Patterns

**Honest status badges:** Every service or feature listed on the site must carry an
accurate status badge. The badge vocabulary:
```
● Available Now     (badge-green)   — Exists and works today
● Research Phase    (badge-orange)  — Thinking about it; not committed
● Planning          (badge-gray)    — Concept only; nothing built
```
Never use ambiguous badges like "Coming Soon" without explaining what that means or
removing the badge when it's been "coming soon" for more than 6 months.

**Transparent pricing:** Show all prices without requiring contact. Hidden pricing is
the single biggest trust-destroyer for small businesses and nonprofits. They interpret
"contact us for pricing" as "we will charge you based on how much we think you can afford."

**Honest limitations in FAQs:** Include questions that describe what BlackStorm does NOT
do. "Can you see my files?" is a legitimate fear that must be addressed directly — not buried
in the Privacy Policy.

### Contact Accessibility Patterns

- Email addresses appear as plain text links, not forms requiring a CAPTCHA to see
- Response time commitments are visible on the Contact page (not "we'll get back to you")
- No "live chat" widget unless someone is actually available — a fake live chat that routes
  to email destroys trust faster than having no chat at all

### Privacy Visibility

- Footer: Privacy Policy link is always visible
- Contact form: "Your information is never shared with third parties" appears near the submit button
- Monitoring signup: explicit statement of what we can and cannot see
- Cookies: no cookie consent banner unless cookies are actually used beyond session management

### Error and Empty States

**Error messages must:**
- Tell the user what happened in plain language
- Tell the user what to do next (retry, contact support, check connection)
- Never blame the user
- Never show raw technical error codes without context

**Empty states (no devices, no alerts):**
- Show a calm icon and a clear explanation ("No alerts in the last 30 days — your devices
  are running cleanly.")
- Offer a next action ("Add your first device →" or "Browse reports →")
- Never leave a blank screen with no context

### Micro-Copy Trust Signals

Small text in high-trust moments (near buttons, forms, and pricing) must be precise:
```
Near contact form submit:
  "We respond to all inquiries within one business day.
   Your information is never shared with third parties."

Near pricing plan button:
  "No contract required. Cancel anytime."

Near monitoring signup:
  "We cannot see your files or network traffic — only device availability."
```

---

## 14. Call-To-Action Strategy

### CTA Hierarchy

```
Level 1 — Primary:   "Get in Touch"    → /contact
Level 2 — Secondary: "See Our Services" → /services
Level 3 — Tertiary:  "Browse Knowledge Base" → /support
Level 4 — Inline:    "Learn more →"    → specific page
```

### One Primary CTA Per Section

Every section may have a primary CTA and one secondary CTA at most. When a section
has three or more CTAs, users experience choice paralysis and click none of them.
"Get in Touch" and "See Our Services" is a valid pair. "Get in Touch", "See Our Services",
"View Pricing", and "Read Our Values" is not.

### Button Visual Hierarchy

```
btn-primary   — Filled, primary color, white text. Used once per section. The action we most want.
btn-outline   — Transparent fill, primary color border and text. Secondary option.
btn-ghost     — No border, primary color text, no background. Inline tertiary links.
```

**Never use two `btn-primary` buttons in the same section.** When everything is important,
nothing is important.

### Button Copy Rules

| Avoid | Use instead | Why |
|---|---|---|
| "Click here" | "Get in Touch" | Describes destination, not action |
| "Submit" | "Send Message" | Specific, confirms what happens |
| "Learn More" (alone) | "Learn More About Monitoring" | Ambiguous with multiple cards on screen |
| "Get Started" | "Start Monitoring" or "Get in Touch" | "Get started" means nothing specific |
| "Sign Up Now" | "Start Free Trial" or "Create Account" | "Now" adds pressure without value |

### CTA Placement

- Hero: 2 CTAs (primary + secondary), centered below lead paragraph
- Section bottom: 1–2 CTAs, left-aligned or centered based on section layout
- Final homepage CTA section: primary only — this is the last call
- Knowledge base articles: 1 CTA at the end ("Was this helpful? Contact us if not.")
- Pricing: "Get Started" on each plan card + "Compare all plans" below the grid

### CTA for Non-Ready Visitors

Not every visitor is ready to buy or sign up. The CTAs must create a no-pressure path:
```
Ready now:     "Get in Touch" → contact form
Curious:       "See Our Services" → services overview
Learning:      "Browse Knowledge Base" → support/KB
Has questions: "Ask Us Anything" → contact form (same destination, softer framing)
```

"Ask Us Anything" is often more effective than "Contact Us" for visitors who aren't sure
they have a "real" question. The softness of the phrasing removes the social barrier.

---

## 15. Visual Hierarchy Standards

### The Rule of Seven

No visual level in the hierarchy should have more than 7 siblings at the same level. This
applies to:
- Navigation items (max 6)
- Card grids on a single page (max 6 visible at once without scroll)
- List items without section breaks (max 7)
- FAQ items per section (max 8)

### Heading Hierarchy

Every page has exactly one `h1`. Do not skip heading levels (h1 → h3 is wrong; h1 → h2 → h3 is correct).
The heading hierarchy communicates document structure to screen readers and search crawlers.

```
h1  — Page title (once per page)
h2  — Major sections (appears in table of contents)
h3  — Subsections within a major section, card titles
h4  — Minor subsections, definition lists, sidebar items
h5  — Footer column headings, label-level structure
```

### Emphasis in Body Text

```
<strong>  — Important factual information (prices, specific numbers, warnings)
<em>      — Titles of documents, technical terms on first use
No bold or italic — for decorative emphasis (use heading levels instead)
```

### Visual Weight Balance

A page view should have a clear "weight center" — the area where the eye naturally rests
first. On marketing pages, that is always the primary CTA area. On the portal dashboard,
it is the status summary cards. On the knowledge base, it is the article title and first paragraph.

Competing visual weights (multiple elements at maximum visual weight) create anxiety, not
emphasis. Use contrast deliberately:
- High weight: h1, primary CTA button, status alert badges
- Medium weight: h2, h3, card titles, form labels
- Low weight: body text, secondary captions, metadata
- Background weight: borders, section dividers, muted text

---

## 16. Spacing System

### Base Unit: 4px

All spacing is a multiple of 4px. This creates consistency across components built by
different people at different times without requiring a strict design token for every value.

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
```

**Why 4px base and not 8px:** 4px allows finer increments (12px, 20px, 28px) without
breaking the rhythm. An 8px system forces awkward choices at small scales.

### Spacing Applications

```
Component internal padding (sm):   12–16px
Component internal padding (md):   20–24px
Component internal padding (lg):   24–32px
Gap between cards in a grid:       20–24px
Gap between sections (padding):    96px (desktop) / 64px (mobile)
Gap between heading and content:   16–20px
Gap between section-label and h2:  20px (--section-label provides margin-bottom)
Paragraph spacing:                 16px (margin-bottom on <p>)
Form element vertical gap:         20px
```

---

## 17. Border Radius Guidance

### Current Values (with correction)

The existing CSS has a naming inconsistency: `--radius-lg (8px)` is smaller than `--radius-md (10px)`.
This should be corrected:

```css
--radius-sm:   4px    /* Tags, small badges, tight inline elements */
--radius-md:   8px    /* Buttons, input fields, small cards */
--radius-lg:   12px   /* Standard cards, panel containers */
--radius-xl:   16px   /* Large feature cards, modal containers */
--radius-2xl:  20px   /* Hero elements, portal summary cards */
--radius-full: 9999px /* Pills (section labels, status badges) */
```

### When to Use Each Radius

| Radius | Use Cases |
|---|---|
| `radius-sm` (4px) | Status dots, inline code snippets, table cell values |
| `radius-md` (8px) | Buttons, form inputs, dropdown items, small badges |
| `radius-lg` (12px) | Standard cards, knowledge base article items, alert boxes |
| `radius-xl` (16px) | Large feature cards, portal stat summary cards, modal dialogs |
| `radius-2xl` (20px) | Hero visual containers, portal preview mock, onboarding steps |
| `radius-full` | Section label pills, status badge pills, nav CTA pill |

**Why not use the same radius everywhere:** Consistent radius across all elements is
lazy, not clean. Cards should have more rounding than buttons (which should not look like
pills). Pills should have max rounding to differentiate them from cards. Mismatched
radius creates visual disorder; harmonized (not identical) radius creates visual coherence.

---

## 18. Card Design Philosophy

### Card Anatomy

```
┌─────────────────────────────────────────────┐
│ [Icon 24×24] + [Card Title]      [Badge]    │  ← Header row (flex, align-items start)
│                                             │
│  Body text at --text-secondary, line-height  │  ← Body (1.7 line-height)
│  1.7, max 3–4 sentences for marketing       │
│  cards. No limit for KB article cards.      │
│                                             │
│  [Link or button]                           │  ← Footer action (optional)
└─────────────────────────────────────────────┘
```

### Card States

```
Default:    border 1px var(--border-subtle), bg var(--bg-card)
Hover:      border-color var(--border-default), bg var(--bg-card-hover), translateY(-2px)
Active:     border-color var(--color-primary), bg var(--color-primary-dim)
Disabled:   opacity 0.55, cursor default, no hover transform
```

**The hover translate (-2px):** This is the minimum perceptible movement that registers
as interactive feedback without being distracting. 4px or more feels like the card is
jumping; 1px is imperceptible. 2px is the calibrated value.

### Card Hover Transitions

```css
transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
```

0.15s is fast enough to feel responsive, slow enough not to flicker. Never use `ease-in`
for hover-on (it starts slow and feels laggy). Never use `ease-out` for hover-off (it
lingers and feels sticky). `ease` (equivalent to `cubic-bezier(0.25, 0.1, 0.25, 1.0)`)
for both directions is correct.

### Card Shadow Usage

- Marketing cards (public site): no shadow by default, shadow-sm on hover
- Portal cards: shadow-sm always (they need to lift from the dashboard background)
- Modal dialogs: shadow-lg or shadow-xl (they exist at a high z-level)
- Alert boxes: no shadow (they rely on border color for emphasis)

---

## 19. Icon Usage Guidance

### Icon Library

Feather Icons (via inline SVG) is the current icon set. It must remain the only icon set.
Mixing icon sets (Feather + Heroicons, Feather + FontAwesome) creates visual inconsistency
that trained users recognize subconsciously as "something is off here."

### Icon Sizes

```
16×16   — Inline text icons, table cell indicators, badge icons
18×18   — Button icons (left of label), list item markers
20×20   — Navigation icons, dropdown item icons
24×24   — Card header icons, section visual icons
32×32   — Feature section intro icons (larger emphasis)
```

**Never use 1:1 pixel sizes outside this set** (e.g., 22px, 26px). Non-standard sizes
create alignment issues with text and break the visual grid.

### Icon + Text Alignment

Always use `display: flex; align-items: center; gap: [spacing];` when pairing icons with text.
Never use vertical-align hacks on inline icons — they shift with line-height and produce
inconsistent results across browsers.

### Icon Color Rules

```
Interactive icons:     var(--color-primary)      — Clickable, actionable
Status icons:          Semantic color (success/warning/error)
Decorative icons:      var(--text-secondary)     — Not interactive, not status
Disabled icons:        var(--text-muted)          — Pair with reduced opacity on parent
```

### What Icons Should NOT Do

- Carry meaning alone without a text label (accessibility: always pair with text or aria-label)
- Animate on hover (the card or button itself can animate; the icon inside should not independently)
- Use gradient fills (gradients on small icons become visually noisy below 24px)
- Act as the only error/success indicator (pair with text and border color)

---

## 20. Chart & Dashboard Guidance

### Approved Chart Types

```
Area chart     — Uptime over time (primary dashboard view)
Bar chart      — Alert frequency by device (history view)
Stat card      — Single number with label and context (online/offline count)
Sparkline      — Micro-trend indicator in device list row (optional future)
```

**Avoid:** Pie charts (terrible for comparing values), donut charts (same problem),
radar charts (intimidating and rarely read correctly by non-technical users).

### Chart Library Guidance

For future portal implementation, use a lightweight, accessible charting library.
Recommendations:
- **Chart.js** — most widely supported, accessible, good dark mode support
- **Recharts** — React-native, composable, good TypeScript support
- Avoid: D3.js for basic charts (overengineered), Highcharts (license cost), ApexCharts
  (heavy bundle size for basic needs)

### Chart Accessibility

- Every chart must have an accessible text alternative (screen-readable data table or `aria-label` summary)
- Color alone must not distinguish data series — use patterns or labels
- Chart axes must have labels in human units ("Response Time (ms)", not just "ms")
- Charts must respect `prefers-reduced-motion` — disable animations when set

### Chart Color Usage

```
Primary data line:    var(--color-primary)        — Uptime, online devices
Secondary data line:  var(--color-secondary)      — Comparison, baseline
Success fill:         var(--color-success) at 15% opacity  — Healthy range
Warning fill:         var(--color-warning) at 15% opacity  — Degraded range
Error fill:           var(--color-error) at 15% opacity    — Outage range
```

---

## 21. Table Readability

### Table Structure

```
Sticky column headers    — Always visible on scroll
Alternating row shading  — Optional; only if table has 10+ rows (helps tracking)
Row height               — Minimum 48px (tap-friendly)
Column alignment:
  Text columns:          Left-aligned
  Numeric columns:       Right-aligned, monospace
  Status columns:        Left-aligned (status dot + text label)
  Action columns:        Right-aligned or centered
```

### Column Width Philosophy

- Fixed width for status columns (80–100px) — prevents layout shift when status changes
- Fixed width for numeric columns (80–120px)
- Flexible width for name/description columns (absorbs remaining space)
- Never allow more than 6 columns in the default view — offer a "columns" selector if more are needed

### Table Empty State

```
[centered icon]
No devices found.
[Brief explanation — "No devices match your filter" or "You have no devices added yet."]
[Action button — "Clear filter" or "Add your first device →"]
```

---

## 22. Form UX

### Field Design

```css
.form-input {
  height: 44px;                           /* Touch-friendly */
  padding: 0 14px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 1rem;                        /* Never below 16px — prevents iOS zoom */
}
.form-input:focus {
  border-color: var(--color-primary);
  outline: none;                          /* Replaced by border-color change */
  box-shadow: 0 0 0 3px var(--color-primary-dim);
}
.form-input.error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(239,68,68,0.15);
}
```

**Why 16px minimum for form font size:** iOS Safari auto-zooms any input with a font
size below 16px, which disrupts the page layout and frustrates mobile users. Always use
`font-size: 1rem` or larger in inputs.

### Label Position

**Always above the field.** Never floating labels (they hide context when the field is
filled), never placeholder-only (placeholder disappears on typing, leaving no context).

```
[Label text — 0.875rem, semibold, margin-bottom 6px]
[Input field — full width]
[Helper text — 0.8rem, text-secondary, margin-top 6px] (optional)
[Error text — 0.8rem, color-error, margin-top 6px]     (on error state)
```

### Form Section Layout

- Long forms (5+ fields) should use logical groups with section headings
- Two-column layouts only for clearly related field pairs (First Name / Last Name)
- Never three-column form layouts on a form (too dense, poor mobile experience)
- Submit button: full-width on mobile, auto-width (minimum 160px) on desktop
- Submit button is always at the bottom; never float it to the right

### Select and Textarea

```css
select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,...");  /* Custom chevron */
  padding-right: 36px;
}
textarea.form-textarea {
  min-height: 120px;
  resize: vertical;          /* Horizontal resize disabled — breaks layouts */
  padding: 12px 14px;
}
```

---

## 23. Responsive Breakpoints

### Breakpoint Behavior

```
≤480px   — Single column everything. No floating elements.
           Section padding: 48px. Hero: 64px. h1 at min clamp value.
           CTA buttons: full width (100%).

480–768px — Two-column for simple grids (2-item). Still single-column for 3+ card grids.
            Some side-by-side content permitted where both columns are approximately equal.

768–1024px — Standard tablet. Split sections show (60/40 split, not 50/50).
             Navigation shows full items. Stats bar collapses to 2×2.
             Sidebar: collapsed to icon-only rail (64px).

1024–1280px — Full desktop layout. All columns active.
              Container max-width 1200px applies; padding keeps content inset.

>1280px  — Layout locked at 1200px container width. Extra space becomes margin.
           Nothing should stretch wider than the container.
```

### Tablet Field Operations (768–1024px, Landscape)

For customers accessing the portal from a tablet in a server room or network closet:

- **Portrait (768px):** Sidebar collapses to icon rail; main content full width
- **Landscape (1024px):** Full sidebar visible; standard portal layout applies
- **Font size floor:** 14px minimum in portal views at this width (never 12px in tables)
- **Touch target floor:** 44×44px minimum for all interactive elements
- **Scroll behavior:** Avoid sticky elements that eat too much vertical space — at 768px landscape,
  a 60px header + 48px tab bar leaves only ~440px of content height
- **No hover-dependent information:** All information visible on hover must also be accessible
  on tap (use `focus-within` or tap-to-expand patterns)

---

## 24. Night & Low-Light Operation

Professional and Business plan customers may access the portal during an overnight incident
or in a dim server room. The UI must remain readable in these conditions.

### Low-Light Principles

**Dark mode is the operational mode.** It is designed to be the night-friendly default.
The deep navy background (#060C1A) reduces blue light emission compared to pure white
light-mode equivalents. The specific hue was chosen to minimize the harshness of blue
light while maintaining sufficient contrast for reading.

**Text contrast in low light must be high:** In a dark room, the `--text-secondary` color
(#94A3B8 in dark mode) may appear harder to read than on a calibrated monitor. For critical
operational text (device names, alert descriptions, IP addresses), always use `--text-primary`
(#E8F0FF).

### Status Indicators in Low Light

- Status dots (online/offline) must be at least 10×10px in the portal
- The green (#22C55E) and red (#EF4444) colors chosen are distinguishable in dimly lit
  environments — do not substitute with lighter or more pastel variants
- Status text ("Online", "Offline", "Review") must always accompany the dot — in very low
  light, color perception degrades before contrast perception does

### Display Accommodation

Future mobile app should support:
- Automatic dark mode following system setting (`prefers-color-scheme`)
- Manual theme lock (force dark even in daylight for technicians in dark environments)
- Brightness-independent contrast: the UI should not become unreadable at minimum screen brightness.
  Test at minimum brightness in dark mode — if text is illegible, increase contrast ratios.

### Avoid These in the Portal

- Light mode as the portal default — never force light mode on an operational tool
- Animations that produce white flashes (dark→light transitions during animation frames)
- Red-and-green as the only status differentiation (red-green colorblindness affects ~8% of males)

---

## Appendix: CSS Custom Property Corrections Needed

The following inconsistencies in `css/main.css` should be corrected:

```css
/* CURRENT (inconsistent: lg < md) */
--radius-sm:   6px;
--radius-md:   10px;
--radius-lg:   8px;    /* ← smaller than md */
--radius-xl:   8px;    /* ← same as lg */

/* CORRECTED (ascending order) */
--radius-sm:   4px;
--radius-md:   8px;
--radius-lg:   12px;
--radius-xl:   16px;
--radius-2xl:  20px;
--radius-full: 9999px;
```

Additionally, the following spacing tokens should be added to `:root`:

```css
/* Spacing scale */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

And these breakpoint tokens for use in JavaScript/TypeScript:

```typescript
// src/design-tokens.ts
export const breakpoints = {
  sm:  480,
  md:  768,
  lg:  1024,
  xl:  1280,
  xxl: 1440,
} as const

export const spacing = {
  1:  4,   2:  8,   3: 12,   4: 16,  5: 20,
  6: 24,   8: 32,  10: 40,  12: 48, 16: 64,
  20: 80, 24: 96, 32: 128,
} as const

export const radius = {
  sm:   4,
  md:   8,
  lg:   12,
  xl:   16,
  xxl:  20,
  full: 9999,
} as const

export const zIndex = {
  nav:        1000,
  dropdown:   1100,
  mobileMenu: 1200,
  modal:      1300,
  tooltip:    1400,
} as const
```

---

*This document should be reviewed and updated whenever new components, surfaces,
or service areas are added to the BlackStorm platform. The design system is a living
reference, not a completed artifact.*
