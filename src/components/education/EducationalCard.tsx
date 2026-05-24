import type { ReactNode } from 'react'

interface EducationalCardProps {
  title: string
  summary: string
  assetPlaceholder?: 'video' | 'diagram' | 'screenshot' | 'lab'
  children?: ReactNode
}

/*
  EducationalCard

  Intended customer psychology:
  - Makes learning feel approachable and optional.

  Trust-building principles:
  - Placeholders are labeled so future videos or screenshots do not imply current availability.

  Accessibility goals:
  - Text summary is primary; media placeholders require captions/transcripts when replaced.

  Future localization:
  - Title and summary are prop-driven for translation support.
*/
export default function EducationalCard({ title, summary, assetPlaceholder, children }: EducationalCardProps) {
  return (
    <article className="education-card">
      {assetPlaceholder && (
        <div className="education-asset-placeholder" role="img" aria-label={`Future ${assetPlaceholder} placeholder`}>
          [UPDATE: add {assetPlaceholder}]
        </div>
      )}
      <h3>{title}</h3>
      <p>{summary}</p>
      {children}
    </article>
  )
}
