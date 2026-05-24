/**
 * BlackStorm Design Tokens
 * Single source of truth for values used in JavaScript/TypeScript contexts.
 * CSS equivalents live in css/main.css as custom properties.
 * See DESIGN_SYSTEM.md for full rationale behind each value.
 */

export const breakpoints = {
  sm:  480,   // Large phone landscape, small tablet portrait
  md:  768,   // Tablet portrait — nav collapse point
  lg:  1024,  // Tablet landscape, small laptop
  xl:  1280,  // Standard desktop
  xxl: 1440,  // Wide desktop
} as const

export type Breakpoint = keyof typeof breakpoints

export const spacing = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  8:  32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const

export const radius = {
  sm:   4,    // Status dots, inline code, tight elements
  md:   8,    // Buttons, inputs, dropdown items
  lg:   12,   // Standard cards, alert boxes
  xl:   16,   // Large feature cards, modal containers
  xxl:  20,   // Hero visual containers, portal stat cards
  full: 9999, // Pills: section labels, badges
} as const

export const zIndex = {
  base:       0,
  raised:     10,
  nav:        1000,
  dropdown:   1100,
  mobileMenu: 1200,
  modal:      1300,
  toast:      1400,
  tooltip:    1500,
} as const

export const color = {
  // Brand
  primary:      '#4F8EF7',
  primaryLight: '#2563EB', // Light mode variant
  secondary:    '#22D3EE',
  accent:       '#F97316',

  // Status
  success: '#22C55E',
  warning: '#EAB308',
  error:   '#EF4444',
  info:    '#4F8EF7',

  // Dark mode backgrounds
  dark: {
    base:      '#060C1A',
    surface:   '#0A1628',
    elevated:  '#0D1E35',
    card:      '#0E2040',
    cardHover: '#132848',
  },

  // Light mode backgrounds
  light: {
    base:      '#EEF3FF',
    surface:   '#FFFFFF',
    elevated:  '#F5F8FF',
    card:      '#FFFFFF',
    cardHover: '#EEF3FF',
  },
} as const

export const fontFamily = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
} as const

export const fontSize = {
  xs:   '0.72rem',  // 11.5px — labels, metadata, badges
  sm:   '0.82rem',  // 13px   — secondary captions, table footnotes
  base: '1rem',     // 16px   — body text
  md:   '1.05rem',  // 16.8px — slightly emphasized body
  lg:   '1.15rem',  // 18.4px — lead paragraphs
  xl:   '1.35rem',  // 21.6px — h4, card titles
  '2xl': '1.6rem',  // 25.6px — h3
  '3xl': '2rem',    // 32px   — h2 min
  '4xl': '2.5rem',  // 40px   — h2 max
  '5xl': '3rem',    // 48px   — h1 min
  '6xl': '3.5rem',  // 56px   — h1 max
} as const

export const lineHeight = {
  tight:   1.1,  // h1-h3
  snug:    1.3,  // h4-h6, table cells
  normal:  1.65, // body default
  relaxed: 1.75, // lead paragraphs, legal content
  loose:   2.0,  // inline code, wide-spaced labels
} as const

export const transition = {
  fast:   '0.10s ease',
  normal: '0.15s ease',  // card hover, button states
  slow:   '0.25s ease',
  theme:  '0.30s ease',  // light/dark theme toggle
} as const

// Chart color palette for portal/dashboard
export const chartColors = {
  primary:   '#4F8EF7',              // Main data series
  secondary: '#22D3EE',              // Comparison series
  success:   'rgba(34,197,94,0.15)', // Healthy zone fill
  warning:   'rgba(234,179,8,0.15)', // Degraded zone fill
  error:     'rgba(239,68,68,0.15)', // Outage zone fill
  grid:      'rgba(255,255,255,0.04)', // Chart gridlines (dark mode)
  gridLight: 'rgba(0,0,0,0.06)',    // Chart gridlines (light mode)
} as const

// Portal-specific constants
export const portal = {
  headerHeight:      60,  // px — portal header (smaller than public nav)
  sidebarWidth:      240, // px — desktop sidebar
  sidebarRailWidth:  64,  // px — collapsed icon-only rail (tablet)
  minTouchTarget:    44,  // px — WCAG 2.5.5 minimum touch target
  tableRowHeight:    48,  // px — minimum row height (tap-friendly)
  statusDotSize:     10,  // px — minimum status dot size
} as const

// Public site constants
export const site = {
  navHeight:     72,   // px
  containerMax:  1200, // px
  containerWide: 1400, // px
  containerNarrow: 720, // px
  sectionPad:    96,   // px — desktop section padding
  sectionPadMd:  64,   // px — tablet section padding
  sectionPadSm:  48,   // px — mobile section padding
} as const
