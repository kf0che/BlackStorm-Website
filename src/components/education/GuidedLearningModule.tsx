import type { ReactNode } from 'react'

interface GuidedLearningModuleProps {
  title: string
  description: string
  estimatedTime?: string
  level?: string
  children?: ReactNode
}

/*
  GuidedLearningModule

  Intended customer psychology:
  - Sets expectations before a customer starts learning.

  Progressive disclosure:
  - Shows duration and level first, then lets deeper content appear inside.

  Accessibility goals:
  - Article structure with clear heading and metadata.

  Future scaling:
  - Can support completion tracking, certification-style learning paths, and localization.
*/
export default function GuidedLearningModule({
  title,
  description,
  estimatedTime,
  level = 'Beginner',
  children,
}: GuidedLearningModuleProps) {
  return (
    <article className="education-module">
      <div className="education-module-meta">
        <span>{level}</span>
        {estimatedTime && <span>{estimatedTime}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  )
}
