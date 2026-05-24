import type { ReactNode } from 'react'

interface NavGroupProps {
  label: string
  children: ReactNode
  className?: string
}

/*
  NavGroup

  UX behavior: groups related navigation links in headers, sidebars, dashboards,
  portal menus, or mobile drawers.
  Accessibility: exposes a nav landmark with a specific label.
  Trust choice: predictable navigation helps users feel oriented and in control.
  Scalability: useful for customer portals and operational dashboard sidebars.
*/
export default function NavGroup({ label, children, className = '' }: NavGroupProps) {
  return (
    <nav aria-label={label} className={className}>
      {children}
    </nav>
  )
}
