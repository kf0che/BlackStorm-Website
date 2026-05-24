interface HistoricalTrendCardProps {
  title: string
  value: string
  change?: string
  description: string
  placeholderLabel?: string
}

/*
  HistoricalTrendCard

  Operational clarity goals:
  - Shows history as a trend, not just a single alarming number.

  Alert fatigue reduction:
  - Gives context so normal fluctuations do not look like emergencies.

  Future scalability:
  - Chart placeholder can later become a real trend from monitoring or reporting APIs.
*/
export default function HistoricalTrendCard({
  title,
  value,
  change,
  description,
  placeholderLabel = 'Historical trend chart placeholder',
}: HistoricalTrendCardProps) {
  return (
    <article className="monitoring-trend-card">
      <header>
        <h3>{title}</h3>
        {change && <span>{change}</span>}
      </header>
      <strong>{value}</strong>
      <p>{description}</p>
      <div className="monitoring-chart-placeholder monitoring-chart-small" role="img" aria-label={placeholderLabel}>
        {placeholderLabel}
      </div>
    </article>
  )
}

