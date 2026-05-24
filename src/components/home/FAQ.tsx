import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What does BlackStorm actually monitor?',
    a: 'We monitor whether your networked devices — routers, switches, servers, access points, NAS drives, and similar equipment — are online and reachable. We check each device on a regular schedule and alert you when something stops responding. We do not monitor internet traffic, files, or activity on your network.',
  },
  {
    q: 'Who is BlackStorm for?',
    a: 'We work with homeowners, small businesses, churches, nonprofits, and local organizations. Most of our customers are not IT professionals — they just want to know their technology is working without having to check it themselves.',
  },
  {
    q: 'Do I need technical knowledge to use your service?',
    a: 'No. We handle the technical setup. You tell us which devices you want monitored, and we take it from there. Alerts are written in plain English, and we\'re always available to explain what something means.',
  },
  {
    q: 'Can you see my internet activity or files?',
    a: 'No. We check whether your devices respond to a network check — that\'s it. We cannot see what you do online, what files are on your devices, or any traffic on your network. Our privacy policy describes exactly what we collect and what we do with it.',
  },
  {
    q: 'What services are available right now?',
    a: 'Network monitoring, WiFi optimization and assessment, UniFi ecosystem support, privacy-focused technology guidance, small business consulting, and technology training are all available today. Future services are labeled clearly on our Services page — we never list something as available before it is.',
  },
  {
    q: 'How do I get started?',
    a: 'Reach out through our contact form or by email. Tell us a little about your setup — what devices you want monitored, where they are, and what concerns you most. We\'ll respond within one business day with honest answers and next steps.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="section section-dark" aria-labelledby="homepage-faq-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Common Questions</span>
          <h2 id="homepage-faq-title">Plain Answers Before You Reach Out</h2>
          <p>
            Still have questions?{' '}
            <Link to="/contact" style={{ color: 'var(--color-primary)' }}>Use our contact form</Link>
            {' '}or email us at{' '}
            <a href="mailto:hello@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>hello@blackstorm.llc</a>.
          </p>
        </div>
        <div className="faq-list" style={{ maxWidth: 780, margin: '0 auto' }}>
          {faqs.map((faq, i) => {
            const answerId = `homepage-faq-answer-${i}`
            return (
              <div key={faq.q} className={`faq-item${openIdx === i ? ' open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={answerId}
                >
                  {faq.q}
                  <svg
                    className="faq-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
                <div className="faq-answer" id={answerId}>
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
