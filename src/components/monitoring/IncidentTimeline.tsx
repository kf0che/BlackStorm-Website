import { useId } from 'react'

type IncidentState = 'detected' | 'acknowledged' | 'updated' | 'resolved' | 'follow-up'

interface IncidentEvent {
  id: string
  time: string
  state: IncidentState
  title: string
  description: string
}

interface IncidentTimelineProps {
  title: string
  events: IncidentEvent[]
}

/*
  IncidentTimeline

  Operational clarity goals:
  - Shows incident history in chronological language customers can understand.

  Customer trust philosophy:
  - Encourages factual updates over speculation.

  Accessibility:
  - Uses an ordered list because event sequence matters.

  Future scalability:
  - Can map to incident workflow systems and customer-facing status pages.
*/
export default function IncidentTimeline({ title, events }: IncidentTimelineProps) {
  const titleId = useId()

  return (
    <section className="monitoring-incident-timeline" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <ol>
        {events.map(event => (
          <li key={event.id} className={`monitoring-incident-event monitoring-event-${event.state}`}>
            <time>{event.time}</time>
            <div>
              <span>{event.state.replace('-', ' ')}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
