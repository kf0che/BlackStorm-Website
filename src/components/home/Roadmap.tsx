import { Link } from 'react-router-dom'

const items = [
  {
    title: 'Network Monitoring Service',
    badge: 'Live Today',
    badgeClass: 'badge-green',
    desc: 'Our core service is live. We monitor your devices around the clock and alert you when something goes offline — no hardware required.',
  },
  {
    title: 'Customer Portal',
    badge: 'Planned',
    badgeClass: 'badge-gray',
    desc: 'A dedicated portal where customers can view device status, alert history, and monthly reports. In active development — not yet available.',
  },
  {
    title: 'Managed Monitoring',
    badge: 'Research',
    badgeClass: 'badge-orange',
    desc: 'A more hands-on tier where BlackStorm takes an active role in reviewing and responding to alerts. Currently being researched — no timeline committed.',
  },
  {
    title: 'Educational Platform',
    badge: 'Planning',
    badgeClass: 'badge-gray',
    desc: 'Structured plain-language training and knowledge resources for individuals and teams. In early planning only.',
  },
]

export default function Roadmap() {
  return (
    <section className="section section-alt" aria-labelledby="future-roadmap-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Where We're Headed</span>
          <h2 id="future-roadmap-title">Built Honestly, Growing Carefully</h2>
          <p>
            We only announce services we have built or are actively building. Everything
            below is labeled with its current status so you know exactly what exists today
            and what is still ahead.
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
            View Our Full Vision
          </Link>
        </div>
      </div>
    </section>
  )
}
