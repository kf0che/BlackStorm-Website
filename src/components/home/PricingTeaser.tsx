import { Link } from 'react-router-dom'

const tiers = [
  {
    id: 'home',
    name: 'Home',
    audience: 'Homeowners & Home Labs',
    price: 29,
    deviceCount: 'Up to 10 monitored devices',
    features: [
      'Email alerts',
      'Monthly uptime summary',
      'US-based support',
      '48-hour response time',
    ],
    featured: false,
  },
  {
    id: 'business',
    name: 'Business',
    audience: 'Small Businesses & Organizations',
    price: 79,
    deviceCount: 'Up to 50 monitored devices',
    features: [
      'Email and SMS alerts',
      'Monthly report download',
      'Multi-contact notifications',
      '24-hour priority support',
    ],
    featured: true,
  },
  {
    id: 'professional',
    name: 'Professional',
    audience: 'Multi-Site & Larger Operations',
    price: 199,
    deviceCount: 'Up to 200 monitored devices',
    features: [
      'All Business features',
      'Multi-location organization',
      'Custom reporting',
      'Priority phone + email support',
    ],
    featured: false,
  },
]

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function PricingTeaser() {
  return (
    <section className="section" aria-labelledby="pricing-teaser-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2 id="pricing-teaser-title">Straightforward Plans, No Hidden Fees</h2>
          <p>
            These are the prices. No setup fees, no lock-in contracts, no surprises.
            Cancel any time.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map(tier => (
            <article key={tier.id} className={`pricing-card${tier.featured ? ' featured' : ''}`}>
              {tier.featured && <div className="pricing-featured-badge">Most Common</div>}
              <div className="pricing-audience">{tier.audience}</div>
              <div className="pricing-tier-name">{tier.name}</div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-period">/mo</span>
              </div>
              <div className="pricing-sub">{tier.deviceCount}</div>
              <hr className="pricing-divider"/>
              <ul className="pricing-features">
                {tier.features.map(feature => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`btn btn-full${tier.featured ? ' btn-primary' : ' btn-outline'}`}>
                Get Started
              </Link>
            </article>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Need something different?{' '}
          <Link to="/contact" style={{ color: 'var(--color-primary)' }}>
            Talk to us about your situation.
          </Link>
        </p>
      </div>
    </section>
  )
}
