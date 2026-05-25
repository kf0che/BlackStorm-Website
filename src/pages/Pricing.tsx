import { Link } from 'react-router-dom'

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function X() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

const tiers = [
  {
    id: 'home',
    name: 'Home',
    audience: 'Residential',
    price: 29,
    deviceCount: 'Up to 5 devices',
    description: 'For homeowners who want to know their home network is working.',
    features: [
      'Email alerts',
      '5-minute polling interval',
      'Customer portal access',
      '30-day data retention',
      'Monthly summary report',
      'Standard support (48hr response)',
    ],
    missing: ['SMS alerts', 'Business / MSP portal', 'Custom thresholds', 'SLA reporting', 'Phone support'],
    featured: false,
  },
  {
    id: 'business',
    name: 'Business',
    audience: 'Small to Mid-Market',
    price: 79,
    deviceCount: 'Up to 25 devices',
    description: 'For small businesses that need reliable monitoring without the enterprise price tag.',
    features: [
      'Email + SMS alerts',
      '1-minute polling interval',
      'Customer portal access',
      '90-day data retention',
      'Monthly performance reports',
      'Custom alert thresholds',
      'Priority email support (24hr)',
    ],
    missing: ['Business / MSP portal', 'SLA documentation', 'Phone support', 'Role-based access control'],
    featured: true,
  },
  {
    id: 'professional',
    name: 'Professional',
    audience: 'Growing Businesses',
    price: 199,
    deviceCount: 'Up to 100 devices',
    description: 'For growing businesses and multi-site operations that need full visibility, reporting, and multi-user access.',
    features: [
      'Email + SMS + multi-channel alerts',
      '30-second polling interval',
      'Customer + Business / MSP portal',
      '1-year data retention',
      'Weekly + monthly reports',
      'Custom thresholds',
      'SLA documentation',
      'Role-based access control',
      'Phone + priority email support',
    ],
    missing: [],
    featured: false,
  },
]

const tableRows = [
  { label: 'Devices monitored', home: '5', business: '25', pro: '100' },
  { label: 'Polling interval', home: '5 minutes', business: '1 minute', pro: '30 seconds' },
  { label: 'Email alerts', home: true, business: true, pro: true },
  { label: 'SMS alerts', home: false, business: true, pro: true },
  { label: 'Customer portal', home: true, business: true, pro: true },
  { label: 'Business / MSP portal', home: false, business: false, pro: true },
  { label: 'Data retention', home: '30 days', business: '90 days', pro: '1 year' },
  { label: 'Monthly reports', home: 'Summary', business: 'Performance', pro: 'Full + weekly' },
  { label: 'Custom thresholds', home: false, business: true, pro: true },
  { label: 'SLA documentation', home: false, business: false, pro: true },
  { label: 'Role-based access', home: false, business: false, pro: true },
  { label: 'Support response', home: '48 hours', business: '24 hours', pro: 'Priority phone + email' },
]

export default function Pricing() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Pricing</span>
          <h1>Simple, Honest Pricing</h1>
          <p className="lead" style={{ maxWidth: 560, marginTop: 16 }}>
            No contracts. No setup fees. Upgrade or downgrade anytime.
            All plans include your customer portal and US-based support.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {tiers.map(tier => (
              <div key={tier.id} className={`pricing-card${tier.featured ? ' featured' : ''}`}>
                {tier.featured && <div className="pricing-featured-badge">Most Popular</div>}
                <div className="pricing-audience">{tier.audience}</div>
                <div className="pricing-tier-name">{tier.name}</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 16 }}>{tier.description}</p>
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{tier.price}</span>
                  <span className="pricing-period">/mo</span>
                </div>
                <div className="pricing-sub">{tier.deviceCount}</div>
                <hr className="pricing-divider" />
                <ul className="pricing-features">
                  {tier.features.map(f => (
                    <li key={f}><Check />{f}</li>
                  ))}
                  {tier.missing.map(f => (
                    <li key={f} className="unavailable"><X />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn btn-full${tier.featured ? ' btn-primary' : ' btn-outline'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: 32, padding: 40 }}>
            <div className="pricing-custom-layout">
              <div>
                <div className="pricing-tier-name">Enterprise</div>
                <h3 style={{ marginBottom: 12 }}>More Than 100 Devices?</h3>
                <p>For large deployments, data centers, and organizations with custom requirements. We'll build a plan that fits your scale and operational needs.</p>
                <ul className="check-list" style={{ marginTop: 16 }}>
                  {['Unlimited devices', 'Custom polling intervals', 'Dedicated account support', 'Custom reporting and SLA terms', 'Multi-site and multi-tenant options'].map(f => (
                    <li key={f}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div className="pricing-amount" style={{ fontSize: '2.5rem', marginBottom: 8 }}>Custom</div>
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Compare Plans</span>
            <h2>Full Feature Comparison</h2>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Home — $29/mo</th>
                  <th>Business — $79/mo</th>
                  <th>Professional — $199/mo</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(row => (
                  <tr key={row.label}>
                    <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{row.label}</td>
                    {[row.home, row.business, row.pro].map((val, i) => (
                      <td key={i}>
                        {typeof val === 'boolean' ? (
                          val
                            ? <span style={{ color: 'var(--color-success)' }}><Check /></span>
                            : <span style={{ color: 'var(--text-muted)', opacity: 0.4 }}><X /></span>
                        ) : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us and we'll have your monitoring configured within 24 hours.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
            <Link to="/services/network-monitoring" className="btn btn-outline btn-lg">Learn About Monitoring</Link>
          </div>
        </div>
      </section>
    </>
  )
}
