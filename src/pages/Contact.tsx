import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

const contactCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'General Inquiries',
    desc: 'New customer questions, service information, and anything else.',
    value: 'hello@blackstorm.llc',
    href: 'mailto:hello@blackstorm.llc',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M4.93 19.07a10 10 0 0 1 0-14.14"/>
        <path d="M8.46 15.54a5 5 0 0 1 0-7.07"/>
      </svg>
    ),
    title: 'Technical Support',
    desc: 'Existing account issues, monitoring questions, and technical help.',
    value: 'support@blackstorm.llc',
    href: 'mailto:support@blackstorm.llc',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Partnerships & Investors',
    desc: 'Business relationships, reseller opportunities, and investor discussions.',
    value: 'business@blackstorm.llc',
    href: 'mailto:business@blackstorm.llc',
  },
]

const responseTimes = [
  { label: 'New inquiries', time: '1 business day' },
  { label: 'Home plan support', time: '48 hours' },
  { label: 'Business plan support', time: '24 hours (priority)' },
  { label: 'Professional plan support', time: 'Priority + phone' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Contact</span>
          <h1>Get in Touch</h1>
          <p className="lead" style={{ maxWidth: 560, marginTop: 16 }}>
            Whether you have a question, a problem, or just want to understand your options —
            we are here. You will hear from a real person, not an automated system.
          </p>
        </div>
      </div>

      {/* ── Form + Sidebar ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="split-section">
            {/* Form */}
            <div className="split-content">
              {submitted ? (
                <div className="alert alert-blue">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <div>
                    <strong>Message received — thank you.</strong>
                    <p style={{ marginTop: 6, marginBottom: 0 }}>
                      We have received your message and will follow up within one business day.
                      Your information is kept private and will not be shared with third parties.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h2 style={{ marginBottom: 24, fontSize: '1.4rem' }}>Send Us a Message</h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" className="form-input" placeholder="Jane" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" className="form-input" placeholder="Smith" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input id="email" type="email" className="form-input" placeholder="jane@yourcompany.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">
                        Company / Organization
                        <span style={{ color: 'var(--text-muted)', fontWeight: 400, marginLeft: 6, fontSize: '0.8rem' }}>(optional)</span>
                      </label>
                      <input id="company" type="text" className="form-input" placeholder="Your business, church, or organization" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">What can we help with?</label>
                      <select id="subject" className="form-select form-input" required defaultValue="">
                        <option value="" disabled>Select a topic</option>
                        <optgroup label="Monitoring Service">
                          <option>I want to start monitoring my network</option>
                          <option>Question about an existing monitoring account</option>
                          <option>Pricing and plan information</option>
                        </optgroup>
                        <optgroup label="Consulting & Technical Help">
                          <option>WiFi optimization or assessment</option>
                          <option>UniFi setup or troubleshooting</option>
                          <option>Privacy-focused technology guidance</option>
                          <option>Home or small business technology consulting</option>
                          <option>Technology training or education</option>
                        </optgroup>
                        <optgroup label="Other">
                          <option>Partnership or business inquiry</option>
                          <option>Investor inquiry</option>
                          <option>Something else</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        className="form-textarea"
                        placeholder="Tell us about your situation — your network, your devices, what's not working, or what you'd like to accomplish. The more context you give us, the more useful our first response will be."
                        required
                      />
                    </div>
                    <p className="form-hint">
                      We respond to all inquiries within one business day. Your information is
                      never shared with third parties. See our{' '}
                      <Link to="/privacy" style={{ color: 'var(--color-primary)' }}>Privacy Policy</Link>.
                    </p>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contactCards.map(card => (
                <div className="card" key={card.title}>
                  <div className="card-header">
                    <div className="card-icon">{card.icon}</div>
                    <div>
                      <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>{card.title}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 6 }}>{card.desc}</p>
                      <a href={card.href} style={{ fontSize: '0.875rem', color: 'var(--color-primary)' }}>
                        {card.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="card" style={{ background: 'var(--bg-elevated)' }}>
                <h4 style={{ marginBottom: 14, fontSize: '0.95rem' }}>Response Times</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {responseTimes.map(row => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', gap: 12 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600, textAlign: 'right' }}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 6 }}>
                  Not sure what you need?
                </strong>
                That is completely fine. Tell us what is going on in your own words and we will
                figure out together whether we can help — and what that would look like.
                There is no pressure to commit to anything.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ───────────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Before You Write</span>
            <h2>You Might Find Your Answer Here</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {[
              { label: 'Knowledge Base', desc: 'Browse common questions by topic', to: '/support' },
              { label: 'Services Overview', desc: 'See everything we currently offer', to: '/services' },
              { label: 'Pricing', desc: 'Monitoring plan details and costs', to: '/pricing' },
              { label: 'Privacy Policy', desc: 'How we handle your information', to: '/privacy' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  padding: '18px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                  display: 'block',
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4, fontSize: '0.9rem' }}>
                  {link.label}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  {link.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
