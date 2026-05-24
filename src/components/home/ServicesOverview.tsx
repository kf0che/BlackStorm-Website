import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Network Monitoring Service',
    status: 'Available Now',
    desc: 'Monitor routers, switches, firewalls, servers, access points, and other approved IP-addressable devices. Receive alerts and review operational history in plain language.',
    link: '/services/network-monitoring',
  },
  {
    title: 'Customer Portal Preview',
    status: 'Preview Placeholder',
    desc: 'A future customer-facing space for device status, alert history, reports, and account settings. This should be linked only when the portal is ready.',
    link: '/contact',
  },
  {
    title: 'Business and MSP Workflows',
    status: 'Planned',
    desc: 'A future workflow layer for teams that need multi-client visibility, per-client reporting, and easier communication around monitored environments.',
    link: '/contact',
  },
]

function PulseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

export default function ServicesOverview() {
  return (
    <section className="section" aria-labelledby="homepage-services-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Core Services</span>
          <h2 id="homepage-services-title">Start With Monitoring. Grow Into Better Visibility.</h2>
          <p>
            The homepage is structured around reusable feature cards so each service can become
            its own React or Next.js component later. Available services and future placeholders
            are labeled separately.
          </p>
        </div>

        {/* Feature cards placeholder.
            What it does: keeps service summaries modular for future cards, portals, and dashboards.
            Why it exists: homepage visitors scan cards quickly before opening detail pages.
            Customer psychology: labels reduce confusion about what is available now versus planned.
            Accessibility: each card has a heading, status text, and a specific link destination. */}
        <div className="features-grid">
          {services.map(service => (
            <article className="card" key={service.title}>
              <div className="card-header">
                <div className="card-icon"><PulseIcon /></div>
                <div>
                  <h3 style={{ marginBottom: 4 }}>{service.title}</h3>
                  <span className={`badge ${service.status === 'Available Now' ? 'badge-green' : 'badge-gray'}`}>
                    {service.status}
                  </span>
                </div>
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

        <div className="asset-placeholder asset-placeholder-inline" role="img" aria-label="Future feature cards placeholder">
          <span className="placeholder-kicker">[FEATURE CARDS PLACEHOLDER]</span>
          <strong>Additional service cards can be added here.</strong>
          <small>Future cards should stay connected to monitoring, support, reporting, portals, or education.</small>
        </div>
      </div>
    </section>
  )
}
