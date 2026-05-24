import { Link } from 'react-router-dom'

const principles = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Honesty Before Everything',
    desc: 'We tell you what we offer, what we do not offer, and where we are headed. No inflated claims, no certifications we have not earned, no services we have not built.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Explain, Don\'t Overwhelm',
    desc: 'Technology should make your life easier — not more confusing. We explain what things mean before we recommend them, and we never pressure you into a solution you don\'t understand.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Privacy as a Default',
    desc: 'We do not sell your data. We do not share it with advertisers. We actively choose privacy-respecting tools and approaches in everything we do — and we help our customers do the same.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'People Over Contracts',
    desc: 'We serve homeowners, small businesses, churches, nonprofits, and local organizations. Every customer gets our full attention. No one is too small to deserve a real answer.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Build It Before You Sell It',
    desc: 'We do not take money for services that are not ready. Our network monitoring platform is live because we built it first. Future services are labeled clearly as research or planning — not promised.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="20" x2="12" y2="10"/>
        <line x1="18" y1="20" x2="18" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
    title: 'Long-Term Relationships',
    desc: 'We are not interested in one-time transactions. We want customers who stay because the service is genuinely useful — and we earn that by being worth it, not by locking anyone in.',
  },
]

const teamHighlights = [
  {
    label: 'Network Infrastructure',
    desc: 'Routing, switching, firewall configuration, and network design for homes and small businesses.',
  },
  {
    label: 'WiFi & Wireless Systems',
    desc: 'UniFi ecosystem configuration, wireless site surveys, and access point placement optimization.',
  },
  {
    label: 'Privacy & Security Awareness',
    desc: 'Helping individuals and organizations make informed decisions about privacy-respecting technology.',
  },
  {
    label: 'Small Business Technology',
    desc: 'Practical IT consulting, equipment selection, and setup for organizations without a dedicated IT team.',
  },
  {
    label: 'Monitoring & Visibility',
    desc: 'Network health monitoring, uptime alerting, and operational awareness for homes and businesses.',
  },
  {
    label: 'Education & Training',
    desc: 'Walking clients through their technology — not just fixing it, but helping them understand it.',
  },
]

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Our Story</span>
          <h1>About BlackStorm</h1>
          <p className="lead" style={{ maxWidth: 620, marginTop: 16 }}>
            BlackStorm, LLC is a small, US-based technology company. We help homeowners,
            small businesses, churches, and local organizations get practical, honest help
            with their networks, devices, and technology decisions.
          </p>
        </div>
      </div>

      {/* ── Origin ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">Where We Come From</span>
              <h2>Started With a Simple Observation</h2>
              <p>
                Good technology help has always been disproportionately available to large organizations
                with large budgets. The homeowner whose router keeps dropping. The small church that
                can't get their WiFi to cover the fellowship hall. The local business that finds out
                their system was down for hours only after a customer complained. These problems have
                real solutions — but those solutions were never marketed to the people who needed them most.
              </p>
              <p>
                BlackStorm was built to change that. We started by doing what we knew how to do —
                networking, wireless configuration, privacy-respecting technology guidance, and
                practical consulting for small organizations. Our first formal service offering is
                our Network Monitoring platform, which watches your devices around the clock and
                alerts you the moment something goes offline.
              </p>
              <p>
                We are a growing company. We are transparent about our size, honest about our
                limitations, and committed to doing good work for every customer we serve.
              </p>
              <Link to="/services" className="btn btn-primary" style={{ marginTop: 8 }}>
                See What We Offer
              </Link>
            </div>
            <div className="split-visual">
              <div className="alert alert-blue" style={{ marginBottom: 20 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <strong>Where we are right now</strong>
                  <p style={{ marginTop: 6, marginBottom: 0 }}>
                    We are an early-stage company with our Network Monitoring Service live and actively
                    serving customers. We also provide consulting services on networking, wireless
                    configuration, and privacy-focused technology decisions.
                  </p>
                </div>
              </div>
              <div className="alert alert-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 6s+2-2 5-2 5.5 2 8 2 5-2 5-2V22s-2 2-5 2-5.5-2-8-2-5 2-5 2z"/>
                  <line x1="1" y1="12" x2="21" y2="12"/>
                </svg>
                <div>
                  <strong>Who we work with</strong>
                  <p style={{ marginTop: 6, marginBottom: 0 }}>
                    Homeowners, small businesses, churches, nonprofits, local organizations, and growing
                    companies that want practical technology help without the enterprise overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Background</span>
            <h2>What We Actually Know How to Do</h2>
            <p>
              We are a small team with hands-on backgrounds across practical network technology.
              We do not claim expertise we do not have. These are the areas we work in every day.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {teamHighlights.map(item => (
              <div
                key={item.label}
                style={{
                  padding: '22px 26px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <h4 style={{ marginBottom: 8 }}>{item.label}</h4>
                <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2>The Principles We Build On</h2>
          </div>
          <div className="features-grid">
            {principles.map(p => (
              <div className="card" key={p.title}>
                <div className="card-header">
                  <div className="card-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency ─────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">Transparency</span>
              <h2>What We Will Always Tell You</h2>
              <p>
                We are early-stage. We are small. We are growing. We have built a real network
                monitoring platform, we have real experience in networking and wireless technology,
                and we have a genuine commitment to helping the people we work with.
              </p>
              <p>
                We do not have a roster of Fortune 500 clients. We have not earned government
                certifications or compliance designations we haven't pursued. We do not employ a
                team of 200 engineers. And we will never tell you otherwise.
              </p>
              <p>
                What we do have is the discipline to say no to shortcuts — no exaggerated marketing,
                no services listed before they exist, no claims built on sand. If that sounds like
                the kind of company you want to work with, we would be glad to hear from you.
              </p>
              <Link to="/values" className="btn btn-outline" style={{ marginTop: 8 }}>
                Read Our Values
              </Link>
            </div>
            <div className="split-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Company type', value: 'Private LLC, US-based' },
                  { label: 'Stage', value: 'Early-stage, actively growing' },
                  { label: 'Current services', value: 'NMS + Consulting' },
                  { label: 'Future services', value: 'Labeled as Research / Planning' },
                  { label: 'Data practices', value: 'No selling, no advertising use' },
                  { label: 'Support team', value: 'US-based, human' },
                ].map(row => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 16px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem',
                    }}
                  >
                    <span style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work With a Company That Levels With You?</h2>
          <p>
            Whether you need network monitoring, WiFi help, privacy guidance, or just an honest
            conversation about your technology — we are here.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
            <Link to="/services" className="btn btn-outline btn-lg">See Our Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
