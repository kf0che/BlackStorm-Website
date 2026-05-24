import { Link } from 'react-router-dom'

const monitored = [
  'Routers and firewalls',
  'Servers',
  'Network switches',
  'Wireless access points',
  'Network-attached storage',
  'Approved IP-addressable devices',
]

export default function ServicesHighlight() {
  return (
    <section className="section" aria-labelledby="services-highlight-title">
      <div className="container">
        <div className="split-section">
          <div className="split-content">
            <span className="section-label">Available Now</span>
            <h2 id="services-highlight-title">BlackStorm Network Monitoring</h2>
            <p>
              BlackStorm monitors approved network devices and helps customers understand
              when something appears offline, slow, or in need of review.
            </p>
            <ul className="check-list">
              {monitored.map(item => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <Link to="/services/network-monitoring" className="btn btn-primary">
                Learn More
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Ask About Monitoring
              </Link>
            </div>
          </div>

          <div className="split-visual">
            <div className="asset-placeholder" role="img" aria-label="Future monitoring platform screenshot placeholder">
              <span className="placeholder-kicker">[MONITORING PLATFORM PLACEHOLDER]</span>
              <strong>Replace with a real service screenshot when ready.</strong>
              <small>This placeholder avoids implying a finished dashboard before production visuals are available.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
