import { type CSSProperties } from 'react'
import { businessContact, displayContactValue, emailHref } from '../../config/business'

interface ContactEmailLinkProps {
  className?: string
  email?: string
  subject?: string
  style?: CSSProperties
}

export default function ContactEmailLink({ className, email = businessContact.email, subject, style }: ContactEmailLinkProps) {
  const href = emailHref(email, subject)
  const label = displayContactValue(email)

  if (!href) {
    return (
      <span className={className} style={style} aria-disabled="true">
        {label}
      </span>
    )
  }

  return (
    <a href={href} className={className} style={style}>
      {label}
    </a>
  )
}
