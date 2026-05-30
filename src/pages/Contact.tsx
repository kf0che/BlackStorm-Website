import { Link } from 'react-router-dom'
import { businessContact, contactEmails, emailHref, phoneHref } from '../config/business'

const emailContacts = [
  {
    title: 'General Contact',
    desc: 'New customer questions, account questions, and anything that needs a human reply.',
    value: contactEmails.general,
    href: emailHref(contactEmails.general, 'BlackStorm general inquiry'),
  },
  {
    title: 'Support',
    desc: 'Existing customer support, monitoring questions, and service issues.',
    value: contactEmails.support,
    href: emailHref(contactEmails.support, 'BlackStorm support request'),
  },
  {
    title: 'Sales & Partnerships',
    desc: 'Plan questions, partnerships, and business inquiries.',
    value: contactEmails.sales,
    href: emailHref(contactEmails.sales, 'BlackStorm sales inquiry'),
  },
]

const principalContacts = contactEmails.principals.map(person => ({
  title: person.name,
  desc: 'Direct principal contact.',
  value: person.email,
  href: emailHref(person.email, 'BlackStorm direct inquiry'),
}))

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21a8 8 0 0 0-16 0"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function AddressIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ContactCard({
  icon,
  title,
  desc,
  value,
  href,
}: {
  icon: JSX.Element
  title: string
  desc: string
  value: string
  href?: string
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <div>
          <h3 style={{ fontSize: '1rem', marginBottom: 4 }}>{title}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 6 }}>{desc}</p>
          {href ? (
            <a href={href} style={{ fontSize: '0.875rem', color: 'var(--color-primary)' }}>
              {value}
            </a>
          ) : (
            <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
              {value}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const responseTimes = [
  { label: 'New inquiries', time: '1 business day' },
  { label: 'Home plan support', time: '48 hours' },
  { label: 'Business plan support', time: '24 hours (priority)' },
  { label: 'Professional plan support', time: 'Priority + phone' },
]

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Contact</span>
          <h1>Get in Touch</h1>
          <p className="lead" style={{ maxWidth: 560, marginTop: 16 }}>
            For the fastest response, please contact us directly via email or phone.
            You will hear from a real person, not an automated system.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="alert alert-blue" style={{ marginBottom: 32 }}>
            <MailIcon />
            <div>
              <strong>Direct contact is the launch path.</strong>
              <p style={{ marginTop: 6, marginBottom: 0 }}>
                We are not using website backend form processing for launch on IONOS.
                For the fastest response, please contact us directly via email or phone.
              </p>
            </div>
          </div>

          <div className="split-section">
            <div className="split-content">
              <h2 style={{ marginBottom: 24, fontSize: '1.4rem' }}>Email Us Directly</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {emailContacts.map(card => (
                  <ContactCard key={card.title} icon={<MailIcon />} {...card} />
                ))}
                <ContactCard
                  icon={<PhoneIcon />}
                  title="Office Phone"
                  desc="Call during business hours, Monday through Friday."
                  value={businessContact.phone}
                  href={phoneHref(businessContact.phone)}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h2 style={{ marginBottom: 4, fontSize: '1.4rem' }}>Company Details</h2>
              <ContactCard
                icon={<AddressIcon />}
                title="Mailing Address"
                desc="Official company mailing address."
                value={businessContact.address}
              />
              {principalContacts.map(card => (
                <ContactCard key={card.title} icon={<PersonIcon />} {...card} />
              ))}
              <div className="card" style={{ background: 'var(--bg-elevated)' }}>
                <h4 style={{ marginBottom: 14, fontSize: '0.95rem' }}>Response Times</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {responseTimes.map(row => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', gap: 12 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600, textAlign: 'right' }}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Before You Write</span>
            <h2>You Might Find Your Answer Here</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {[
              { label: 'Knowledge Base', desc: 'Browse common questions by topic', to: '/support' },
              { label: 'Services Overview', desc: 'See everything we currently offer', to: '/services' },
              { label: 'Pricing', desc: 'Monitoring plan details and costs', to: '/pricing' },
              { label: 'Privacy Policy', desc: 'How we handle your information', to: '/privacy' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  padding: '18px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                  display: 'block',
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4, fontSize: '0.9rem' }}>
                  {link.label}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  {link.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
