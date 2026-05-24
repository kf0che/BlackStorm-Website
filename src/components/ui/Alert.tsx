import type { ReactNode } from 'react'

interface AlertProps {
  children: ReactNode
  tone?: 'info' | 'warning'
  title?: string
}

/*
  Alert

  UX behavior: surfaces important notes without using aggressive warning patterns.
  Accessibility: role="note" keeps informational alerts from interrupting screen readers.
  Trust choice: good for legal review notes, placeholder warnings, and service boundaries.
*/
export default function Alert({ children, tone = 'info', title }: AlertProps) {
  const toneClass = tone === 'warning' ? 'alert-orange' : 'alert-blue'

  return (
    <div className={`alert ${toneClass}`} role="note">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div>
        {title && <strong style={{ display: 'block', marginBottom: 4 }}>{title}</strong>}
        {children}
      </div>
    </div>
  )
}
