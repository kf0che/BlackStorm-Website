const segments = [
  {
    title: 'Small Businesses',
    description: 'Know when important network devices need attention before the issue becomes harder to explain or resolve.',
  },
  {
    title: 'MSPs',
    description: 'Use monitoring history and reports to support clearer client conversations and future portal workflows.',
  },
  {
    title: 'Growing Teams',
    description: 'Start with practical visibility and expand monitoring coverage as locations, devices, and needs grow.',
  },
  {
    title: 'Technical Clients',
    description: 'Review device status, alert history, and operational reporting without losing plain-language context.',
  },
]

export default function WhoWeServe() {
  return (
    <section className="section section-alt" aria-labelledby="who-we-serve-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Serve</span>
          <h2 id="who-we-serve-title">Built for Practical Network Visibility</h2>
          <p>
            BlackStorm is designed for organizations that need clearer monitoring, reporting,
            and support without inflated claims or unnecessary complexity.
          </p>
        </div>

        <div className="audience-grid">
          {segments.map(segment => (
            <article key={segment.title} className="card">
              <h3>{segment.title}</h3>
              <p>{segment.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
