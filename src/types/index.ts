export type Theme = 'dark' | 'light'

export type ServiceStatus = 'available' | 'coming-soon' | 'research' | 'planning' | 'vision'

export interface PricingTier {
  id: string
  name: string
  audience: string
  price: number | null
  period: string
  deviceCount: string
  description: string
  features: string[]
  unavailable?: string[]
  cta: string
  ctaTo: string
  featured?: boolean
}

export interface FAQEntry {
  question: string
  answer: string
}

export interface AudienceSegment {
  id: string
  title: string
  description: string
  status: 'available' | 'coming-soon'
}

export interface RoadmapItem {
  title: string
  description: string
  status: ServiceStatus
  badge: string
  badgeClass: string
  done: boolean
}
