import { useId, type ReactNode } from 'react'

interface HelpTooltipProps {
  label: string
  children: ReactNode
}

/*
  HelpTooltip

  Intended customer psychology:
  - Gives quick clarification without interrupting setup flow.

  Accessibility goals:
  - Uses aria-describedby and focus-within behavior so keyboard users can access help.
  - Button label is explicit.

  Progressive disclosure:
  - Best for one- or two-sentence explanations, not full lessons.
*/
export default function HelpTooltip({ label, children }: HelpTooltipProps) {
  const id = useId()

  return (
    <span className="education-tooltip">
      <button type="button" aria-describedby={id} aria-label={label}>?</button>
      <span id={id} role="tooltip" className="education-tooltip-content">
        {children}
      </span>
    </span>
  )
}
