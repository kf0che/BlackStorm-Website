type HealthTone = 'healthy' | 'review' | 'incident' | 'maintenance' | 'unknown'

interface HealthStatusCardProps {
  title: string
  status: string
  tone?: HealthTone
  summary: string
  metric?: string
  detail?: string
}

/*
  HealthStatusCard

  Operational clarity goals:
  - Summarizes health in one calm card so users can scan before digging into details.

  Alert fatigue reduction:
  - Uses measured status text and a single supporting summary instead of stacking warnings.

  Accessibility:
  - Status is written in text; color only reinforces the meaning.

  Customer trust philosophy:
  - Supports honest labels like "Needs Review" without implying guaranteed protection.
*/
export default function HealthStatusCard({
  title,
  status,
  tone = 'unknown',
  summary,
  metric,
  detail,
}: HealthStatusCardProps) {
  return (
    <article className={`monitoring-health-card monitoring-tone-${tone}`}>
      <header>
        <div>
          <span className="bs-eyebrow">Health Status</span>
          <h3>{title}</h3>
        </div>
        <span className="monitoring-status-label">
          <span aria-hidden="true" />
          {status}
        </span>
      </header>
      <p>{summary}</p>
      {metric && <strong className="monitoring-large-metric">{metric}</strong>}
      {detail && <small>{detail}</small>}
    </article>
  )
}

