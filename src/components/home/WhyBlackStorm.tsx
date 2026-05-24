import { Link } from 'react-router-dom'

const reasons = [
  {
    title: 'We Lead With the Current Service',
    body: 'The homepage is centered on Network Monitoring because that is the clearest current value. Future ideas stay labeled as placeholders until they are real.',
  },
  {
    title: 'We Write for Business Owners',
    body: 'BlackStorm content explains monitoring in practical terms: what is online, what changed, what recovered, and what may need attention.',
  },
  {
    title: 'We Stay Credible to Technical Clients',
    body: 'MSPs and technical stakeholders can still find device types, alert concepts, reporting boundaries, and portal planning without inflated claims.',
  },
  {
    title: 'We Avoid Unsupported Claims',
    body: 'No certification, compliance, customer scale, or platform maturity claim should appear unless it is accurate, documented, and ready for public use.',
  },
]

export default function WhyBlackStorm() {
  return (
    <section className="section section-alt" aria-labelledby="why-blackstorm-title">
      <div className="container">
        <div className="split-section">
          <div className="split-content">
            <span className="section-label">Why BlackStorm</span>
            <h2 id="why-blackstorm-title">Trust Is the Product Before the Product</h2>
            <p>
              The homepage should feel calm, useful, and honest. It should make a small
              business owner comfortable while still giving MSPs and technical buyers enough
              structure to take the company seriously.
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
