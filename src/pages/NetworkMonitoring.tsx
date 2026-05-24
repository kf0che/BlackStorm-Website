import { Link } from 'react-router-dom'

const monitoredTypes = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg>,
    title: 'Routers & Switches',
    desc: 'The backbone of your network. We alert you the moment routing or switching infrastructure becomes unresponsive.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    title: 'Servers & Hosts',
    desc: 'File servers, application servers, workstations, and virtual machines. Know when any host stops responding.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Firewalls',
    desc: 'Monitor the devices protecting your network perimeter. Never miss a firewall outage or reboot.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 6l11 7L23 6"/><rect x="1" y="4" width="22" height="16" rx="2"/></svg>,
    title: 'Wireless Access Points',
    desc: 'Keep tabs on every AP in your environment. Spot reboots or failures before wireless users notice.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'NAS & Storage',
    desc: 'Network-attached storage, backup appliances, and storage devices — monitored around the clock.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Smart & IoT Devices',
    desc: 'Any IP-addressed device on your network — cameras, smart home hubs, printers, and more.',
  },
]

const alertFeatures = [
  {
    title: 'Under 60-Second Detection',
    desc: 'We check your devices every 30 seconds to 5 minutes (depending on plan). When something goes wrong, you know fast.',
  },
  {
    title: 'Email & SMS Notifications',
    desc: 'Alerts go to your inbox and optionally your phone. You choose who gets notified and how.',
  },
  {
    title: 'Recovery Alerts',
    desc: "When a device comes back online, you get a follow-up notification confirming it's resolved.",
  },
  {
    title: 'Alert History Log',
    desc: 'Every alert is logged in your portal with timestamps, duration, and resolution status.',
  },
]

export default function NetworkMonitoring() {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Available Now</span>
          <h1>BlackStorm Network Monitoring</h1>
          <p className="lead" style={{ maxWidth: 640, marginTop: 16 }}>
            Around-the-clock monitoring for your devices and infrastructure.
            Know the moment something needs attention — before it becomes a problem.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
            <Link to="/pricing" className="btn btn-outline btn-lg">View Pricing</Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Monitor</span>
            <h2>If It Has an IP Address, We Can Watch It</h2>
            <p>
              Any device connected to your network is a candidate for monitoring.
              No special software or hardware required on the device itself.
            </p>
          </div>
          <div className="features-grid">
            {monitoredTypes.map(item => (
              <div className="card" key={item.title}>
                <div className="card-header">
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <div className="split-content">
              <span className="section-label">Alerts</span>
              <h2>You'll Know Within 60 Seconds</h2>
              <p>
                When a device goes offline or crosses a threshold you've configured,
                we alert you immediately. No waiting for reports — alerts fire as events happen.
              </p>
              <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: 16, marginTop: 24 }}>
                {alertFeatures.map(f => (
                  <div key={f.title} style={{ padding: '16px 20px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <h4 style={{ marginBottom: 6, fontSize: '0.95rem' }}>{f.title}</h4>
                    <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="split-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { type: 'error', device: 'Main Router', msg: 'Device offline — no response', time: '9:42:17 AM' },
                  { type: 'warning', device: 'File Server', msg: 'High latency detected (480ms)', time: '9:43:02 AM' },
                  { type: 'success', device: 'Main Router', msg: 'Device recovered — back online', time: '9:48:55 AM' },
                ].map((alert, i) => (
                  <div key={i} style={{
                    padding: '16px 20px',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `3px solid var(--color-${alert.type === 'error' ? 'error' : alert.type === 'warning' ? 'warning' : 'success'})`,
                    border: `1px solid var(--border-subtle)`,
                    borderLeftWidth: 3,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: '0.82rem', color: `var(--color-${alert.type === 'error' ? 'error' : alert.type === 'warning' ? 'warning' : 'success'})` }}>
                        {alert.type === 'error' ? '● DOWN' : alert.type === 'warning' ? '● WARNING' : '● RECOVERED'}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{alert.time}</span>
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{alert.device}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{alert.msg}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-section reverse">
            <div className="split-content">
              <span className="section-label">Customer Portal</span>
              <h2>Your Dashboard, Always Available</h2>
              <p>
                Log in to your portal anytime to see a live view of all your monitored devices,
                review alert history, and download performance reports.
              </p>
              <ul className="check-list">
                {[
                  'Real-time device status — online, offline, or degraded',
                  'Alert timeline with timestamps and durations',
                  'Latency and uptime trends over 30, 90, or 365 days',
                  'Downloadable monthly summary reports',
                  'Secure, private — your data is never shared',
                ].map(item => (
                  <li key={item}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="split-visual">
              <div className="portal-preview">
                <div className="portal-toolbar">
                  <div className="portal-dots">
                    <div className="portal-dot red"/><div className="portal-dot yellow"/><div className="portal-dot green"/>
                  </div>
                  <div className="portal-url">portal.blackstorm.llc/dashboard</div>
                </div>
                <div className="portal-body">
                  <div className="portal-stat-row">
                    <div className="portal-stat"><div className="portal-stat-val">99.97%</div><div className="portal-stat-lbl">Uptime</div></div>
                    <div className="portal-stat"><div className="portal-stat-val">0</div><div className="portal-stat-lbl">Alerts</div></div>
                    <div className="portal-stat"><div className="portal-stat-val">12ms</div><div className="portal-stat-lbl">Latency</div></div>
                    <div className="portal-stat"><div className="portal-stat-val">47</div><div className="portal-stat-lbl">Devices</div></div>
                  </div>
                  <div className="portal-chart-placeholder">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    Performance chart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Start Monitoring in 24 Hours</h2>
          <p>Tell us what you want to watch and we'll have monitoring configured within one business day. No hardware. No software. Just visibility.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us to Start</Link>
            <Link to="/pricing" className="btn btn-outline btn-lg">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
