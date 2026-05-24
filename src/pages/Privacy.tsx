import { Link } from 'react-router-dom'

function PlainEnglish({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--color-primary-dim)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 18px',
        marginBottom: 20,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        fontSize: '0.875rem',
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div style={{ color: 'var(--color-primary)' }}>
        <strong style={{ display: 'block', marginBottom: 4 }}>Plain English</strong>
        {children}
      </div>
    </div>
  )
}

export default function Privacy() {
  return (
    <div className="legal-content">
      <span className="section-label">Legal</span>
      <h1>Privacy Policy</h1>
      <div className="legal-updated">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        Effective Date: January 1, 2026 &nbsp;·&nbsp; Last Reviewed: January 1, 2026
      </div>

      {/* ── Attorney Review Notice ────────────────────────── */}
      <div
        className="alert alert-orange"
        style={{ marginBottom: 32, marginTop: 8 }}
        role="note"
        aria-label="Attorney review notice"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <div>
          <strong>Attorney Review Notice</strong>
          <p style={{ marginTop: 6, marginBottom: 0 }}>
            This Privacy Policy has been prepared by BlackStorm, LLC in good faith to describe our
            current data practices. It has not been formally reviewed by licensed legal counsel.
            Customers, businesses, or organizations with specific privacy law questions — including
            questions related to CCPA, GDPR, HIPAA, or other applicable regulations — should consult
            a qualified attorney in their jurisdiction. This document does not constitute legal advice.
          </p>
        </div>
      </div>

      {/* ── Plain Language Summary ────────────────────────── */}
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          padding: '28px 32px',
          marginBottom: 40,
        }}
      >
        <h3 style={{ marginBottom: 12, marginTop: 0 }}>The Short Version</h3>
        <p style={{ marginBottom: 12 }}>
          We know most people don't read privacy policies. Here's what matters most:
        </p>
        <ul style={{ marginLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', listStyle: 'disc' }}>
            We collect your contact information when you sign up, and we collect performance data
            about the devices you ask us to monitor.
          </li>
          <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', listStyle: 'disc' }}>
            We use this information <em>only</em> to provide our services to you.
          </li>
          <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', listStyle: 'disc' }}>
            We do not sell your information. We do not share it with advertisers.
          </li>
          <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', listStyle: 'disc' }}>
            Your monitoring data belongs to you. We don't analyze it for our own benefit.
          </li>
          <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', listStyle: 'disc' }}>
            You can ask us to delete your information at any time.
          </li>
        </ul>
        <p style={{ marginBottom: 0, marginTop: 16 }}>
          The full policy below explains all of this in detail. If you have questions,
          email us at{' '}
          <a href="mailto:privacy@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
            privacy@blackstorm.llc
          </a>.
        </p>
      </div>

      <p>
        BlackStorm, LLC ("BlackStorm," "we," "us," or "our") is a technology company based in
        the United States. We provide network monitoring services to residential customers, small
        businesses, nonprofits, churches, local organizations, and other clients. This Privacy
        Policy explains how we collect, use, store, and protect information when you visit our
        website or use our services.
      </p>

      <p>
        By using our website or services, you acknowledge that you have read and understood this
        Privacy Policy. If you do not agree, please stop using our services and contact us if you
        have questions.
      </p>

      {/* ── Section 1 ────────────────────────────────────── */}
      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide Directly</h3>
      <PlainEnglish>
        This is information you give us when you sign up, contact us, or manage your account.
      </PlainEnglish>
      <p>When you create an account, contact us, or subscribe to our services, we may collect:</p>
      <ul>
        <li>Your name and contact information (email address, phone number)</li>
        <li>Company, organization, household, or church name</li>
        <li>Account login credentials — passwords are stored in a secure hashed format and are never readable by our staff</li>
        <li>Payment details — processed through third-party payment processors; we do not store full card numbers on our servers</li>
        <li>Messages and requests submitted through our contact form, email, or support system</li>
      </ul>

      <h3>1.2 Network Monitoring Data</h3>
      <PlainEnglish>
        This is the technical data we collect because you've asked us to monitor your devices. We collect
        only what's necessary to check whether a device is online and responding properly.
      </PlainEnglish>
      <p>
        As part of providing our monitoring service, we collect data about the devices and
        infrastructure you add to our platform. This includes:
      </p>
      <ul>
        <li>IP addresses and hostnames of the devices you ask us to monitor</li>
        <li>Device availability status (online or offline)</li>
        <li>Response times and latency measurements</li>
        <li>Alert events, timestamps, and resolution records</li>
        <li>Custom device names, labels, and notes you add to your account</li>
      </ul>
      <p>
        <strong>This data belongs to you.</strong> We collect it only because you've asked us to monitor
        these devices. We use it to provide alerts, generate reports, and operate the monitoring
        platform on your behalf.
      </p>
      <p>
        <strong>Important limitation:</strong> We do not have access to the content of your network
        traffic. We do not monitor what websites your devices visit, what files they contain, or
        what your users are doing. We check only whether a device responds — and how quickly.
      </p>

      <h3>1.3 Information Collected Automatically</h3>
      <PlainEnglish>
        When you visit our website, basic technical information is collected automatically — similar
        to most websites you visit. We use this only to keep the site working and understand how
        it's being used.
      </PlainEnglish>
      <p>When you visit our website or use our customer portal, we may automatically collect:</p>
      <ul>
        <li>Server log data: your IP address, browser type, the pages you visit, and the time of your visit</li>
        <li>Device information: browser version and operating system type</li>
        <li>Cookies and similar technologies — see Section 6 for details</li>
        <li>General usage patterns to help us understand how the site and portal are used</li>
      </ul>

      <h3>1.4 What We Do Not Collect</h3>
      <PlainEnglish>
        We want to be clear about what we don't collect, so there's no guesswork.
      </PlainEnglish>
      <p>We do not collect or have access to:</p>
      <ul>
        <li>The content of your network traffic or internet activity</li>
        <li>Files, documents, or data stored on your devices</li>
        <li>Social Security numbers, government-issued ID numbers, or sensitive financial account numbers</li>
        <li>Health or medical information of any kind</li>
        <li>Information about other people on your network (beyond the devices you've specifically added to monitoring)</li>
      </ul>

      {/* ── Section 2 ────────────────────────────────────── */}
      <h2>2. How We Use Your Information</h2>
      <PlainEnglish>
        We use your information to run your account, send you alerts, answer your questions, and
        improve our service. That's it.
      </PlainEnglish>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Create and manage your account</li>
        <li>Deliver monitoring services and send alert notifications (email and SMS)</li>
        <li>Generate performance reports available in your customer portal</li>
        <li>Respond to your support requests and other communications</li>
        <li>Process your subscription payments</li>
        <li>Communicate with you about your account, billing, and service updates</li>
        <li>Improve our services, fix technical problems, and develop new features</li>
        <li>Comply with our legal obligations</li>
        <li>Protect the security and integrity of our systems and our customers' accounts</li>
      </ul>
      <p>
        We do not use your monitoring data, device information, or network details for advertising,
        for resale, or for any purpose other than providing the services you subscribed to.
      </p>

      {/* ── Section 3 ────────────────────────────────────── */}
      <h2>3. How We Share Your Information</h2>
      <PlainEnglish>
        We don't sell your information. We share it only in the narrow situations described
        below — and only as much as necessary.
      </PlainEnglish>
      <p>
        BlackStorm does not sell, rent, or trade your personal information to third parties.
        We may share limited information only in the following circumstances:
      </p>

      <h3>3.1 Service Providers</h3>
      <p>
        We work with trusted third-party companies to help us operate our platform. These
        may include cloud hosting providers, payment processors, and email delivery services.
        These providers receive only the information necessary to perform their specific function,
        are bound by confidentiality obligations, and are not permitted to use your information
        for any purpose other than serving us.
      </p>

      <h3>3.2 Legal Requirements</h3>
      <p>
        We may disclose information when required by a valid law, court order, or lawful
        governmental request. Where permitted by law, we will make reasonable efforts to notify
        you before complying with such a request.
      </p>

      <h3>3.3 Business Transfers</h3>
      <p>
        If BlackStorm is acquired, merged with another company, or sells a significant portion
        of its assets, your information may be part of that transaction. We will notify you
        in advance of any such change, and the acquiring party will be required to honor
        this Privacy Policy or provide you with notice and options.
      </p>

      <h3>3.4 Protection of Rights and Safety</h3>
      <p>
        We may share information if we reasonably believe it is necessary to prevent fraud,
        protect our customers from harm, or protect the rights or safety of BlackStorm,
        our customers, or the public.
      </p>

      {/* ── Section 4 ────────────────────────────────────── */}
      <h2>4. Data Retention</h2>
      <PlainEnglish>
        We keep your information only as long as needed to serve you. When you cancel,
        we delete it on a defined schedule.
      </PlainEnglish>
      <p>
        We retain your account information for as long as your account is active. Monitoring
        data is retained according to your plan:
      </p>
      <ul>
        <li><strong>Home plan:</strong> 30 days of monitoring history</li>
        <li><strong>Business plan:</strong> 90 days of monitoring history</li>
        <li><strong>Professional plan:</strong> 1 year of monitoring history</li>
      </ul>
      <p>
        After you cancel your account, we will delete your personal data within 90 days,
        except where we are required by law to retain certain records for a longer period
        (for example, billing records).
      </p>
      <p>
        You may request deletion of your account and associated data at any time by contacting
        us at{' '}
        <a href="mailto:privacy@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
          privacy@blackstorm.llc
        </a>.
        We will confirm receipt and complete the deletion within 30 days.
      </p>

      {/* ── Section 5 ────────────────────────────────────── */}
      <h2>5. Security</h2>
      <PlainEnglish>
        We take reasonable steps to protect your information. We use industry-standard
        encryption and access controls. No system is perfectly secure — but we work hard.
      </PlainEnglish>
      <p>
        We implement technical and organizational measures to protect your information against
        unauthorized access, disclosure, or misuse. These measures include:
      </p>
      <ul>
        <li>Encrypted connections (HTTPS/TLS) for all data transmitted to and from our services</li>
        <li>Secure, hashed storage for account passwords — never stored in readable form</li>
        <li>Access controls that limit which staff members can view customer data</li>
        <li>Regular review and improvement of our security practices</li>
      </ul>
      <p>
        No internet-based service is completely immune to security risks. We do not guarantee
        that unauthorized parties will never access our systems, but we take this responsibility
        seriously and work continuously to minimize that risk.
      </p>
      <p>
        If we discover a security incident that has affected your personal information, we will
        notify you as required by applicable law and describe what happened and what we're doing
        about it.
      </p>

      {/* ── Section 6 ────────────────────────────────────── */}
      <h2>6. Cookies and Tracking Technologies</h2>
      <PlainEnglish>
        We use cookies to keep you logged in and remember your preferences. We don't use
        advertising cookies or behavioral tracking.
      </PlainEnglish>
      <p>
        We use cookies — small text files stored by your browser — for the following
        limited purposes:
      </p>
      <ul>
        <li><strong>Session cookies:</strong> To keep you logged in to your account during your visit</li>
        <li><strong>Preference cookies:</strong> To remember your settings, such as your chosen display theme</li>
        <li><strong>Basic analytics:</strong> To understand general usage patterns on our website (page visits, navigation flow)</li>
      </ul>
      <p>
        We do not use third-party advertising cookies, behavioral tracking pixels, or tools
        that build profiles about you for marketing purposes.
      </p>
      <p>
        Most web browsers allow you to manage or disable cookies in their settings. Disabling
        session cookies may prevent you from logging in to your customer portal.
      </p>

      {/* ── Section 7 ────────────────────────────────────── */}
      <h2>7. Your Privacy Rights</h2>
      <PlainEnglish>
        You have rights over your own information. You can ask us what we have, correct it,
        or ask us to delete it.
      </PlainEnglish>
      <p>
        Depending on where you live, you may have certain rights regarding your personal
        information. We honor these requests regardless of your location:
      </p>
      <ul>
        <li><strong>Right to access:</strong> You can ask us what personal information we hold about you.</li>
        <li><strong>Right to correct:</strong> You can ask us to correct information that is inaccurate or incomplete.</li>
        <li><strong>Right to delete:</strong> You can ask us to delete your account and personal information.</li>
        <li><strong>Right to portability:</strong> You can ask us for a copy of your information in a common, readable format.</li>
        <li><strong>Right to object:</strong> You can ask us to stop using your information for certain purposes.</li>
      </ul>
      <p>
        To make any of these requests, contact us at{' '}
        <a href="mailto:privacy@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
          privacy@blackstorm.llc
        </a>. We will respond within 30 days. We will never charge you for privacy requests.
      </p>
      <p>
        If you believe we have not handled your privacy request appropriately, you have the
        right to contact the relevant data protection authority in your jurisdiction.
      </p>

      {/* ── Section 8 ────────────────────────────────────── */}
      <h2>8. Children's Privacy</h2>
      <PlainEnglish>
        Our services are for adults. We don't knowingly collect information from minors.
      </PlainEnglish>
      <p>
        Our services are intended for adults and are not directed to individuals under 18 years
        of age. We do not knowingly collect personal information from children. If you are a
        parent or guardian and believe your child has provided us with personal information
        without your consent, please contact us immediately at{' '}
        <a href="mailto:privacy@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
          privacy@blackstorm.llc
        </a>{' '}
        and we will promptly delete that information.
      </p>

      {/* ── Section 9 ────────────────────────────────────── */}
      <h2>9. Third-Party Links</h2>
      <p>
        Our website may contain links to other websites (for example, payment processors or
        support tools). We are not responsible for the privacy practices of those sites.
        We encourage you to review the privacy policy of any third-party site before
        providing them with personal information.
      </p>

      {/* ── Section 10 ───────────────────────────────────── */}
      <h2>10. Changes to This Policy</h2>
      <PlainEnglish>
        If we make significant changes to this policy, we'll let you know by email and in
        your portal. Small updates may be made without notice.
      </PlainEnglish>
      <p>
        We may update this Privacy Policy from time to time as our services or legal obligations
        change. When we make material changes, we will:
      </p>
      <ul>
        <li>Update the "Effective Date" and "Last Reviewed" dates at the top of this page</li>
        <li>Send a notification to the email address associated with your account</li>
        <li>Display a notice in your customer portal</li>
      </ul>
      <p>
        Your continued use of our services after a material change takes effect indicates
        your acceptance of the updated policy. If you do not agree with the changes, you
        may cancel your account before the effective date.
      </p>

      {/* ── Section 11 ───────────────────────────────────── */}
      <h2>11. Contact Us</h2>
      <p>
        We welcome your questions and take privacy concerns seriously. If you have any
        questions, concerns, or requests related to this Privacy Policy:
      </p>
      <ul>
        <li>
          <strong>Privacy inquiries:</strong>{' '}
          <a href="mailto:privacy@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
            privacy@blackstorm.llc
          </a>
        </li>
        <li>
          <strong>General contact:</strong>{' '}
          <Link to="/contact" style={{ color: 'var(--color-primary)' }}>Contact Form</Link>
        </li>
        <li>
          <strong>Support:</strong>{' '}
          <a href="mailto:support@blackstorm.llc" style={{ color: 'var(--color-primary)' }}>
            support@blackstorm.llc
          </a>
        </li>
      </ul>
      <p>We will acknowledge privacy requests within 5 business days and resolve them within 30 days.</p>
    </div>
  )
}
