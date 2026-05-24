const stats = [
  { value: '24/7', label: 'Monitoring concept' },
  { value: 'Clear', label: 'Alert context' },
  { value: 'Owned', label: 'Customer data' },
  { value: 'Plain', label: 'Support language' },
]

export default function Stats() {
  return (
    <section className="section-sm" aria-label="BlackStorm monitoring principles">
      <div className="container">
        <div className="stats-bar">
          {stats.map(stat => (
            <div className="stats-bar-item" key={stat.label}>
              <div className="stats-bar-value">{stat.value}</div>
              <div className="stats-bar-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
