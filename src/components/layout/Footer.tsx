import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-brand" style={{ display: 'inline-flex', marginBottom: 16 }}>
              <div className="nav-logo">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <rect width="36" height="36" rx="8" fill="url(#bsLogoGrad)"/>
                  <path d="M22 4L12 21h6L15 32 27 15h-6.5L22 4z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="nav-brand-text">BlackStorm</div>
                <div className="nav-brand-sub">LLC</div>
              </div>
            </Link>
            <p>Professional network monitoring and practical visibility for small businesses, MSPs, and growing teams.</p>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/values">Our Values</Link></li>
              <li><Link to="/why-us">Why BlackStorm</Link></li>
              <li><Link to="/vision">Future Vision</Link></li>
              <li><Link to="/investors">Investors</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/services/network-monitoring">Network Monitoring</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><Link to="/support">Support & Knowledge Base</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p>&copy; 2025&ndash;2026 BlackStorm, LLC. All rights reserved.</p>
          <div className="footer-status">
            <span className="status-dot" aria-hidden="true" />
            Service status by support request
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
