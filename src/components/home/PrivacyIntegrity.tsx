/*
  PrivacyIntegrity — Section 6
  A dedicated privacy and integrity statement — not a legal page, not a marketing pitch.
  This section gives privacy-conscious customers a clear signal that we take it seriously.
  Visual intent: default background, split layout with text left, commitment list right.
  Dark mode: left text in primary colors, right list items on elevated card.
  Light mode: same layout, slightly warmer tones.
  Tone: matter-of-fact, no fear-based framing, no "we protect you from hackers" claims.
*/
import { Link } from 'react-router-dom'

const commitments = [
  {
    heading: 'We do not sell your data',
    desc: 'Your monitoring data, contact information, and account activity are never sold, licensed, or shared with advertisers.',
  },
  {
    heading: 'We collect only what we need',
    desc: 'We do not collect information we do not need to provide the service. We do not track your browsing behavior or build profiles.',
  },
  {
    heading: 'We cannot see your files or traffic',
    desc: 'Our monitoring checks whether a device responds — nothing more. We have no access to file contents, network traffic, or private communications.',
  },
  {
    heading: 'We are transparent about our limitations',
    desc: 'We monitor device availability and related operational signals. We do not claim certifications or protections beyond what the service actually provides.',
  },
  {
    heading: 'You can request your data',
    desc: 'If you want to know what we have, or want it deleted, you can ask — and we will respond within 30 days.',
  },
]

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: 2 }}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function PrivacyIntegrity() {
  return (
    <section className="section">
      <div className="container">
        <div className="split-section">
          <div className="split-content">
            <span className="section-label">Privacy & Integrity</span>
            <h2>We Take Privacy Seriously. Here's What That Means.</h2>
            <p>
              Privacy is not a checkbox for us. It is a design principle — one we apply to how
              we build our services, what data we collect, and how long we keep it.
            </p>
            <p>
              We do not use your information to profile you, target you, or make money from
              you beyond the service fee you pay. The monitoring data we collect belongs to you.
              We use it only to provide the service you signed up for.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <Link to="/privacy" className="btn btn-outline">
                Read Our Privacy Policy
              </Link>
              <Link to="/services" className="btn btn-ghost" style={{ color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '0.9rem', padding: '10px 4px' }}>
                View Service Boundaries
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <div
              style={{
                padding: '24px 28px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <h4 style={{ marginBottom: 20, fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Our Privacy Commitments
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {commitments.map(c => (
                  <div key={c.heading} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckIcon />
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: 'var(--text-primary)',
                          marginBottom: 3,
                        }}
                      >
                        {c.heading}
                      </div>
                      <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {c.desc}
                      </div>
                    </div>
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
