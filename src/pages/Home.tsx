import Hero from '../components/home/Hero'
import TrustStatement from '../components/home/TrustStatement'
import ServicesOverview from '../components/home/ServicesOverview'
import HowItWorks from '../components/home/HowItWorks'
import WhyBlackStorm from '../components/home/WhyBlackStorm'
import PrivacyIntegrity from '../components/home/PrivacyIntegrity'
import EducationSection from '../components/home/EducationSection'
import Roadmap from '../components/home/Roadmap'
import PricingTeaser from '../components/home/PricingTeaser'
import FAQ from '../components/home/FAQ'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      {/*
        Hero
        What it does: states who BlackStorm is and makes Network Monitoring the first mental anchor.
        Why it exists: first-time visitors need a plain answer before they care about features.
        Customer psychology: reduce uncertainty, avoid hype, and offer two low-friction next steps.
        Accessibility: semantic section, one H1, descriptive CTAs, decorative visual marked as such.
      */}
      <Hero />

      {/*
        TrustStatement
        What it does: creates a compact proof-of-character strip after the hero.
        Why it exists: small business buyers need reassurance before they explore service details.
        Customer psychology: "these people will not oversell me or misuse my information."
        Accessibility: short text blocks, icons are decorative, layout collapses cleanly.
      */}
      <TrustStatement />

      {/*
        ServicesOverview
        What it does: turns the homepage into reusable feature-card blocks for core services.
        Why it exists: users scan cards before reading deeper pages.
        Customer psychology: show what is available now, what is a preview, and where to go next.
        Accessibility: cards use headings, readable copy, and clear link text.
      */}
      <ServicesOverview />

      {/*
        HowItWorks
        What it does: explains onboarding as a simple four-step process.
        Why it exists: lowers perceived setup effort for non-technical owners.
        Customer psychology: "I can start without becoming a network engineer."
        Accessibility: ordered process is presented visually and textually.
      */}
      <HowItWorks />

      {/*
        WhyBlackStorm
        What it does: summarizes differentiators without buzzword overload.
        Why it exists: trust-first positioning belongs before pricing.
        Customer psychology: confirms BlackStorm is careful, plain-spoken, and realistic.
        Accessibility: concise cards with clear headings support scanning and screen readers.
      */}
      <WhyBlackStorm />

      {/*
        PrivacyIntegrity
        What it does: gives privacy and data handling commitments a dedicated section.
        Why it exists: monitoring data can feel sensitive; this addresses the concern directly.
        Customer psychology: "they understand that my network details matter."
        Accessibility: commitments are in text, not just icons.
      */}
      <PrivacyIntegrity />

      {/*
        EducationSection
        What it does: positions documentation and training as part of the product experience.
        Why it exists: supports future educational systems and knowledge-base expansion.
        Customer psychology: "I will not be left alone with confusing technical output."
        Accessibility: simple language and modular cards convert cleanly into future app surfaces.
      */}
      <EducationSection />

      {/*
        Roadmap
        What it does: shows future vision while labeling maturity clearly.
        Why it exists: supports portal, dashboard, and monitoring platform scalability without overclaiming.
        Customer psychology: creates confidence in direction while preserving honesty.
        Accessibility: status labels are text-based and not color-only.
      */}
      <Roadmap />

      {/*
        PricingTeaser
        What it does: previews plan structure without forcing a buying decision.
        Why it exists: cost clarity builds trust.
        Customer psychology: "I can evaluate this without a sales call."
        Accessibility: card headings and feature lists are semantic and responsive.
      */}
      <PricingTeaser />

      {/*
        FAQ
        What it does: answers the highest-friction questions near the conversion point.
        Why it exists: handles objections without sending users away.
        Customer psychology: replaces uncertainty with plain answers.
        Accessibility: accordion buttons expose expanded state and stable content regions.
      */}
      <FAQ />

      {/*
        CTASection
        What it does: offers final contact, support, and future portal entry points.
        Why it exists: visitors arrive with different intent: buy, ask, learn, or log in.
        Customer psychology: gives a calm next step without pressure.
        Accessibility: CTAs are descriptive links, placeholders are clearly marked.
      */}
      <CTASection />
    </>
  )
}
