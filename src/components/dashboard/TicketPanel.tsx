import StatusIndicator from './StatusIndicator'

interface Ticket {
  id: string
  subject: string
  status: 'online' | 'review' | 'offline' | 'paused' | 'unknown'
  statusLabel: string
  updatedAt: string
  nextStep?: string
}

interface TicketPanelProps {
  tickets: Ticket[]
  emptyMessage?: string
}

/*
  TicketPanel

  UX purpose:
  - Shows support work in a compact, understandable panel.

  Accessibility considerations:
  - Uses list semantics and text labels for ticket states.

  Customer trust considerations:
  - "Next step" copy tells customers whether action is needed.

  Future scaling goals:
  - Can connect to support ticket metrics and ticket detail routes later.
*/
export default function TicketPanel({ tickets, emptyMessage = 'No open support tickets.' }: TicketPanelProps) {
  if (!tickets.length) {
    return <p className="bs-prose">{emptyMessage}</p>
  }

  return (
    <ul className="portal-ticket-list" aria-label="Support tickets">
      {tickets.map(ticket => (
        <li key={ticket.id} className="portal-ticket-item">
          <div>
            <strong>{ticket.subject}</strong>
            <span>{ticket.id} · Updated {ticket.updatedAt}</span>
            {ticket.nextStep && <p>{ticket.nextStep}</p>}
          </div>
          <StatusIndicator tone={ticket.status} label={ticket.statusLabel} />
        </li>
      ))}
    </ul>
  )
}
