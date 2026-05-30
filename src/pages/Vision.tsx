import { Link } from 'react-router-dom'

const visionItems = [
  {
    phase: 'Where We Are',
    status: 'Live',
    badgeColor: 'badge-green',
    title: 'Practical Technology Services',
    desc: 'Today, BlackStorm provides a set of hands-on technology services for homes, small businesses, and local organizations. This includes network monitoring, WiFi optimization, UniFi configuration, privacy-focused technology guidance, and consulting. These services are available now.',
    items: [
      'Network Monitoring Service (live)',
      'WiFi optimization and assessment',
      'UniFi ecosystem setup and support',
      'Privacy-focused technology guidance',
      'Small business and home technology consulting',
      'Technology training and education',
    ],
  },
  {
    phase: 'Near-Term Thinking',
    status: 'Research Phase',
    badgeColor: 'badge-orange',
    title: 'Deeper Monitoring and Managed Visibility',
    desc: 'We are exploring what a more hands-on monitoring engagement would look like — one where BlackStorm plays a more active role in reviewing alerts, identifying patterns, and helping customers interpret what they\'re seeing. This is a research direction, not a scheduled service. No timeline is committed.',
    items: [
      'Proactive alert review and triage',
      'Pattern identification in network behavior',
      'Customized reporting for organizations',
      'Improved portal tooling for self-service insights',
    ],
  },
  {
    phase: 'Longer-Term Direction',
    status: 'Research Phase',
    badgeColor: 'badge-orange',
    title: 'Communications Preparedness',
    desc: 'We are thinking about how individuals and organizations can be better prepared from a communications and technology continuity standpoint. This means understanding what backup options exist, what dependencies exist in their current setup, and what practical steps they can take. This is early-stage thinking, not an announced product.',
    items: [
      'Technology dependency mapping',
      'Backup communications planning guidance',
      'Offline-capable system design concepts',
      'Documentation and continuity planning',
    ],
  },
  {
    phase: 'Future Concept',
    status: 'Planning',
    badgeColor: 'badge-gray',
    title: 'Privacy-First Infrastructure',
    desc: 'We have a long-term interest in helping organizations build technology infrastructure that puts privacy at the center from the beginning — not as an afterthought. This is a planning-stage concept. No services are available in this area yet, and no timelines are set.',
    items: [
      'Privacy-respecting network design frameworks',
      'Self-hosted and local-first technology options',
      'Data minimization in infrastructure choices',
      'Vendor evaluation with privacy as a criterion',
    ],
  },
  {
    phase: 'Future Concept',
    status: 'Planning',
    badgeColor: 'badge-gray',
    title: 'Operational Dashboards',
    desc: 'We envision providing organizations with a clear, unified view of their technology health — bringing together monitoring, connectivity, and operational status into a single readable interface that does not require technical expertise to interpret. This is currently a planning-stage concept. Nothing is available yet.',
    items: [
      'Multi-system status views',
      'Non-technical interface design',
      'Custom alert and summary configurations',
      'Per-location views for multi-site organizations',
    ],
  },
  {
    phase: 'Future Concept',
    status: 'Planning',
    badgeColor: 'badge-gray',
    title: 'Structured Technology Education',
    desc: 'We believe that helping people understand their technology — not just use it — is one of the most useful things we can do. In the future, we want to build more structured learning resources for individuals, families, and small organizations. This is early-stage planning. No platform or curriculum exists yet.',
    items: [
      'Self-paced learning resources',
      'Practical guides for common technology topics',
      'Privacy and safe technology practices curriculum',
      'Small business and nonprofit IT fundamentals',
    ],
  },
]

export default function Vision() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Looking Ahead</span>
          <h1>Future Vision</h1>
          <p className="lead" style={{ maxWidth: 640, marginTop: 16 }}>
            Here is where we are headed — with complete honesty about what is real today
            versus what is still an idea on paper. We believe you deserve to know the difference.
          </p>
        </div>
      </div>

      {/* ── Transparency Notice ───────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="alert alert-orange">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <strong>What the badges on this page mean</strong>
              <p style={{ marginTop: 6, marginBottom: 0 }}>
                <strong>Live</strong> means it exists and is available today.{' '}
                <strong>Research Phase</strong> means we are actively thinking about it but have not committed to building it.{' '}
                <strong>Planning</strong> means it is a future concept we want to pursue — but nothing exists, no timeline is set, and we are not taking money for it.
                We will not announce something as "coming soon" until we are actually ready to commit to building it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision Timeline ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {visionItems.map((item, idx) => (
              <div
                key={item.title}
                className="vision-timeline-row"
                style={{
                  paddingBottom: 32,
                  borderBottom: idx < visionItems.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <div style={{ paddingTop: 4 }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>
                    {item.phase}
                  </p>
                  <span className={`badge ${item.badgeColor}`}>{item.status}</span>
                </div>
                <div>
                  <h3 style={{ marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.7 }}>{item.desc}</p>
                  <ul
                    style={{
                      paddingLeft: 0,
                      listStyle: 'none',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                      gap: '8px 20px',
                    }}
                  >
                    {item.items.map(bullet => (
                      <li
                        key={bullet}
                        style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            color: item.status === 'Live' ? 'var(--color-success)' : item.status === 'Research Phase' ? 'var(--color-warning)' : 'var(--text-muted)',
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                          aria-hidden="true"
                        >
                          {item.status === 'Live'
                            ? <polyline points="20 6 9 17 4 12"/>
                            : <circle cx="12" cy="12" r="4"/>
                          }
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guiding Principle ────────────────────────────── */}
      <section className="section section-alt">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-label">How We Think About the Future</span>
          <h2>We Build in the Right Direction, Not at the Fastest Speed</h2>
          <p>
            There is a temptation in technology companies to announce everything early — to tell
            investors and customers about a grand vision and then race to make it true. We have
            chosen a different path. We build things when we can build them correctly, and we tell
            you about them when they are real. Everything on this page that is labeled "Research"
            or "Planning" is genuinely that — thinking and direction-setting, not a promise.
          </p>
          <p style={{ marginTop: 16 }}>
            If any of these future directions interest you, we would love to hear from you. Customer
            needs shape what we prioritize. Knowing that an organization genuinely needs something
            helps us evaluate whether and when to build it.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Share Your Thoughts</Link>
            <Link to="/services" className="btn btn-outline">See What's Available Now</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <h2>Interested in Working With Us Today?</h2>
          <p>
            While we work toward what's next, our current services are available now —
            and we are ready to help.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary btn-lg">See Current Services</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
