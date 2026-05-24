import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'Knowledge Base',
    desc: 'Plain-language articles can explain monitoring, alerts, reports, account settings, and portal workflows.',
  },
  {
    title: 'Onboarding Guidance',
    desc: 'Future onboarding content can help customers gather device lists, choose alert contacts, and understand report outputs.',
  },
  {
    title: 'Mobile App Readiness',
    desc: 'Short section blocks and clear labels make it easier to reuse this content in a future mobile app or portal.',
  },
]

export default function EducationSection() {
  return (
    <section className="section section-alt" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education and Support</span>
          <h2 id="education-title">Make Monitoring Easier to Understand</h2>
          <p>
            Education is part of the service experience. Customers should be able to understand
            alerts, reports, and portal content without needing a networking background.
          </p>
        </div>

        <div className="features-grid">
          {pillars.map(pillar => (
            <article className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </article>
          ))}
        </div>

        <div className="inline-cta">
          <div>
            <strong>Placeholder for future educational system links</strong>
            <p>Connect knowledge-base, onboarding, and mobile app routes when they are ready.</p>
          </div>
          <div className="inline-cta-actions">
            <Link to="/support" className="btn btn-outline">[CTA] Browse Knowledge Base</Link>
            <Link to="/contact" className="btn btn-primary">[CTA] Ask a Question</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
