import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme'

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

interface HeaderProps {
  mobileOpen: boolean
  onMobileToggle: () => void
}

export default function Header({ mobileOpen, onMobileToggle }: HeaderProps) {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="site-header"
      role="banner"
      style={scrolled ? { boxShadow: 'var(--shadow-md)' } : undefined}
    >
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Main navigation">

          <Link to="/" className="nav-brand" aria-label="BlackStorm, LLC — Home">
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

          <ul className="nav-links" role="list">
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/values">Values</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="nav-actions">
            <NavLink to="/contact" className="nav-support-link">Request Help</NavLink>
            <button
              className="btn-theme"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <Link to="/contact" className="btn btn-primary btn-sm">Contact BlackStorm</Link>
          </div>

          <button
            className="nav-mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobileMenu"
            onClick={onMobileToggle}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

        </nav>
      </div>
    </header>
  )
}
