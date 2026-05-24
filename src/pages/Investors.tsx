import { Link } from 'react-router-dom'

export default function Investors() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Investors</span>
          <h1>Investor Overview</h1>
          <p className="lead" style={{ maxWidth: 600, marginTop: 16 }}>
            BlackStorm is an early-stage technology company. This page provides factual
            information for prospective investors. Nothing here constitutes a securities
            offering or guarantee of future performance.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="alert alert-orange" style={{ marginBottom: 48 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <div>
              <strong>Disclosure</strong>
              <p style={{ marginTop: 6, marginBottom: 0 }}>
                BlackStorm, LLC is an early-stage private company. We do not claim completed
                government contracts, enterprise client lists, earned certifications, or specific
                revenue figures that have not been verified. All forward-looking statements
                represent goals, not guarantees.
              </p>
            </div>
          </div>

          <div className="split-section">
            <div className="split-content">
              <span className="section-label">The Opportunity</span>
              <h2>A Market That Needs Better Options</h2>
              <p>
                Network monitoring has long been an enterprise-only category. The tools are
                expensive, complex, and built for IT departments with dedicated staff. Meanwhile,
                millions of small businesses and households operate without any visibility
                into their network infrastructure.
              </p>
              <p>
                BlackStorm is entering at the bottom of the market and building up — starting
                with simple, affordable monitoring for homes and small businesses, then scaling
                to enterprise and data center clients.
              </p>
              <ul className="check-list">
                {[
                  'Large addressable market across residential, SMB, mid-market, and enterprise segments',
                  'Subscription revenue model — recurring, predictable monthly billing',
                  'Low customer acquisition friction — monitoring starts within 24 hours',
                  'MSP channel potential — monitoring resold through managed service providers',
                  'Platform foundation — designed to expand into adjacent services',
                ].map(item => (
                  <li key={item}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="split-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Target Segments', desc: 'Residential → SMB → Mid-Market → Enterprise → Data Center' },
                  { label: 'Revenue Model', desc: 'Monthly subscription, tiered by device count and feature set' },
                  { label: 'Current Phase', desc: 'Early-stage — first service live, onboarding first customers' },
                  { label: 'Future Services', desc: 'Security services and managed connectivity in research/planning' },
                ].map(item => (
                  <div key={item.label} style={{ padding: '20px 24px', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                      {item.label}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Roadmap</span>
            <h2>Where We Are and Where We're Going</h2>
            <p>This is our honest view of progress. No milestones are fabricated.</p>
          </div>
          <div className="roadmap" style={{ maxWidth: 720, margin: '0 auto' }}>
            {[
              { title: 'Platform Foundation', desc: 'Network monitoring service built and deployed. Customer portal, alert system, and reporting infrastructure live.', badge: 'Complete', badgeClass: 'badge-green', done: true },
              { title: 'Customer Acquisition', desc: 'Actively onboarding first paying customers across residential, small business, and enterprise segments.', badge: 'In Progress', badgeClass: 'badge-blue', done: false },
              { title: 'Security Reporting', desc: 'Research phase for security-aware reporting features — vulnerability awareness and posture visibility for existing customers.', badge: 'Research', badgeClass: 'badge-orange', done: false },
              { title: 'Platform Expansion', desc: 'Future services including managed connectivity and additional BlackStorm platform capabilities. Planning stage, no committed timeline.', badge: 'Planning', badgeClass: 'badge-gray', done: false },
            ].map(item => (
              <div className="roadmap-item" key={item.title}>
                <div className={`roadmap-marker${item.done ? ' done' : ''}`}>
                  {item.done ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  )}
                </div>
                <div className="roadmap-content">
                  <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-label">Get in Touch</span>
          <h2>Interested in Learning More?</h2>
          <p>
            We welcome conversations with investors who are interested in early-stage
            technology companies. Contact us to start a discussion.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
            Contact BlackStorm
          </Link>
        </div>
      </section>
    </>
  )
}
