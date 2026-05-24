import { useId, type ReactNode } from 'react'
import OnboardingProgressTracker from './OnboardingProgressTracker'

interface WizardStep {
  id: string
  label: string
}

interface OnboardingWizardProps {
  title: string
  description?: string
  steps: WizardStep[]
  currentStepId: string
  children: ReactNode
  actions?: ReactNode
}

/*
  OnboardingWizard

  Intended customer psychology:
  - Makes setup feel guided, not like a technical questionnaire.

  Trust-building principles:
  - Shows progress and keeps actions visible so users do not feel trapped.

  Accessibility goals:
  - Uses semantic section/header structure and an ordered progress tracker.
  - Actions are provided after content in source order.

  Mobile usability:
  - The progress tracker and content stack cleanly in CSS.

  Future scalability:
  - Step data can later come from API-driven onboarding or localized content.
*/
export default function OnboardingWizard({
  title,
  description,
  steps,
  currentStepId,
  children,
  actions,
}: OnboardingWizardProps) {
  const titleId = useId()
  const progressSteps = steps.map(step => ({
    ...step,
    status: step.id === currentStepId
      ? 'current'
      : steps.findIndex(s => s.id === step.id) < steps.findIndex(s => s.id === currentStepId)
        ? 'complete'
        : 'upcoming',
  })) as Array<{ id: string; label: string; status: 'complete' | 'current' | 'upcoming' }>

  return (
    <section className="education-wizard" aria-labelledby={titleId}>
      <header className="education-wizard-header">
        <div>
          <span className="bs-eyebrow">Guided Setup</span>
          <h1 id={titleId} className="bs-heading">{title}</h1>
          {description && <p className="bs-prose">{description}</p>}
        </div>
      </header>
      <OnboardingProgressTracker steps={progressSteps} />
      <div className="education-wizard-body">{children}</div>
      {actions && <div className="education-wizard-actions">{actions}</div>}
    </section>
  )
}
