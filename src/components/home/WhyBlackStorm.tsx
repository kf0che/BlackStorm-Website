import { Link } from 'react-router-dom'

const reasons = [
  {
    title: 'One Real Service, Done Well',
    body: 'Network monitoring is what we offer today — and we do it well. We build features when they are ready, not when they make a good slide. You will not find promises here that we cannot back up.',
  },
  {
    title: 'Plain Language, Real Explanations',
    body: 'We explain monitoring in terms that matter: which devices are online, what changed, and what may need your attention. No technical jargon. No guesswork. Just clear, actionable information.',
  },
  {
    title: 'We Work With What You Have',
    body: 'We support the equipment small businesses and homeowners actually own — routers, switches, access points, and servers. No proprietary hardware to buy, no new vendor dependencies to accept.',
  },
  {
    title: 'Honest About Our Limits',
    body: 'We do not claim certifications, compliance frameworks, or a customer scale we have not reached. If something is outside our current capabilities, we say so. That honesty is how trust gets built.',
  },
]

export default function WhyBlackStorm() {
  return (
    <section className="section section-alt" aria-labelledby="why-blackstorm-title">
      <div className="container">
        <div className="split-section">
          <div className="split-content">
            <span className="section-label">Why BlackStorm</span>
            <h2 id="why-blackstorm-title">A Company Built on Honesty First</h2>
            <p>
              We are a small US-based team that believes technology support should be transparent,
              honest, and genuinely helpful. Here is what that looks like in practice.
            </p>
            <Link to="/why-us" className="btn btn-outline" style={{ marginTop: 24 }}>
              Read More About BlackStorm
            </Link>
          </div>
          <div className="home-card-grid">
            {reasons.map(reason => (
              <article className="mini-card" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
