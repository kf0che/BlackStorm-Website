import StatusIndicator from './StatusIndicator'

interface NotificationItem {
  id: string
  title: string
  body: string
  time: string
  tone?: 'online' | 'review' | 'offline' | 'paused' | 'unknown'
}

interface NotificationCenterProps {
  notifications: NotificationItem[]
}

/*
  NotificationCenter

  UX purpose:
  - Groups alerts, recoveries, support updates, and onboarding notes in one calm panel.

  Accessibility considerations:
  - Uses list structure and text labels; no auto-advancing or flashing notifications.

  Customer trust considerations:
  - Notifications should explain what happened without implying guaranteed detection.

  Future scaling goals:
  - Ready for notification API, read/unread state, and customer preference systems.
*/
export default function NotificationCenter({ notifications }: NotificationCenterProps) {
  return (
    <section className="portal-notification-center" aria-labelledby="notification-center-title">
      <h2 id="notification-center-title">Notification Center</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <div>
              <strong>{notification.title}</strong>
              <p>{notification.body}</p>
              <small>{notification.time}</small>
            </div>
            <StatusIndicator tone={notification.tone || 'unknown'} label={notification.tone || 'Info'} />
          </li>
        ))}
      </ul>
    </section>
  )
}
