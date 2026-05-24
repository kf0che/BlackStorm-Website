import { type CSSProperties } from 'react'
import { businessContact, contactEmailHref, displayContactValue } from '../../config/business'

interface ContactEmailLinkProps {
  className?: string
  style?: CSSProperties
}

export default function ContactEmailLink({ className, style }: ContactEmailLinkProps) {
  const href = contactEmailHref()
  const label = displayContactValue(businessContact.email)

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
