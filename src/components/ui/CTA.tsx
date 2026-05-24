import type { ReactNode } from 'react'
import Button from './Button'

interface CTAProps {
  eyebrow?: string
  title: string
  body: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
  children?: ReactNode
}

/*
  CTA

  UX behavior: creates a predictable conversion block that can be reused across
  marketing pages, support pages, and dashboard empty states.
  Accessibility: heading-first structure and descriptive buttons support scanning.
  Trust choice: the body copy should set expectations before asking for action.
*/
export default function CTA({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  children,
}: CTAProps) {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        {eyebrow && <span className="section-label">{eyebrow}</span>}
        <h2 id="cta-title">{title}</h2>
        <p>{body}</p>
        {children}
        <div className="bs-button-row" style={{ justifyContent: 'center' }}>
          <Button to={primaryTo} size="lg">{primaryLabel}</Button>
          {secondaryLabel && secondaryTo && (
            <Button to={secondaryTo} variant="outline" size="lg">{secondaryLabel}</Button>
          )}
        </div>
      </div>
    </section>
  )
}
