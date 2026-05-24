import { Link } from 'react-router-dom'

const previewItems = [
  'Current monitored device status',
  'Alert and recovery history',
  'Uptime and response-time summaries',
  'Future customer portal access',
]

const devices = [
  { name: 'Firewall', status: 'Online', detail: '12 ms' },
  { name: 'Core Switch', status: 'Online', detail: '7 ms' },
  { name: 'File Server', status: 'Review', detail: 'High latency' },
]

export default function PortalPreview() {
  return (
    <section className="section" aria-labelledby="portal-preview-title">
      <div className="container">
        <div className="split-section reverse">
          <div className="split-content">
            <span className="section-label">Dashboard and Portal Preview</span>
            <h2 id="portal-preview-title">Future Visibility Surfaces Start Here</h2>
            <p>
              The homepage reserves space for production dashboard screenshots, customer portal
              previews, and operational views as the platform matures.
            </p>
            <ul className="check-list">
              {previewItems.map(item => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <Link to="/services/network-monitoring" className="btn btn-outline">
                View Monitoring Details
              </Link>
              <Link to="/contact" className="btn btn-ghost" style={{ color: 'var(--color-primary)' }}>
                [CTA] Request Portal Preview
              </Link>
            </div>
          </div>

          {/* Dashboard screenshot and customer portal preview placeholder.
              What it does: provides a safe mock until real screenshots are available.
              Why it exists: product visuals increase credibility but must not fake maturity.
              Customer psychology: "this is the kind of clarity I can expect."
              Accessibility: preview is labeled, text data is readable, color has text status. */}
          <div className="split-visual">
            <div className="asset-placeholder asset-placeholder-dashboard" role="img" aria-label="Future dashboard screenshot placeholder">
              <span className="placeholder-kicker">[FUTURE DASHBOARD SCREENSHOT]</span>
              <strong>Replace with real dashboard image when available.</strong>
            </div>

            <div className="portal-preview" style={{ marginTop: 18 }}>
              <div className="portal-toolbar">
                <div className="portal-dots" aria-hidden="true">
                  <div className="portal-dot red"/>
                  <div className="portal-dot yellow"/>
                  <div className="portal-dot green"/>
                </div>
                <div className="portal-url">[CUSTOMER PORTAL PREVIEW]</div>
              </div>
              <div className="portal-body">
                <div className="portal-stat-row">
                  <div className="portal-stat">
                    <div className="portal-stat-val">12</div>
                    <div className="portal-stat-lbl">Devices</div>
                  </div>
                  <div className="portal-stat">
                    <div className="portal-stat-val">1</div>
                    <div className="portal-stat-lbl">Needs Review</div>
                  </div>
                </div>
                {devices.map(device => (
                  <div className="preview-row" key={device.name}>
                    <span>{device.name}</span>
                    <strong>{device.status} · {device.detail}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
