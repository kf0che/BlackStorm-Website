import type { ReactNode } from 'react'

interface DashboardShellProps {
  title: string
  description?: string
  sidebar?: ReactNode
  sidebarLabel?: string
  actions?: ReactNode
  children: ReactNode
}

/*
  DashboardShell

  UX behavior: provides a stable operational layout for future customer portals,
  MSP views, monitoring dashboards, and education admin surfaces.
  Accessibility: title is the main dashboard heading; actions remain after heading
  in source order; sidebar should contain nav with an accessible label when used.
  Trust choice: quiet panels and predictable hierarchy help users make operational
  decisions without decorative distraction.
  Scalability: this can become the wrapper for customer portal routes or a mobile
  app shell with the same title/actions/content model.
*/
export default function DashboardShell({
  title,
  description,
  sidebar,
  sidebarLabel = 'Dashboard navigation',
  actions,
  children,
}: DashboardShellProps) {
  return (
    <div className="bs-dashboard-shell">
      {sidebar && <aside className="bs-dashboard-sidebar" aria-label={sidebarLabel}>{sidebar}</aside>}
      <div className="bs-dashboard-main">
        <header className="bs-dashboard-header">
          <div>
            <span className="bs-eyebrow">Dashboard</span>
            <h1 className="bs-heading">{title}</h1>
            {description && <p className="bs-prose">{description}</p>}
          </div>
          {actions && <div className="bs-button-row">{actions}</div>}
        </header>
        {children}
      </div>
    </div>
  )
}
