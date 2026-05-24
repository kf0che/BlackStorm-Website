import { Link } from 'react-router-dom'

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    audience: 'Smaller environments',
    price: 49,
    deviceCount: 'Up to 5 monitored devices',
    features: ['Email alerts', 'Customer portal placeholder', '30-day history placeholder', 'Basic monthly summary'],
    featured: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    audience: 'Growing businesses',
    price: 149,
    deviceCount: 'Up to 25 monitored devices',
    features: ['Email and SMS alerts where supported', 'Customer portal placeholder', 'Performance summaries', 'Priority support terms'],
    featured: true,
  },
  {
    id: 'business',
    name: 'Business / MSP',
    audience: 'Teams and MSP workflows',
    price: 349,
    deviceCount: 'Up to 100 monitored devices',
    features: ['Multi-environment visibility placeholder', 'Business portal placeholder', 'Per-client reporting concepts', 'Custom onboarding discussion'],
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
          <span className="section-label">Plan Preview</span>
          <h2 id="pricing-teaser-title">Simple Pricing Structure, Clear Next Step</h2>
          <p>
            Pricing cards are intentionally modular so plan data can later come from a CMS,
            customer portal, or billing integration.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map(tier => (
            <article key={tier.id} className={`pricing-card${tier.featured ? ' featured' : ''}`}>
              {tier.featured && <div className="pricing-featured-badge">Common Fit</div>}
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
                [CTA] Ask About This Plan
              </Link>
            </article>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Need a custom monitoring arrangement?{' '}
          <Link to="/contact" style={{ color: 'var(--color-primary)' }}>
            [CTA] Contact BlackStorm
          </Link>
        </p>
      </div>
    </section>
  )
}
