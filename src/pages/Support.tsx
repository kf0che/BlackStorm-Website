import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'Getting Started with Monitoring',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    articles: [
      'What is network monitoring and what does it actually do?',
      'How to submit your device list to BlackStorm',
      'What information do we need to start monitoring?',
      'Understanding your first monitoring report',
      'How to log in to your customer portal',
      'Setting up email alert preferences',
      'What counts as a "device" for billing purposes?',
    ],
  },
  {
    title: 'Alerts & Notifications',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    articles: [
      'How alert notifications work',
      'Why did I receive an alert for a device that seems fine?',
      'How to add or change SMS alert settings',
      'Understanding recovery alerts',
      'How to adjust alert thresholds (Business and Professional plans)',
      'Alert history and how to review it in your portal',
      'How long before an alert fires after a device goes down?',
    ],
  },
  {
    title: 'WiFi & Wireless Help',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    articles: [
      'Why is my WiFi slow in certain parts of my home or office?',
      'What causes wireless dead zones and how to fix them',
      'Understanding the difference between 2.4GHz and 5GHz',
      'When to use a mesh system vs. a single access point',
      'How interference from neighbors affects your WiFi',
      'What to do before calling us about WiFi problems',
      'Is my current router good enough?',
    ],
  },
  {
    title: 'UniFi Ecosystem',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    articles: [
      'Introduction to the UniFi ecosystem',
      'What is a UniFi Dream Machine / Dream Router?',
      'How to adopt a new UniFi access point',
      'Setting up VLANs on UniFi — what, why, and how',
      'UniFi guest network setup guide',
      'Common UniFi adoption and connectivity issues',
      'Updating UniFi firmware safely',
    ],
  },
  {
    title: 'Privacy & Technology Decisions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    articles: [
      'What is DNS filtering and why does it matter?',
      'How to set up a guest network to isolate smart devices',
      'Understanding what your router logs',
      'VPN basics — what it does, what it doesn\'t do',
      'How to review what devices are on your network',
      'Choosing a router with better privacy defaults',
      'What to do about smart home devices and data collection',
    ],
  },
  {
    title: 'Billing, Plans & Account',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    articles: [
      'How billing works — monthly in advance, cancel anytime',
      'How to upgrade or downgrade your monitoring plan',
      'What happens if I add more devices than my plan covers?',
      'How to cancel your account',
      'How to add or remove users from your portal',
      'Understanding your invoice',
      'What happens to my data when I cancel?',
    ],
  },
]

const resources = [
  {
    title: 'Network Monitoring 101',
    desc: 'New to network monitoring? Start here. This guide explains what it is, what it does, and what it does not do — in plain language.',
    link: '/contact',
    linkText: 'Ask Us Anything',
  },
  {
    title: 'WiFi Troubleshooting Checklist',
    desc: 'Before calling for help, run through this checklist. It covers the most common causes of wireless problems and how to test for them.',
    link: '/contact',
    linkText: 'Get WiFi Help',
  },
  {
    title: 'Your First Month With BlackStorm',
    desc: 'What to expect in the first 30 days — how monitoring works, when to expect alerts, and how to read your first reports.',
    link: '/contact',
    linkText: 'Contact Support',
  },
]

