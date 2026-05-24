import type { ReactNode } from 'react'

interface ContextualHelpPanelProps {
  title: string
  children: ReactNode
  action?: ReactNode
}

/*
  ContextualHelpPanel

  Intended customer psychology:
  - Offers help without forcing the user away from their task.

  Accessibility goals:
  - Uses aside with a heading so assistive technology understands it as supporting content.

  Trust-building principles:
  - Good place to explain service limits, privacy, and "why we ask this" copy.

  Mobile usability:
  - Should stack below the task content on smaller screens.
*/
export default function ContextualHelpPanel({ title, children, action }: ContextualHelpPanelProps) {
  return (
    <aside className="education-help-panel" aria-labelledby={`${title.replace(/\s+/g, '-').toLowerCase()}-help-title`}>
      <h2 id={`${title.replace(/\s+/g, '-').toLowerCase()}-help-title`}>{title}</h2>
      <div>{children}</div>
      {action && <div className="education-help-action">{action}</div>}
    </aside>
  )
}
