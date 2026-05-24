import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  labelledBy?: string
  tone?: 'default' | 'alt' | 'dark'
  compact?: boolean
  className?: string
}

/*
  Section

  UX behavior: provides a reusable block for marketing, docs, portal, and dashboard pages.
  Accessibility: accepts aria-labelledby so headings can label their section.
  Trust choice: consistent spacing reduces clutter and avoids flashy one-off layouts.
  Scalability: future Next.js pages can import this as the base section primitive.
*/
export default function Section({
  children,
  id,
  labelledBy,
  tone = 'default',
  compact,
  className = '',
}: SectionProps) {
  const toneClass = tone === 'alt' ? 'section-alt' : tone === 'dark' ? 'section-dark' : ''
  const spacingClass = compact ? 'bs-section-compact' : 'bs-section'

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${spacingClass} ${toneClass} ${className}`.trim()}
    >
      {children}
    </section>
  )
}
