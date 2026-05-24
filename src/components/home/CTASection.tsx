import { Link } from 'react-router-dom'

const supportChannels = [
  {
    title: 'Email Support',
    body: 'Placeholder support inbox for current and future service questions.',
    cta: <a href="mailto:support@blackstorm.example" className="btn btn-outline">support@blackstorm.example</a>,
  },
  {
    title: 'Contact Form',
    body: 'Placeholder for future contact form integration and lead routing.',
    cta: <Link to="/contact" className="btn btn-outline">[CTA] Contact Form</Link>,
  },
  {
    title: 'Customer Portal',
    body: 'Placeholder for future customer portal login, support tickets, and report access.',
    cta: <Link to="/contact" className="btn btn-outline">[PORTAL LINK PLACEHOLDER]</Link>,
  },
]

export default function CTASection() {
  return (
    <>
      <section className="section section-alt" aria-labelledby="support-options-title">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Next Steps</span>
            <h2 id="support-options-title">Choose the Path That Fits</h2>
            <p>
              This section is structured for future integration with contact forms, support tools,
              customer portals, and mobile app entry points.
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
          <h2 id="final-home-cta-title">Start With a Clear Conversation</h2>
          <p>
            Tell us what you need monitored, what you are worried about, or what you want
            customers to see. We will answer plainly and avoid promises the service cannot support.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              [CTA] Start a Conversation
            </Link>
            <Link to="/support" className="btn btn-outline btn-lg">
              [CTA] Browse Knowledge Base
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
