import { useId, type ReactNode } from 'react'

interface WalkthroughOverlayProps {
  title: string
  body: string
  stepLabel?: string
  children?: ReactNode
  onClose?: () => void
}

/*
  WalkthroughOverlay

  Intended customer psychology:
  - Provides guidance at the moment of need without creating a noisy tour.

  Accessibility goals:
  - Uses role="dialog" and aria-modal.
  - Includes an explicit close button.
  - Future implementation should add focus trapping when the overlay becomes interactive.

  Mobile usability:
  - Content is compact and should fit small screens without covering unrelated controls.

  Future scaling:
  - Can drive troubleshooting walkthroughs or interactive labs.
*/
export default function WalkthroughOverlay({ title, body, stepLabel, children, onClose }: WalkthroughOverlayProps) {
  const titleId = useId()

  return (
    <div className="education-overlay" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="education-overlay-card">
        {stepLabel && <span className="bs-eyebrow">{stepLabel}</span>}
        <h2 id={titleId}>{title}</h2>
        <p>{body}</p>
        {children}
        <button type="button" className="btn btn-outline" onClick={onClose}>
          Close walkthrough
        </button>
      </div>
    </div>
  )
}
