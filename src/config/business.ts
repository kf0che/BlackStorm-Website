export const contactEmails = {
  general: 'contact@blackstormllc.com',
  support: 'support@blackstormllc.com',
  sales: 'sales@blackstormllc.com',
  principals: [
    { name: 'Steve Michael', email: 'steve.michael@blackstormllc.com' },
    { name: 'Frank Posch', email: 'frank.posch@blackstormllc.com' },
  ],
} as const

export const businessContact = {
  businessName: 'BlackStorm, LLC',
  address: 'BlackStorm, LLC.\n7538 W 824 Rd\nFort Gibson, OK 74434 USA',
  phone: '+1 (918) 999-2975',
  email: contactEmails.general,
} as const

export const brandAssets = {
  logoSrc: '/images/blackstorm-logo.png',
  logoAlt: 'BlackStorm, LLC bear and lightning logo',
  logoWidth: 229,
  logoHeight: 154,
} as const

export function displayContactValue(value: string) {
  return value.trim() || contactEmails.general
}

export function contactEmailHref() {
  return emailHref(businessContact.email)
}

export function phoneHref(phone: string) {
  const digits = phone.replace(/\D/g, '')
  if (!digits) return undefined
  return `tel:+${digits}`
}

export function emailHref(email: string, subject?: string, body?: string) {
  const trimmedEmail = email.trim()
  if (!trimmedEmail) return undefined

  const searchParams = [
    subject ? `subject=${encodeURIComponent(subject)}` : undefined,
    body ? `body=${encodeURIComponent(body)}` : undefined,
  ].filter(Boolean)
  const params = searchParams.length ? `?${searchParams.join('&')}` : ''
  return `mailto:${trimmedEmail}${params}`
}
