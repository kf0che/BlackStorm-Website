import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">404</div>
          <h1>Page Not Found</h1>
          <p className="lead">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="hero-ctas">
            <Link to="/" className="btn btn-primary btn-lg">Go Home</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Request Help</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
