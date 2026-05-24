# BlackStorm — Monitoring & Operational Visibility
## Version 1.0 · May 2026

This document defines the philosophy, design direction, and detailed concepts for how
BlackStorm monitors customer environments, communicates what it sees, and presents that
information in a way that is actionable and understandable — regardless of the customer's
technical background.

The central question this document answers is: **What does it mean to "see" a network
clearly, and how do we help a customer understand what they're seeing?**

**Status of this document:** Vision and design specification. Features are labeled with
their current maturity: **Current** (active or in active design), **Planned** (committed
direction, not yet built), or **Research** (future concept, being considered).

---

## Table of Contents

1. [Monitoring Philosophy](#1-monitoring-philosophy)
2. [Operational Visibility Concepts](#2-operational-visibility-concepts)
3. [Customer-Friendly Alerting](#3-customer-friendly-alerting)
4. [Device Health Visibility](#4-device-health-visibility)
5. [Network Health Visibility](#5-network-health-visibility)
6. [Service Status Concepts](#6-service-status-concepts)
7. [Notification Prioritization](#7-notification-prioritization)
8. [Incident Awareness Concepts](#8-incident-awareness-concepts)
9. [Historical Visibility & Reporting](#9-historical-visibility--reporting)
10. [Maintenance & Scheduled Workflows](#10-maintenance--scheduled-workflows)
11. [Privacy-Conscious Monitoring](#11-privacy-conscious-monitoring)
12. [Operational Simplicity Strategy](#12-operational-simplicity-strategy)
13. [Mobile Monitoring Experience](#13-mobile-monitoring-experience)
14. [Accessibility & Readability](#14-accessibility--readability)
15. [Future Monitoring Expansion Concepts](#15-future-monitoring-expansion-concepts)

---

## 1. Monitoring Philosophy

### What BlackStorm Monitors — and Why That Definition Matters

BlackStorm performs **availability monitoring**: we check whether a device is reachable
on the network and responding normally. That is the complete scope of what monitoring means
in this context.

This definition is deliberate and important. Customers who understand exactly what is being
monitored can:

- Set realistic expectations about what an alert means
- Understand when something is BlackStorm's responsibility vs. another party's
- Trust that the information they receive accurately reflects what was checked

Monitoring is not:
- Traffic inspection or analysis of what travels over the network
- Cybersecurity threat detection or intrusion monitoring
- Application performance monitoring (response times, error rates for software)
- File or content monitoring of any kind
- Internet usage tracking

Every communication — alerts, reports, portal UI, knowledge base articles — must be
consistent with this definition. If a customer believes we are doing something we are not,
the trust relationship is damaged even if the service itself is working correctly.

---

### The Fundamental Question

Every monitoring check, every alert, every dashboard element, and every report at
BlackStorm exists to answer one question:

> **"Are my devices reachable right now, and have they been reliable over time?"**

That question has two parts — current state and historical pattern — and both matter.
Current state without history leaves customers unable to judge whether today is normal
or unusual. History without current state is retrospective without operational value.

The entire monitoring and visibility system is built to answer both parts of that question,
clearly, in language any customer can understand.

---

### The Trust Obligation in Monitoring

When a customer signs up for monitoring, they are placing trust in BlackStorm to:

1. **Tell them accurately what is happening** — not minimize outages, not inflate them
2. **Tell them quickly when something goes wrong** — not after they discover it themselves
3. **Tell them clearly what happened after it resolves** — including how long it lasted
4. **Tell them honestly when we don't know** — not manufacture confident explanations for
   events we cannot fully explain

This trust obligation extends to the portal interface. A dashboard that makes the network
look healthier than it is — by suppressing alerts, smoothing over data, or using misleading
visual framing — is a violation of the monitoring relationship, even if the intent is to
"reduce customer anxiety."

Customers are better served by accurate information delivered calmly than by comforting
misinformation.

---

### Monitoring Is Not a Guarantee

BlackStorm's monitoring observes and reports. It does not prevent problems, repair devices,
restore internet service, or guarantee availability. This distinction is made explicit in the
customer relationship from the beginning — and it is reinforced in every place a customer
might otherwise develop an incorrect expectation.

The monitoring service guarantees that BlackStorm will check devices on the defined schedule
and notify customers when problems are detected. It does not guarantee network performance,
device reliability, or internet service continuity — those depend on the customer's equipment,
their ISP, and factors outside BlackStorm's control.

Honest limitation is a trust signal. Customers who understand what they are paying for are
customers who get appropriate value and do not feel deceived when monitoring cannot fix what
it can only report.

---

### Monitoring as a Shared Practice

For many small businesses and home users, BlackStorm is the first structured monitoring
system they have ever had. Before BlackStorm, they found out something was offline when
a customer called to say the website was down, or when they walked into the office on
Monday morning.

Monitoring changes the discovery timeline — problems are found earlier, while smaller,
before they affect customers or operations. This is the primary value proposition: not
that problems stop happening, but that customers find out about them sooner and can
respond on their own terms.

The education and communication system exists to make sure customers understand and
appreciate this shift — because a customer who doesn't understand what monitoring changed
cannot evaluate whether it is worth what they pay.

---

## 2. Operational Visibility Concepts

### Defining Operational Visibility

Operational visibility is the ability to answer, at any moment, the questions that matter
for running a business or managing a home:

- Is everything working right now?
- Did anything go wrong recently, and for how long?
- Are there patterns I should know about?
- Is anything trending in a direction that will become a problem?

Most monitoring tools provide data but not visibility. Data is raw numbers. Visibility
is what those numbers mean in the context of a specific customer's situation.

BlackStorm's visibility design converts data into answers — answers a non-technical
user can read, understand, and act on without needing an interpreter.

---

### The Three Visibility Layers

**Status: Planned**

Operational visibility is organized into three layers, each serving a different question
and a different time horizon:

```
LAYER 1 — RIGHT NOW
  Question: Is everything working at this moment?
  Time horizon: Real-time to last hour
  Output: Status bar, device status list, active alerts
  Customer action: Investigate, contact support, or confirm nothing is needed

LAYER 2 — RECENTLY
  Question: Did anything happen that I should know about?
  Time horizon: Last 24 hours to last 7 days
  Output: Recent activity timeline, alert history, event log
  Customer action: Review events, understand context, file a ticket if needed

LAYER 3 — OVER TIME
  Question: Is my network reliable, and are there patterns?
  Time horizon: Last 30 days to last 12 months
  Output: Uptime reports, trend charts, monthly summaries
  Customer action: Make decisions, share with stakeholders, identify recurring issues
```

Each layer is presented separately in the portal — not merged into a single overwhelming
view. A customer who only needs Layer 1 can get their answer in seconds without being
drawn into Layer 3 data they did not ask for.

**WHY:** Mixing time horizons in a single view creates confusion. A customer checking
"is everything OK right now?" should not have to parse 30-day trend data to find their
answer. Separating layers by time horizon keeps each view purposeful.

---

### The Status Hierarchy

**Status: Planned**

BlackStorm uses a four-state status model that maps directly to customer-meaningful outcomes:

```
● HEALTHY (green)
  All monitored devices are responding normally.
  No action needed.

◑ ATTENTION (amber)
  One or more devices have not responded recently.
  May require investigation. Not confirmed offline.

● OFFLINE (red)
  One or more devices have confirmed stopped responding.
  An alert has been or is being sent.

○ CHECKING (gray)
  A device or monitoring process is in transition.
  New device, post-maintenance, or first check in a new cycle.
```

These states are named for customer outcomes, not technical conditions. "Attention" is
more useful than "Degraded." "Offline" is more useful than "Critical." "Checking" is
more useful than "Unknown."

**WHY:** Technical status systems use terms that carry historical baggage from engineering
contexts. "Critical" sounds like an emergency even when the situation is a single
minor device. "Unknown" sounds frightening even when it simply means a check has not
yet completed. Customer-outcome names communicate directly what the customer needs to know.

---

### Contextual Status Framing

**Status: Planned**

Status is never presented without context. Every status indicator answers:
- What the state is
- How long the device or system has been in that state
- Whether this state is normal or unusual for this customer

Example: a customer's router briefly goes offline every Sunday morning for about 2 minutes
(likely an automatic firmware update). After seeing this pattern in the data, the portal
frames the Sunday amber state differently:

```
● Checking   ·  Main Router
  No response for 90 seconds.
  Note: This device typically has a brief restart Sunday mornings.
  Waiting to confirm before sending an alert.
```

vs. the same device going offline unexpectedly on a Tuesday afternoon:

```
● Offline   ·  Main Router
  No response for 4 minutes.
  This is outside normal behavior for this device.
  Alert sent to notification contacts.
```

The underlying check is identical. The contextual framing is completely different.

**WHY:** Uniform status display ignores what the customer has taught the system through
historical patterns. A customer who receives the same urgent alert for a known Sunday
reboot and an actual Tuesday outage quickly learns to ignore alerts — which is the
worst possible outcome.

---

## 3. Customer-Friendly Alerting

### Alert Design Philosophy

An alert is a moment of truth. It is the point in the customer relationship where all
of BlackStorm's monitoring capability becomes visible. If the alert is confusing,
alarming, or wrong, that moment damages trust. If the alert is clear, calm, and
accurate, it reinforces exactly why the customer pays for the service.

The alerting philosophy is built on four commitments:

**1. Every alert tells the customer what happened in plain language.**
No codes, no technical identifiers, no unexplained severity levels.

**2. Every alert tells the customer what to do — or explicitly says no action is needed.**
If an alert resolves itself, the alert body says so. If customer action may be needed,
the alert provides the first reasonable step.

**3. Every alert is followed by a recovery notification when the problem resolves.**
An alert without a recovery notification leaves the customer in a permanently anxious
state. They do not know if it got worse, if someone handled it, or if it just went away.

**4. Alerts are calibrated to avoid fatigue without suppressing important signals.**
A customer who receives 12 alerts per week for minor transient events will stop reading
alerts. One missed alert for a real outage that a customer did not read is a service failure.

---

### Alert Content Structure

**Status: Planned**

Every alert email follows a consistent structure. The structure does not vary — consistency
allows customers to scan for the relevant information without having to read everything:

```
Subject: [STATUS] · [Device Name] · [Since when]

Example: OFFLINE · Main Router · Since 9:14 AM today


─── WHAT HAPPENED ──────────────────────────────────────────

  Main Router has stopped responding.

  We first noticed this at 9:14 AM. We've checked 4 times
  since then and have not received a response.

─── WHAT THIS MEANS ────────────────────────────────────────

  This device is no longer reachable by our monitoring
  system. This may mean:

  • The device has lost power
  • The internet connection at that location is down
  • The device restarted and is still coming back up

  It does not mean your data is at risk or that anything
  was accessed. We cannot tell you exactly what caused this
  — only that we can no longer reach the device.

─── WHAT TO DO ─────────────────────────────────────────────

  If you can access the device:
    → Check that it's powered on
    → If it's a router, try unplugging it for 30 seconds
      and plugging it back in

  If you cannot access the device right now:
    → No immediate action is required. We'll notify you
      when it comes back online.

  Need help? → Reply to this email or open a portal ticket.

─── ABOUT THIS ALERT ───────────────────────────────────────

  Device:     Main Router
  Location:   Main Office
  Offline since:  Dec 22 at 9:14 AM
  Alert sent to:  sarah@example.com, tom@example.com

  You'll receive another email when this device comes back.
```

**WHY:** The four-section structure (What happened / What it means / What to do / About
this alert) separates facts from interpretation from action from metadata. A customer who
is panicking reads "What to do." A customer who is curious reads "What it means." A customer
who wants to file an insurance claim reads "About this alert." The structure serves every
reading pattern without requiring every customer to read everything.

---

### Recovery Notification Structure

**Status: Planned**

Recovery notifications are a distinct email from alerts — not a follow-up buried in a
thread. They stand alone so they cannot be missed:

```
Subject: RESOLVED · Main Router · Back online (was down 8 minutes)


─── GOOD NEWS ───────────────────────────────────────────────

  Main Router is back online as of 9:22 AM today.

  It was offline for approximately 8 minutes
  (9:14 AM – 9:22 AM).

─── WHAT LIKELY HAPPENED ────────────────────────────────────

  Brief outages like this are often caused by:
  • A device rebooting on its own (routine for most routers)
  • A momentary interruption from your internet provider

  Nothing else is required from you right now.

─── IF THIS KEEPS HAPPENING ─────────────────────────────────

  If your Main Router goes offline frequently — more than
  once or twice a week — that pattern is worth looking into.
  Contact us and we'll review the history with you.

─── INCIDENT SUMMARY ────────────────────────────────────────

  Device:         Main Router
  Went offline:   Dec 22 at 9:14 AM
  Came back:      Dec 22 at 9:22 AM
  Duration:       8 minutes
  Alerts sent:    1 (to 2 contacts)
  Checks during:  4 (no response), then 1 (response confirmed)
```

**WHY:** Recovery notifications complete the loop. They replace ongoing anxiety ("I got
an alert — is it still down? Did someone fix it? Should I call?") with a definitive
close. A service that sends alerts but not recoveries trains customers to stay worried
indefinitely. Recovery notifications train customers to trust the alerts they receive.

---

### Alert Timing and Confirmation Logic

**Status: Planned**

BlackStorm does not alert on the first missed check. A single non-response may be a
temporary network hiccup, a device mid-reboot, or a monitoring system check that arrived
during a brief unavailability window. Alerting immediately on every missed check produces
false alarms and erodes trust in the alert system.

The confirmation logic:

```
Check 1: No response
  → Status changes to "Checking" (amber)
  → No alert sent
  → Retry in 1 minute

Check 2: No response (2 minutes after first)
  → Still "Checking"
  → No alert sent yet
  → Retry in 2 minutes

Check 3: No response (4 minutes after first)
  → Status changes to "Offline" (red)
  → Alert sent
  → Continue checking every 3 minutes until recovery
```

This logic means a device must be unreachable for approximately 4 minutes before an
alert is sent. A device that reboots and comes back in 2 minutes never triggers an alert.
A device that is genuinely offline for 5 minutes always does.

The confirmation window is communicated to customers:

> "We confirm a device is offline before sending an alert — we check a few times
> to rule out brief network hiccups. If you don't receive an alert, the issue resolved
> itself within a few minutes."

**WHY:** The confirmation window substantially reduces false-positive alerts — the single
biggest driver of alert fatigue. Customers who trust that every alert represents a confirmed
outage take every alert seriously.

---

### Alert Language Standards

**Status: Current**

All alert language must pass the following review before deployment:

**Avoid alarm language:**
- Not: "CRITICAL FAILURE DETECTED"
- Use: "Main Router has stopped responding"

**Avoid passive uncertainty:**
- Not: "It appears that a device may be experiencing connectivity issues"
- Use: "Main Router is not responding. We've checked 3 times."

**Avoid technical cause speculation:**
- Not: "This may indicate a BGP route failure or DHCP server misconfiguration"
- Use: "We can't tell you exactly what caused this — only that we can no longer reach the device"

**Always include a "what to do" or "nothing needed" statement:**
- Not: (alert with no guidance)
- Use: "If you can access the device, check that it's powered on. If not, no immediate action is needed — we'll notify you when it comes back."

**Always use the customer's device name, not a technical identifier:**
- Not: "Host 192.168.1.1 (node_0041) — ICMP timeout"
- Use: "Main Router has stopped responding"

---

## 4. Device Health Visibility

### What "Device Health" Means

In BlackStorm's monitoring context, device health means availability — whether the device
is reachable and responding. It does not mean CPU usage, memory utilization, temperature,
or application performance, unless specifically agreed upon for individual customers
with equipment that supports those checks.

Health is defined by response: a device that answers our checks is healthy, regardless
of what else might be happening inside it.

---

### Device Status Card Design

**Status: Planned**

Each device in the portal is represented by a status card containing:

```
┌───────────────────────────────────────────────────────────────┐
│  ● Main Router                              [Main Office]      │
│                                                               │
│  Online for 14 days, 6 hours                                  │
│  Last checked: 2 minutes ago                                  │
│                                                               │
│  This month: 99.9% — about 44 minutes total downtime         │
│                                                               │
│  [View history]  [Add a note]  [Request a change]            │
└───────────────────────────────────────────────────────────────┘
```

The card communicates:
- Current state (color + label)
- How long in current state (human-readable duration)
- When it was last checked (recency)
- Monthly reliability (plain-language uptime)
- Three contextual actions

What the card deliberately does not show:
- Raw response times in milliseconds
- Check frequency or protocol details
- Internal monitoring system identifiers
- IP address (visible in detail view on request, not primary display)

**WHY:** The card surface area is the most-viewed element in the portal. Every pixel
of a device card should serve a customer who is asking "is this device OK?" or "has
it been reliable?" Technical detail that does not answer either question is visual
noise that pushes the signal further away.

---

### Device Detail View

**Status: Planned**

Clicking a device card opens a detail view with three tabs:

**Tab 1: Status & History (default)**

```
● Main Router                           ● Online — 14 days, 6 hours
Main Office

─── TODAY ───────────────────────────────────────────────────────
  12:02 AM  Still online (continuous)

─── LAST 7 DAYS ─────────────────────────────────────────────────
  Dec 22, 9:14 AM  Went offline                → Back at 9:22 AM (8 min)
  Dec 20           Online all day
  Dec 19           Online all day
  Dec 18, 3:31 AM  Went offline                → Back at 3:34 AM (3 min)
  Dec 15–17        Online all day

─── THIS MONTH ──────────────────────────────────────────────────
  Uptime: 99.9%  ·  Total downtime: 11 minutes  ·  2 incidents
  [View full report]
```

**Tab 2: Notes**
Customer and team notes about this device, in reverse chronological order. Any team
member or account owner can add notes. Notes are timestamped with author.

**Tab 3: Technical Details** (collapsed by default)
IP address, monitoring check type, check frequency, last raw response, and monitoring
configuration notes. This tab exists for customers who want it — not for customers who
don't know it exists.

**WHY:** The three-tab structure keeps the primary view clean while preserving the depth
that technical users need. A customer who has never heard of an IP address never needs
to see Tab 3. A customer who is troubleshooting alongside their IT contact can access
it without searching.

---

### Device Health Timeline

**Status: Planned**

The device history is displayed as a visual timeline — a horizontal bar for each device
showing status over the past 30 days, color-coded by state:

```
Main Router   ██████████████████████████████████░██████████  99.9%
              Jan 1                                       Jan 31
              [Green = Online]  [Red = Offline]  [Gray = No data]
```

Each segment of the timeline is interactive:
- Hovering or tapping a segment shows the date, state, and duration
- Red segments show the exact offline period: "Dec 22 · 9:14 AM – 9:22 AM · 8 min"
- Gray segments show "No monitoring data for this period" (not a false negative)

**WHY:** A timeline shows reliability at a glance in a way that a table of numbers
cannot. A customer who sees 30 days of solid green except two tiny red marks
immediately understands their device is very reliable. That same information in a
table of uptime percentages requires mental math that non-technical users won't do.

---

### Device Health Comparison

**Status: Planned**

The device list supports sorting and filtering that reveals health patterns across devices:

Sort options:
- Most recently offline (surfaces reliability concerns)
- Alphabetical (default, for routine checking)
- By location (for multi-site customers)
- By uptime this month (lowest first, for identifying problem devices)

Filter options:
- Show only offline devices
- Show only devices with alerts this week
- Show by location

The most-recently-offline sort is the most diagnostically valuable — it brings attention
to devices with recurring issues without requiring the customer to remember which ones
have been problematic.

**WHY:** Reliability problems in monitoring environments often accumulate gradually.
A device that went offline briefly 4 times this month looks fine in any individual
check but reveals a pattern when sorted by recency. Sorting tools surface patterns
the customer did not know to look for.

---

## 5. Network Health Visibility

### Network Health vs. Device Health

Device health is the status of a single piece of equipment. Network health is the
aggregate — how is the collection of monitored devices performing as a whole?

Network health visibility answers the questions a customer asks before looking at
individual devices:

- Is my overall network situation normal?
- Is one location doing better than another?
- Is my network more reliable this month than last month?
- Do I have a pattern of issues at a particular time of day or week?

---

### Network Health Dashboard

**Status: Planned**

The network health dashboard presents the aggregate view:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NETWORK HEALTH — Acme Corporation                                        │
│                                                                           │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐        │
│  │  ● 14 Online     │  │  ○ 0 Offline     │  │  ✓ No alerts     │        │
│  │  All responding  │  │                  │  │  Last 7 days     │        │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘        │
│                                                                           │
│  This month: 99.7% across all devices                                     │
│  Compared to last month: ▲ Better (was 99.2%)                             │
│                                                                           │
│  ─── 30-DAY OVERVIEW ──────────────────────────────────────────────────── │
│                                                                           │
│  [Full-width area chart — 30 days, all devices combined]                  │
│  100% |████████████████████████████████░█████████████████████████| 99.7% │
│       Jan 1                                                       Jan 31  │
│                                                                           │
│  ─── BY LOCATION ──────────────────────────────────────────────────────── │
│                                                                           │
│  Main Office      ● 8 of 8 online    99.9% this month                    │
│  Branch Office    ● 4 of 4 online    99.1% this month  ↓ 1 incident      │
│  Remote Worker    ● 2 of 2 online    100% this month                      │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘
```

The "compared to last month" line is one of the most valuable elements — it gives the
current number meaning. 99.7% alone is abstract. 99.7% when last month was 99.2% means
something is trending positively.

**WHY:** Network health without comparison is a snapshot without context. Customers who
can see whether their network is improving, stable, or declining over time can make
meaningful decisions — whether to investigate recurring issues, upgrade equipment, or
simply feel confident that things are working well.

---

### Location-Level Health

**Status: Planned**

Multi-location customers see network health broken down by site. Each location is a row
in the network overview, showing:

- Current device count and status (e.g., "8 of 8 online")
- Monthly uptime for that location
- Notable events ("2 incidents this month")
- A trend indicator (▲ improving / = stable / ▼ declining vs. last month)

Clicking a location opens the device list filtered to that location.

**WHY:** A business with three locations needs to know whether a problem is isolated
to one site or systemic. A unified network health view that obscures location data
forces the customer to check each location individually — which they may not do if the
aggregate looks fine. Location-level health makes site-specific problems immediately visible.

---

### Aggregate Health Signals

**Status: Planned**

When multiple devices at the same location go offline at the same time, the portal
presents this as a location event rather than individual device alerts:

Individual event display:
```
Dec 22 at 9:14 AM  Main Router went offline
Dec 22 at 9:14 AM  Office Switch went offline
Dec 22 at 9:14 AM  Back-Office Server went offline
Dec 22 at 9:14 AM  Network Printer went offline
```

Aggregated event display:
```
Dec 22 at 9:14 AM  Main Office — Internet connection interrupted
                   4 devices went offline simultaneously.
                   Likely cause: router or ISP-level issue.
                   All 4 devices came back at 9:22 AM (8 minutes).
```

The aggregated display requires one notification email (not four), presents the event
as a coherent incident rather than independent failures, and offers a plausible cause
interpretation ("router or ISP-level issue" vs. 4 separate unexplained outages).

**WHY:** Simultaneous multi-device outages are almost never independent failures —
they indicate a shared upstream problem (power, router, ISP). Treating them as
individual events produces alert storm: multiple identical emails arriving at once.
Customers who receive four simultaneous alerts for one outage feel panicked and
confused. One aggregated alert for one incident produces the correct response.

---

## 6. Service Status Concepts

### What Service Status Communicates

Service status is distinct from device status. Device status answers "is this device
working?" Service status answers "is the monitoring service itself working?"

Customers need to know when the monitoring service is unavailable, degraded, or undergoing
maintenance — because during those periods, the absence of an alert does not mean
everything is fine.

---

### BlackStorm Service Status Banner

**Status: Planned**

A persistent status banner appears at the top of the portal whenever BlackStorm's own
monitoring infrastructure is experiencing any issue:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ⚠  MONITORING NOTE — Some device checks may be delayed.                │
│     This does not mean your devices are offline.                         │
│     We're working on it. Alerts will resume as soon as checks normalize. │
│     Started: Dec 22 at 2:15 PM  ·  [View details]                       │
└──────────────────────────────────────────────────────────────────────────┘
```

Three states for the service banner:

**Monitoring delay (amber):**
"Some checks may be delayed. Devices showing 'Checking' may still be online — we're
working to confirm."

**Monitoring interruption (red):**
"Our monitoring system is not currently running checks. You may not receive alerts during
this time. We're working to restore service. If you suspect a device is offline, please
check it directly."

**Service restored (green, temporary):**
"Monitoring has been restored as of [time]. All checks are running normally."

**WHY:** Transparency about monitoring system status is a trust requirement, not
optional. A customer who receives no alerts during a monitoring outage and believes
their network is running perfectly — when in fact several devices are offline — has
been misled, even if unintentionally. The banner prevents this by clearly marking
the boundary of what can be trusted.

---

### Public Service Status Page

**Status: Planned**

A public-facing service status page at `status.blackstorm.llc` provides current and
historical availability of BlackStorm's monitoring infrastructure:

```
BlackStorm Service Status                         Last updated: Dec 22 at 2:30 PM

─── CURRENT STATUS ─────────────────────────────────────────────────────────────

  ● Monitoring checks          Operational
  ● Alert delivery (email)     Operational
  ● Customer portal            Operational
  ◑ Report generation          Experiencing delays
  ● BlackStorm website         Operational

─── RECENT INCIDENTS ───────────────────────────────────────────────────────────

  Dec 22 · Report generation delay · Started 2:15 PM · Ongoing
  Dec 18 · All systems normal (no incidents)
  Dec 15 · Brief monitoring delay · 3:44 AM – 3:51 AM · 7 minutes · Resolved

─── LAST 30 DAYS ────────────────────────────────────────────────────────────────

  ██████████████████████████████████████████████████████████████  99.8%
  All major systems  ·  1 minor incident  ·  7 minutes total impact
```

The status page is publicly accessible without login so customers can check it
during a portal outage or login problem.

**WHY:** Service status transparency is a direct reflection of company integrity.
A company that hides its own downtime from customers — even when it is minor — signals
that accuracy is secondary to appearance. A company that openly posts its own incident
history signals confidence and honesty.

---

### ISP vs. Equipment Distinction

**Status: Planned**

When a monitoring pattern suggests the problem is with the customer's ISP rather than
their own equipment, the portal communicates this distinction:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Dec 22 Incident Note                                                       │
│                                                                             │
│  All 6 devices at Main Office went offline simultaneously at 9:14 AM        │
│  and came back at 9:22 AM.                                                  │
│                                                                             │
│  When all devices at a location go offline at the same time, this usually   │
│  indicates the internet connection itself went down — rather than a problem  │
│  with any specific device. This type of event is typically caused by your   │
│  internet service provider.                                                 │
│                                                                             │
│  BlackStorm cannot monitor or control your ISP's network.                   │
│  If this happens frequently, contacting your ISP about connection           │
│  stability may be worth exploring.                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

This note is informational, not a redirect. It does not tell the customer to "call your
ISP and stop calling us." It explains a reasonable interpretation of the pattern and
offers a next step — while remaining open to investigation if the customer wants it.

**WHY:** Customers who receive an outage notification without context assume they should
call BlackStorm. When the root cause is almost certainly the ISP, telling the customer
early saves them a support ticket and positions BlackStorm as a knowledgeable advisor
rather than a service that deflects.

---

## 7. Notification Prioritization

### The Alert Fatigue Problem

Alert fatigue is the most dangerous operational risk in monitoring services. A customer
who receives too many alerts — especially alerts that resolve without any action needed —
learns to ignore them. When that happens, a critical alert goes unread. An outage that
BlackStorm detected and notified about is missed by the customer.

Alert fatigue converts monitoring from a safety net into noise.

The notification prioritization system is designed to prevent this by ensuring that
every alert a customer receives is:
- Genuine (confirmed, not speculative)
- Relevant (the device actually matters to this customer right now)
- Actionable or explicitly closed (either something to do, or a resolution confirmation)

---

### Priority Levels

**Status: Planned**

BlackStorm uses a three-level priority system for notifications:

**IMMEDIATE — send now, regardless of time**
- A device confirmed offline for more than 4 minutes
- Multiple devices at the same location going offline simultaneously
- A device that has been offline for more than 1 hour

**DIGEST — bundle and send at next scheduled window**
- Recovery notifications for short outages (under 10 minutes) that occurred overnight
- Non-critical status changes (device temporarily unreachable, resolved within minutes)
- Low-priority information that is useful but not time-sensitive

**REPORT — include in monthly summary only**
- Brief transient events under 2 minutes that resolved without any impact
- Check-timing variations with no customer-visible effect
- Metrics that contribute to the monthly report but require no immediate awareness

The priority level for each notification type is documented and visible to customers —
not an invisible internal decision.

**WHY:** Invisible notification prioritization breeds distrust. If a customer asks "why
didn't I get an alert for that brief blip?" and the answer is "we decided it wasn't
worth telling you," that feels paternalistic. If the answer is "events under 2 minutes
that resolve automatically go into the monthly report, not an immediate alert — here's
why," that feels like a reasonable system the customer can understand and adjust.

---

### Business Hours Notification Routing

**Status: Planned**

Contacts can set their notification preference:
- **All hours** — immediate alerts 24/7
- **Business hours only** — immediate alerts during configured hours; overnight events
  are sent as a morning digest at the start of business hours
- **No alerts** — no individual alerts; events appear in monthly reports

The morning digest for business-hours contacts follows this format:

```
Subject: Overnight monitoring summary — Dec 22

Good morning.

Here's what happened while you were out:

  Dec 22, 3:18 AM  Main Router went offline for 3 minutes (came back at 3:21 AM)
  Dec 22, 3:21 AM  Main Router came back online

Everything is currently online and normal.

If you'd like to discuss the overnight event, reply to this email
or open a ticket in your portal.
```

**Important rule:** If a device is still offline when business hours begin, an immediate
alert is sent at the start of business hours — even if the device went offline overnight.
A device that went down at 2 AM and is still down at 8 AM is an active problem, not a
historical note.

**WHY:** Sending overnight alerts to someone who will not read them until 8 AM is not
more helpful than a 8 AM summary — it just trains them to sort alerts into "probably
resolved by morning" and ignore them. A morning digest gives overnight events their
proper context (time, duration, current state) in a format the business-hours reader
can actually act on.

---

### Notification Channel Design

**Status: Planned**

BlackStorm supports two notification channels: email and (in a future phase) SMS.

**Email** remains the primary channel because:
- Emails persist — customers can find the original alert later when investigating
- Emails support rich formatting — the four-section alert structure cannot work in SMS
- Emails thread — recovery notifications connect to the original alert in most clients
- Emails are accessible — screen reader compatible, adjustable font size, full text

**SMS** (future phase) is appropriate for:
- Immediate awareness when the customer is not at a computer
- A short confirmation: "OFFLINE · Main Router · Since 9:14 AM · See email for details"
- Not for full alert content — SMS alerts always reference the email for complete information

**WHY:** SMS alerts that try to convey the full alert content are either truncated (and
miss critical context) or so long they are not read on a phone screen. The role of SMS
is to break through when email might be missed — not to replace the full alert content.

---

## 8. Incident Awareness Concepts

### Defining an Incident

An incident at BlackStorm is any period in which one or more monitored devices were
offline and the outage was confirmed (not transient). The definition is broad and
non-hierarchical — we do not grade incidents by severity using tier systems that
non-technical customers cannot interpret.

An incident has:
- A start time (when we first confirmed the device offline)
- A duration (how long until recovery was confirmed)
- A scope (which devices were affected)
- A status (ongoing or resolved)

That is all. Not a root cause (which we often cannot confirm). Not a severity rating
(which implies a comparative judgment we are not positioned to make). Not an SLA
implication (which belongs in the service agreement, not the portal).

---

### Incident Timeline View

**Status: Planned**

Every incident has a dedicated timeline view accessible from the alert history:

```
INCIDENT · Dec 22 · Main Router · RESOLVED
─────────────────────────────────────────────────────────────────────────────

9:10 AM   Last successful check of Main Router
9:13 AM   No response — first missed check
9:15 AM   No response — second missed check (status changed to Checking)
9:17 AM   No response — third missed check (status changed to Offline)
9:17 AM   Alert sent to sarah@example.com, tom@example.com
9:20 AM   No response — continuing checks
9:22 AM   Response confirmed — Main Router is back online
9:22 AM   Recovery notification sent to sarah@example.com, tom@example.com

SUMMARY
  Duration:         8 minutes (9:13 AM – 9:22 AM)
  Checks during:    4 (no response), then 1 (restored)
  Alerts sent:      1 offline alert, 1 recovery notification
  Other devices:    No other devices affected during this period

─────────────────────────────────────────────────────────────────────────────
  [Download incident summary]  [Open a ticket about this incident]
```

**WHY:** An incident timeline converts an alert notification into a comprehensible
narrative. Customers who want to explain an outage to their leadership, document it
for insurance purposes, or simply understand what happened have everything they need
in one view. Customers who just want to confirm it's resolved can read the "RESOLVED"
header and move on.

---

### Active Incident Banner

**Status: Planned**

When a device is currently offline, an active incident banner appears at the top of
the portal — above all other content — so it cannot be missed:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ● OFFLINE — Main Router has been offline since 9:14 AM (24 minutes).   │
│  An alert was sent to 2 contacts.  [View incident]  [Contact support]   │
└──────────────────────────────────────────────────────────────────────────┘
```

If multiple devices are offline:
```
┌──────────────────────────────────────────────────────────────────────────┐
│  ● OFFLINE — 3 devices at Main Office have been offline since 9:14 AM   │
│  (24 minutes). This may indicate an internet connection problem.         │
│  Alerts sent to 2 contacts.  [View incident]  [Contact support]         │
└──────────────────────────────────────────────────────────────────────────┘
```

The banner dismisses automatically when the incident resolves. It does not require
the customer to dismiss it manually — the automatic dismissal is itself a signal
that the incident is over.

**WHY:** Customers who log into the portal during an ongoing outage should not have
to navigate to find out that something is wrong. A persistent, unmissable banner
that dissolves automatically communicates: "we see it, we're watching it, it's over
when it's over."

---

### Recurring Incident Pattern Awareness

**Status: Planned**

When a device triggers incidents at a consistent pattern — for example, going offline
briefly every Sunday or every night between 3 and 4 AM — the portal flags this pattern:

```
Pattern noticed: Main Router has had brief offline periods on 4 Sunday mornings
in the past 6 weeks.

This is often caused by:
  • Scheduled router firmware updates (common and normal)
  • A local process that restarts the router at a configured time

If this pattern is expected and intentional, you can mark it as a known
maintenance window so it doesn't generate alerts.

If it's unexpected, this is worth investigating. [Open a support ticket]
```

**WHY:** Patterns that are individually minor can indicate an underlying issue when
viewed in aggregate. A customer who saw each individual 3-minute Sunday outage
might not connect them — but presented as a pattern, the picture is different. The
portal surfaces patterns so customers can make decisions rather than being surprised
when an intermittent problem becomes a sustained one.

---

## 9. Historical Visibility & Reporting

### Why Historical Data Matters

The present state of a network tells you whether things are working now. Historical
data tells you whether that is normal. A network that is currently running fine is
evaluated very differently if it has been running fine for 30 days straight vs.
if it has been down for 3+ hours every week.

Historical visibility is the part of the monitoring service that delivers value
retrospectively — it converts uptime percentages into business context, incident
records into documentation, and usage patterns into operational intelligence.

---

### Monthly Uptime Report

**Status: Planned**

Every customer receives an automatic monthly report. The report is designed to be
readable by a non-technical owner, shareable with stakeholders, and useful for
catching patterns that are not visible in day-to-day monitoring.

Report structure:

```
BLACKSTORM MONTHLY REPORT
Acme Corporation · December 2025
─────────────────────────────────────────────────────────────────────────────

EXECUTIVE SUMMARY

  December was a good month for your network. 14 of your 14 monitored
  devices were online for an average of 99.7% of the time — equivalent
  to about 2.2 hours of total downtime across all devices this month.

  The most significant event was an 8-minute internet outage on December 22
  affecting all 6 devices at your main office. It resolved on its own.
  No other multi-device events occurred.

  One device — the Branch Office backup switch — was offline briefly on
  three separate evenings this month. The pattern is worth watching.
  We've flagged it below.

─── DEVICE SUMMARY ───────────────────────────────────────────────────────────

  Device                 Location        Uptime      Incidents
  ─────────────────────────────────────────────────────────────
  Main Router            Main Office     99.9%       1 (8 min)
  Office Switch          Main Office     99.9%       1 (8 min)
  Back Server            Main Office     99.9%       1 (8 min)
  Network Printer        Main Office     99.9%       1 (8 min)
  Back-Office Server     Main Office     99.9%       1 (8 min)
  Main Firewall          Main Office     99.9%       1 (8 min)
  Branch Router          Branch Office   99.4%       3 (avg 12 min)  ← Note
  Branch Switch          Branch Office   99.4%       3 (avg 12 min)  ← Note
  Remote Worker Router   Remote         100%         0
  Remote Worker AP       Remote         100%         0

─── NOTABLE INCIDENTS ────────────────────────────────────────────────────────

  Dec 22 · 9:14 AM – 9:22 AM · 8 minutes · All 6 Main Office devices
  Likely cause: Internet connection interruption (all devices, same time)
  Status: Resolved automatically

  Dec 19 · 11:48 PM – 12:01 AM · 13 minutes · Branch Office Router + Switch
  Dec 14 · 11:51 PM – 12:03 AM · 12 minutes · Branch Office Router + Switch
  Dec 9  · 11:55 PM – 12:07 AM · 12 minutes · Branch Office Router + Switch
  Note: Three similar events, late evenings, Branch Office only.
  Recommend reviewing Branch Office router — may need maintenance.

─── COMPARISON TO LAST MONTH ─────────────────────────────────────────────────

  November average uptime:  99.2%
  December average uptime:  99.7%
  Change: ▲ Improved

─── WHAT'S NEXT ──────────────────────────────────────────────────────────────

  We recommend discussing the Branch Office pattern. If the router is
  aging or misconfigured, addressing it now is easier than after a
  sustained outage.

  Reply to this email or open a support ticket to discuss.

─────────────────────────────────────────────────────────────────────────────
  BlackStorm, LLC · kf0che@protonmail.com · blackstorm.llc
  Report period: Dec 1 – Dec 31, 2025
  Devices monitored: 14 · Account: Acme Corporation
```

**WHY:** The executive summary paragraph before the tables is the most important
design decision in the report. Non-technical decision-makers read summaries — they
scan tables for context after the summary tells them where to look. A report that
starts with a table of percentages will not be read by the people who most need to
see it.

---

### On-Demand Report Access

**Status: Planned**

Beyond monthly reports, customers can generate on-demand reports for custom date ranges:

```
Generate a Report
─────────────────────────────────────────────────────────────

  Date range:  [Dec 1, 2025  ]  to  [Dec 31, 2025  ]

  Include:
  ☑  Executive summary
  ☑  Device uptime table
  ☑  Incident details
  ☑  Comparison to previous period
  ○  Technical detail appendix  ← (for IT contacts)

  Format:
  ●  PDF (recommended for sharing)
  ○  CSV (for spreadsheet import)

                                          [Generate Report]
```

Reports are available for download immediately after generation for the previous 12 months
of monitoring data.

**WHY:** The ability to generate reports for custom date ranges serves a specific customer
need: questions from leadership, insurance documentation, or investigating a period when
something seemed wrong. Customers who can answer these questions themselves — without
calling BlackStorm — trust the service more, not less.

---

### Trend Visualization

**Status: Planned**

The portal includes a trend view showing monthly uptime averages across the past 12
months as a simple bar chart:

```
12-Month Uptime Trend — All Devices

  100% ─────────────────────────────────────────
        ████  ████  ████  ████  ████  ████  ████  ████  ████  ████  ████  ████
  99% ─ ████  ████  ████  ████  ████  ████  ████  ████  ████  ████  ████  ████
        Jan   Feb   Mar   Apr   May   Jun   Jul   Aug   Sep   Oct   Nov   Dec

  January: 99.4%  February: 99.7%  March: 99.8%  ···  December: 99.7%

  Average over 12 months: 99.6%
  Best month: March (99.8%)
  Month with most incidents: January (3 incidents)
```

Each bar is interactive — tapping or clicking opens that month's report.

**WHY:** A 12-month trend chart shows something no individual report can: whether the
customer's network is getting better, worse, or staying the same over a full year.
This view is particularly valuable for conversations about upgrading equipment, changing
service tiers, or justifying the investment in monitoring to organizational leadership.

---

## 10. Maintenance & Scheduled Workflows

### Planned Maintenance Transparency

Scheduled maintenance — whether for BlackStorm's own infrastructure or for a customer's
equipment — must be communicated clearly and in advance. Customers who are surprised by
monitoring gaps during maintenance periods lose trust, even when the maintenance is planned
and normal.

---

### Customer-Initiated Maintenance Windows

**Status: Planned**

When a customer knows they will be doing work that will take devices offline — a router
replacement, a scheduled reboot, an office move — they can set a maintenance window in
the portal:

```
Schedule a Maintenance Window
─────────────────────────────────────────────────────────────

  What are you doing?
  (○) Restarting or replacing a device
  (○) Moving equipment to a new location
  (○) My ISP is doing maintenance on my line
  (○) Something else

  Which devices will be affected?
  [✓] Main Router
  [ ] Office Switch
  [ ] Back Server
  [✓] All devices at Main Office

  When does maintenance start?
  [Dec 28, 2025]  at  [10:00 AM ▾]

  How long will it take?
  [2 hours ▾]

  Notes (optional):
  [ Router replacement — expect 1-2 hours of downtime ]

                                         [Schedule Maintenance]
```

During a scheduled maintenance window:
- Affected devices show "Maintenance" status (gray with wrench icon) instead of Offline
- No alerts are sent for those devices
- The maintenance window is logged in the incident history as a scheduled event, not an outage

After the window closes:
- Monitoring resumes automatically
- Any remaining offline devices trigger normal alerts
- A brief confirmation is added to the event log: "Maintenance window closed. Monitoring
  restored for 2 of 2 scheduled devices. 1 device still offline — check manually."

**WHY:** Customers who can mark planned downtime eliminate false alerts for events they
already know about. This improves the signal-to-noise ratio for real alerts — and
produces a more accurate historical record that reflects scheduled vs. unplanned outages.

---

### Maintenance Window Banner (Portal)

**Status: Planned**

During an active maintenance window, a non-alarming banner appears in the portal:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ○ MAINTENANCE — Main Office devices are in a scheduled maintenance      │
│  window until 12:00 PM. Offline status during this window is expected.  │
│  Alerts are paused for affected devices.     [View maintenance details] │
└──────────────────────────────────────────────────────────────────────────┘
```

The banner color is neutral gray — not amber or red — because this is an expected,
non-alarming state. Using the same visual weight as an outage alert for a scheduled
event trains customers to ignore color coding.

---

### BlackStorm Maintenance Notifications

**Status: Planned**

When BlackStorm schedules maintenance on its own monitoring infrastructure, customers
receive advance notice at least 24 hours before the window:

```
Subject: Scheduled maintenance — Dec 28 from 2:00 AM to 4:00 AM

Hi [First Name],

We're performing scheduled maintenance on our monitoring system on
Sunday, December 28 from 2:00 AM to 4:00 AM Eastern Time.

During this window:
  • Monitoring checks may be delayed or paused
  • You may not receive alerts during the maintenance period
  • If a device is offline when maintenance ends, we'll check and alert normally

You do not need to do anything. This is routine infrastructure work.

We'll send a confirmation email when maintenance is complete.

— BlackStorm Team
```

**WHY:** Customers who are not informed about planned monitoring outages may investigate
device problems that don't exist, or miss real problems that occur during the window.
Advance notice sets accurate expectations and reinforces that BlackStorm communicates
proactively rather than after the fact.

---

## 11. Privacy-Conscious Monitoring

### The Boundary of Monitoring

Privacy-conscious monitoring is not a feature — it is a fundamental design constraint.
The monitoring system is built around a precise, limited definition of what it observes,
and that boundary is non-negotiable and well-documented.

BlackStorm's monitoring checks one thing per device: whether the device answers a
network reachability check (typically ICMP ping). The check asks "are you there?" and
records whether the answer was yes or no. Nothing else is logged, stored, or analyzed.

---

### What Is — and Is Not — Collected

**Status: Current**

| What monitoring collects | What monitoring does not collect |
|---|---|
| Whether the device responded (yes/no) | What the device is doing |
| When the check occurred | What data is on the device |
| How long the device has been in current state | Network traffic content |
| The device's IP address (as configured by customer) | Browsing history or activity |
| Any notes added by the customer or BlackStorm team | Usernames, passwords, credentials |
| Historical response pattern | Files, email, or messages |
| | Other devices on the customer's network |

This table is published in the portal knowledge base, in the privacy policy, and is
linked from the onboarding welcome screen. It is not a footnote — it is a primary
communication.

---

### Monitoring Data Retention Policy

**Status: Current (being formalized)**

| Data type | Retention period | Reason |
|---|---|---|
| Device status records | 12 months | Enables trend reporting and incident history |
| Alert logs | 12 months | Supports incident documentation |
| Monthly reports | 24 months | Customer record keeping |
| Customer notes | Account lifetime | Customer-created content |
| Account information | Account lifetime + 30 days | Required for billing and account closure |

Data is not sold, shared with third parties for marketing purposes, or used to build
advertising profiles. The only third parties who may process customer data are infrastructure
providers (hosting, email delivery) under appropriate data processing agreements.

**WHY:** Publishing retention periods builds trust and sets clear expectations.
Customers who know their data is kept for 12 months — not forever — and who know
exactly what that data consists of — are customers who can make informed decisions
about the service.

---

### Customer Data Access and Deletion

**Status: Planned**

Customers can request:
- A full export of their monitoring data (device records, alert history, reports)
- Deletion of specific data sets
- Full account and data deletion at account closure

Data export is available as CSV or PDF. Account deletion is processed within 30 days
of request and confirmed in writing.

These are not buried in legal fine print — they are linked from the account settings page
under "Your Data."

---

### The "We Don't See That" Commitment

**Status: Current**

A brief, plain-language commitment statement appears in multiple places across the
platform (portal help, knowledge base, public website):

> BlackStorm can see that your router is online. We cannot see what anyone is doing
> online through that router. We cannot see your files, your email, your browsing
> history, or your network traffic. We check whether devices are reachable. That is all.

This statement is not a legal disclaimer with hedged language. It is a direct,
accountable statement of what the system does. If that statement ever becomes inaccurate
— because a future service extends monitoring scope — the statement must be updated before
the service change is deployed, not after.

---

## 12. Operational Simplicity Strategy

### The Complexity Budget

Every feature added to a monitoring platform carries a complexity cost. That cost is
not measured in development time — it is measured in customer comprehension. A feature
that is used by 5% of customers but makes the interface 10% harder to understand for
100% of customers is a net negative, regardless of how useful it is to those 5%.

BlackStorm operates with a strict complexity budget: the default experience must be
simple enough that a first-time user can understand what they are looking at within
30 seconds. Advanced features exist behind progressive disclosure — available to
customers who seek them, invisible to those who don't.

---

### Default-to-Simple Principles

**Status: Current**

**Show the answer, not the data.**
The portal does not show raw check results and let customers interpret them. It shows
the conclusion ("Main Router is online") with the data available on request ("Response
time: 4ms — Technical Details").

**One action at a time.**
Forms and workflows present one decision at a time. Not "Configure monitoring
parameters, set alert thresholds, assign notification contacts, and choose report
frequency" on one screen — but four separate, clearly labeled steps.

**Confirm before any irreversible action.**
Removing a device, changing notification settings, or deleting data requires a
confirmation step with a plain-language description of what will change.

**Destructive options are never the default.**
In any interface with both "pause alerts" and "remove device," the safer option
("pause alerts") is always presented first and is the default selection.

**Error messages say what to do, not just what went wrong.**
Not: "Invalid input." Use: "The IP address you entered doesn't look right.
IP addresses look like this: 192.168.1.1. Try entering it again or leave it blank
and we'll work it out with you."

---

### Reducing Dashboard Clutter

**Status: Planned**

The portal dashboard operates on a strict hierarchy of information density:

**Tier 1 — Always visible:**
- Total devices online / offline
- Active alert count
- Last check time

**Tier 2 — Visible on interaction or scroll:**
- Recent activity timeline
- Per-device status list

**Tier 3 — Visible on request:**
- Historical trend charts
- Technical detail views
- Advanced alert configuration
- Raw monitoring data

Nothing in Tier 3 appears on the default dashboard. Customers who want it can navigate
to it. Customers who don't need it are never distracted by it.

**WHY:** Dashboard density is inversely correlated with dashboard usefulness for
non-technical users. Every data point added to a dashboard competes with every other
data point for the customer's attention. A dashboard that shows 5 things clearly
is more operationally useful than a dashboard that shows 40 things technically.

---

### Complexity Escape Valve: "Technical Details"

**Status: Planned**

Rather than removing technical information entirely, the portal provides a consistent
"Technical Details" pattern: a collapsed toggle available on any view that reveals
the underlying data for customers who want it.

The toggle label is always "Technical Details" — never "Advanced" or "Expert Mode,"
which imply the customer needs special knowledge to access it. Technical details are
just more detail, not privileged information.

Examples:
- Device card → Technical Details: IP address, check type, polling frequency, last
  raw response, monitoring history in raw format
- Incident view → Technical Details: Check-by-check response log, alert delivery
  log with timestamps
- Report → Technical Details appendix: Full per-check data for the report period

---

## 13. Mobile Monitoring Experience

### The Mobile Monitoring Context

Mobile monitoring access is typically driven by one of three moments:

**Moment 1: Alert received on phone**
Customer gets an email notification. Opens the portal on their phone to check the
current state. Needs to confirm whether it's resolved or still ongoing.

**Moment 2: Away from desk, checking in**
Customer is traveling, in a meeting, or at another location. Opens the portal to do
a 5-second status check. Not investigating — just confirming.

**Moment 3: On-site at the affected location**
Customer or their IT contact is physically present at the location with the problem.
Using the phone as a reference while working on the equipment.

Each moment has different information needs. The mobile experience is designed to serve
all three without requiring the customer to switch between views.

---

### Mobile Status View

**Status: Planned**

The mobile dashboard leads with the global status in large, readable text:

```
┌────────────────────────────────────┐
│  BlackStorm          ≡    ···      │
├────────────────────────────────────┤
│                                    │
│  ● Everything is online            │
│                                    │
│  15 devices · Checked 2 min ago    │
│                                    │
├────────────────────────────────────┤
│  Recently                          │
│  ──────────────────────────────    │
│  Dec 22 · Main Router              │
│  Offline 8 min · Resolved 9:22 AM  │
│                                    │
│  Dec 18 · Branch Router            │
│  Offline 12 min · Resolved 12:03AM │
│                                    │
│  [View all history]                │
├────────────────────────────────────┤
│  [Contact support]                 │
└────────────────────────────────────┘
```

When something is offline, the global status changes immediately:

```
┌────────────────────────────────────┐
│  BlackStorm          ≡    ···      │
├────────────────────────────────────┤
│                                    │
│  ● Main Router is offline          │
│  Since 9:14 AM · 24 minutes        │
│                                    │
│  [View details]  [Get help]        │
│                                    │
├────────────────────────────────────┤
│  Other devices (14): All online    │
│                                    │
└────────────────────────────────────┘
```

**WHY:** Mobile status views are often one-handed, quick-glance interactions. A status
that requires scrolling to find has failed the mobile use case. Leading with the answer
in large text serves the 5-second check-in without removing depth for customers who
need to dig further.

---

### Mobile Alert Response

**Status: Planned**

When a customer taps an alert email on their phone, they are taken directly to the
affected device's current status — not the portal home screen. The deep-link behavior
ensures the customer lands exactly where they need to be.

Mobile device detail view for an active incident:

```
┌────────────────────────────────────┐
│  ← Back                            │
│                                    │
│  ● Main Router                     │
│  OFFLINE · Since 9:14 AM           │
│  24 minutes                        │
│                                    │
│  Last online: Dec 22 at 9:10 AM    │
│                                    │
│  ─── What to check ─────────────   │
│  1. Is the router powered on?      │
│  2. Try unplugging for 30 seconds  │
│  3. Check your other devices       │
│                                    │
│  [Get support]                     │
│  [I fixed it — check now]          │
│                                    │
└────────────────────────────────────┘
```

The "I fixed it — check now" button triggers an immediate on-demand check of the
device. The customer sees the result within 30 seconds:

```
┌────────────────────────────────────┐
│  Checking Main Router...           │
│                                    │
│  ● Back online                     │
│  Response confirmed at 9:38 AM     │
│  Was offline for 24 minutes        │
│                                    │
│  Recovery notification sent.       │
│                                    │
│  [View incident summary]   [Done]  │
└────────────────────────────────────┘
```

**WHY:** The "check now" button converts the customer from passive recipient of
information to active participant in resolution. It also eliminates the "did my
fix work?" uncertainty that otherwise requires waiting for the next scheduled check.
Immediacy of feedback is one of the most powerful tools for building operational
confidence.

---

### Mobile Readability Standards

**Status: Planned**

Mobile views enforce stricter readability rules than desktop:
- Minimum font size: 16px (body), 20px (status indicators), 24px (primary status)
- Minimum line height: 1.6
- Minimum touch target: 48×48px
- Maximum information density per screen: 5 pieces of information
- No horizontal scrolling on any primary view
- High-contrast status colors: green (#22C55E), amber (#D97706), red (#DC2626)
- Status never communicated by color alone — always with a text label

---

## 14. Accessibility & Readability

### Accessibility as Monitoring Quality

A monitoring portal that is inaccessible to a portion of its users is a monitoring
portal that fails to deliver its core value to those users. A blind customer cannot
benefit from a portal that communicates status purely through visual color coding.
A customer with motor impairments cannot respond to an alert through a portal that
requires precise mouse interaction.

Accessibility in monitoring is not a legal requirement to comply with — it is a
quality standard that reflects BlackStorm's commitment to every customer.

---

### Screen Reader Monitoring

**Status: Planned**

The monitoring portal is built to be fully usable with screen reader software:

**Status updates:**
Device status changes are announced via `aria-live="polite"` so the screen reader
announces the update after completing the current reading — not interrupting mid-sentence.

New critical alerts use `aria-live="assertive"` to interrupt immediately, because
a new offline alert is time-sensitive.

**Status bar reading order:**
The status bar reads as a complete statement:
> "14 devices online. 1 device offline. 0 active alerts."

Not:
> "14 [status indicator] 1 [status indicator] 0 [status indicator]"

**Device list reading:**
Each device row reads completely:
> "Main Router. Online. 14 days, 6 hours. View details, Add a note, Request a change."

Not:
> "Main Router. Green dot. 14d6h."

---

### Color and Contrast Requirements

**Status: Planned**

All status colors meet WCAG 2.1 AA contrast ratios:

| Status | Color | Background (dark) | Ratio | Background (light) | Ratio |
|---|---|---|---|---|---|
| Online (green) | #22C55E | #0A1628 | 6.8:1 ✓ | #FFFFFF | 4.6:1 ✓ |
| Attention (amber) | #F59E0B | #0A1628 | 7.2:1 ✓ | #FFFFFF | 4.9:1 ✓ |
| Offline (red) | #EF4444 | #0A1628 | 5.1:1 ✓ | #FFFFFF | 4.5:1 ✓ |
| Checking (gray) | #94A3B8 | #0A1628 | 4.6:1 ✓ | #FFFFFF | 3.2:1* |

*Gray "Checking" state on white background: minimum ratio met, but text label is
mandatory alongside it — color alone does not communicate this state.

---

### Readability in High-Stress Moments

A customer receiving an alert is often in a stressed state — something they rely on is
broken. Readability in this moment is more important than at any other point in the
product experience.

Alert emails, incident views, and mobile offline states are held to a higher readability
standard than the routine portal:

- Shorter sentences (maximum 15 words)
- No subordinate clauses in the primary status line
- Bullet points instead of paragraphs for action items
- White space above and below critical information
- Primary status in the first visible line — never below the fold

**WHY:** Cognitive load under stress is much higher than normal. Customers experiencing
an outage are running on adrenaline and divided attention. Readability that works in
a calm state may completely fail under stress. Every alert, incident view, and offline
status message should be tested mentally against the question: "Can I parse this while
anxious, on a phone, in the dark?"

---

### Language Readability Standard

**Status: Current**

All monitoring-related customer-facing content (alerts, reports, portal UI, KB articles
about monitoring) is written to a maximum 8th-grade reading level. Measurement tools
used: Flesch-Kincaid grade level check before publication.

Key readability practices:
- Active voice: "The router went offline" — not "An offline state was detected"
- Specific subjects: "Main Router" — not "The device" or "Node 0041"
- Concrete numbers: "8 minutes" — not "a brief period"
- Human-readable dates: "This morning at 9:14 AM" — not "2025-12-22T09:14:00Z"
- Positive framing where accurate: "Everything is online" — not "No offline devices detected"

---

## 15. Future Monitoring Expansion Concepts

### Principles for Future Monitoring Features

All future monitoring concepts at BlackStorm are held to the same standard as current
features: they must improve the customer's operational understanding without increasing
complexity for customers who do not need them. Future features that are technically
impressive but incomprehensible to non-technical users do not belong in the default
experience.

Every future concept in this section is labeled with its maturity status and an honest
assessment of what it would require to build well.

---

### AI-Assisted Monthly Summaries

**Status: Research**

Future monthly reports may include an AI-generated narrative summary that interprets
the month's monitoring data in the context of the specific customer's history.

Current report summary (static template):
> "December was a good month for your network. 14 of 14 monitored devices maintained
> high availability this month."

Future AI-assisted summary (context-aware):
> "December was your most reliable month in the past six months. The Branch Office
> router, which had three brief outages in November, was stable throughout December.
> The single event on December 22 — an 8-minute internet interruption — followed the
> same pattern as the ISP outage you experienced in September, which also resolved
> on its own."

The AI summary interprets patterns, makes comparisons, and uses the customer's own
device names and history — it does not generate generic commentary about what network
monitoring is.

**What this requires to do well:**
- 6+ months of customer-specific monitoring history
- Careful prompt engineering to prevent hallucinated technical claims
- Human review of summaries before delivery for the first several months
- Clear disclosure that the summary is AI-generated

**What it must not do:**
- Make causal claims it cannot support ("This outage was caused by...")
- Predict future outages with false confidence
- Use technical language the customer cannot evaluate

**WHY:** An AI summary that knows your specific history can tell you something a
template cannot: whether today is unusual or normal for you specifically. That
contextualized intelligence is the highest-value insight a monitoring report can provide.

---

### Predictive Pattern Recognition

**Status: Research**

As monitoring history accumulates, pattern recognition can surface warnings before
a device fails rather than only after:

Examples of detectable patterns:
- A device that historically goes offline every Sunday for 3 minutes (likely scheduled
  reboot) is expected; any deviation from that pattern is flagged as unusual
- A device that responded in under 10ms for 11 months begins responding in 40–80ms
  (possible hardware degradation or network congestion upstream)
- A device shows increasing check failures that resolve — but check failure rate doubles
  month-over-month (precursor to sustained outage)

Customer-facing presentation:

```
Pattern Alert — Branch Office Router
────────────────────────────────────────────────────────────────────────────
This device has been briefly unreachable more often this month than in any
previous month since we started monitoring it.

  January: 0 brief events
  February: 0 brief events
  March: 1 brief event
  April: 3 brief events (this month)

This could mean the router is aging, experiencing increased network load,
or starting to have hardware issues. It may be worth looking at before
it becomes a sustained outage.

[Open a support ticket about this]   [View full history]
```

**What this requires to do well:**
- Minimum 90 days of monitoring history per device
- Statistical baseline per device (not global thresholds)
- Conservative alerting — only flag genuine statistical anomalies, not normal variance
- Human review before automated "predictive alerts" are sent to customers

**What it must not do:**
- Predict specific failure dates ("Your router will fail within 30 days")
- Create anxiety about devices that are statistically normal
- Generate alerts for patterns that are within a device's historical normal range

**WHY:** Predictive pattern awareness converts monitoring from reactive (tells you after
something fails) to proactive (gives you a window to act before something fails). For
small businesses and organizations, even a one-week warning before a router failure can
mean the difference between a planned replacement and an emergency scramble.

---

### Anomaly Awareness Notifications

**Status: Research**

Anomaly awareness is distinct from predictive pattern recognition. Rather than analyzing
trends over time, anomaly detection identifies events that are statistically unusual
compared to a device's established baseline — even if the absolute numbers are still
within "healthy" ranges.

Example: a device that normally responds to checks in 4–8ms suddenly begins responding
in 280ms. The device is still "online" by every threshold check. But the response time
is 35× its normal value — a genuine anomaly.

Customer notification concept:

```
Subject: Unusual behavior noticed — Main Router

Hi [First Name],

We've noticed something worth flagging on your Main Router.

The device is still online and responding normally to our checks.
However, response times today are much higher than usual for this
device. This sometimes happens before a connectivity problem develops.

We're continuing to watch it. No action is required right now.
If you notice anything unusual with your internet connection, this
could be related. Feel free to contact us if anything seems off.

— BlackStorm Monitoring Team
```

**Key constraints on anomaly notifications:**
- Only sent when the anomaly is statistically significant (not minor variation)
- Clearly framed as "worth knowing" — not an alarm
- Always includes "no action required right now" when true
- Never speculates about causes with false confidence
- Volume-limited: maximum one anomaly notification per device per week

**WHY:** An anomaly that is below the alert threshold is exactly the kind of signal
customers cannot see on their own — but BlackStorm can, because it has the historical
baseline. Surfacing it with appropriate framing (curious, not alarming) gives the
customer actionable awareness without creating panic.

---

### Operational Recommendations Engine

**Status: Research**

Based on accumulated monitoring data and customer profile, a future recommendations
system could surface specific, actionable suggestions:

**Equipment age recommendations:**
> "Your Branch Office router has been monitored for 26 months and has had 7 outage
> events this year. Consumer-grade routers typically have a useful lifespan of 3–5
> years. If this router is over 3 years old, replacement may improve reliability."

**Network configuration recommendations:**
> "We've noticed your Branch Office and Main Office both experienced outages during
> the same 20-minute window on two occasions. This may indicate both sites share
> the same internet provider or upstream connection. We can discuss what this means
> for your backup options if you're interested."

**Service tier recommendations:**
> "You're currently monitoring 14 devices. Your Business plan includes up to 20.
> You have 6 slots available if you want to add devices."
>
> (Note: This is the one acceptable commercial recommendation — it is informational
> and never presented with upsell pressure or artificial urgency.)

**What this must never do:**
- Recommend products or brands BlackStorm is paid to promote (hardware commissions policy)
- Create false urgency ("Act now before your router fails")
- Recommend services BlackStorm does not currently offer as if they are available
- Make security claims beyond what monitoring can support

**WHY:** A recommendation engine that is honest, customer-first, and grounded in actual
data is one of the highest-trust features a monitoring service can offer. It demonstrates
that the service is working for the customer — not just watching passively. It must
be built carefully, because a recommendation engine that feels commercial or manipulative
will damage trust faster than any system failure.

---

### Guided Troubleshooting Assistant

**Status: Research**

A future troubleshooting assistant would walk customers through device-specific
diagnostic steps using plain-language, branching questions — not a generic checklist:

```
Let's figure out what's happening with Main Router.
────────────────────────────────────────────────────────────────────────────

Can you physically see the router right now?

  [Yes, I'm looking at it]    [No, it's at another location]


──── If YES ─────────────────────────────────────────────────────────────────

Is the power light on?

  [Yes, it's on]    [No, it's off or off-color]    [I'm not sure]


──── If YES ─────────────────────────────────────────────────────────────────

Can any devices in the building connect to the internet right now?

  [Yes, some devices work]    [No, nothing is working]    [Haven't checked]
```

Each branch leads to a specific, actionable recommendation — not a generic "restart
your router." The troubleshooting assistant knows which device is offline, where it is
located, and what its monitoring history looks like — so it can ask the right questions
rather than guessing.

**What this requires to do well:**
- Deep integration with device history and location data
- Extensive testing with non-technical users (not just engineers)
- Clear escalation path when the assistant reaches the limit of what it can diagnose
- "I'm stuck — get a person" option always visible

**What it must not do:**
- Pretend it can diagnose hardware failures remotely
- Provide guidance it is not qualified to give (network configuration, security changes)
- Block the customer from contacting support directly at any point

---

### Interactive Monitoring Labs (Educational Future Concept)

**Status: Research**

For customers who want to understand monitoring more deeply — or for IT contacts who
are onboarding their team — a future interactive lab concept would allow users to
explore a simulated network environment:

The simulation shows a fictional company's network (preset devices, realistic names,
staged events). The customer can:
- Watch a simulated outage occur in real time
- See how the alert is generated and delivered
- Follow the incident through resolution
- Practice navigating the portal during an active incident
- Try different notification settings and see how the alert changes

This is explicitly labeled as a simulation — none of the data is real, no alerts are
sent to real notification contacts, and the experience is clearly educational.

**WHY:** A customer who has "experienced" a simulated outage in a training environment
responds to a real outage with significantly more confidence than one who has only
read about what happens. Muscle memory built in simulation transfers to real events.
This concept is directly analogous to fire drills — not because fires are expected,
but because the response becomes automatic when it matters.

---

## Appendix A: Status State Reference

| State | Color | Icon | Text Label | Duration Logic |
|---|---|---|---|---|
| Healthy | Green #22C55E | ● | "Online" | Shows duration in current state |
| Attention | Amber #F59E0B | ◑ | "Checking" | Shows time since last response |
| Offline | Red #EF4444 | ● | "Offline" | Shows time since confirmed offline |
| Maintenance | Gray #94A3B8 | ○ | "Maintenance" | Shows window end time |
| No Data | Gray #64748B | ○ | "No data" | Shows period with no records |

All states: text label always shown. Color never the sole indicator.

---

## Appendix B: Alert Priority Decision Matrix

| Event type | Duration | Multi-device | Alert sent? | Priority |
|---|---|---|---|---|
| Single device offline | < 2 min | No | No | Monthly report only |
| Single device offline | 2–4 min | No | No | Digest if resolved, immediate if ongoing |
| Single device offline | > 4 min | No | Yes | Immediate |
| Multiple devices offline | Any | Yes | Yes | Immediate + aggregated |
| Device still offline at business hours start | Overnight | No | Yes | Business hours digest |
| Monitoring system degraded | — | — | Banner + email | Immediate |
| Maintenance window active | Scheduled | Varies | No | No alert during window |
| Recovery from confirmed outage | — | — | Yes | Immediate recovery notification |

---

## Appendix C: Feature Maturity Summary

| Feature / Concept | Status |
|---|---|
| Monitoring philosophy and scope definition | Current |
| Alert language standards | Current |
| Plain-language alert content structure | Current |
| "What BlackStorm can and cannot see" commitment | Current |
| Data retention policy | Current (being formalized) |
| Default-to-simple principles | Current |
| Four-state status model (Healthy / Attention / Offline / Checking) | Planned |
| Contextual status framing (expected vs. unexpected) | Planned |
| Alert confirmation logic (3-check before alerting) | Planned |
| Recovery notification emails | Planned |
| Four-section alert email structure | Planned |
| Alert aggregation for simultaneous multi-device events | Planned |
| Business hours notification routing | Planned |
| Morning digest for business-hours contacts | Planned |
| Three-layer visibility model (now / recently / over time) | Planned |
| Network health dashboard with location breakdown | Planned |
| Device status card design | Planned |
| Device detail view (Status / Notes / Technical Details tabs) | Planned |
| Device health timeline (30-day horizontal bar) | Planned |
| Device sorting by most-recently-offline | Planned |
| Active incident banner (persistent, auto-dismissing) | Planned |
| Incident timeline view (check-by-check log) | Planned |
| Recurring incident pattern flagging | Planned |
| Monthly uptime report with executive summary paragraph | Planned |
| On-demand report generation (custom date range) | Planned |
| 12-month trend chart | Planned |
| Customer-initiated maintenance windows | Planned |
| Maintenance window portal banner | Planned |
| BlackStorm maintenance advance notifications | Planned |
| Service status page (status.blackstorm.llc) | Planned |
| ISP vs. equipment distinction in incident notes | Planned |
| "Check now" on-demand device check (mobile) | Planned |
| Alert deep-link to affected device (mobile) | Planned |
| Mobile status-first dashboard layout | Planned |
| Screen reader support (aria-live, reading order) | Planned |
| Customer data export and deletion | Planned |
| AI-assisted monthly narrative summaries | Research |
| Predictive pattern recognition | Research |
| Anomaly awareness notifications | Research |
| Operational recommendations engine | Research |
| Guided troubleshooting assistant | Research |
| Interactive monitoring labs (simulation) | Research |
| SMS alert channel | Research |

---

*BlackStorm, LLC · Monitoring & Operational Visibility · Version 1.0 · May 2026*
*This document is internal working documentation. Review before external sharing.*
