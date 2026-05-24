import { Link } from 'react-router-dom'
import ContactEmailLink from '../components/ui/ContactEmailLink'

function PlainEnglish({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--color-primary-muted, rgba(79,142,247,0.08))',
        border: '1px solid var(--color-primary-border, rgba(79,142,247,0.25))',
        borderRadius: 'var(--radius-md)',
        padding: '14px 18px',
        marginBottom: 20,
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
      }}
    >
      <strong style={{ color: 'var(--color-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em', display: 'block', marginBottom: 6 }}>
        Plain English
      </strong>
      {children}
    </div>
  )
}

export default function Terms() {
  return (
    <div className="legal-content">
      <span className="section-label">Legal</span>
      <h1>Terms of Service</h1>
      <div className="legal-updated">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        Last Updated: January 1, 2026
      </div>

      <div className="alert alert-orange" style={{ marginBottom: 32 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <div>
          <strong>Attorney Review Notice</strong>
          <p style={{ marginTop: 4, marginBottom: 0 }}>
            These Terms of Service are provided for informational purposes and to govern your use of BlackStorm's services.
            They have not been reviewed by your legal counsel. We recommend that businesses and organizations with significant
            contractual concerns consult a qualified attorney before entering into any service relationship.
          </p>
        </div>
      </div>

      {/* Short Version */}
      <div
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 28px',
          marginBottom: 40,
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: 16, fontSize: '1rem' }}>The Short Version</h3>
        <p style={{ marginBottom: 12 }}>
          BlackStorm provides a network monitoring service. You sign up, we watch your devices, and we alert you
          when something goes offline. Here's what that relationship looks like in plain language:
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          <li><strong>You own your data.</strong> We use it only to provide the service — never to advertise or sell.</li>
          <li><strong>You're responsible for your account.</strong> Keep your login credentials secure.</li>
          <li><strong>Only monitor devices you own or control.</strong> Don't use our service to watch networks you don't have permission to monitor.</li>
          <li><strong>This is a monitoring service, not a security guarantee.</strong> We watch for outages. We are not a cybersecurity firm.</li>
          <li><strong>Billing is monthly.</strong> Cancel anytime. No long-term contracts.</li>
          <li><strong>We can terminate service</strong> for non-payment, violations of these Terms, or illegal activity.</li>
        </ul>
      </div>

      <h2>1. Agreement to Terms</h2>
      <PlainEnglish>
        By using BlackStorm, you're agreeing to follow these rules. If you don't agree, you shouldn't use the service.
        These terms apply to everyone — homeowners, business owners, organizations, and anyone else who accesses our platform.
      </PlainEnglish>
      <p>
        By accessing or using any service provided by BlackStorm, LLC ("BlackStorm," "we," "us," or "our"), you agree to be
        bound by these Terms of Service ("Terms"). These Terms apply to all users, including individuals, businesses,
        nonprofits, and any other organization. If you are using our services on behalf of an organization, you represent
        that you have authority to bind that organization to these Terms.
      </p>
      <p>
        If you do not agree to these Terms, do not use our services.
      </p>

      <h2>2. Who May Use Our Services</h2>
      <PlainEnglish>
        You must be at least 18 years old to sign up. If you're creating an account for a business or organization,
        you need to be authorized to do so on their behalf.
      </PlainEnglish>
      <p>
        You must be at least 18 years of age to create an account or use our services. By agreeing to these Terms,
        you confirm that you meet this requirement. If you are signing up on behalf of a business, church, nonprofit,
        or other organization, you confirm that you are authorized to enter into this agreement on that entity's behalf
        and that the entity agrees to these Terms.
      </p>

      <h2>3. Description of Services</h2>
      <PlainEnglish>
        Our current service is network monitoring — we watch your devices and alert you when they go offline or become
        unreachable. That's what we do today. Other services listed on our site as "Research" or "Planning" are future goals,
        not currently available.
      </PlainEnglish>
      <p>
        BlackStorm currently provides a <strong>Network Monitoring Service (NMS)</strong> that monitors the availability
        and reachability of IP-connected devices on your network. This includes:
      </p>
      <ul>
        <li>Continuous polling of registered devices</li>
        <li>Email and SMS alert notifications when a device goes offline or recovers</li>
        <li>Access to a customer portal for viewing device status and alert history</li>
        <li>Periodic performance and uptime reporting, depending on your plan</li>
      </ul>
      <p>
        Any services described on our website as <em>Research</em>, <em>Planning</em>, or <em>Coming Soon</em> are future
        initiatives and are not currently offered. We will not charge for services that do not exist. These Terms apply
        only to services that are live and available on your selected plan.
      </p>

      <h2>4. What Our Service Is — and Is Not</h2>
      <PlainEnglish>
        We monitor whether your devices are online. We are not a cybersecurity company, and we don't guarantee that
        your network is secure. If something goes wrong with your data, systems, or security, that's beyond what
        our service covers.
      </PlainEnglish>
      <p>
        Our network monitoring service is designed to detect when devices become unreachable on your network and to
        alert you promptly. It is not a substitute for, and does not provide:
      </p>
      <ul>
        <li>Cybersecurity protection, intrusion detection, or threat response</li>
        <li>IT management, device configuration, or remote remediation</li>
        <li>Legal, financial, insurance, or compliance advice</li>
        <li>Guaranteed detection of every outage — alert timing depends on polling intervals, network conditions, and device behavior</li>
        <li>Managed security services of any kind</li>
      </ul>
      <p>
        BlackStorm makes no representations about the security of your network or devices beyond the scope of the
        monitoring service as described.
      </p>

      <h2>5. Your Responsibilities</h2>
      <PlainEnglish>
        You're responsible for the accuracy of the information you give us, the security of your login, and making sure
        your use of our service is legal. Don't use our tools to monitor devices you don't own or aren't authorized to monitor.
      </PlainEnglish>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate and complete information when creating your account and registering devices</li>
        <li>Maintain the confidentiality of your account credentials and notify us immediately at <ContactEmailLink style={{ color: 'var(--color-primary)' }} /> if you suspect unauthorized access</li>
        <li>Use the service only for devices and networks you own or have explicit authorization to monitor</li>
        <li>Comply with all applicable laws and regulations in your use of our services</li>
        <li>Keep your contact and billing information current</li>
      </ul>
      <p>
        BlackStorm is not liable for losses arising from unauthorized account access resulting from your failure to
        maintain credential security.
      </p>

      <h2>6. Acceptable Use</h2>
      <PlainEnglish>
        Use BlackStorm only for legitimate, lawful purposes. Don't try to break our systems, access other people's accounts,
        or use our service to monitor networks you don't have permission to watch.
      </PlainEnglish>
      <p>You agree not to use our services to:</p>
      <ul>
        <li>Monitor devices or networks you do not own or do not have explicit, documented authorization to monitor</li>
        <li>Attempt to gain unauthorized access to BlackStorm systems, infrastructure, or other users' accounts</li>
        <li>Interfere with or disrupt the integrity or performance of our platform</li>
        <li>Resell, sublicense, or redistribute our services without a written reseller agreement from BlackStorm</li>
        <li>Upload or transmit malicious code, scripts, or content of any kind</li>
        <li>Violate any applicable local, state, national, or international law or regulation</li>
        <li>Engage in any activity that could expose BlackStorm or its users to legal liability</li>
      </ul>
      <p>
        Violations of this section may result in immediate service termination without refund.
      </p>

      <h2>7. Payment and Billing</h2>
      <PlainEnglish>
        You pay monthly, in advance. You can cancel at any time. We don't offer refunds for partial months,
        but we won't lock you into a long-term contract.
      </PlainEnglish>
      <p>
        Subscription fees are charged monthly in advance. By providing a payment method, you authorize BlackStorm to
        charge that method on your selected billing date each month. All fees are stated in US dollars.
      </p>
      <p>
        You may upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades take effect
        at the start of the next billing period. Refunds are not issued for unused portions of a paid billing period,
        except where required by applicable law.
      </p>
      <p>
        If a payment fails, we will attempt to notify you by email. Continued non-payment may result in service
        suspension or termination.
      </p>

      <h2>8. Data Ownership and Privacy</h2>
      <PlainEnglish>
        Your monitoring data belongs to you. We use it only to run the service — we don't sell it, share it with
        advertisers, or use it for anything you haven't agreed to. See our Privacy Policy for full details.
      </PlainEnglish>
      <p>
        You retain full ownership of your monitoring data — including device names, IP addresses, alert history,
        and performance records — collected through your use of our service.
      </p>
      <p>
        BlackStorm uses your data solely to provide, operate, and improve the services you have subscribed to.
        We do not sell, license, or share your data with third parties for advertising or commercial purposes.
        For complete information on how we collect, use, and protect your data, see our{' '}
        <Link to="/privacy" style={{ color: 'var(--color-primary)' }}>Privacy Policy</Link>.
      </p>

      <h2>9. Service Availability</h2>
      <PlainEnglish>
        We work hard to keep the service running around the clock, but we can't guarantee 100% uptime.
        Technology sometimes has issues — we'll do our best to fix them quickly and keep you informed.
      </PlainEnglish>
      <p>
        BlackStorm targets 99.9% monitoring platform uptime. We monitor our own infrastructure and work to resolve
        issues promptly. However, we cannot guarantee uninterrupted service. Scheduled maintenance will be announced
        in advance where possible, and we will communicate service disruptions through your customer portal and
        via email.
      </p>
      <p>
        We do not guarantee that every device outage will be detected within a specific timeframe. Alert timing
        depends on polling intervals, network conditions, device behavior, and other factors outside our control.
        Service Level Agreement (SLA) documentation is available for customers on Professional plans.
      </p>

      <h2>10. DISCLAIMER OF WARRANTIES</h2>
      <PlainEnglish>
        Our service is provided as-is. We do our best, but we can't legally promise it will always work perfectly
        or protect you from every possible problem.
      </PlainEnglish>
      <p>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
        INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY,
        AND NON-INFRINGEMENT. BLACKSTORM DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
        FREE FROM SECURITY VULNERABILITIES, OR THAT EVERY DEVICE OUTAGE WILL BE DETECTED. NO ADVICE OR INFORMATION,
        WHETHER ORAL OR WRITTEN, OBTAINED FROM BLACKSTORM, SHALL CREATE A WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
      </p>

      <h2>11. LIMITATION OF LIABILITY</h2>
      <PlainEnglish>
        If something goes wrong, there are limits to what BlackStorm is legally responsible for. You cannot sue us
        for indirect losses like lost business, lost data, or other consequences — and any direct claims are limited
        to what you actually paid us in the past three months.
      </PlainEnglish>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BLACKSTORM SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
        OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE
        OF — OR INABILITY TO USE — THE SERVICES, EVEN IF BLACKSTORM HAS BEEN ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES.
      </p>
      <p>
        OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR
        THE SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO BLACKSTORM IN THE THREE (3) CALENDAR
        MONTHS IMMEDIATELY PRECEDING THE CLAIM.
      </p>
      <p>
        SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS ON LIABILITY OR WARRANTIES. IF YOU ARE IN SUCH A
        JURISDICTION, SOME OF THESE LIMITATIONS MAY NOT APPLY TO YOU.
      </p>

      <h2>12. Indemnification</h2>
      <PlainEnglish>
        If your actions cause BlackStorm to face a legal claim or costs, you agree to cover those costs.
        This applies if you misuse the service or violate these Terms.
      </PlainEnglish>
      <p>
        You agree to defend, indemnify, and hold harmless BlackStorm, LLC, its officers, directors, employees,
        contractors, and agents from and against any and all claims, damages, losses, costs, and expenses
        (including reasonable legal fees) arising from or related to:
      </p>
      <ul>
        <li>Your use of the services in violation of these Terms</li>
        <li>Your monitoring of devices or networks without authorization</li>
        <li>Your violation of any applicable law or third-party right</li>
        <li>Any content or information you submit to our platform</li>
      </ul>

      <h2>13. Termination</h2>
      <PlainEnglish>
        You can cancel anytime — just contact us or cancel in your account portal. We can also end your service
        if you violate these Terms or don't pay. When your account closes, your data is retained briefly
        according to your plan, then deleted.
      </PlainEnglish>
      <p>
        Either party may terminate service at any time. You may cancel your subscription through your customer
        portal or by contacting us at{' '}
        <ContactEmailLink style={{ color: 'var(--color-primary)' }} />.
      </p>
      <p>
        BlackStorm may suspend or terminate your account immediately and without prior notice for:
      </p>
      <ul>
        <li>Violation of these Terms, including unauthorized use</li>
        <li>Failure to pay subscription fees after reasonable notice</li>
        <li>Any illegal activity conducted through or related to the service</li>
      </ul>
      <p>
        Upon termination, your access to the service ends immediately. Your monitoring data will be retained
        in accordance with the data retention terms of your plan and then permanently deleted. We will not
        retain your personal data longer than necessary after service termination.
      </p>

      <h2>14. Governing Law and Disputes</h2>
      <PlainEnglish>
        Any disputes will be governed by US law and the laws of the state where BlackStorm is registered.
        We'd always prefer to resolve issues directly — please contact us first before pursuing any legal action.
      </PlainEnglish>
      <p>
        These Terms are governed by the laws of the United States and the state in which BlackStorm, LLC is
        registered, without regard to conflict of law principles. Any dispute arising from these Terms or your
        use of our services shall first be addressed by contacting us directly at{' '}
        <ContactEmailLink style={{ color: 'var(--color-primary)' }} />.
        We will make a good-faith effort to resolve any dispute informally before either party pursues formal
        legal proceedings.
      </p>

      <h2>15. Entire Agreement</h2>
      <p>
        These Terms, together with our <Link to="/privacy" style={{ color: 'var(--color-primary)' }}>Privacy Policy</Link>,
        constitute the entire agreement between you and BlackStorm regarding your use of our services. They supersede
        any prior agreements, representations, or understandings between the parties relating to the same subject matter.
        If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain
        in full force and effect.
      </p>

      <h2>16. Changes to These Terms</h2>
      <PlainEnglish>
        We may update these Terms from time to time. If we make significant changes, we'll let you know by email
        or through your portal at least 30 days before they take effect.
      </PlainEnglish>
      <p>
        We may update these Terms periodically to reflect changes in our services, legal requirements, or operating
        practices. We will notify you of material changes by email and through a notice in your customer portal at
        least 30 days before the new Terms take effect. Continued use of our services after the effective date
        constitutes your acceptance of the updated Terms. If you do not agree to the changes, you may cancel your
        subscription before the effective date.
      </p>

      <h2>17. Contact</h2>
      <p>For questions about these Terms or your service agreement:</p>
      <ul>
        <li><strong>Legal inquiries:</strong> <ContactEmailLink style={{ color: 'var(--color-primary)' }} /></li>
        <li><strong>Billing questions:</strong> <ContactEmailLink style={{ color: 'var(--color-primary)' }} /></li>
        <li><strong>General support:</strong> <ContactEmailLink style={{ color: 'var(--color-primary)' }} /></li>
        <li><strong>Contact form:</strong> <Link to="/contact" style={{ color: 'var(--color-primary)' }}>blackstorm.llc/contact</Link></li>
      </ul>
    </div>
  )
}
