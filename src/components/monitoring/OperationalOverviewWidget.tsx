import type { ReactNode } from 'react'

interface OperationalOverviewWidgetProps {
  title: string
  value: string
  description: string
  footer?: ReactNode
  placeholderLabel?: string
}

/*
  OperationalOverviewWidget

  Operational clarity goals:
  - Gives dashboards reusable metric surfaces for service health, alerts, uptime, or device counts.

  Responsive design:
  - Designed to work in auto-fit grids on desktop and single-column mobile layouts.

  Future scalability:
  - Placeholder area can later become a Prometheus/Grafana chart, API-driven metric,
    or customer-specific monitoring widget.
*/
export default function OperationalOverviewWidget({
  title,
  value,
  description,
  footer,
  placeholderLabel = 'Chart placeholder',
}: OperationalOverviewWidgetProps) {
  return (
    <section className="monitoring-overview-widget" aria-label={title}>
      <div>
        <span className="bs-eyebrow">Overview</span>
        <h3>{title}</h3>
        <strong>{value}</strong>
        <p>{description}</p>
      </div>
      <div className="monitoring-chart-placeholder" role="img" aria-label={placeholderLabel}>
        {placeholderLabel}
      </div>
      {footer && <footer>{footer}</footer>}
    </section>
  )
}

