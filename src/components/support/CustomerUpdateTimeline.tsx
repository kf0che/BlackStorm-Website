import { useId } from 'react'

interface CustomerUpdate {
  id: string
  time: string
  title: string
  message: string
  author?: string
}

interface CustomerUpdateTimelineProps {
  title?: string
  updates: CustomerUpdate[]
}

/*
  CustomerUpdateTimeline

  UX and trust goals:
  - Shows what changed and when, reducing uncertainty during support work.
  - Keeps communication factual and customer-facing.

  Accessibility:
  - Uses an ordered list because update sequence matters.
*/
export default function CustomerUpdateTimeline({ title = 'Customer updates', updates }: CustomerUpdateTimelineProps) {
  const titleId = useId()

  return (
    <section className="support-update-timeline" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <ol>
        {updates.map(update => (
          <li key={update.id}>
            <time>{update.time}</time>
            <div>
              <h3>{update.title}</h3>
              <p>{update.message}</p>
              {update.author && <small>Posted by {update.author}</small>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

