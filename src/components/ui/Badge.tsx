import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'blue' | 'green' | 'orange' | 'gray'
  className?: string
}

/*
  Badge

  UX behavior: labels maturity, status, and plan context without shouting.
  Accessibility: text must carry the meaning; color is only reinforcement.
  Trust choice: useful for marking "Available", "Planned", and "Research" honestly.
*/
export default function Badge({ children, tone = 'blue', className = '' }: BadgeProps) {
  const toneClass = {
    blue: 'badge-blue',
    green: 'badge-green',
    orange: 'badge-orange',
    gray: 'badge-gray',
  }[tone]

  return <span className={`badge ${toneClass} ${className}`.trim()}>{children}</span>
}
