import { brandAssets, businessContact } from '../../config/business'

export default function BrandMark() {
  const logoSrc = brandAssets.logoSrc.trim()

  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={brandAssets.logoAlt}
        width="36"
        height="36"
      />
    )
  }

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-label={`${businessContact.businessName} temporary brand mark`}
      role="img"
    >
      <rect width="36" height="36" rx="8" fill="url(#bsLogoGrad)" />
      <path d="M22 4L12 21h6L15 32 27 15h-6.5L22 4z" fill="white" />
    </svg>
  )
}
