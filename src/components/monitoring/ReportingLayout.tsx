import { useId, type ReactNode } from 'react'

interface ReportingLayoutProps {
  title: string
  description: string
  filters?: ReactNode
  summary: ReactNode
  children: ReactNode
}

/*
  ReportingLayout

  Operational clarity goals:
  - Separates report controls, summary, and detailed history.

  Accessibility:
  - Uses semantic header/main regions and keeps filters before report content in source order.

  Responsive design:
  - Filters and summaries can stack on smaller screens without changing meaning.

  Future scalability:
  - Can support PDF/CSV exports, customer-specific reporting, and AI-assisted summaries.
*/
export default function ReportingLayout({ title, description, filters, summary, children }: ReportingLayoutProps) {
  const titleId = useId()

  return (
    <section className="monitoring-reporting-layout" aria-labelledby={titleId}>
      <header className="monitoring-reporting-header">
        <div>
          <span className="bs-eyebrow">Reporting</span>
          <h1 id={titleId}>{title}</h1>
          <p>{description}</p>
        </div>
        {filters && <div className="monitoring-reporting-filters">{filters}</div>}
      </header>
      <div className="monitoring-reporting-summary">{summary}</div>
      <div className="monitoring-reporting-body">{children}</div>
    </section>
  )
}
