const steps = [
  {
    n: '1',
    title: 'Identify What Matters',
    desc: 'We work with you to list the devices or services that matter most to daily operations.',
  },
  {
    n: '2',
    title: 'Configure Monitoring',
    desc: 'Monitoring checks and alert preferences are configured around your environment and plan.',
  },
  {
    n: '3',
    title: 'Receive Clear Alerts',
    desc: 'When a monitored item appears offline or outside expected behavior, alerts help your team know what changed.',
  },
  {
    n: '4',
    title: 'Review Reports',
    desc: 'Use reports and history to understand uptime patterns, outage timelines, and recovery events.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section section-dark" aria-labelledby="how-monitoring-works-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How Monitoring Works</span>
          <h2 id="how-monitoring-works-title">A Simple Path From Blind Spots to Visibility</h2>
          <p>
            Getting started is straightforward. We handle the technical setup — you get clear
            alerts and visibility from day one.
          </p>
        </div>

        {/* Process block.
            What it does: turns setup into a predictable sequence.
            Why it exists: uncertainty about onboarding prevents small teams from starting.
            Customer psychology: "this is manageable and I will not be left guessing."
            Accessibility: steps are numbered in text and do not rely on animation. */}
        <div className="process-steps" aria-label="Network monitoring setup process">
          {steps.map(step => (
            <div className="process-step" key={step.n}>
              <div className="step-number" aria-hidden="true">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
