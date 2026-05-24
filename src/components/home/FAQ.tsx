import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What does BlackStorm monitor?',
    a: 'BlackStorm focuses on approved IP-addressable devices such as routers, switches, firewalls, servers, access points, and similar networked equipment. Exact coverage depends on your environment and plan.',
  },
  {
    q: 'Is the Network Monitoring Service available now?',
    a: 'Yes. The homepage treats Network Monitoring as the current core service. Portal, reporting, and dashboard areas include placeholders where future production links and screenshots can be connected as they mature.',
  },
  {
    q: 'Do you claim compliance certifications?',
    a: 'No. BlackStorm is security-aware and compliance-conscious, but we do not claim certifications or regulatory compliance levels that have not been earned and reviewed.',
  },
  {
    q: 'Can non-technical business owners understand the service?',
    a: 'That is the point. Alerts, reports, and support content should explain what happened, when it happened, and what the customer may need to review next.',
  },
  {
    q: 'Can MSPs use BlackStorm?',
    a: 'BlackStorm content is designed to stay credible for MSPs and technical clients. Multi-client and business portal workflows are represented as planned placeholders unless and until they are available.',
  },
  {
    q: 'Where will customer portal links go?',
    a: 'The homepage includes customer portal placeholders so future routes, login links, support tickets, and report downloads can be connected without restructuring the page.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="section section-dark" aria-labelledby="homepage-faq-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Common Questions</span>
          <h2 id="homepage-faq-title">Plain Answers Before You Contact Us</h2>
          <p>
            Still unsure?{' '}
            <Link to="/contact" style={{ color: 'var(--color-primary)' }}>Use the contact form placeholder</Link>
            {' '}or email support@blackstorm.example.
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
