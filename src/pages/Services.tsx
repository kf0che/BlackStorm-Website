import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  {
    title: 'Network Monitoring Service',
    text: 'Monitoring foundations for routers, switches, access points, servers, and other important networked devices.',
  },
  {
    title: 'Alert Review and Help Requests',
    text: 'A clear path to ask for help when something appears offline, unreachable, or worth reviewing.',
  },
  {
    title: 'Technology Guidance',
    text: 'Practical conversations about network visibility, device health, support needs, and next steps.',
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services | BlackStorm, LLC Network Monitoring"
        description="BlackStorm, LLC offers network monitoring and practical technology support for small businesses, MSPs, and technical teams."
      />

      <div className="page-hero">
        <div className="container">
          <span className="section-label">Services</span>
          <h1>Focused services for a fast, professional launch.</h1>
          <p className="lead" style={{ maxWidth: 720, marginTop: 16 }}>
            BlackStorm is launching with a clear focus: network monitoring, alert
            visibility, and practical support communication.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="features-grid">
            {services.map(service => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">Network Monitoring</span>
              <h2>Know when important devices need attention.</h2>
              <p>
                The Network Monitoring Service is intended to help customers see when key
                devices may be offline, unreachable, or worth reviewing. It is designed for
                clarity and follow-up, not for fear-based security messaging.
              </p>
              <p>
                Public launch messaging is intentionally conservative so customers understand
                what BlackStorm can discuss and support now.
              </p>
            </div>
            <div className="card">
              <h3>Service boundaries</h3>
              <ul className="check-list">
                <li>No unsupported compliance claims</li>
                <li>No guaranteed uptime promises</li>
                <li>No backend portal features advertised as live</li>
                <li>Clear contact path for help and questions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Want to discuss monitoring for your environment?</h2>
          <p>Tell us what you need to watch and what kind of help would be useful.</p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary btn-lg">Request Help</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Contact BlackStorm</Link>
          </div>
        </div>
      </section>
    </>
  )
}
