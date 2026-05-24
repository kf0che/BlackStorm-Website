import { Link } from 'react-router-dom'

const trustItems = [
  'US-based team and support',
  'No long-term contracts required',
  'Your data is never sold',
  'Plain-English communication, always',
]

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero home-hero" aria-labelledby="home-hero-title">
      <div className="container">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <div className="hero-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              Network Monitoring · WiFi · Consulting · Privacy
            </div>

            <h1 id="home-hero-title">
              Technology Help You Can Actually Trust
            </h1>

            <p className="lead">
              BlackStorm, LLC provides practical network monitoring, WiFi support, and
              technology consulting for homeowners, small businesses, churches, and
              local organizations. We keep the language plain and the claims honest.
            </p>

            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get in Touch
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                See Our Services
              </Link>
            </div>

            <div className="hero-trust" aria-label="BlackStorm trust indicators">
              {trustItems.map(item => (
                <div className="trust-item" key={item}>
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <div style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Network Status</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>● All online</span>
              </div>
              {[
                { name: 'Main Router', detail: 'Online · 14 days' },
                { name: 'Office Switch', detail: 'Online · 14 days' },
                { name: 'File Server', detail: 'Online · 6 days' },
                { name: 'Wireless AP', detail: 'Online · 14 days' },
              ].map(device => (
                <div key={device.name} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{device.name}</span>
                  <span style={{ color: 'var(--color-success)', fontSize: '0.8rem' }}>{device.detail}</span>
                </div>
              ))}
              <div style={{
                marginTop: 4,
                padding: '10px 14px',
                background: 'rgba(34,197,94,0.06)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8rem',
                color: 'var(--color-success)',
                textAlign: 'center',
              }}>
                No alerts in the last 30 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
