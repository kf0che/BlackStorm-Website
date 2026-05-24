type StatusTone = 'online' | 'review' | 'offline' | 'paused' | 'unknown'

interface StatusIndicatorProps {
  label: string
  tone?: StatusTone
  detail?: string
}

/*
  StatusIndicator

  UX purpose:
  - Provide a calm, readable status label for devices, tickets, alerts, and sites.

  Accessibility considerations:
  - Status meaning is communicated through text, not color alone.
  - The colored dot is decorative and hidden from assistive technology.

  Customer trust considerations:
  - Uses measured labels like "Needs Review" instead of panic-heavy language.

  Future scaling goals:
  - Can map directly to API status enums and React Native badge patterns.
*/
export default function StatusIndicator({ label, tone = 'unknown', detail }: StatusIndicatorProps) {
  return (
    <span className={`portal-status portal-status-${tone}`}>
      <span className="portal-status-dot" aria-hidden="true" />
      <span>{label}</span>
      {detail && <small>{detail}</small>}
    </span>
  )
}
