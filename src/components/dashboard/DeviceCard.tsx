import StatusIndicator from './StatusIndicator'

interface DeviceCardProps {
  name: string
  type: string
  site?: string
  status: 'online' | 'review' | 'offline' | 'paused' | 'unknown'
  statusLabel: string
  lastChecked?: string
  detail?: string
}

/*
  DeviceCard

  UX purpose:
  - Summarizes one monitored device without turning the dashboard into a dense NOC wall.

  Accessibility considerations:
  - Device name is a heading.
  - Status text is visible and not color-only.

  Customer trust considerations:
  - Uses measured status language and exposes last-check context when available.

  Future scaling goals:
  - Props can map directly to a future device inventory API response.
*/
export default function DeviceCard({
  name,
  type,
  site,
  status,
  statusLabel,
  lastChecked,
  detail,
}: DeviceCardProps) {
  return (
    <article className="portal-device-card">
      <div className="portal-device-card-header">
        <div>
          <h3>{name}</h3>
          <p>{type}{site ? ` · ${site}` : ''}</p>
        </div>
        <StatusIndicator tone={status} label={statusLabel} />
      </div>
      <dl className="portal-meta-list">
        {lastChecked && (
          <div>
            <dt>Last checked</dt>
            <dd>{lastChecked}</dd>
          </div>
        )}
        {detail && (
          <div>
            <dt>Detail</dt>
            <dd>{detail}</dd>
          </div>
        )}
      </dl>
    </article>
  )
}
