import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | BlackStorm, LLC"
        description="Read the privacy policy for BlackStorm, LLC, including how we handle contact, service inquiry, and support information."
      />

      <div className="page-hero">
        <div className="container">
          <span className="section-label">Privacy</span>
          <h1>Privacy Policy</h1>
          <p className="lead" style={{ maxWidth: 680, marginTop: 16 }}>
            Last updated: May 24, 2026
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-narrow">
          <h2>Overview</h2>
          <p>
            BlackStorm, LLC respects customer privacy and treats network, contact, and
            support information as sensitive business information.
          </p>

          <h2>Information We May Collect</h2>
          <p>
            We may collect contact details, messages submitted through the website,
            service inquiry details, and information needed to discuss monitoring or support.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use information to respond to inquiries, provide requested services, improve
            customer communication, and maintain basic business records.
          </p>

          <h2>What We Do Not Do</h2>
          <p>
            We do not sell customer information to advertisers. We do not claim compliance
            certifications or regulatory coverage that has not been reviewed and earned.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions can be sent to{' '}
            <a href="mailto:support@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
              support@blackstorm.llc
            </a>{' '}
            .
          </p>

          <div className="alert alert-orange" style={{ marginTop: 32 }}>
            <div>
              <strong>Legal note.</strong>
              <p style={{ marginTop: 6, marginBottom: 0 }}>
                This policy is provided for public launch readiness and should be reviewed
                periodically by qualified counsel as BlackStorm services mature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
