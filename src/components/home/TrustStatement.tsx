/*
  TrustStatement — Section 2
  A compact grounding strip between the Hero and Services.
  Visual intent: slightly elevated background, no section padding — acts as a divider
  that reinforces the company's character before the visitor scrolls into services.
  Dark mode: bg-elevated (#1a1d2e or similar), border top/bottom border-subtle.
  Light mode: very light gray (#f5f6f8), same border treatment.
*/

const pillars = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    heading: 'Honest by default',
    desc: 'We tell you what we offer and what we don\'t — including our limitations.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    heading: 'Human support',
    desc: 'US-based team. Real people. No automated runaround.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    heading: 'Privacy first',
    desc: 'Your data is never sold or shared for advertising.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    heading: 'Plain language',
    desc: 'We explain what things mean before we recommend them.',
  },
]

export default function TrustStatement() {
  return (
    <div
      style={{
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '32px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px 32px',
            alignItems: 'start',
          }}
        >
          {pillars.map(p => (
            <div
              key={p.heading}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
              }}
            >
              <div
                style={{
                  color: 'var(--color-primary)',
                  flexShrink: 0,
                  marginTop: 1,
                  opacity: 0.85,
                }}
              >
                {p.icon}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    marginBottom: 3,
                  }}
                >
                  {p.heading}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
