/*
  BlackStorm design tokens

  Intended UX behavior:
  - Keep every interface calm, readable, and operational instead of flashy.
  - Use the same token names across marketing pages, customer portals, and future dashboards.

  Accessibility goals:
  - Tokens are named by purpose, not color alone, so contrast can be adjusted centrally.
  - Size and spacing scales map cleanly to React Native/mobile design systems later.

  Trust-building choices:
  - Restrained radii, quiet borders, and clear status colors support credibility.
  - No token depends on exaggerated gradients or decorative effects to communicate meaning.
*/

export const themeTokens = {
  color: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
    bgBase: 'var(--bg-base)',
    bgSurface: 'var(--bg-surface)',
    bgCard: 'var(--bg-card)',
    textPrimary: 'var(--text-primary)',
    textSecondary: 'var(--text-secondary)',
    textMuted: 'var(--text-muted)',
    borderSubtle: 'var(--border-subtle)',
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    full: 'var(--radius-full)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    section: 'clamp(4rem, 7vw, 6rem)',
  },
  shadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },
} as const

export type ThemeTokens = typeof themeTokens
