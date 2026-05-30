import { Link } from 'react-router-dom'

const supportChannels = [
  {
    title: 'New Customer Questions',
    body: 'Not sure where to start? Tell us a little about your setup and we\'ll give you an honest answer about whether and how we can help.',
    cta: <Link to="/contact" className="btn btn-outline">Contact Us</Link>,
  },
  {
    title: 'Existing Customers',
    body: 'Account questions, monitoring issues, or anything related to your current service — email or call us and we\'ll respond within your plan\'s support window.',
    cta: <Link to="/contact" className="btn btn-outline">Contact Support</Link>,
  },
  {
    title: 'Browse Before You Ask',
    body: 'Our knowledge base covers common questions about monitoring, alerts, WiFi, and getting started — no account required.',
    cta: <Link to="/support" className="btn btn-outline">Visit Knowledge Base</Link>,
  },
]

export default function CTASection() {
  return (
    <>
      <section className="section section-alt" aria-labelledby="support-options-title">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Get in Touch</span>
            <h2 id="support-options-title">We're Easy to Reach</h2>
            <p>
              No chatbots, no ticket queues, no waiting on an automated handoff.
              You reach a person — and we get back to you.
            </p>
          </div>

          <div className="features-grid">
            {supportChannels.map(channel => (
              <article className="card" key={channel.title}>
                <h3>{channel.title}</h3>
                <p>{channel.body}</p>
                <div style={{ marginTop: 20 }}>{channel.cta}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="final-home-cta-title">
        <div className="container">
          <span className="section-label">Ready When You Are</span>
          <h2 id="final-home-cta-title">Start With a Conversation</h2>
          <p>
            Tell us what you need — your network, your devices, your concerns. We'll give
            you an honest answer about what we can help with and what we can't.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
