import { brandAssets, businessContact } from '../../config/business'

interface BrandMarkProps {
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export default function BrandMark({
  className = 'brand-logo-img',
  loading = 'eager',
  fetchPriority = 'auto',
}: BrandMarkProps) {
  const logoSrc = brandAssets.logoSrc.trim()

  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={brandAssets.logoAlt}
        width={brandAssets.logoWidth}
        height={brandAssets.logoHeight}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={className}
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
      className={className}
    >
      <rect width="36" height="36" rx="8" fill="#0C1220" />
      <polygon points="20,2 8,22 17,22 13,34 28,14 19,14" fill="#F6C000" />
    </svg>
  )
}
