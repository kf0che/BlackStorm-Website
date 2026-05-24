import { NavLink } from 'react-router-dom'

interface SidebarItem {
  label: string
  to: string
  status?: string
}

interface SidebarNavigationProps {
  items: SidebarItem[]
  label?: string
}

/*
  SidebarNavigation

  UX purpose:
  - Give portal users a stable left-side navigation model without clutter.

  Accessibility considerations:
  - Uses a named nav landmark.
  - NavLink exposes active page state through className and aria-current.

  Customer trust considerations:
  - Keeps planned portal areas visible only when intentionally passed as items.

  Future scaling goals:
  - Supports RBAC by filtering items before rendering.
  - Can collapse into a mobile drawer without changing item data.
*/
export default function SidebarNavigation({ items, label = 'Customer portal navigation' }: SidebarNavigationProps) {
  return (
    <nav className="portal-sidebar-nav" aria-label={label}>
      <div className="portal-sidebar-heading">Customer Portal</div>
      {items.map(item => (
        <NavLink key={item.to} to={item.to} className="portal-sidebar-link">
          <span>{item.label}</span>
          {item.status && <small>{item.status}</small>}
        </NavLink>
      ))}
    </nav>
  )
}
