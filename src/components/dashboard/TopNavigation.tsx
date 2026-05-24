import type { ReactNode } from 'react'

interface TopNavigationProps {
  title: string
  subtitle?: string
  siteSelector?: ReactNode
  notifications?: ReactNode
  actions?: ReactNode
}

/*
  TopNavigation

  UX purpose:
  - Creates a stable top strip for portal context, customer site switching,
    notifications, and primary actions.

  Accessibility considerations:
  - Keeps page context in text.
  - Actions and notifications remain keyboard reachable in source order.

  Customer trust considerations:
  - Shows context clearly so customers know which site or account they are viewing.

  Responsive/mobile considerations:
  - Wraps content instead of hiding controls on smaller screens.
*/
export default function TopNavigation({ title, subtitle, siteSelector, notifications, actions }: TopNavigationProps) {
  return (
    <header className="portal-top-nav">
      <div>
        <span className="bs-eyebrow">Portal</span>
        <h1 className="bs-heading">{title}</h1>
        {subtitle && <p className="bs-prose">{subtitle}</p>}
      </div>
      <div className="portal-top-actions">
        {siteSelector}
        {notifications}
        {actions}
      </div>
    </header>
  )
}
