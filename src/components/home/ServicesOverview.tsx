import { Link } from 'react-router-dom'

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Network Monitoring',
    desc: 'We watch your routers, switches, servers, and other devices around the clock and alert you when something goes offline.',
    link: '/services/network-monitoring',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    title: 'WiFi & UniFi Support',
    desc: 'Poor coverage, dead zones, and dropped connections have real causes. We assess, explain, and help you fix it — including UniFi equipment setup and configuration.',
    link: '/services',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Consulting & Privacy Guidance',
    desc: 'Technology decisions, network design, equipment selection, and practical privacy guidance — explained plainly, without pressure.',
    link: '/services',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Technology Training',
    desc: 'One-on-one and small group sessions that walk you through your network, your devices, and your options — at your pace.',
    link: '/services',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section" aria-labelledby="homepage-services-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 id="homepage-services-title">Practical Help for Real Networks</h2>
          <p>
            Every service listed is available today. We work with homeowners, small businesses,
            churches, and local organizations. Most engagements start with a conversation.
          </p>
        </div>

        <div className="features-grid">
          {services.map(service => (
            <article className="card" key={service.title}>
              <div className="card-header">
                <div className="card-icon">{service.icon}</div>
                <h3 style={{ marginBottom: 0 }}>{service.title}</h3>
              </div>
              <p>{service.desc}</p>
              <Link className="card-link" to={service.link}>
                Learn more
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/services" className="btn btn-outline">View All Services</Link>
        </div>
      </div>
    </section>
  )
}
