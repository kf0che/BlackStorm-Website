import SEO from '../components/SEO'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | BlackStorm, LLC"
        description="Read the launch terms of service for BlackStorm, LLC, including service boundaries and attorney review notice."
      />

      <div className="page-hero">
        <div className="container">
          <span className="section-label">Terms</span>
          <h1>Terms of Service</h1>
          <p className="lead" style={{ maxWidth: 680, marginTop: 16 }}>
            Last updated: May 24, 2026
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-narrow">
          <h2>Overview</h2>
          <p>
            These terms describe the basic expectations for using BlackStorm, LLC website
            content, contact forms, and public service information.
          </p>

          <h2>Services</h2>
          <p>
            BlackStorm may provide network monitoring, practical technology guidance, and
            related support communication. Specific service details should be confirmed in
            writing before work begins.
          </p>

          <h2>No Unsupported Guarantees</h2>
          <p>
            Public website content does not create guaranteed uptime, guaranteed response
            times, security certification, regulatory compliance, or guaranteed outcomes.
          </p>

          <h2>Customer Responsibilities</h2>
          <p>
            Customers are responsible for providing accurate information, maintaining access
            to their own systems, and avoiding submission of passwords or sensitive secrets
            through public website forms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:support@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
              support@blackstorm.llc
            </a>{' '}
            .
          </p>

          <div className="alert alert-orange" style={{ marginTop: 32 }}>
            <div>
              <strong>Legal note.</strong>
              <p style={{ marginTop: 6, marginBottom: 0 }}>
                These terms are provided for public launch readiness and should be reviewed
                periodically by qualified counsel as BlackStorm services mature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
