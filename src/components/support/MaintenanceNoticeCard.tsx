interface MaintenanceNoticeCardProps {
  title: string
  window: string
  expectedImpact: string
  customerAction?: string
}

/*
  MaintenanceNoticeCard

  UX and trust goals:
  - Separates planned work from incidents so customers do not read every notice as an emergency.
  - Explains expected impact and customer action without promising exact outcomes.

  Accessibility:
  - Uses labeled fields and readable text in both light and dark themes.
*/
export default function MaintenanceNoticeCard({
  title,
  window,
  expectedImpact,
  customerAction,
}: MaintenanceNoticeCardProps) {
  return (
    <article className="support-maintenance-card">
      <header>
        <span className="bs-eyebrow">Maintenance Notice</span>
        <h3>{title}</h3>
      </header>
      <dl>
        <div>
          <dt>Window</dt>
          <dd>{window}</dd>
        </div>
        <div>
          <dt>Expected impact</dt>
          <dd>{expectedImpact}</dd>
        </div>
        {customerAction && (
          <div>
            <dt>Customer action</dt>
            <dd>{customerAction}</dd>
          </div>
        )}
      </dl>
    </article>
  )
}

