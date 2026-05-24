import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const values = [
  'Be clear before being impressive.',
  'Do not claim what has not been earned.',
  'Respect customer privacy and operational details.',
  'Make technical information easier to act on.',
  'Build trust through honest follow-through.',
]

export default function Values() {
  return (
    <>
      <SEO
        title="Values | BlackStorm, LLC"
        description="BlackStorm, LLC values clear communication, privacy, honest service boundaries, and practical technology support."
      />

      <div className="page-hero">
        <div className="container">
          <span className="section-label">Values</span>
          <h1>Trust first. Clarity always.</h1>
          <p className="lead" style={{ maxWidth: 680, marginTop: 16 }}>
            Our public launch is built around a simple promise: explain what we do,
            avoid overclaiming, and make it easy to ask for help.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="features-grid">
            {values.map(value => (
              <article className="card" key={value}>
                <h3>{value}</h3>
                <p>
                  This principle shapes how we write, design, support customers, and
                  describe BlackStorm services.
                </p>
              </article>
            ))}
          </div>
          <div className="inline-cta">
            <div>
              <h3>Need a plain answer?</h3>
              <p>Send us a question and we will tell you whether BlackStorm is a fit.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact BlackStorm</Link>
          </div>
        </div>
      </section>
    </>
  )
}
