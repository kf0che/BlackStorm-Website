import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  as?: 'article' | 'div' | 'section'
  interactive?: boolean
  className?: string
}

/*
  Card

  UX behavior: creates a calm, reusable surface for services, support topics,
  portal panels, and dashboard widgets.
  Accessibility: semantic tag can be chosen based on content meaning.
  Trust choice: quiet borders and limited hover movement keep the interface credible.
  Scalability: one surface style can support marketing cards and operational panels.
*/
export default function Card({ children, as = 'article', interactive, className = '' }: CardProps) {
  const Component = as
  const classes = ['bs-card', interactive ? 'bs-card-interactive' : '', className].filter(Boolean).join(' ')

  return <Component className={classes}>{children}</Component>
}
