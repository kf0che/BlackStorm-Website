import PriorityBadge from './PriorityBadge'

type TicketStatus = 'submitted' | 'triage' | 'in-review' | 'waiting-on-customer' | 'planned-follow-up' | 'closed'
type PriorityLevel = 'low' | 'normal' | 'high' | 'urgent'

interface TicketStatusCardProps {
  ticketId: string
  subject: string
  status: TicketStatus
  priority: PriorityLevel
  updatedAt: string
  nextStep?: string
}

/*
  TicketStatusCard

  UX and trust goals:
  - Makes ticket state and next step visible without promising a response window.
  - Helps customers understand whether BlackStorm or the customer has the next action.

  Accessibility:
  - Uses a definition list for ticket metadata so screen readers get clear labels.
*/
export default function TicketStatusCard({
  ticketId,
  subject,
  status,
  priority,
  updatedAt,
  nextStep,
}: TicketStatusCardProps) {
  return (
    <article className="support-ticket-card">
      <header>
        <div>
          <span className="bs-eyebrow">{ticketId}</span>
          <h3>{subject}</h3>
        </div>
        <PriorityBadge level={priority} />
      </header>
      <dl>
        <div>
          <dt>Status</dt>
          <dd>{status.replace(/-/g, ' ')}</dd>
        </div>
        <div>
          <dt>Updated</dt>
          <dd>{updatedAt}</dd>
        </div>
      </dl>
      {nextStep && <p>{nextStep}</p>}
    </article>
  )
}
