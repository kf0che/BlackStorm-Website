import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About BlackStorm, LLC | Practical Network Monitoring"
        description="Learn about BlackStorm, LLC, a trust-first technology company focused on practical network monitoring and clear customer communication."
      />

      <div className="page-hero">
        <div className="container">
          <span className="section-label">About</span>
          <h1>BlackStorm, LLC helps make network visibility understandable.</h1>
          <p className="lead" style={{ maxWidth: 720, marginTop: 16 }}>
            We are building a practical technology company around clear monitoring,
            honest communication, and support that respects the customer.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <h2>Built for people who need answers, not buzzwords.</h2>
              <p>
                BlackStorm focuses on helping customers understand whether important networked
                devices are reachable, when something may need attention, and what the next
                step should be.
              </p>
              <p>
                We are careful about what we claim. We do not claim certifications, compliance
                levels, or enterprise capabilities that have not been earned or built.
              </p>
              <Link to="/values" className="btn btn-primary">Read Our Values</Link>
            </div>
            <div className="card">
              <h3>What customers can expect</h3>
              <ul className="check-list">
                <li>Plain-language service explanations</li>
                <li>Clear boundaries around what is available now</li>
                <li>Professional communication and practical support</li>
                <li>Respect for privacy and sensitive technical details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
