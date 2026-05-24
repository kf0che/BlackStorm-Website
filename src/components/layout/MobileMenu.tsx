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
      <NavLink to="/about" className="mobile-menu-link" onClick={onClose}>About</NavLink>
      <NavLink to="/services" className="mobile-menu-link" onClick={onClose}>Services</NavLink>
      <NavLink to="/values" className="mobile-menu-link" onClick={onClose}>Values</NavLink>
      <NavLink to="/contact" className="mobile-menu-link" onClick={onClose}>Contact</NavLink>
      <NavLink to="/privacy" className="mobile-menu-link" onClick={onClose}>Privacy</NavLink>
      <NavLink to="/terms" className="mobile-menu-link" onClick={onClose}>Terms</NavLink>

      <hr className="mobile-menu-divider" />
      <Link to="/contact" className="btn btn-primary btn-full" style={{ marginTop: 8 }} onClick={onClose}>
        Contact BlackStorm
      </Link>
    </nav>
  )
}
