import { Link } from 'react-router-dom'

const items = [
  {
    title: 'Network Monitoring Service',
    badge: 'Current Focus',
    badgeClass: 'badge-green',
    done: true,
    desc: 'Device monitoring, alerting, status visibility, and reporting remain the center of the BlackStorm website and product direction.',
  },
  {
    title: 'Customer Portal Improvements',
    badge: 'Planned',
    badgeClass: 'badge-gray',
    done: false,
    desc: 'Future customer portal links, settings, report downloads, and support entry points should be added only when ready.',
  },
  {
    title: 'Operational Dashboards',
    badge: 'Planned',
    badgeClass: 'badge-gray',
    done: false,
    desc: 'Dashboard screenshots and monitoring platform surfaces will replace placeholders as the product matures.',
  },
  {
    title: 'Educational Systems',
    badge: 'Research',
    badgeClass: 'badge-orange',
    done: false,
    desc: 'Knowledge-base and plain-language training material can grow into structured education without distracting from monitoring.',
  },
]

export default function Roadmap() {
  return (
    <section className="section section-alt" aria-labelledby="future-roadmap-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Future Scalability</span>
          <h2 id="future-roadmap-title">Built to Grow Without Overpromising</h2>
          <p>
            Future sections are labeled by maturity so the homepage can scale into portals,
            education, operational dashboards, and monitoring platform features without
            implying they are already complete.
          </p>
        </div>

        <div className="roadmap-home">
          {items.map(item => (
            <article className="card" key={item.title}>
              <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
              <h3 style={{ marginTop: 14 }}>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/vision" className="btn btn-outline">
            View Future Vision
          </Link>
        </div>
      </div>
    </section>
  )
}
