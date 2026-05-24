import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'Plain-Language Support Articles',
    desc: 'Our knowledge base explains monitoring, alerts, WiFi, and network concepts without assuming a technical background.',
  },
  {
    title: 'We Explain, Not Just Fix',
    desc: 'When we help with your network, we walk you through what happened and why — so you\'re more confident the next time something comes up.',
  },
  {
    title: 'Training on Your Schedule',
    desc: 'One-on-one and small group sessions are available for individuals or teams who want to understand their technology better.',
  },
]

export default function EducationSection() {
  return (
    <section className="section section-alt" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education & Support</span>
          <h2 id="education-title">You Shouldn't Need a Degree to Understand Your Network</h2>
          <p>
            We believe customers who understand what they're paying for make better decisions
            and feel more confident in the long run. That's why education is part of every
            service we offer.
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
            <strong>Have a question before you sign up?</strong>
            <p>We're happy to answer it — no commitment required.</p>
          </div>
          <div className="inline-cta-actions">
            <Link to="/support" className="btn btn-outline">Browse Knowledge Base</Link>
            <Link to="/contact" className="btn btn-primary">Ask a Question</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
