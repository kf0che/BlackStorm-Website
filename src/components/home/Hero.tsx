import { Link } from 'react-router-dom'

const trustItems = [
  'Network monitoring first',
  'Plain-language setup',
  'Customer-owned data',
  'No unsupported certification claims',
]

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero home-hero" aria-labelledby="home-hero-title">
      <div className="container">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <div className="hero-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              BlackStorm Network Monitoring
            </div>

            <h1 id="home-hero-title">
              Clear Network Visibility for Small Businesses and MSPs
            </h1>

            <p className="lead">
              BlackStorm, LLC helps teams see when important network devices are online,
              offline, slow, or recovering. We keep the service practical, the language
              clear, and the claims grounded in what exists today.
            </p>

            <div className="hero-ctas">
              {/* CTA placeholder: keep labels action-oriented and replace routes when contact flow is finalized. */}
              <Link to="/contact" className="btn btn-primary btn-lg">
                [CTA] Talk to BlackStorm
              </Link>
              <Link to="/services/network-monitoring" className="btn btn-outline btn-lg">
                [CTA] View Monitoring Service
              </Link>
            </div>

            <div className="hero-trust" aria-label="BlackStorm trust indicators">
              {trustItems.map(item => (
                <div className="trust-item" key={item}>
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="home-hero-visual" aria-label="Hero image placeholder">
            {/* Placeholder for future hero image.
                Intended use: replace with a real dashboard, team, or monitoring visual.
                Accessibility: use an informative alt when a real image replaces this placeholder. */}
            <div className="asset-placeholder asset-placeholder-hero" role="img" aria-label="Future hero image showing BlackStorm network monitoring dashboard">
              <span className="placeholder-kicker">[HERO IMAGE PLACEHOLDER]</span>
              <strong>Monitoring dashboard visual</strong>
              <small>Replace with production image or app screenshot.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
