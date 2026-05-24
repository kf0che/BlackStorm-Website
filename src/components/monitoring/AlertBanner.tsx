import type { ReactNode } from 'react'

type AlertBannerTone = 'info' | 'review' | 'important' | 'critical'

interface AlertBannerProps {
  tone?: AlertBannerTone
  title: string
  children: ReactNode
  action?: ReactNode
}

/*
  AlertBanner

  Operational clarity goals:
  - Surfaces meaningful updates without turning the entire page into an alarm state.

  Alert fatigue reduction:
  - Uses severity classes that can be mapped to notification rules later.

  Accessibility:
  - Uses role="status" for timely but non-interruptive updates.
  - The visible title communicates severity without relying on color.
*/
export default function AlertBanner({ tone = 'info', title, children, action }: AlertBannerProps) {
  return (
    <aside className={`monitoring-alert-banner monitoring-alert-${tone}`} role="status">
      <div>
        <strong>{title}</strong>
        <div className="monitoring-alert-message">{children}</div>
      </div>
      {action && <div className="monitoring-alert-action">{action}</div>}
    </aside>
  )
}
