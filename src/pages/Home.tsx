import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const highlights = [
  {
    title: 'Network Monitoring',
    text: 'Visibility for routers, switches, access points, servers, and other important networked devices.',
  },
  {
    title: 'Clear Alerts',
    text: 'Customer-friendly notifications that explain what may need attention without unnecessary alarm.',
  },
  {
    title: 'Practical Support',
    text: 'Help for small businesses, MSPs, and technical clients who want plain answers and careful follow-through.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="BlackStorm, LLC | Network Monitoring and Practical Technology Support"
        description="BlackStorm, LLC provides professional network monitoring and practical technology support for small businesses, MSPs, and technical clients."
      />

      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">BlackStorm, LLC</span>
          <h1>Professional network monitoring without the noise.</h1>
          <p className="lead">
            BlackStorm helps business owners and technical teams understand when important
            devices need attention, what changed, and who to contact for help.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact BlackStorm</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Request Help</Link>
            <Link to="/services" className="btn btn-ghost btn-lg">Learn About Services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2>Monitoring and support built for clarity.</h2>
            <p>
              We focus on practical network visibility, plain-language communication, and
              trust-first service. No unsupported compliance claims. No inflated promises.
            </p>
          </div>
          <div className="features-grid">
            {highlights.map(item => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">Launch Focus</span>
              <h2>Simple first. Useful first.</h2>
              <p>
                BlackStorm is launching with a focused public website and a clear service
                message: network monitoring and practical support for organizations that need
                better visibility without enterprise complexity.
              </p>
              <p>
                This public launch keeps the promise tight and understandable.
              </p>
            </div>
            <div className="card">
              <h3>Best fit right now</h3>
              <ul className="check-list">
                <li>Small businesses that need device visibility</li>
                <li>MSPs that want a careful technical partner</li>
                <li>Organizations that prefer plain communication</li>
                <li>Teams that want realistic next steps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to talk through your network needs?</h2>
          <p>
            Send a short note about your environment, your concern, or the kind of help you need.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact BlackStorm</Link>
            <Link to="/services" className="btn btn-outline btn-lg">Learn About Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
