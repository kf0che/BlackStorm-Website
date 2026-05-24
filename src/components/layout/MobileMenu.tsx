import { NavLink, Link } from 'react-router-dom'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <nav
      id="mobileMenu"
      className={`mobile-menu${open ? ' open' : ''}`}
      aria-label="Mobile navigation"
    >
      <div className="mobile-menu-section-label">Navigation</div>
      <NavLink to="/" end className="mobile-menu-link" onClick={onClose}>Home</NavLink>
      <NavLink to="/about" className="mobile-menu-link" onClick={onClose}>About Us</NavLink>

      <hr className="mobile-menu-divider" />
      <div className="mobile-menu-section-label">Services</div>
      <NavLink to="/services" className="mobile-menu-link" onClick={onClose}>All Services</NavLink>
      <NavLink to="/services/network-monitoring" className="mobile-menu-link" onClick={onClose}>Network Monitoring</NavLink>
      <span className="mobile-menu-link" style={{ opacity: 0.5, cursor: 'not-allowed', display: 'flex', alignItems: 'center', gap: 8 }}>
        Security Services
        <span className="badge badge-orange" style={{ fontSize: '0.65rem' }}>Research</span>
      </span>
      <span className="mobile-menu-link" style={{ opacity: 0.5, cursor: 'not-allowed', display: 'flex', alignItems: 'center', gap: 8 }}>
        Managed Connectivity
        <span className="badge badge-gray" style={{ fontSize: '0.65rem' }}>Planning</span>
      </span>

      <hr className="mobile-menu-divider" />
      <div className="mobile-menu-section-label">Company</div>
      <NavLink to="/pricing" className="mobile-menu-link" onClick={onClose}>Pricing</NavLink>
      <NavLink to="/investors" className="mobile-menu-link" onClick={onClose}>Investors</NavLink>
      <NavLink to="/contact" className="mobile-menu-link" onClick={onClose}>Contact</NavLink>
      <NavLink to="/support" className="mobile-menu-link" onClick={onClose}>Support / KB</NavLink>

      <hr className="mobile-menu-divider" />
      <Link to="/contact" className="btn btn-primary btn-full" style={{ marginTop: 8 }} onClick={onClose}>
        Get Started
      </Link>
    </nav>
  )
}
