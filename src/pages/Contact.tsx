import { useState, type FormEvent } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`BlackStorm inquiry: ${String(form.get('topic') || 'General Question')}`)
    const body = encodeURIComponent([
      `Name: ${form.get('name') || ''}`,
      `Email: ${form.get('email') || ''}`,
      `Topic: ${form.get('topic') || ''}`,
      '',
      String(form.get('message') || ''),
    ].join('\n'))
    window.location.href = `mailto:support@blackstorm.llc?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact BlackStorm, LLC"
        description="Contact BlackStorm, LLC to ask about network monitoring, request help, or learn whether our services are a fit."
      />

      <div className="page-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Contact BlackStorm</h1>
          <p className="lead" style={{ maxWidth: 680, marginTop: 16 }}>
            Ask about services, request help, or tell us what you need monitored.
            A real person will review your message and follow up as availability allows.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              {submitted ? (
                <div className="alert alert-blue" role="status">
                  <div>
                    <strong>Thanks. Your email app should open with your message.</strong>
                    <p style={{ marginTop: 6, marginBottom: 0 }}>
                      If it does not open, email us directly at support@blackstorm.llc.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name</label>
                      <input id="name" name="name" className="form-input" autoComplete="name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" className="form-input" autoComplete="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="topic">Topic</label>
                    <select id="topic" name="topic" className="form-select form-input" defaultValue="services">
                      <option value="services">Learn About Services</option>
                      <option value="help">Request Help</option>
                      <option value="monitoring">Network Monitoring</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      rows={6}
                      placeholder="Tell us what you need help with. Please do not include passwords or secrets."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Request Help</button>
                </form>
              )}
            </div>
            <aside className="card">
              <h3>Contact details</h3>
              <p>
                Email: <a href="mailto:support@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>support@blackstorm.llc</a>
              </p>
              <p style={{ marginBottom: 0 }}>
                Please do not send passwords, private keys, or sensitive secrets through this form.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
