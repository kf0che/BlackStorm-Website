type ServiceStatus = 'operational' | 'degraded' | 'maintenance' | 'unavailable' | 'unknown'

interface ServiceStatusIndicatorProps {
  service: string
  status: ServiceStatus
  detail?: string
}

/*
  ServiceStatusIndicator

  Operational clarity goals:
  - Provides a reusable service row for status pages, dashboards, and customer portals.

  Accessibility:
  - Status is visible text; the dot is decorative.

  Future scalability:
  - Can be backed by uptime checks, Prometheus labels, or customer-specific service maps.
*/
export default function ServiceStatusIndicator({ service, status, detail }: ServiceStatusIndicatorProps) {
  return (
    <article className={`monitoring-service-status monitoring-service-${status}`}>
      <div>
        <span className="monitoring-status-dot" aria-hidden="true" />
        <strong>{service}</strong>
      </div>
      <div>
        <span>{status}</span>
        {detail && <small>{detail}</small>}
      </div>
    </article>
  )
}

