# BlackStorm Customer Portal — Vision & Operational Workflow
## Version 1.0 · May 2026

This document defines the vision, design philosophy, user experience direction, and operational
workflows for the BlackStorm Customer Portal. It covers what exists today, what is planned, and
what is aspirational — with clear labels at each stage so expectations are properly set.

**Status of this document:** Vision and design specification. The portal is in active development.
Features are labeled with their current maturity: **Live**, **Planned**, or **Research**.

---

## Table of Contents

1. [Customer Portal Overview](#1-customer-portal-overview)
2. [Customer Dashboard Vision](#2-customer-dashboard-vision)
3. [Device Management Experience](#3-device-management-experience)
4. [Support Ticket Workflow](#4-support-ticket-workflow)
5. [Contact & Permissions Management](#5-contact--permissions-management)
6. [Site & Location Management](#6-site--location-management)
7. [Notification & Alert Concepts](#7-notification--alert-concepts)
8. [Privacy & Security Philosophy](#8-privacy--security-philosophy)
9. [Customer-Friendly Monitoring Concepts](#9-customer-friendly-monitoring-concepts)
10. [Reporting & Visibility Concepts](#10-reporting--visibility-concepts)
11. [Future Mobile App Direction](#11-future-mobile-app-direction)
12. [Educational Assistance Features](#12-educational-assistance-features)
13. [Operational Simplicity Philosophy](#13-operational-simplicity-philosophy)
14. [User Roles & Permission Concepts](#14-user-roles--permission-concepts)
15. [Customer Trust & Transparency Strategy](#15-customer-trust--transparency-strategy)
16. [Future Firewall & Configuration Request Workflows](#16-future-firewall--configuration-request-workflows)
17. [Dark Mode & Light Mode Operational Guidance](#17-dark-mode--light-mode-operational-guidance)
18. [Accessibility & Mobile/Tablet Operation](#18-accessibility--mobiletablet-operation)

---

## 1. Customer Portal Overview

### What the Portal Is

The BlackStorm Customer Portal is a secure, web-based workspace where customers can see the
status of their monitored network, review alert history, download reports, and manage their
account — without needing to contact us every time they have a question.

It is not a replacement for human support. It is the thing that makes human support less
necessary for routine questions, so that when customers do contact us, it is for something
that actually requires a person.

### Who Uses It

The portal is designed for people who are not network engineers. That is the design constraint
that shapes every decision. The intended users are:

- **A small business owner** who checks in once a day to confirm everything is running
- **An office manager** who was asked by the owner to "keep an eye on the internet"
- **A church administrator** managing two locations who needs to know if anything went down overnight
- **A homeowner** who wants to see that their router, NAS drive, and home server are all running
- **An IT contact at a nonprofit** who manages a dozen devices and needs a clean monthly report

Each of these people has something in common: they need to know if their technology is working.
They do not need to become experts. The portal must answer their question — "is everything OK?" —
within seconds of logging in.

### What the Portal Is Not

The portal is not:
- A network configuration tool (we configure monitoring, not your devices)
- A cybersecurity platform (we monitor availability, not threats)
- An enterprise operations center (it is not built for 24/7 NOC staffing)
- A complete self-service portal (some actions require BlackStorm involvement — we are honest about that)

### Current Status

| Feature | Status |
|---|---|
| Device status view (portal UI concept) | Planned |
| Alert history view | Planned |
| Basic account management | Planned |
| Report downloads | Planned |
| Multi-user access | Planned |
| Site/location management | Planned |
| Support ticket submission | Planned |
| Mobile app | Research |

The portal is under development. The public website currently includes a visual preview of what
the portal will look like. The actual portal application is not yet publicly accessible.
This document describes the intended experience so that development, content, and customer
expectations are aligned from the start.

---

## 2. Customer Dashboard Vision

### The First 10 Seconds

When a customer logs into the portal, the first view must answer a single question:
**"Is everything OK right now?"**

The answer should be immediate, visual, and unambiguous. A customer should not have to
scroll, read a list, or interpret technical data to know whether their network is healthy.

### Dashboard Primary View Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│ PORTAL HEADER                                                           │
│ [BS Logo]  BlackStorm Portal  /  Acme Corporation       [●] [Profile ▾] │
│ 60px — sticky                                                           │
├──────────────────┬──────────────────────────────────────────────────────┤
│ SIDEBAR          │  MAIN DASHBOARD                                      │
│ 240px            │                                                      │
│ ──────────────── │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │
│ ▸ Dashboard      │  │  ONLINE    │  │  OFFLINE   │  │  ALERTS    │    │
│   Devices        │  │    11      │  │    0       │  │    0       │    │
│   Alerts         │  │  devices   │  │  devices   │  │  last 24h  │    │
│   Reports        │  │ ● Healthy  │  │            │  │ ✓ Clear    │    │
│   Settings       │  └────────────┘  └────────────┘  └────────────┘    │
│ ──────────────── │                                                      │
│   Support        │  [30-day uptime area chart — full width]             │
│   Sign Out       │                                                      │
│                  │  RECENT ACTIVITY                                     │
│                  │  ✓  All systems running normally                     │
│                  │     No alerts in the last 7 days                     │
└──────────────────┴──────────────────────────────────────────────────────┘
```

### Status Summary Cards

The three cards at the top of the dashboard answer the three questions customers actually have:

**Card 1 — Online:** How many of my devices are running right now?
- Green number, green dot, "All healthy" or "X devices running normally"
- This is the card most customers will only ever need to read

**Card 2 — Offline:** Is anything down right now?
- When count is 0: gray number, no emphasis (good news needs no alarm)
- When count > 0: amber border, amber number, "View now →" link
- The offline card should NOT be red when it first appears — amber signals "needs attention"
  without creating the visual anxiety of a red alert for a customer who has intentionally
  powered down a device for maintenance

**Card 3 — Alerts:** What happened in the last 24 hours?
- Shows alert count regardless of current status
- When count is 0 and everything is online: green checkmark, "Clear"
- When count > 0: blue number, "View history →" link
- This card is informational, not alarming — even a recovered alert deserves visibility

### The 30-Day Uptime Chart

Below the summary cards, a full-width area chart shows 30-day uptime across all monitored devices.

**Why this chart matters to non-technical users:**
Most customers do not think in technical metrics. But "how reliable has my network been this month?"
is a question everyone understands. The chart provides context that a single number cannot:
if uptime is currently 99.1%, the chart shows whether that reflects a single bad incident last
week or a pattern of frequent short outages.

**Chart design constraints:**
- Y-axis is always 0–100% (never auto-scaled — see DESIGN_SYSTEM.md for rationale)
- X-axis shows simplified dates: "Dec 1", "Dec 15", "Jan 1"
- Color fill: primary blue at 15% opacity in the healthy range
- No hover tooltips with more than 2 decimal places (99.97% is enough; 99.9723% is noise)
- If all devices are online for the full 30 days, show the chart as a flat full line with
  a plain-English note: "100% uptime — no incidents in the last 30 days."

### Recent Activity Feed

Below the chart, a short feed (5–7 entries, "View all" link) shows the most recent events:

```
✓  Main Router recovered                  Dec 21 at 11:49 PM (7 min outage)
●  Main Router went offline               Dec 21 at 11:42 PM
✓  All systems running normally           No alerts for 12 days prior
```

Human-relative timestamps: "just now", "3 hours ago", "yesterday at 2:14 PM", "Dec 21 at 11:42 PM".
ISO timestamps (2025-12-21T23:42:00Z) are available in the detail view and in exported reports,
but the primary view uses language that matches how people actually think about time.

### What the Dashboard Deliberately Does NOT Show

The dashboard does not display:
- Raw ICMP response data
- SNMP OID values or trap information
- Monitoring system configuration details
- Internal BlackStorm infrastructure information
- Other customers' data (strict account isolation)
- Advertising or promotional content

The dashboard is a tool, not a product showcase. Once a customer is logged in, every pixel
should serve their operational need — not our marketing goals.

---

## 3. Device Management Experience

### The Core Problem to Solve

Customers sign up for monitoring. They have a list of devices they want watched. That list
changes over time. The device management experience must make adding, removing, and organizing
devices as low-friction as possible — without requiring the customer to understand network
engineering.

### Adding a Device (Customer Experience)

The form to add a device asks for the minimum information needed:

```
Device Name *         [Main Router                        ]
IP Address *          [192.168.1.1                        ]
Location / Site       [Main Office          ▾] (optional)
Device Type           [Router               ▾] (optional, helps us configure correctly)
Notes                 [                                   ] (optional, for your reference)

[Save Device]  or  [Add Another]
```

**What "Device Name" means:** The name the customer calls it. "Main Router", "Backup NAS",
"Church Lobby AP", "POS Terminal 1". Not a hostname or technical identifier — whatever label
makes sense to the person managing it.

**What happens after the customer submits:** The form triggers a notification to the BlackStorm
team. We configure monitoring for that device within one business day and confirm via email when
it is active. We do not expect customers to configure polling intervals, ICMP timeout values,
or alert thresholds — that is our job.

**Why BlackStorm handles the configuration and not the customer:** Our target customers are not
network engineers. Exposing SNMP configuration, polling interval settings, and threshold
management would overwhelm the majority of our user base. We absorb the technical complexity;
customers get the result.

*Note: On Business and Professional plans, customers can optionally adjust alert thresholds
through the portal once monitoring is established. This is presented as a simple slider or
dropdown, not a raw value input field.*

### Device List View

```
DEVICES — Acme Corporation (12 monitored)

[Filter: All ▾]  [Site: All Locations ▾]  [Search devices...]        [+ Add Device]

Name                   Type        Site           Status    Latency   Last Checked
─────────────────────────────────────────────────────────────────────────────────
Main Router            Router      Main Office    ● Online   2ms      Just now
Core Switch            Switch      Main Office    ● Online   1ms      Just now
File Server            Server      Main Office    ● Online   4ms      Just now
NAS Drive              Storage     Main Office    ● Online   6ms      Just now
Wireless AP — Lobby    Access Pt.  Main Office    ● Online   3ms      Just now
Wireless AP — Conf Rm  Access Pt.  Main Office    ● Online   3ms      Just now
Printer — Main         Printer     Main Office    ● Online   8ms      Just now
Router — Branch        Router      Branch Office  ● Online   11ms     Just now
Switch — Branch        Switch      Branch Office  ● Online   9ms      Just now
Wireless AP — Branch   Access Pt.  Branch Office  ● Online   12ms     Just now
POS Terminal 1         Other       Main Office    ● Online   5ms      1 min ago
NAS — Branch           Storage     Branch Office  ● Offline  —        14 min ago  [View Alert]
```

**Column design decisions:**
- **Status** column: colored dot (≥10px) + text label — never dot alone
- **Latency**: right-aligned, monospace font, "—" for offline devices
- **Last Checked**: human-relative time in default view; hover/tap shows exact timestamp
- **NAS — Branch row**: amber left-border on the row (not full red) + [View Alert] link

### Removing a Device

Removing a device is a simple action — but one that deserves a confirmation step because
it removes historical data access:

```
Remove "NAS Drive" from monitoring?

● Monitoring will stop for this device within 1 business day.
● Alert history for this device will be retained for 30 days
  (Home), 90 days (Business), or 1 year (Professional) after removal.
● This cannot be undone through the portal.

If you want to temporarily stop alerts without removing the device,
contact support instead.

[Cancel]  [Remove Device]
```

The confirmation language is honest: we tell them what happens to their data, and we
offer an alternative if their intent is actually just to pause alerts (perhaps the device
is being replaced or undergoing maintenance).

### Device Detail View

Clicking any device opens a detail panel or page:

```
Main Router — Online
192.168.1.1  ·  Router  ·  Main Office  ·  Added Dec 1, 2025

CURRENT STATUS
● Online  ·  2ms avg latency  ·  Monitored every 1 minute

30-DAY PERFORMANCE
Status trend: Healthy  [area chart placeholder]

ALERT HISTORY (last 30 days)
  No alerts for this device in the last 30 days.

DEVICE NOTES (your notes, editable)
[This is the Ubiquiti UDM Pro in the main network closet.]

[Edit Notes]  [Remove Device]  [Contact Support About This Device]
```

The "Contact Support About This Device" button pre-fills a support message with the device
name and IP address, reducing friction for customers who spot something unusual.

---

## 4. Support Ticket Workflow

### Philosophy

Support tickets are not complaint forms. They are the primary mechanism through which
customers get help from people who know their setup. The workflow must be fast to submit,
clear to track, and easy to understand — especially for customers who have never filed a
support ticket before.

### Ticket Submission Form

```
CONTACT SUPPORT

What type of help do you need?
○ A device alert seems wrong or unexpected
○ A device is offline and I'm not sure why
○ I want to add, remove, or change a monitored device
○ A question about my account or billing
○ Something else

Which device is this about? (optional)
[Select a device...           ▾]

Describe what you're seeing:
[                                                        ]
[                                                        ]
[                                                        ]

[Attach a screenshot (optional)]

[Send to Support]
```

**Why the radio buttons matter:** Categorizing the inquiry before submission means our team
can route and prioritize correctly without having to re-read the message. A customer who
selects "A device is offline and I'm not sure why" will get a different first response
than one who selects "A question about billing." This reduces time-to-resolution for everyone.

**Why device selection is optional but offered:** Pre-selecting the device populates our
team's view with the device's current status, recent alerts, and monitoring history. A
customer does not have to include that context in their message — we pull it automatically
when they select the device. This means less re-asking of information and faster resolution.

### Ticket Status Tracking

After submission, customers see a simple status timeline:

```
YOUR SUPPORT REQUEST

#BS-00847  ·  Submitted Dec 22 at 8:14 AM
Topic: Device alert seems wrong or unexpected
Device: NAS Drive (192.168.1.50)

STATUS
● Received        Dec 22 at 8:14 AM
● In Review       Dec 22 at 9:03 AM  — "We're looking at the alert history."
○ Response sent   (pending)
○ Resolved

[View full conversation]  [Add a note]
```

Status labels are human-readable ("In Review", "Response sent", "Resolved") — never
technical codes ("SLA_BREACH_WARNING", "TICKET_STATE_2"). Customers should never feel
like a ticket number in a queue.

### Response Time Display

The ticket view shows the SLA expectation clearly:

```
Expected response time for your plan: 24 hours (Business plan)
Current response: In progress — opened 3 hours ago
```

If a response is delayed beyond the SLA window, the UI changes (not alarmingly, but
visibly) and an automatic note is logged: "Your request is taking longer than expected.
We have not forgotten it."

We do not make SLA commitments we do not keep. If we cannot maintain the stated response
windows, we update the UI and the SLA documentation before customers notice the gap.

---

## 5. Contact & Permissions Management

### Why Multiple Contacts Matter

A small business may have:
- The owner, who wants to receive all alerts at any hour
- The office manager, who should receive alerts during business hours
- An external IT contractor, who needs read-only access to review the dashboard occasionally

A church may have:
- The pastor, who wants a summary report once a month and nothing else
- The administrator, who wants alerts when the internet goes down
- A volunteer IT contact, who needs full access to manage the device list

The portal must support this without requiring a computer science degree to configure.

### Contact Management View

```
CONTACTS & NOTIFICATIONS — Acme Corporation

NAME                    ROLE        ALERTS          REPORTS     STATUS
─────────────────────────────────────────────────────────────────────
Sarah Chen              Owner       All alerts      Monthly     Active
james@acme.com          Admin       Business hrs    Weekly      Active
Tom Wallace (IT Mgr)    Admin       All alerts      None        Active
lisa.contractor@it.co   Observer    None            None        Active

[+ Add Contact]
```

### Adding a Contact

```
Add a Contact

Name *                [Tom Wallace                        ]
Email *               [tom@acme.com                      ]
Role *                ○ Owner  ● Admin  ○ Observer
                         (See role descriptions below)

Alert notifications
  ● Receive all alerts (24/7)
  ○ Receive alerts during business hours only
  ○ Do not send alerts to this contact

  Delivery:  ☑ Email  ☐ SMS  [+1 (555) 000-0000     ]

Monthly report
  ☑ Send monthly uptime report to this contact

[Save Contact]
```

### Role Descriptions (shown inline on the form)

```
Owner    — Full access to all settings, billing, and contacts.
           Can add/remove other Owners and Admins.
           (Recommended for the account holder.)

Admin    — Can view dashboard, manage devices, manage contacts,
           and submit support requests. Cannot access billing.
           (Recommended for IT managers and trusted staff.)

Observer — Can view the dashboard and alert history.
           Cannot make any changes.
           (Recommended for external contractors and stakeholders.)
```

These descriptions are plain English, not technical role documentation. Customers
should be able to read the role description and immediately know which one applies.

### Alert Notification Scheduling

Business-hours alerts are a key feature for contacts who do not want 3am text messages
about a non-critical device going offline briefly. The configuration is:

```
Alert Delivery Schedule — James (Office Manager)

When should James receive alert notifications?

● During business hours
  Mon–Fri  [8:00 AM ▾]  to  [6:00 PM ▾]  [Eastern ▾]
  ☐ Include weekends

○ All hours (24/7)
○ Never — do not send alerts to James
```

**Important behavior:** If a device is still offline when business hours begin the next
morning, an alert is sent at the start of the business day even if the device went offline
overnight. This ensures no offline device goes unnoticed by the business-hours contact
simply because it went down at 2am.

---

## 6. Site & Location Management

### Who Needs This

Most Home plan customers have one location. They do not need site management.

Business and Professional plan customers often have multiple locations:
- A retailer with a main store and a warehouse
- A church with a sanctuary building and a fellowship hall
- A small business with a main office and a remote branch
- A nonprofit with a headquarters and two program sites

Site management allows these customers to organize their device list and alerts by location,
view uptime by site, and add site-specific contacts.

### Site List View

```
SITES — Acme Corporation

Site Name          Devices   Online   Alerts   Contact
─────────────────────────────────────────────────────
Main Office            8       8/8       0      Sarah Chen
Branch Office          4       3/4       1      Tom Wallace  [View]

[+ Add Site]
```

The Branch Office row shows an amber left-border and a "View" link when any device at
that site has an active alert. This makes multi-site oversight fast — the site list tells
the customer which location needs attention without requiring them to look at each device list.

### Adding a Site

```
Add a Site

Site Name *           [Branch Office                      ]
Address (optional)    [123 Oak Street, Springfield, IL    ]
Primary Contact       [Tom Wallace (Admin)    ▾] (optional)

Notes                 [                                   ]

[Save Site]
```

Adding a site is a lightweight action. Customers do not need to configure networking
parameters for the site. The site is a label for organizing devices and directing alerts.

### Site Dashboard View

Clicking a site opens a site-specific view:

```
BRANCH OFFICE — 3/4 devices online  ⚠ 1 active alert

[Same 3-card summary layout]      [Site-specific uptime chart]

DEVICES AT THIS SITE
NAS — Branch  ● Offline  —  14 min ago  [View Alert]
Router        ● Online   11ms  Just now
Switch        ● Online    9ms  Just now
Wireless AP   ● Online   12ms  Just now

Primary Contact: Tom Wallace  ·  tom@acme.com
```

This view gives customers exactly what they need when they receive an alert about a
specific location — they can see the full picture of that site without wading through
devices from other locations.

---

## 7. Notification & Alert Concepts

### What an Alert Actually Is

When a monitored device stops responding to our monitoring checks, we classify it as
an offline event and send an alert. When it starts responding again, we send a recovery
alert. Both are equally important — the recovery alert closes the loop, so customers
know not to panic if they see the offline alert an hour after it was sent.

### Alert Email Content

Subject: `⚠ Alert: NAS Drive is offline — Acme Corporation`

```
Your monitored device has gone offline.

Device:       NAS Drive
Location:     Main Office
IP Address:   192.168.1.50
Time offline: December 21, 2025 at 11:42 PM (Eastern)

What this means:
This device stopped responding to our monitoring checks at 11:42 PM.
We will continue checking it every minute. If it comes back online,
you'll receive a recovery notification automatically.

If you need help:
  ● Log in to your portal: portal.blackstorm.llc
  ● Email us: support@blackstorm.llc
  ● Reply to this message

You're receiving this because you're listed as an alert contact
for the Acme Corporation account. Manage your notifications:
portal.blackstorm.llc/settings/notifications
```

### Alert Content Design Principles

**"What this means" section:** Every alert email includes a plain-English explanation of
what the alert means and what to expect next. Non-technical customers should never read
an alert and be more confused than before. If a device has been offline before and recovered
on its own (which is common for brief internet interruptions), the alert email can note
this: "This device has recovered on its own from brief offline events in the past."

**Recovery notification:**
```
Subject: ✓ Recovered: NAS Drive is back online — Acme Corporation

Your device has come back online.

Device:        NAS Drive
Location:      Main Office
Was offline:   December 21 at 11:42 PM
Came online:   December 21 at 11:49 PM
Duration:      7 minutes

No action is needed. Your device is back to normal.
```

The recovery notification closes the loop. Without it, customers are left wondering
"did it come back?" for hours. The recovery email is not optional — it is part of
the alert experience.

### Alert Fatigue Prevention

If a device goes offline and online repeatedly in a short window (a flapping condition),
we do not send a separate alert email for every state change. Instead:
- First offline event: send an alert immediately
- Rapid recovery and re-offline within 5 minutes: suppress the second alert; note the
  flapping behavior in the portal activity log
- Once stable (either online for 10+ minutes or offline for 10+ minutes): send a
  consolidated update

This prevents a customer's inbox from receiving 20 alerts in 30 minutes because their
router briefly lost power during a storm. Alert fatigue causes customers to start ignoring
alerts — the exact opposite of what monitoring is for.

### SMS Alerts (Business and Professional Plans)

SMS alerts are shorter by necessity:

```
BlackStorm: NAS Drive OFFLINE @ 11:42 PM
Acme Corp · Main Office
Details: portal.blackstorm.llc
Reply STOP to opt out
```

SMS alerts must include:
- Device name and status
- Time of the event
- Account identifier (company name)
- Link to the portal for details
- Opt-out instruction (legal requirement)

SMS does not replace email — both are sent. The SMS is the urgent signal. The email
provides the full context and the recovery link.

---

## 8. Privacy & Security Philosophy

### Data Isolation

Every customer's data is completely isolated from other customers. A customer cannot
see, access, or infer anything about another customer's network, devices, or alerts.
This is a hard architectural requirement, not a setting.

**How this is communicated to customers:**
The portal login shows only the account the user is authorized for. There is no "switch
account" dropdown that reveals other account names. The URL structure includes the account
identifier in a non-guessable format. Support staff access customer accounts only with
customer consent for troubleshooting purposes, and this access is logged.

### What BlackStorm Can See

This must be stated clearly in the portal, not buried in a Privacy Policy:

```
What BlackStorm can see in your account:

● Your device names and IP addresses (which you provided)
● Whether your devices respond to our monitoring checks
● The history of online/offline events for your devices
● Your contact information and alert preferences
● Your support ticket history

What we cannot see:

✗ The content of your network traffic
✗ Files stored on your devices
✗ What websites you visit
✗ Your device configurations or passwords
✗ Anything beyond device availability and response time
```

This information appears in the portal's Privacy section, linked from the footer, and
summarized in the onboarding welcome email. It is not hidden.

### Authentication Security

The portal must use:
- Email + password authentication (minimum)
- Passwords hashed with bcrypt or Argon2 (never stored in plaintext)
- Session tokens with defined expiration (24 hours by default, extendable)
- "Remember this device" option for customers using trusted devices
- Secure, time-limited password reset links via email

Future (Planned):
- Two-factor authentication (TOTP via authenticator app or SMS)
- Single sign-on (SSO) for Business and Professional plans

### Data Retention in the Portal

Customers can see exactly how long their data is retained based on their plan:

```
Your data retention period (Business Plan):
  Alert history:          90 days of full history
  Device status logs:     90 days
  Performance reports:    Generated monthly; available to download for 1 year
  Account data:           Kept while your account is active
  After cancellation:     Retained for 30 days, then permanently deleted

To request deletion of your data before the retention period expires:
support@blackstorm.llc or the Contact form
```

---

## 9. Customer-Friendly Monitoring Concepts

### The Translation Problem

Network monitoring has a vocabulary that confuses most people. ICMP, SNMP, polling
interval, latency, uptime attainment, SLA, TTL — these are terms that make sense to
network engineers and mean nothing to a church administrator or small business owner.

The portal's job is to translate these concepts into language that matches how
non-technical customers actually think about their technology.

### Translation Reference

| Technical concept | What the portal says |
|---|---|
| ICMP ping check | "We check whether your device is reachable" |
| Polling interval | "How often we check (every 1 minute on Business plans)" |
| Response time / latency | "How quickly your device responds (lower is better)" |
| Uptime percentage | "The percentage of time your device was online this month" |
| Alert threshold breach | "Something unusual was detected — we'll explain what" |
| Flapping device | "This device went on and offline repeatedly in a short period" |
| SLA | "Our commitment to how long we take to alert you" |
| Alert suppression window | "We grouped multiple quick events into one notification" |
| Recovery | "Your device came back online" |
| TTL exceeded | "We couldn't reach this device for the polling check" |

### Latency Explained in Plain Language

On the device detail view, latency is shown with a simple explanation:

```
Response Time: 2ms

What this means:
When we checked this device, it responded in 2 milliseconds. For most devices
on a local network, 1–15ms is normal. If this number climbs above 200ms or the
device starts missing checks, we'll alert you.

Current status: ✓ Normal
```

The explanation appears as a small info block that can be collapsed once the customer
has read it. It does not repeat on every page — only on first login and in device details.

### Understanding Uptime Percentage

```
30-Day Uptime: 99.1%

What does 99.1% mean?
Your device was online for 29.7 of the last 30 days.
The 0.9% downtime represents about 6.5 hours total this month.

To put that in context:
  99.9% = about 44 minutes of downtime per month
  99.5% = about 3.6 hours per month
  99.0% = about 7.3 hours per month
  98.0% = about 14.6 hours per month
```

This context table appears on the report view, not the dashboard. On the dashboard,
only the percentage is shown. The detail is available for customers who want to
understand what the number actually means.

### What "Offline" Actually Means

When a device shows as "Offline" in the portal, we explain what that means and
what it does not mean:

```
NAS Drive — ● Offline (14 minutes)

What this means:
Our monitoring system has not received a response from this device since
11:42 PM. This could mean:

● The device has powered off or restarted
● Something on the network is blocking the connection temporarily
● The device has experienced a hardware or software issue
● There is a broader internet or network outage affecting the check

What this does NOT necessarily mean:
✗ Your data is lost or corrupted
✗ There is a security incident
✗ Something is permanently wrong

What to do:
If you can check the device physically, doing so is the fastest way to
understand what happened. If you need help, contact us.
```

This explanation prevents panic. A customer seeing "Offline" for their NAS drive
might immediately fear data loss. Explaining the common causes — including benign ones —
reduces unnecessary alarm calls and builds confidence that the alert is informational,
not catastrophic.

---

## 10. Reporting & Visibility Concepts

### Report Philosophy

Reports exist to answer questions that the dashboard does not. The dashboard answers:
"What is happening right now?" Reports answer: "What happened over time, and what does it mean?"

Reports are not meant to be technical documents. They are meant to be readable by:
- A business owner who wants to know "how has our network reliability been?"
- A nonprofit board that asks "is our technology investment working?"
- A church administrator who needs to report to leadership that "everything has been running well"
- A small business that wants documentation before a lease renewal involving infrastructure

### Monthly Performance Report Content

```
NETWORK PERFORMANCE REPORT
Acme Corporation · December 2025
Generated January 1, 2026

EXECUTIVE SUMMARY
Your monitored devices were generally responsive this month. One device
(NAS Drive) showed a short offline event on December 21.

OVERALL STATUS: Healthy with one reviewed event
This means available monitoring data showed mostly normal device responses during
the selected reporting period.

INCIDENT SUMMARY
  1 incident recorded this month.
  Affected device: NAS Drive (192.168.1.50)
  Date/time: December 21, 2025 at 11:42 PM Eastern
  Duration: 7 minutes
  Cause: Unknown (device recovered on its own)
  Resolution: Automatic — no action was required.

DEVICE STATUS TABLE
Device               Status          Downtime     Incidents
─────────────────────────────────────────────────────────
Main Router          Healthy         0 min        0
Core Switch          Healthy         0 min        0
File Server          Healthy         0 min        0
NAS Drive            Reviewed        7 min        1
Wireless AP — Lobby  Healthy         0 min        0
[... all devices ...]

NEXT MONTH
Your plan renews on January 1. No action needed.

Questions about this report? support@blackstorm.llc
```

### Report Delivery Options

- **Email delivery:** Auto-sent on the 1st of each month to all contacts configured to receive reports
- **Portal download:** Available as PDF and as a plain-text CSV for the device uptime table
- **On-demand:** Customers can generate a report for any 30-day window from the Reports section

*Note: Weekly reports are available on Professional plans.*

### What Reports Deliberately Exclude

Reports do not include:
- Raw polling data or ICMP trace logs
- Internal monitoring system identifiers or debug information
- Technical configuration details (SNMP settings, polling intervals, thresholds)
- Comparisons to other customers' performance data

Reports are customer-facing documents. They must be readable without a network engineering degree.

---

## 11. Future Mobile App Direction

**Status: Research**

A mobile app is a future direction, not a current commitment. The public website and portal
are already responsive and functional on mobile browsers. A dedicated app adds value primarily
for push notifications and quicker-access workflows.

### Why a Mobile App Eventually Makes Sense

- **Push notifications:** A native push alert from a BlackStorm app is more reliable and
  more noticeable than an email notification on a mobile device. For customers who check
  their network status from their phone, app-level push is significantly more effective.
- **Quick status check:** The primary mobile use case is "open the app, see that everything
  is green, close the app." This 5-second interaction is better served by a native app
  than a browser loading a full web portal.
- **Field operations:** A technician visiting a branch office to investigate an offline device
  needs quick access to the device's alert history, IP address, and last-checked time. A native
  app optimized for one-handed use in a server room is more practical than a mobile browser.

### Mobile App Vision (Research Phase)

**Primary screen (Dashboard):**
```
┌──────────────────────────┐
│ BlackStorm               │
│ Acme Corporation         │
│                          │
│  ●  All systems normal   │
│     12 devices online    │
│                          │
│  Last checked: just now  │
│                          │
│ ┌────────┐  ┌──────────┐ │
│ │Devices │  │  Alerts  │ │
│ └────────┘  └──────────┘ │
└──────────────────────────┘
```

**When an alert exists:**
```
┌──────────────────────────┐
│ BlackStorm               │
│ Acme Corporation         │
│                          │
│  ⚠  NAS Drive offline   │
│     Since 11:42 PM       │
│                          │
│  [View Details]          │
│                          │
│ ┌────────┐  ┌──────────┐ │
│ │Devices │  │  Alerts  │ │
└──────────────────────────┘
```

### Mobile App Design Constraints

- **Minimum touch target:** 48px for all interactive elements (even larger than web standard)
- **Single-hand operation:** Primary actions reachable with one thumb from bottom of screen
- **Low-data mode:** Cache the last known device status for offline viewing with a clear
  "last updated X minutes ago" label
- **Dark mode by default:** The app should follow the system setting but default to dark
  mode since most network checks happen in low-light environments
- **No onboarding tutorial on first launch:** The app should just show the dashboard.
  Tutorials can be offered once, optionally, after first successful login.

---

## 12. Educational Assistance Features

### The Goal

The portal should make customers more informed about their technology over time —
not more dependent on BlackStorm. A customer who understands what "2ms latency" means
is a better, more confident customer than one who relies on us to interpret every number.

### Inline Contextual Help

Every technical term in the portal has a simple explanation available one tap/click away:

```
Monitoring Status: Healthy [?]
                        ↓
  ┌─────────────────────────────────────────┐
  │ Monitoring status summarizes whether    │
  │ your device responded normally during   │
  │ recent monitoring checks.               │
  │                                         │
  │ Reports can include precise uptime      │
  │ statistics once reliable data sources   │
  │ are connected and validated.            │
  │                                         │
  │ [Learn more in the Knowledge Base]      │
  └─────────────────────────────────────────┘
```

The [?] icon appears next to any term that might require explanation. It is not shown
everywhere — only on terms that genuinely benefit from clarification. Overusing [?] icons
implies the interface is confusing.

### First-Login Onboarding Guidance

When a customer logs in for the first time, a brief inline guide appears (not a modal or
popup that blocks the view):

```
Welcome to your BlackStorm portal.

Here's what you're looking at:

→ The three cards at the top tell you how many devices
  are online, offline, and how many alerts happened today.

→ The chart shows 30 days of uptime for all your devices.

→ The device list below shows each monitored device with
  its current status and response time.

→ If you have questions, the Support section is in the sidebar.

[Got it — don't show this again]
```

This guide is one-time and dismissable. It answers "what am I looking at?" for a
first-time user without being condescending to repeat customers.

### Knowledge Base Integration

The portal knowledge base is not a separate system — it is searchable from within the portal:

```
[Search knowledge base or ask a question...]
          ↓
"Why did I receive an alert for a device that seems fine?"
→ Understanding false positive alerts
→ Why recovered alerts still send a notification
→ How to adjust alert sensitivity (Business/Professional)
```

Searching from within the portal pre-filters results to topics relevant to their plan.
A Home plan customer searching for "alert thresholds" should see an article explaining
that threshold customization is available on higher-tier plans — not an article that
assumes they have that feature.

### Device-Specific Educational Context

When a customer adds a specific type of device (router, NAS drive, wireless access point),
the portal provides a brief note about what we monitor for that device type:

```
Wireless AP added: Lobby AP (192.168.1.7)

What we'll monitor:
● Whether this access point is reachable from our monitoring system
● Response time (latency) over time
● Any periods where the device goes offline

What we will not monitor:
✗ The WiFi signal strength or coverage in your space
✗ How many devices are connected to this access point
✗ The speed of your internet connection through this AP

If you need help with WiFi performance or coverage, contact us
separately about our WiFi optimization service.
```

This educates the customer about the scope of monitoring for their specific device —
preventing disappointment when they realize we cannot tell them their WiFi signal strength.

---

## 13. Operational Simplicity Philosophy

### The Core Principle

Every screen in the portal must pass the "grandmother test": could a non-technical person
of any age, with no prior experience with network monitoring, look at this screen and
understand what is happening without calling for help?

This is not about making the UI simplistic or childish. It is about removing the assumption
of technical knowledge from the design.

### Complexity Budget

Each view in the portal has a complexity budget:

**Dashboard:** 1 thing to understand immediately (is everything OK?). 3 pieces of data visible
without scrolling. 1 chart. 1 activity feed.

**Device list:** 1 action per row (click to see detail). 5 columns maximum in the default view.
Filter and search available but not mandatory.

**Alert history:** 1 entry per event (offline / recovered). Time shown in human language.
Duration shown in minutes and hours, not seconds. No raw technical data in the list view.

**Reports:** 1 executive summary paragraph before any tables or numbers.

**Settings:** Grouped by function (Notifications, Contacts, Sites, Account). No more than
5 settings visible in any single group without a "more options" expand.

### The "One Screen, One Question" Rule

Every screen in the portal answers exactly one primary question:

- Dashboard → "Is everything OK right now?"
- Device list → "What are all my devices and what is their current status?"
- Alert history → "What alerts have I received and when did they resolve?"
- Reports → "How has my network performed over time?"
- Settings → "How can I change how the portal works for me?"
- Support → "How do I get help?"

When a screen tries to answer multiple questions, it answers none of them well. Additional
context is available through detail panels and secondary pages — not crammed into the
primary view.

### Avoiding Dashboard Creep

Dashboard creep is the tendency for operational dashboards to accumulate more widgets,
charts, and data points over time until the dashboard no longer serves its original purpose.

BlackStorm will face pressure to add "useful" information to the dashboard. The following
guidelines govern what gets added:

**Add to the dashboard only if:**
- It is actionable (the customer can do something with the information)
- It answers a question that customers ask us frequently
- It is understandable without explanation by a non-technical user
- Removing it would cause measurable customer confusion or calls

**Do not add to the dashboard:**
- Metrics that are already visible by clicking one level deeper
- Technical details that only matter in edge cases
- Marketing content or upsell prompts
- Information that requires a legend or tooltip to understand

### Empty States Are Not Failures

When a customer has no alerts in the last 30 days, the alert history page shows:

```
[Calm icon — not a warning or question mark, just a neutral symbol]

No alerts in the last 30 days.

Your monitored devices have been running without interruption.
This is the ideal state — it means everything is working normally.

[View device list]  [View last report]
```

The empty state is described as good news. The language is specific ("30 days", not just
"recently") and reassuring ("this is the ideal state"). The call-to-action offers
something useful to do rather than leaving the customer on a blank page.

---

## 14. User Roles & Permission Concepts

### Role Hierarchy

```
ACCOUNT (Organization Level)
 │
 ├── Owner (1 required, unlimited additional)
 │    Full access to everything.
 │    Can manage billing, contacts, and other owners.
 │    Receives all alert types by default.
 │
 ├── Admin
 │    Can view and manage: dashboard, devices, contacts, sites, support.
 │    Cannot access: billing, plan changes.
 │    Can be assigned alert notifications.
 │
 └── Observer
      Can view: dashboard, device list, alert history, reports.
      Cannot change: anything.
      Cannot access: contacts, settings, billing.
      Can be assigned report delivery.
```

### Why Only Three Roles

More than three roles creates configuration complexity that our target customers cannot
manage without IT support. A homeowner, small business owner, or church administrator
does not need six different permission levels. They need:
- The person in charge (Owner)
- The person who helps manage it (Admin)
- The person who needs to see but not touch it (Observer)

If a customer has a more complex permission requirement, that conversation happens
with the BlackStorm team — we can configure the account accordingly. We do not expose
a complex permission matrix in the portal that most customers will never use.

### Permission Scope by Role

| Action | Owner | Admin | Observer |
|---|---|---|---|
| View dashboard | ✓ | ✓ | ✓ |
| View device list | ✓ | ✓ | ✓ |
| View alert history | ✓ | ✓ | ✓ |
| Download reports | ✓ | ✓ | ✓ |
| Add/remove devices | ✓ | ✓ | ✗ |
| Edit device notes | ✓ | ✓ | ✗ |
| Manage contacts | ✓ | ✓ | ✗ |
| Manage sites | ✓ | ✓ | ✗ |
| Submit support tickets | ✓ | ✓ | ✗ |
| Change alert settings | ✓ | ✓ | ✗ |
| View/change billing | ✓ | ✗ | ✗ |
| Change plan | ✓ | ✗ | ✗ |
| Add/remove Owners | ✓ | ✗ | ✗ |
| Add/remove Admins | ✓ | ✓ | ✗ |

### Permission Boundary Communication

When an Observer tries to access a restricted feature, they see:

```
This action requires Admin or Owner access.

Your account role is Observer, which allows you to view the dashboard,
device list, alert history, and reports.

To request a role change, contact [Sarah Chen (Owner)] at the email
on your account.
```

The error message tells the user what they can do (not just what they cannot), who to
contact for a role change (the account owner), and how to find them — without making
the user feel punished for trying.

---

## 15. Customer Trust & Transparency Strategy

### The Portal as a Trust Mechanism

The portal is not just a monitoring interface. It is the most direct expression of
BlackStorm's relationship with its customers. Every design decision in the portal either
builds or erodes trust. These are the specific trust-building elements and why they matter.

### Showing the Honest Status of Things

The portal shows real data — including when things are not perfect:

**Monitoring system status:** If the BlackStorm monitoring platform itself experiences
an issue (which can happen with any technology service), the portal displays a notice:

```
⚠ Monitoring service notice: We are experiencing intermittent
delays in alert delivery. This began at 11:32 PM and is being
investigated. Devices may appear online when they are offline,
or vice versa, during this period. We will update this notice
as the situation is resolved.
```

We do not hide service issues. We describe them honestly, in plain language, as soon
as we know about them. Hiding a monitoring service problem from a customer who is
relying on alerts to catch outages is a fundamental betrayal of trust.

**Alert acknowledgment:** When a customer receives an alert and logs in to check the portal,
the alert should already appear in the activity feed with a timestamp that confirms "we detected
this at 11:42 PM" — consistent with the email they received. If there is a discrepancy,
we explain why (alert delivery delays, email filtering, etc.).

### Plan Limitation Transparency

Customers should always be able to see what their plan includes and how close they are
to any limits:

```
YOUR PLAN — Business

Devices monitored:      12 of 25   ████████░░░░░░  (48% of limit)
Data retention:         90 days
Polling interval:       Every 1 minute
Alert delivery:         Email + SMS
Support response:       24 hours (priority)

[Upgrade Plan]  [Compare Plans]
```

If a customer is approaching their device limit, we show a gentle notice:

```
You're using 23 of 25 devices on your Business plan.
You have room for 2 more. If you need to monitor additional devices,
consider upgrading to Professional (up to 100 devices).

[Learn about Professional]  [Contact us to discuss]
```

The notice is informational, not alarming. We do not cut off service when a customer
hits their limit — we contact them first and give reasonable time to adjust.

### What We Never Do in the Portal

The following behaviors would destroy customer trust and are explicitly prohibited:

- **Auto-upsell during incidents:** Never show upgrade prompts on a screen where
  a customer is responding to an active alert. That is predatory timing.
- **Dark patterns in plan management:** Cancellation must be available through
  the portal without requiring a phone call, a "retention offer" screen, or a survey.
- **Hiding the downgrade option:** Plan downgrades must be as accessible as upgrades.
- **Collecting optional data without disclosure:** If we ever add analytics, usage tracking,
  or optional data collection to the portal, it must be disclosed and opt-in.
- **Showing competitor comparisons:** The portal is not a marketing surface. Customers
  who are already paying are not a captive audience for sales pitches.

### The "No Surprises" Commitment

Before any action that has a lasting effect — plan changes, device removal, contact
deletion, account cancellation — the portal shows:

1. What will happen
2. When it will take effect
3. Whether it can be undone
4. What data will be affected

This confirmation pattern appears consistently, with consistent language, on every
consequential action. Customers learn to trust it.

---

## 16. Future Firewall & Configuration Request Workflows

**Status: Planning**

This section describes a future service concept — not something currently available.
The intent is to give customers a structured way to request network configuration
assistance through the portal, starting with firewall rule requests.

### The Problem This Solves

Customers who use our monitoring service sometimes identify a need for network
configuration changes. A small business might want to restrict which devices can
access the internet. A church might want to set up a guest network. A home user might
want to block certain types of traffic. Currently, these requests are handled ad hoc
through email and support tickets.

A structured request workflow would:
- Give customers a consistent way to describe what they need
- Give BlackStorm engineers enough context to respond accurately
- Create a record of what was requested and what was implemented
- Set expectations about response time and scope

### Concept: Configuration Request Form

```
REQUEST NETWORK CONFIGURATION ASSISTANCE

What type of change are you looking for?

○ Firewall rule — block or allow specific traffic
○ Guest network — set up an isolated network for visitors
○ VLAN setup — separate devices into groups
○ Port forwarding — allow access to a device from outside the network
○ DNS setting — change how your network resolves addresses
○ Other — describe below

Describe what you want to accomplish:
[                                                          ]
[                                                          ]
[                                                          ]
(Describe the goal, not the technical approach. For example:
"I want to prevent all office computers from accessing social
media during work hours." We will figure out the right
configuration to achieve that.)

Which location is this for?
[Main Office          ▾]

Priority:
○ Not urgent — whenever convenient
○ Soon — within the next week
○ Urgent — affecting business operations

[Submit Request]
```

### Key Design Principle: Goal, Not Mechanism

The form asks customers to describe what they want to accomplish, not the technical
implementation. This is critical for a customer base that does not know the difference
between a firewall rule and a NAT entry. "I want guests to use the internet but not
see my work computers" is a perfectly valid request — even though the customer has not
specified VLANs, ACLs, or routing rules. That is our job.

### Request Tracking in the Portal

Configuration requests appear in the support ticket view with their own type indicator:

```
CONFIGURATION REQUESTS

#CR-00023  Firewall Rule — Block social media on office network
           Submitted Dec 15 · Status: In Progress · Est. completion: Dec 18

#CR-00019  Guest Network Setup — Main Office
           Submitted Nov 28 · Status: Completed Nov 30 · ✓ Active
```

Completed configuration requests include a brief plain-language summary:

```
#CR-00019 — Guest Network Setup — COMPLETED

What was done:
We set up a separate guest wireless network at your main office location.
Devices on the guest network can access the internet but cannot communicate
with devices on your main network (computers, printers, NAS drive).

Guest Network Name (SSID): AcmeCorp-Guest
Guest Network Password: Provided via secure message.

If you have questions about this configuration, contact us and reference #CR-00019.
```

---

## 17. Dark Mode & Light Mode Operational Guidance

### Dark Mode as the Operational Default

The portal defaults to dark mode. This is not arbitrary — it reflects where and how
the portal is used:

**Early morning checks:** Many customers check their network status first thing in the
morning, before full lighting is on. Dark mode is less jarring.

**Server room and network closet access:** Technical staff accessing the portal from
a laptop or tablet in a server room environment are in a low-light setting where
dark mode reduces screen glare and eye strain.

**Incident response at night:** When a customer receives an offline alert at 2am and
opens the portal, dark mode does not wake them up the way a bright white interface would.

**Sustained use:** Customers on Business and Professional plans who check the portal
multiple times daily benefit from reduced eye fatigue in dark mode.

### Light Mode Use Cases

Light mode is appropriate and available for:
- Office environments with bright overhead lighting
- Presentations or screen shares where white-background readability is preferred
- Users with visual conditions that benefit from high contrast on light backgrounds
- Print-friendly report views (always render in light mode regardless of setting)

### Theme Settings in the Portal

```
DISPLAY PREFERENCES

Theme
  ● Dark (recommended for most environments)
  ○ Light
  ○ Use system setting (follows your device's dark/light mode)

The theme can also be changed instantly using the toggle in the portal header.
```

### Dark Mode Color Principles for the Portal

See DESIGN_SYSTEM.md for full palette details. Portal-specific guidance:

- **Online status indicator (#22C55E):** Maintains contrast against dark navy backgrounds.
  Do not use a lighter or more pastel green — it fails contrast requirements in dim rooms.
- **Offline/alert indicator:** Amber (#EAB308) for "needs attention", red (#EF4444) for
  "actively down". Never use red for resolved alerts — amber or muted color for history.
- **Text on dark:** `--text-primary` (#E8F0FF) for device names and key data.
  `--text-secondary` (#94A3B8) for timestamps and secondary labels. Never go below
  text-secondary for data the customer needs to act on.
- **Charts in dark mode:** Grid lines use `rgba(255,255,255,0.04)` — barely visible,
  just enough to provide chart axis context without dominating the visualization.

---

## 18. Accessibility & Mobile/Tablet Operation

### Accessibility in the Portal

The portal must meet WCAG 2.1 Level AA. The following are the highest-impact requirements
for an operational portal (beyond the general site standards in DESIGN_SYSTEM.md):

**Status indicators:** Every status indicator must have both color and text. A screen
reader user must be able to understand that a device is "Online" from the text alone,
not from a green dot they cannot see.

**Table navigation:** Device list tables must be navigable by keyboard. Tab moves between
rows; Enter opens the device detail. The table must have a `<caption>` or `aria-label`
for screen readers.

**Alert notifications in the portal:** When a new alert appears in the portal while the
customer is logged in (real-time update), an accessible live region must announce it:
`aria-live="polite"` for status updates, `aria-live="assertive"` for new offline alerts.

**Focus management:** When a customer opens a device detail panel, focus moves to the panel.
When they close it, focus returns to the device row they opened it from. This is essential
for keyboard-only users and screen reader users who expect focus to follow the visible content.

**Color in reports:** PDF reports must not use color as the only way to distinguish data.
The device uptime table must use text labels ("Online", "Offline") not just colored dots.

### Mobile Operation

**Primary mobile use case:** Quick status check. Open app/portal, see green dashboard,
close. This must take under 5 seconds from tap to confirmation.

**Secondary mobile use case:** Alert response. Customer receives a push notification or
SMS, opens the portal, and needs to quickly understand which device went offline, when,
and what the current status is.

**Device list on mobile:** Single column. Each row shows device name, status badge, and
latency. Tap to expand detail. No horizontal scrolling.

**Report access on mobile:** Reports are available as PDF downloads or as a simplified
"this month in numbers" view optimized for small screens. The full data table is available
by scrolling, not truncated.

### Tablet Field Operations

For Professional plan customers accessing the portal from a tablet in the field:

**Minimum text size in portal tables:** 14px. Server rooms often have poor lighting and
the customer may be wearing a hat or be physically distanced from the screen.

**Row height:** 52px minimum in device list tables. Large enough to tap a row without
accidentally selecting an adjacent row.

**Confirmation dialogs:** Extra-large tap targets on destructive actions (Remove Device,
Cancel Service Request). Minimum 48×48px for confirm button.

**Portrait vs. landscape:** The portal must function fully in portrait orientation on a
10-inch tablet. The sidebar collapses to a 64px icon rail in portrait; main content fills
the remaining width. In landscape, the full sidebar is visible.

**Session timeout:** Operational users in the field should not be logged out mid-task.
Session duration should be extended to 8 hours for logged-in users, with a 30-minute
warning before expiration: "Your session will expire in 30 minutes. [Extend session]"

---

*This document describes the intended direction for the BlackStorm Customer Portal.
All features labeled Planned or Research are subject to change based on customer needs,
technical constraints, and business priorities. Feature availability will be communicated
through the portal and via email to active customers before launch.*

*For questions about the portal roadmap or to request a feature:*
*support@blackstorm.llc or portal.blackstorm.llc/contact*
