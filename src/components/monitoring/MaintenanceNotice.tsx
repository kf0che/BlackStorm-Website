interface MaintenanceNoticeProps {
  title: string
  window: string
  impact: string
  status?: 'scheduled' | 'in-progress' | 'complete'
}

/*
  MaintenanceNotice

  Customer trust philosophy:
  - Makes planned work visible and separates maintenance from incidents.

  Operational clarity goals:
  - States the expected window and expected impact in plain language.

  Mobile/tablet usability:
  - Short fields stack cleanly and remain readable in support contexts.
*/
export default function MaintenanceNotice({
  title,
  window,
  impact,
  status = 'scheduled',
}: MaintenanceNoticeProps) {
  return (
    <article className={`monitoring-maintenance monitoring-maintenance-${status}`}>
      <header>
        <span className="bs-eyebrow">Maintenance</span>
        <h3>{title}</h3>
      </header>
      <dl>
        <div>
          <dt>Window</dt>
          <dd>{window}</dd>
        </div>
        <div>
          <dt>Expected impact</dt>
          <dd>{impact}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{status.replace('-', ' ')}</dd>
        </div>
      </dl>
    </article>
  )
}

