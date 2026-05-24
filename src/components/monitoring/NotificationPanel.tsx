import { useId } from 'react'

interface NotificationItem {
  id: string
  title: string
  message: string
  time: string
  status?: string
}

interface NotificationPanelProps {
  title?: string
  items: NotificationItem[]
}

/*
  NotificationPanel

  Alert fatigue reduction:
  - Groups updates into a panel so customers can review them intentionally.

  Keyboard accessibility:
  - Uses list semantics and leaves interaction controls to caller-supplied actions later.

  Customer trust:
  - Separates notification time, status, and message for easier review during support calls.
*/
export default function NotificationPanel({ title = 'Notifications', items }: NotificationPanelProps) {
  const titleId = useId()

  return (
    <section className="monitoring-notification-panel" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <strong>{item.title}</strong>
              <p>{item.message}</p>
            </div>
            <div className="monitoring-notification-meta">
              <time>{item.time}</time>
              {item.status && <span>{item.status}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
