import type { ReactNode } from 'react'

interface PageShellProps {
  children: ReactNode
  size?: 'narrow' | 'default' | 'wide'
  className?: string
}

/*
  PageShell

  UX behavior: wraps page content in a predictable width without forcing every
  page to remember container class names.
  Accessibility: preserves source order and semantic content from children.
  Trust choice: consistent readable widths make legal, support, and product pages
  feel calmer and easier to scan.
  Scalability: the size prop maps cleanly to mobile/native layout presets later.
*/
export default function PageShell({ children, size = 'default', className = '' }: PageShellProps) {
  const containerClass = size === 'narrow'
    ? 'bs-container-narrow'
    : size === 'wide'
      ? 'bs-container-wide'
      : 'bs-container'

  return <div className={`${containerClass} ${className}`.trim()}>{children}</div>
}
