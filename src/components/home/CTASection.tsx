import { Link } from 'react-router-dom'
import ContactEmailLink from '../ui/ContactEmailLink'

const supportChannels = [
  {
    title: 'Email Us Directly',
    body: 'New customer questions, service inquiries, and general requests. Verified email contact will appear here once setup is complete.',
    cta: <ContactEmailLink className="btn btn-outline" />,
  },
  {
    title: 'Technical Support',
    body: 'Existing customers with account or monitoring questions can use the contact form while verified support email setup is pending.',
    cta: <ContactEmailLink className="btn btn-outline" />,
  },
  {
    title: 'Contact Form',
    body: 'Prefer a form? Fill out a few details about your situation and we\'ll follow up with honest answers — no sales pressure.',
    cta: <Link to="/contact" className="btn btn-outline">Open Contact Form</Link>,
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
              No chatbots, no ticket queues, no waiting for a form to be routed somewhere.
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
