import { useId, type ReactNode } from 'react'

interface DashboardPanelProps {
  title: string
  description?: string
  children: ReactNode
  actions?: ReactNode
}

/*
  DashboardPanel

  UX behavior: standardizes widgets for device status, alerts, reports, and portal cards.
  Accessibility: heading describes the panel; actions are visually grouped with the title.
  Trust choice: consistent panels make operational data feel stable and understandable.
*/
export default function DashboardPanel({ title, description, children, actions }: DashboardPanelProps) {
  const headingId = useId()

  return (
    <section className="bs-dashboard-panel" aria-labelledby={headingId}>
      <div className="bs-dashboard-header" style={{ marginBottom: 'var(--space-4)' }}>
        <div>
          <h2 id={headingId} className="bs-heading" style={{ fontSize: '1.15rem' }}>
            {title}
          </h2>
          {description && <p className="bs-prose" style={{ margin: '0.35rem 0 0', fontSize: '0.9rem' }}>{description}</p>}
        </div>
        {actions && <div className="bs-button-row">{actions}</div>}
      </div>
      {children}
    </section>
  )
}
