import { Link } from 'react-router-dom'
import BrandMark from '../brand/BrandMark'
import { businessContact, contactEmails, emailHref, phoneHref } from '../../config/business'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-brand" aria-label={`${businessContact.businessName} — Home`}>
              <BrandMark className="brand-logo-img footer-logo-img" loading="lazy" fetchPriority="low" />
            </Link>
            <p>Professional network monitoring and practical visibility for small businesses, MSPs, and growing teams.</p>
            <a
              href={emailHref(contactEmails.general)}
              style={{ color: 'var(--color-primary)', display: 'inline-block', fontSize: '0.875rem', marginTop: 12 }}
            >
              {contactEmails.general}
            </a>
            <a
              href={phoneHref(businessContact.phone)}
              style={{ color: 'var(--color-primary)', display: 'inline-block', fontSize: '0.875rem', marginTop: 8 }}
            >
              {businessContact.phone}
            </a>
            <p style={{ whiteSpace: 'pre-line', marginTop: 10 }}>{businessContact.address}</p>
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
            <h5>Contact & Legal</h5>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href={emailHref(contactEmails.general)}>Email Us</a></li>
              <li><a href={phoneHref(businessContact.phone)}>Call Office</a></li>
              <li><Link to="/support">Support & Knowledge Base</Link></li>
              <li><a href={emailHref(contactEmails.support)}>Email Support</a></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p>&copy; 2025&ndash;2026 {businessContact.businessName}. All rights reserved.</p>
          <div className="footer-status">
            <span className="status-dot" aria-hidden="true" />
            Service status by support request
          </div>
          <div className="footer-bottom-links">
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
