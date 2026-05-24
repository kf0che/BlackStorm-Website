export const CONTACT_INFORMATION_PENDING = 'Contact information coming soon'

export const businessContact = {
  businessName: 'BlackStorm, LLC.',
  address: '',
  phone: '',
  email: '',
  emailStatus: 'pending_ionos_setup',
} as const

export const brandAssets = {
  logoSrc: '',
  logoAlt: 'BlackStorm, LLC. logo',
} as const

export function displayContactValue(value: string) {
  return value.trim() || CONTACT_INFORMATION_PENDING
}

export function contactEmailHref() {
  const email = businessContact.email.trim()
  return email ? `mailto:${email}` : undefined
}
