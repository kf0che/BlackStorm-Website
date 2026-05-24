type PriorityLevel = 'low' | 'normal' | 'high' | 'urgent'

interface PriorityBadgeProps {
  level: PriorityLevel
  label?: string
}

/*
  PriorityBadge

  UX and trust goals:
  - Uses clear priority labels without implying fixed SLA commitments.
  - Pairs color with readable text so priority is understandable in any theme.

  Accessibility:
  - The label is text-first; color is only a secondary cue.
*/
export default function PriorityBadge({ level, label }: PriorityBadgeProps) {
  return (
    <span className={`support-priority support-priority-${level}`}>
      {label || level}
    </span>
  )
}

