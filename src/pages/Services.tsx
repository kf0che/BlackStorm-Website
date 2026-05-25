import { Link } from 'react-router-dom'

const currentServices = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Network Monitoring',
    badge: 'Available Now',
    badgeColor: 'badge-green',
    summary: 'We watch your networked devices around the clock and alert you within 60 seconds when something goes offline or becomes unreachable.',
    detail: 'No hardware required. Includes customer portal access, email and SMS alerts, performance reporting, and US-based support.',
    link: '/services/network-monitoring',
    linkText: 'Learn More',
    secondaryLink: '/pricing',
    secondaryText: 'View Pricing',
    capabilities: [
      'Routers, switches, and firewalls',
      'Servers and workstations',
      'NAS drives and storage devices',
      'Wireless access points',
      'Printers and shared devices',
      'IP cameras and smart devices',
      'Any reachable IP-addressed device',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    title: 'WiFi Optimization & Assessment',
    badge: 'Available Now',
    badgeColor: 'badge-green',
    summary: 'Poor wireless coverage causes dropped calls, slow speeds, and constant frustration. We identify the cause and help you fix it.',
    detail: 'We assess your space, review your current equipment, identify interference and dead zones, and recommend practical improvements — explained in plain language.',
    link: '/contact',
    linkText: 'Inquire About WiFi Help',
    secondaryLink: null,
    secondaryText: null,
    capabilities: [
      'Coverage mapping for homes and small offices',
      'Channel and interference analysis',
      'Access point placement recommendations',
      'Equipment selection guidance',
      'Band steering and roaming optimization',
      'Guest network configuration',
      'Mesh network assessment and setup',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    title: 'UniFi Ecosystem Support',
    badge: 'Available Now',
    badgeColor: 'badge-green',
    summary: 'Ubiquiti\'s UniFi platform is powerful and cost-effective — but it requires proper configuration to perform the way it\'s designed to.',
    detail: 'We help homeowners and small businesses set up, configure, and troubleshoot UniFi networking equipment. From initial deployment to advanced settings.',
    link: '/contact',
    linkText: 'Get UniFi Help',
    secondaryLink: null,
    secondaryText: null,
    capabilities: [
      'UniFi Dream Machine / Dream Router setup',
      'Access point configuration and adoption',
      'VLAN and network segmentation',
      'Controller migration and software updates',
      'Guest portal setup',
      'Performance tuning and troubleshooting',
      'Site-to-site configuration guidance',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Privacy-Focused Technology Guidance',
    badge: 'Available Now',
    badgeColor: 'badge-green',
    summary: 'Most consumer technology is designed to collect as much data about you as possible. We help you understand what\'s happening and what your options are.',
    detail: 'We provide practical, non-alarmist guidance on privacy-respecting technology choices. No lectures — just honest information so you can make informed decisions.',
    link: '/contact',
    linkText: 'Start a Conversation',
    secondaryLink: null,
    secondaryText: null,
    capabilities: [
      'DNS filtering and blocking setup',
      'Router-level privacy configuration',
      'VPN selection and setup guidance',
      'Evaluating privacy tradeoffs in consumer devices',
      'IoT device network segmentation',
      'Understanding what your devices are doing',
      'Private browsing and communication tools',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Small Business & Home Technology Consulting',
    badge: 'Available Now',
    badgeColor: 'badge-green',
    summary: 'You should not need a full-time IT department to make confident decisions about your technology. We serve as a practical guide for people who just want things to work.',
    detail: 'One-time or ongoing consultations for homeowners, small businesses, nonprofits, churches, and local organizations navigating technology decisions.',
    link: '/contact',
    linkText: 'Talk to Us',
    secondaryLink: null,
    secondaryText: null,
    capabilities: [
      'Network design and planning',
      'Equipment selection and purchasing guidance',
      'New office or home setup',
      'Technology audit and health review',
      'Vendor evaluation and comparison',
      'Documentation of your network and systems',
      'Ongoing advisory relationships',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Technology Training & Education',
    badge: 'Available Now',
    badgeColor: 'badge-green',
    summary: 'Understanding your technology makes you more confident, less vulnerable, and better equipped to make good decisions for years ahead.',
    detail: 'We offer one-on-one and small group sessions walking individuals and teams through their networks, devices, and technology tools — at a pace that works for them.',
    link: '/contact',
    linkText: 'Inquire About Training',
    secondaryLink: null,
    secondaryText: null,
    capabilities: [
      'Home network walkthroughs',
      'WiFi and router fundamentals',
      'Understanding your devices and data',
      'Small business IT basics',
      'Team technology onboarding',
      'Privacy and safe browsing practices',
      'Custom sessions based on your needs',
    ],
  },
]

const futureServices = [
  {
    title: 'Managed Network Monitoring',
    badge: 'Research Phase',
    badgeColor: 'badge-orange',
    desc: 'A more hands-on monitoring service where BlackStorm takes an active role in reviewing alerts and coordinating responses — not just sending notifications. Currently under research. No timeline committed.',
  },
  {
    title: 'Preparedness Communications',
    badge: 'Research Phase',
    badgeColor: 'badge-orange',
    desc: 'Technology guidance and infrastructure planning to help organizations think through communications and operational continuity. Currently in early research. No services available yet.',
  },
  {
    title: 'Privacy-First Infrastructure Solutions',
    badge: 'Planning',
    badgeColor: 'badge-gray',
    desc: 'Structured infrastructure packages designed from the ground up with privacy as the foundation — for organizations that want a principled approach to their technology stack. In planning only.',
  },
  {
    title: 'Operational Dashboards',
    badge: 'Planning',
    badgeColor: 'badge-gray',
    desc: 'Custom visibility dashboards for organizations that want a single clear view of their technology health — beyond individual device monitoring. In early planning. Not yet available.',
  },
  {
    title: 'Technical Education Platform',
    badge: 'Planning',
    badgeColor: 'badge-gray',
    desc: 'A structured learning platform for individuals and teams — covering networking fundamentals, privacy practices, and practical technology literacy. Currently a planning-stage concept only.',
  },
]

export default function Services() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Services</span>
          <h1>What BlackStorm Offers</h1>
          <p className="lead" style={{ maxWidth: 620, marginTop: 16 }}>
            We offer practical technology services for homes, small businesses, and local
            organizations. Every service listed as available is actually available today.
            Future plans are labeled clearly — we never sell what we haven't built.
          </p>
        </div>
      </div>

      {/* ── Current Services ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Available Today</span>
            <h2>Current Services</h2>
            <p>
              The following services are available now. Contact us to discuss your specific
              situation — most engagements start with a straightforward conversation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {currentServices.map((svc, idx) => (
              <div
                key={svc.title}
                className="feature-card service-card-layout"
                style={{
                  display: 'grid',
                  gridTemplateColumns: idx === 0
                    ? 'minmax(0, 1fr) minmax(0, 1fr)'
                    : 'minmax(0, 1fr) minmax(min(100%, 280px), 0.55fr)',
                  gap: 40,
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div className="card-icon">{svc.icon}</div>
                    <span className={`badge ${svc.badgeColor}`}>{svc.badge}</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: 12 }}>{svc.title}</h3>
                  <p style={{ color: 'var(--text-primary)', marginBottom: 10 }}>{svc.summary}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 20 }}>{svc.detail}</p>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link to={svc.link} className="btn btn-primary">{svc.linkText}</Link>
                    {svc.secondaryLink && (
                      <Link to={svc.secondaryLink} className="btn btn-outline">{svc.secondaryText}</Link>
                    )}
                  </div>
                </div>
                <div>
                  <ul className="check-list">
                    {svc.capabilities.map(cap => (
                      <li key={cap}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Future Services ──────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Future Direction</span>
            <h2>What We're Working Toward</h2>
            <p>
              The following are services we are researching or planning — not services we currently
              offer. We include them so you can see where we intend to go. Nothing below is available,
              and no timeline is committed for any of it.
            </p>
          </div>
          <div className="features-grid">
            {futureServices.map(svc => (
              <div className="card coming-soon" key={svc.title}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: 0 }}>{svc.title}</h3>
                  <span className={`badge ${svc.badgeColor}`} style={{ marginLeft: 8, flexShrink: 0 }}>{svc.badge}</span>
                </div>
                <p style={{ fontSize: '0.875rem' }}>{svc.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 32, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Interested in a future service? <Link to="/contact" style={{ color: 'var(--color-primary)' }}>Let us know</Link> —
            customer interest helps us prioritize what to build next.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <h2>Not Sure What You Need?</h2>
          <p>
            Start with a conversation. Tell us about your situation — your network, your devices,
            your goals, your frustrations — and we will tell you honestly what we can help with.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Talk to Us</Link>
            <Link to="/why-us" className="btn btn-outline btn-lg">Why BlackStorm</Link>
          </div>
        </div>
      </section>
    </>
  )
}