export default function Support() {
  return (
    <>
      {/* ── Hero / KB Introduction ───────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-label">Support & Knowledge Base</span>
          <h1>How Can We Help?</h1>
          <p className="lead" style={{ maxWidth: 580, margin: '16px auto 0' }}>
            Find answers to common questions, learn about your technology, or reach our
            US-based support team directly. We write for real people — no jargon required.
          </p>
          <div className="kb-search" style={{ marginTop: 40, marginBottom: 0 }}>
            <input
              type="text"
              className="kb-search-input form-input"
              placeholder="Search the knowledge base..."
              aria-label="Search knowledge base"
            />
            <button className="kb-search-btn">Search</button>
          </div>
        </div>
      </div>

      {/* ── KB Introduction ───────────────────────────────── */}
      <section className="section section-alt" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 32 }}>
            <span className="section-label">Knowledge Base</span>
            <h2>Written for People, Not Technicians</h2>
            <p>
              Our knowledge base is designed for customers who may not have a technology background.
              We explain what things mean before we explain how to do them. If you read one of our
              articles and something still does not make sense, that is a problem we want to fix —
              contact us and let us know.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {resources.map(r => (
              <div
                key={r.title}
                style={{
                  padding: '22px 24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <h4 style={{ marginBottom: 0 }}>{r.title}</h4>
                <p style={{ fontSize: '0.875rem', marginBottom: 0, flex: 1 }}>{r.desc}</p>
                <Link to={r.link} style={{ fontSize: '0.85rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {r.linkText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Browse by Topic</span>
            <h2>Common Questions</h2>
          </div>
          <div className="grid-2" style={{ gap: 32 }}>
            {categories.map(cat => (
              <div className="kb-card" key={cat.title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div className="card-icon">{cat.icon}</div>
                  <h3 style={{ fontSize: '1.05rem' }}>{cat.title}</h3>
                </div>
                <div className="kb-article-list">
                  {cat.articles.map(article => (
                    <Link to="/contact" key={article} className="kb-article-item">
                      {article}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Support ────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Still Need Help?</span>
            <h2>Contact Support Directly</h2>
            <p>
              Can't find what you need? We are here. Our US-based team responds to every
              inquiry — no automated replies, no scripted runarounds.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3>Email Support</h3>
              </div>
              <p>
                Send us a message and we will respond within your plan's support window.
                Include your account email and describe the issue as specifically as you can —
                what device, what happened, when.
              </p>
              <a href="mailto:support@blackstorm.llc" className="btn btn-outline" style={{ marginTop: 16, display: 'inline-flex' }}>
                support@blackstorm.llc
              </a>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3>Contact Form</h3>
              </div>
              <p>
                Prefer to write it out? Use our contact form to describe your situation,
                select your topic, and add any helpful context. We read every submission.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }}>
                Open Contact Form
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 12,
              }}
            >
              {[
                { label: 'New inquiries', time: '1 business day' },
                { label: 'Home plan support', time: '48 hours' },
                { label: 'Business plan support', time: '24 hours (priority queue)' },
                { label: 'Professional plan support', time: 'Priority + phone line' },
              ].map(row => (
                <div
                  key={row.label}
                  style={{
                    padding: '14px 18px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem',
                  }}
                >
                  <div style={{ color: 'var(--text-secondary)', marginBottom: 4 }}>{row.label}</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{row.time}</div>
                </div>
              ))}
            </div>

            <div className="alert alert-orange">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <strong>Service not working?</strong>
                <p style={{ marginTop: 4, marginBottom: 0 }}>
                  Email{' '}
                  <a href="mailto:support@blackstorm.llc" style={{ color: 'inherit', textDecoration: 'underline' }}>support@blackstorm.llc</a>{' '}
                  with "URGENT" in the subject line. Describe what is not working and which devices
                  are affected. Professional plan customers may also call their dedicated support line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education Note ────────────────────────────────── */}
      <section className="section">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Approach to Support</span>
          <h2>We Explain Things — Not Just Fix Them</h2>
          <p>
            When you contact us with a problem, our goal is not just to resolve the immediate issue.
            We try to help you understand why it happened and what, if anything, you can do differently
            going forward. Technology works better when you understand it, and you deserve to understand
            the tools you are paying for.
          </p>
          <p style={{ marginTop: 16 }}>
            If you find that one of our support articles or explanations did not make sense, please
            tell us. We will improve it. Our knowledge base is written for customers who are encountering
            a topic for the first time — and we take that responsibility seriously.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Ask Us Anything</Link>
            <Link to="/values" className="btn btn-outline">Our Values</Link>
          </div>
        </div>
      </section>
    </>
  )
}
