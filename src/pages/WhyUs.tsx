import { Link } from 'react-router-dom'

const differentiators = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'We Say What We Don\'t Know',
    body: 'A lot of technology companies project confidence even when they\'re uncertain. We think that\'s backwards. If we don\'t know the answer, we say so. If we\'re not the right fit, we tell you. If something is outside our current capabilities, we label it clearly. You should never leave a conversation with us believing we offered something we can\'t actually deliver.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'We Explain Before We Recommend',
    body: 'We do not hand you a solution and expect you to trust us blindly. We explain what we\'re recommending, why we\'re recommending it, and what the tradeoffs are. We want you to understand your own technology — not just rely on us to manage it forever.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'We Don\'t Sell Your Data',
    body: 'Many free and low-cost technology tools subsidize their pricing by treating your data as a product. We do not do that. The data collected through our monitoring service belongs to you. It is used only to provide the service — never to advertise, profile, or profit from your information.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'We Work With the Gear You Actually Have',
    body: 'We specialize in the equipment that homeowners and small businesses actually use — Ubiquiti/UniFi systems, consumer routers, small office switches, off-the-shelf NAS drives, standard IP cameras. We are not an enterprise-only shop that brings its own hardware and disappears. We meet you where you are.',
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
    title: 'Small Customers Are Not Second-Class',
    body: 'We serve homeowners, small churches, local nonprofits, and growing businesses. These are not "starter" customers we hope to graduate to something bigger. They are the customers we built this for. A homeowner with one router and a church with fifteen devices deserve the same honest, attentive service as any other customer.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    title: 'No Hardware Commissions',
    body: 'When we recommend equipment, it is because we genuinely think it is the right fit for your situation — not because we earn a margin on the sale. We do not sell hardware. We help you buy the right hardware from the right place. That removes any incentive to steer you toward something that benefits us.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Human Support, Based in the US',
    body: 'When you contact us, you talk to a person who understands what we do. No offshore ticket queues, no scripted responses that don\'t address your situation. We are a small team, and that means you get real attention from people who are invested in getting your issue resolved.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'No Lock-In',
    body: 'We do not believe in keeping customers through friction. No long-term contracts required. No proprietary systems that make it painful to leave. We want you to stay because the service is worth it — and we earn that every month.',
  },
]

const notForUs = [
  'You need enterprise-grade compliance certifications or government-level clearances',
  'You need a managed service provider with a large, round-the-clock operations center',
  'You are looking for a cybersecurity firm to perform penetration testing or incident response',
  'You need enterprise software development or custom application work',
  'Your organization requires vendor certifications we have not yet earned',
]

const perfectFor = [
  'You run a small business and want technology that just works, explained in plain English',
  'You have a home network and want to understand what\'s on it and keep it healthy',
  'You manage a church, nonprofit, or local organization with limited IT resources',
  'You\'ve been frustrated by vendors who overpromise and underdeliver',
  'You care about where your data goes and want a provider who takes that seriously',
  'You want a long-term relationship with someone you can trust, not a one-time contractor',
  'You use UniFi equipment and need someone who actually knows how to configure it',
]

export default function WhyUs() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Our Approach</span>
          <h1>Why Work With BlackStorm</h1>
          <p className="lead" style={{ maxWidth: 620, marginTop: 16 }}>
            We are not the biggest option. We are not the cheapest option. We are the option
            that tells you the truth, does what we said we would, and treats your technology
            — and your data — with the respect they deserve.
          </p>
        </div>
      </div>

      {/* ── Differentiators ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What Sets Us Apart</span>
            <h2>Eight Honest Reasons to Consider Us</h2>
            <p>
              These are not marketing claims. They are descriptions of how we actually operate —
              and commitments we intend to keep.
            </p>
          </div>
          <div className="features-grid">
            {differentiators.map(d => (
              <div className="card" key={d.title}>
                <div className="card-header">
                  <div className="card-icon">{d.icon}</div>
                  <h3>{d.title}</h3>
                </div>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Right Fit / Wrong Fit ────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">A Good Fit</span>
              <h2>BlackStorm Is Probably Right for You If…</h2>
              <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {perfectFor.map(item => (
                  <li
                    key={item}
                    style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.9rem' }}
                  >
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="split-visual">
              <span className="section-label">Not the Right Fit</span>
              <h2>We May Not Be the Right Choice If…</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
                We would rather tell you this upfront than disappoint you later.
              </p>
              <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {notForUs.map(item => (
                  <li
                    key={item}
                    style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.875rem' }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: 2 }}
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 20, lineHeight: 1.6 }}>
                If you need something we can't provide, we will tell you honestly and try to point
                you in a useful direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment Statement ─────────────────────────── */}
      <section className="section">
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Commitment</span>
          <h2>What You Can Expect From Us, Every Time</h2>
          <p>
            Honest answers, even when the honest answer is that we don't know or that someone else
            would serve you better. Clear explanations without unnecessary jargon. Respect for your
            time and your budget. And a genuine interest in making your technology work the way it
            should — not in making ourselves indispensable.
          </p>
          <p style={{ marginTop: 16 }}>
            We are a small company that takes its reputation seriously. Every customer interaction
            matters to us, because it is the only way trust gets built.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation</Link>
            <Link to="/values" className="btn btn-outline btn-lg">Read Our Values</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to See What We Can Do?</h2>
          <p>
            No pressure, no commitment required. Tell us about your situation and we will
            give you an honest assessment of whether and how we can help.
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
