import { Link } from 'react-router-dom'

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'We Tell You the Truth',
    body: "We're a small, growing company — and we say so. We don't exaggerate our size, overstate our capabilities, or promise services we haven't built yet. When something isn't available, we label it clearly. When we make a mistake, we own it. You will always know exactly what you're getting from BlackStorm — and what you're not.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Your Privacy Is Not for Sale',
    body: "We do not sell your personal information. We do not share your data with advertisers. The network monitoring data we collect about your devices belongs to you — we use it only to provide the service you've signed up for. Full stop.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Technology for Everyone',
    body: "Whether you're managing a home network, running a small business, supporting a local church, or overseeing a nonprofit, you deserve technology that works without a manual. We build tools that are straightforward to use and easy to understand — regardless of your technical background.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'We Take Reliability Seriously',
    body: "When you trust us to watch your network, we take that responsibility seriously. We monitor around the clock, alert you quickly when something needs attention, and work hard to keep our platform running. We don't promise perfection — no technology service can — but we do promise consistent, earnest effort.",
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
    title: 'Every Customer Matters',
    body: "We serve homeowners, small businesses, churches, nonprofits, local organizations, and growing companies. We give every customer the same respectful attention, regardless of their plan size, their technical sophistication, or the number of devices they're monitoring. No one is too small to deserve good service.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="20" x2="12" y2="10"/>
        <line x1="18" y1="20" x2="18" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
    title: 'We Build Before We Announce',
    body: "We only offer what we've actually built. Our Network Monitoring Service is live because we built it first — not because it sounded good on a slide. Future services are labeled clearly as 'research' or 'planning.' We won't take your money for something that doesn't exist, and we won't announce timelines we can't keep.",
  },
]

const audiences = [
  { label: 'Homeowners', desc: 'Keep your home network healthy without needing an IT background.' },
  { label: 'Small Businesses', desc: 'Know the moment a system stops working — before customers do.' },
  { label: 'Churches & Nonprofits', desc: 'Reliable monitoring at pricing that respects your budget.' },
  { label: 'Local Organizations', desc: 'Simple tools for teams that don\'t have a dedicated IT team.' },
  { label: 'Growing Companies', desc: 'Start simple and scale as your infrastructure grows.' },
  { label: 'Multi-Site Operations', desc: 'One view of every location, without the enterprise price tag.' },
]

export default function Values() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Our Values</span>
          <h1>What We Believe</h1>
          <p className="lead" style={{ maxWidth: 640, marginTop: 16 }}>
            BlackStorm was built around a simple idea: technology services should be honest,
            useful, and accessible to everyone — not just large organizations with large budgets.
            These values aren't marketing language. They're how we make decisions every day.
          </p>
        </div>
      </div>

      {/* ── Core Values Grid ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="features-grid">
            {values.map(v => (
              <div className="card" key={v.title}>
                <div className="card-header">
                  <div className="card-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                </div>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrity Statement ──────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">Integrity in Practice</span>
              <h2>How We Conduct Our Business</h2>
              <p>
                BlackStorm, LLC is committed to operating with honesty and transparency in
                everything we do. That means no misleading marketing, no hidden fees, and no
                pressure tactics. It means we won't claim certifications we haven't earned,
                client relationships we don't have, or capabilities beyond what our platform
                actually delivers.
              </p>
              <p>
                Our reputation is built on trust — and trust is built on consistent, honest
                action over time. We are an early-stage company, and we know it. We're proud
                of what we've built so far, clear-eyed about what we haven't built yet, and
                committed to growing in a way we can stand behind.
              </p>
              <p>
                We approach data with the same seriousness. We don't collect what we don't
                need. We don't keep it longer than necessary. And we never treat your
                information as a product to be monetized.
              </p>
            </div>
            <div className="split-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  {
                    heading: 'No inflated claims',
                    desc: 'We describe our services accurately — including their limitations.',
                  },
                  {
                    heading: 'No undisclosed fees',
                    desc: 'Pricing is straightforward. What you see is what you pay.',
                  },
                  {
                    heading: 'No fabricated credentials',
                    desc: 'We don\'t claim certifications, contracts, or clients we don\'t have.',
                  },
                  {
                    heading: 'No selling your data',
                    desc: 'Your information is never shared with advertisers or sold to third parties.',
                  },
                  {
                    heading: 'No pressure to commit',
                    desc: 'We want customers who stay because the service is good — not because they\'re locked in.',
                  },
                ].map(item => (
                  <div
                    key={item.heading}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      padding: '16px 20px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
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
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: 4 }}>
                        {item.heading}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who We're For</span>
            <h2>Real People and Real Organizations</h2>
            <p>
              We didn't build BlackStorm for a specific industry or a specific budget tier.
              We built it for anyone who needs to know their technology is working. That
              includes people who've never heard the term "network monitoring" before.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {audiences.map(a => (
              <div
                key={a.label}
                style={{
                  padding: '24px 28px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <h4 style={{ marginBottom: 8 }}>{a.label}</h4>
                <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learning & Education note ────────────────────── */}
      <section className="section section-alt">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-label">Education</span>
          <h2>We Want You to Understand What You're Buying</h2>
          <p>
            Network monitoring is not a complex idea, but the industry often makes it sound
            like one. We write plainly because we believe that when you understand what a
            service does — and what it doesn't — you're better equipped to make good decisions
            for your home or your organization.
          </p>
          <p style={{ marginTop: 16 }}>
            Our support documentation, pricing pages, and service descriptions are all written
            to be read by someone encountering this technology for the first time. If something
            is unclear, we want to hear about it.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Ask Us Anything</Link>
            <Link to="/support" className="btn btn-outline">Knowledge Base</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work With a Company That Means What It Says?</h2>
          <p>
            Start with network monitoring and grow with us. No contracts, no inflated promises —
            just a straightforward service at a fair price, from a team that's genuinely trying
            to do right by you.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
            <Link to="/about" className="btn btn-outline btn-lg">Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
