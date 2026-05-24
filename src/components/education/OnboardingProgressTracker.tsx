interface ProgressStep {
  id: string
  label: string
  status: 'complete' | 'current' | 'upcoming'
}

interface OnboardingProgressTrackerProps {
  steps: ProgressStep[]
  label?: string
}

/*
  OnboardingProgressTracker

  Intended customer psychology:
  - Reduces uncertainty by showing where the customer is and what remains.

  Trust-building principles:
  - Uses plain status text instead of vague progress graphics.

  Accessibility goals:
  - Uses an ordered list with aria-current on the active step.
  - Status is text-based, not color-only.

  Mobile usability goals:
  - Steps wrap cleanly and remain readable on small screens.

  Future localization:
  - All labels are passed as props so copy can come from translation files later.
*/
export default function OnboardingProgressTracker({
  steps,
  label = 'Onboarding progress',
}: OnboardingProgressTrackerProps) {
  return (
    <nav className="education-progress" aria-label={label}>
      <ol>
        {steps.map((step, index) => (
          <li key={step.id} className={`education-progress-step is-${step.status}`} aria-current={step.status === 'current' ? 'step' : undefined}>
            <span className="education-progress-number">{index + 1}</span>
            <span>
              <strong>{step.label}</strong>
              <small>{step.status}</small>
            </span>
          </li>
        ))}
      </ol>
    </nav>
  )
}
