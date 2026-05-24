# BlackStorm — Education & Customer Onboarding Experience
## Version 1.0 · May 2026

This document defines the philosophy, design direction, and detailed concepts for how BlackStorm
educates, onboards, and empowers customers — from the moment they first log in through the
ongoing life of their relationship with us.

The central goal is not to teach people to become network engineers. It is to help people feel
confident and informed about the technology they already have. Every onboarding decision, every
tooltip, every knowledge base article, and every guided walkthrough should serve that goal.

**Status of this document:** Vision and design specification. Features are labeled with their
current maturity: **Current** (conceptual, in active design), **Planned** (committed direction,
not yet built), or **Research** (future concept, being considered).

---

## Table of Contents

1. [New Customer Onboarding Philosophy](#1-new-customer-onboarding-philosophy)
2. [First Login Experience](#2-first-login-experience)
3. [Guided Setup Concepts](#3-guided-setup-concepts)
4. [Device Adoption Workflow](#4-device-adoption-workflow)
5. [Network Visibility Education](#5-network-visibility-education)
6. [WiFi Education Concepts](#6-wifi-education-concepts)
7. [Privacy & Security Education](#7-privacy--security-education)
8. [Support Knowledge Base Structure](#8-support-knowledge-base-structure)
9. [Video Training Concepts](#9-video-training-concepts)
10. [Non-Technical User Assistance](#10-non-technical-user-assistance)
11. [Dashboard Walkthrough Concepts](#11-dashboard-walkthrough-concepts)
12. [Notification & Alert Education](#12-notification--alert-education)
13. [Customer Confidence Strategy](#13-customer-confidence-strategy)
14. [Accessibility & Inclusiveness](#14-accessibility--inclusiveness)
15. [Mobile & Tablet Learning Experience](#15-mobile--tablet-learning-experience)

---

## 1. New Customer Onboarding Philosophy

### The Core Principle

Most technology onboarding fails because it is designed for the person who built the system,
not the person who has to live with it. BlackStorm's onboarding is built around a different
starting point: the customer is already anxious.

They may have just experienced a connectivity problem. They may be unsure what "network monitoring"
even means. They may have signed up because someone in their life told them they should. Whatever
the reason, the first experience with BlackStorm must immediately reduce that anxiety — not add
to it with jargon, complex forms, or overwhelming dashboards.

**The onboarding job is not to show features. The onboarding job is to create confidence.**

Every screen, every message, and every piece of educational content must answer the same question
from the customer's perspective: *"Does this help me feel less worried about my technology?"*

If the answer is no, the content needs to be rethought.

---

### Seven Onboarding Principles

**1. Lead with reassurance, not capability.**

The first thing a new customer sees should communicate safety, not sophistication. Before showing
dashboards, statistics, or settings, the experience should say — in plain terms — that they made
a good decision, that we are here, and that they do not need to understand everything right now.

*WHY:* Customers who feel reassured first are more willing to explore. Customers who feel
overwhelmed first leave, or worse, never actually use what they paid for.

---

**2. Respect their time and their intelligence.**

Every new customer understands their own life better than we understand it. They know whether
their internet goes out every Tuesday. They know which device matters most. They know what worries
them. Onboarding should ask them about their situation and then organize the experience around
their answers — not force them through a generic checklist.

*WHY:* Customers who feel heard become customers who trust. The fastest path to a loyal customer
is to treat their first five minutes with the product as a conversation, not a tutorial.

---

**3. Never make a customer feel unintelligent.**

Language like "configure your SNMP polling interval," "set the check frequency threshold," or
"choose your protocol stack" is appropriate between engineers. It is not appropriate in an
interface used by a church office manager or a homeowner.

Replace every technical term with the question that term answers for the user:
- "SNMP polling interval" → "How often should we check your devices?"
- "Alert threshold" → "How quickly do you want to know about a problem?"
- "Device host address" → "What's this device's IP address?" (with a tooltip explaining what
  an IP address is and how to find it)

*WHY:* Customers who understand what they are doing will use the product more, engage with
support less for basic questions, and recommend the service more confidently.

---

**4. Progressive disclosure — not all at once.**

Do not show every feature immediately. Show what the customer needs to answer their immediate
question, and reveal more only as they demonstrate readiness or curiosity.

A new customer needs to see three things:
1. Whether their devices are online right now
2. Whether anything went wrong recently
3. How to get help if they need it

Everything else can wait. Settings, reports, multi-user permissions, notification tuning —
these are appropriate after the customer has been using the service for a week or two.

*WHY:* Feature overload is one of the top reasons customers abandon SaaS products in their
first two weeks. Showing restraint in what you reveal — and timing disclosures well — keeps
customers engaged without overwhelming them.

---

**5. Every explanation assumes zero prior knowledge — without being condescending.**

There is a difference between writing for beginners and talking down to people. BlackStorm's
content should always assume the reader is new to the topic — but should always treat them as
a capable adult who can understand things when they are explained clearly.

The goal is the same clarity you would use to explain directions to a visitor to your city.
You do not assume they know the street names. You do not assume they are incapable of reading
a map. You just explain things in terms that work for someone who is new.

*WHY:* Content that assumes knowledge loses non-technical users. Content that feels
condescending loses everyone else. Plain, respectful clarity is the only approach that works
across the entire customer base.

---

**6. Celebrate small wins early.**

The first meaningful moment of satisfaction — seeing a device show "Online," receiving a test
alert that resolves correctly, or downloading a first report — should be acknowledged. A simple
message like "Your first device is being monitored. Here's what we'll do when it goes offline."
reinforces that the customer made a good choice.

*WHY:* Behavioral psychology is clear on this: early wins create investment. Customers who
experience a positive outcome in their first session are dramatically more likely to return.

---

**7. Set honest expectations from the beginning.**

Onboarding is the right time to be clear about what BlackStorm does and does not do. This is
not a disclaimer — it is a trust signal. A company that tells you its limits upfront is a
company you can believe when it tells you what it does well.

This means the onboarding flow should include at least one clear, plain statement such as:
"We monitor whether your devices are online and reachable. We do not monitor what you do
online, and we cannot see your files or network traffic."

*WHY:* Customers who feel deceived — even mildly, even by omission — are the customers who
leave angry reviews. Customers who feel well-informed become the customers who refer their
friends.

---

### Onboarding by Customer Type

Different customers arrive with different concerns. The onboarding philosophy adapts
to the specific situation while keeping the same core tone.

| Customer Type | Primary Anxiety | Onboarding Focus |
|---|---|---|
| Homeowner | "Is my internet working right now?" | Device status, simple alerts, easy dashboard |
| Small business owner | "Can I check on things without calling IT?" | Status at a glance, business-hours context |
| Church administrator | "What happens if we go down during a service?" | Alert timing, offline duration history |
| Office manager | "Will I get in trouble if something breaks?" | Clear alerts, paper trail, report downloads |
| Nonprofit IT contact | "I manage a lot — give me a clean view" | Multi-device overview, summary reports |
| MSP contact | "I need this to be efficient across clients" | Role-based access, per-site organization |

---

## 2. First Login Experience

### The Moment That Matters Most

A customer's first login is the highest-stakes moment in the entire customer relationship.
Everything that happens in that session determines whether they feel like they made the right
choice — or whether they start doubting it.

The first login experience has one job: make the customer feel oriented, informed, and ready
to take one simple next step.

---

### Welcome Screen Design Concept

**Status: Planned**

When a customer logs in for the first time, they do not land on an empty dashboard. They land
on a dedicated welcome screen — separate from the main portal — that does three things:

1. **Confirms their identity and account** — "Welcome, [First Name]. Your account is active."
2. **Tells them what to expect next** — "In the next few minutes, we'll help you get oriented."
3. **Shows their service status honestly** — "Your monitoring is being set up by the BlackStorm
   team. You'll receive an email when your first device is confirmed active."

This screen uses a warm, calm visual tone — the BlackStorm dark navy background, a single
friendly message, and one clear call to action: "Take a quick tour" or "Go to my dashboard."

**WHY:** Customers who land on an empty or confusing state immediately after login feel
abandoned. A purposeful welcome screen communicates that their arrival was expected and
that someone thought about their experience.

---

### First-Login Checklist Panel

**Status: Planned**

A dismissible panel in the top or side of the dashboard (not a modal that blocks everything)
shows a short onboarding checklist. Progress is tracked automatically.

```
Getting Started                                              [3 of 5 complete]
─────────────────────────────────────────────────────────────
 ✅  Log in to your portal
 ✅  Confirm your contact email
 ✅  Review your device list
 ○   Set up your notification preferences
 ○   Read your first status summary
                                              [Dismiss · I'll explore on my own]
```

Each checklist item is a link. Clicking takes the customer directly to the relevant section.

Items complete automatically when the customer performs the action — they do not need to
check boxes manually. The panel shows a brief congratulatory note when all items are complete,
then disappears from future sessions unless the customer wants to re-open it.

**WHY:** Checklists give customers a sense of progress and a clear sense of what "getting
started" means. Without a checklist, many customers spend their first session aimlessly
clicking around and leave without accomplishing anything meaningful.

---

### First-Login Tooltip Sequence

**Status: Planned**

On the first login only, a brief sequential tooltip walkthrough highlights the five most
important parts of the portal — without requiring the customer to take any action.

The sequence:

```
Step 1 of 5
───────────────────────────────────────────────────
    [Arrow pointing at status summary bar]

    "This is your Status Bar. It tells you at a
    glance how many devices are online, how many
    are offline, and whether any alerts are active."

                          [Next →]  [Skip tour]
```

```
Step 2 of 5
───────────────────────────────────────────────────
    [Arrow pointing at device list]

    "Your Device List shows every piece of equipment
    we're watching. Green means online. Amber means
    we haven't heard from it recently. Red means it
    appears to be offline."

                          [← Back]  [Next →]  [Skip]
```

And so on through: Alert History, Support access, Account settings.

The tour is dismissible at any step. It never re-appears after the first login unless the
customer explicitly requests it (via a "Restart tour" link in account settings).

**WHY:** Tooltip sequences introduce context at the right moment — when the customer is
looking at the thing being explained — rather than in a separate document they have to
remember to reference later.

---

### Post-Setup Confirmation Email

**Status: Planned**

After BlackStorm completes the monitoring setup for a new customer, an automated email is sent
confirming that their devices are active. This email is written as a personal communication,
not a system notification.

```
Subject: Your monitoring is active — here's what happens next

Hi [First Name],

Your devices are now being monitored by BlackStorm.

Here's what that means in practice:
  • We check each device every few minutes to confirm it's reachable.
  • If a device stops responding, we'll send you an alert to this email address.
  • You can log into your portal at any time to see the current status.

Devices currently being monitored:
  • [Device Name 1]
  • [Device Name 2]

If you notice anything missing or need to make a change, just reply to this email.

— The BlackStorm Team
```

**WHY:** A plain-language confirmation email closes the mental loop for new customers who
signed up and then waited. It reinforces what the service does, removes ambiguity about
whether anything went wrong during setup, and invites an easy first contact.

---

## 3. Guided Setup Concepts

### Philosophy: Setup Should Feel Like a Conversation

Most setup wizards feel like filling out a government form. They ask for information in the
order that is convenient for the system, not in the order that makes sense to the human.

BlackStorm's guided setup concepts are designed to feel like a short intake conversation:
"Tell us about yourself and your situation. We'll take care of the technical parts."

---

### New Account Setup Flow

**Status: Planned**

The guided setup flow runs the first time a customer accesses their portal after account
creation. It is 4 short steps, each with a single question and a brief plain-language
explanation of why it matters.

---

**Step 1: What kind of place are we helping?**

```
What best describes where you'll use BlackStorm?

  ○  My home or home office
  ○  A small business
  ○  A church or nonprofit
  ○  Multiple locations (I manage more than one site)
  ○  Something else

Why we're asking: We use this to organize your portal in the way
that makes most sense for you. Nothing is locked — you can change
this later.
```

This selection affects the default language used throughout the portal
(e.g., "Your home network" vs. "Your business network") and which
knowledge base articles are surfaced by default.

---

**Step 2: Who else needs access?**

```
Does anyone else need to log into your portal?

  ○  Just me
  ○  Me and one or two others (partner, assistant, IT contact)
  ○  A team of people

You can always add people later. We're just asking so we know
whether to show you the team setup options now or keep things simple.
```

This gates multi-user setup instructions — customers who select "Just me"
don't see team management options until they ask for them.

---

**Step 3: How do you want to be notified?**

```
How should we contact you when something goes wrong?

  ✅  Email (already set to: [email from account])

  ○  Text message (SMS) — we'll ask for your number
  ○  Both email and text

For now, we recommend email. You can adjust this any time in
your notification settings.
```

Simple, low-friction. Not asking about escalation schedules, quiet hours,
or alert thresholds on the first day — those are week-two settings.

---

**Step 4: Tell us one thing that worries you.**

```
Is there a specific device or situation you're most concerned about?

  (Optional — you can skip this)

  [ text input — free response ]

Examples: "My main router goes out a lot," "We had an internet
outage during a church service last spring," "My NAS drive
disappeared once and I didn't notice for a week."

We use this to make sure your monitoring is prioritized for what
matters most to you.
```

This answer goes directly to the BlackStorm team, not into an automated
workflow. It gives us context we cannot get from device data alone.

**WHY:** Open-ended intake creates trust. Customers feel heard before they
have even finished setting up. It also gives the support team genuinely
useful context about each customer's situation.

---

### Role-Based Onboarding Concepts

**Status: Planned**

When a new user is added to an existing account (as Admin or Observer), they receive a
tailored onboarding experience based on their role — not the full owner setup flow.

**Admin onboarding:**
- Skip payment and billing setup (not their responsibility)
- Focus on device management, alert configuration, and support ticket creation
- Include: "Your portal access was set up by [Owner Name]. Here's what you can do."

**Observer onboarding:**
- Skip all configuration steps
- Show a read-only orientation of the status dashboard and alert history
- Include: "You have view-only access. If something looks wrong, here's how to contact
  your admin or reach BlackStorm support."

**WHY:** Showing an Observer the "set up your team" screen wastes their time and creates
confusion about what they can actually do. Role-appropriate onboarding builds confidence
by making the initial experience match the user's actual responsibilities.

---

## 4. Device Adoption Workflow

### The Problem with Traditional Device Setup

Most network monitoring tools ask users to enter IP addresses, configure SNMP communities,
select monitoring protocols, and set check intervals. For a network engineer, this is
routine. For a homeowner or church administrator, it is a reason to cancel.

BlackStorm's device adoption workflow reverses this: the customer provides a device name
and an IP address (or asks us to handle it). We handle everything else.

---

### Adding a Device: Customer-Facing Flow

**Status: Planned**

The "Add a Device" form is kept deliberately minimal:

```
Add a New Device
───────────────────────────────────────────────────────────

  What do you call this device?
  [ Main Router                           ]
  Examples: "Living room TV," "Office printer," "Back-office server"

  What's its IP address? (optional)
  [ 192.168.1.1                           ]
  [?] What's an IP address and how do I find it?

  Where is this device located?
  [ Main office ▾ ]

  Notes for our team (optional)
  [ This router reboots every few days     ]

  [Cancel]                         [Submit to BlackStorm →]
```

The form submits to the BlackStorm team — who configure the actual monitoring — rather
than directly writing to a monitoring system. This keeps the customer experience simple
while maintaining configuration accuracy.

**WHY:** Removing technical fields from the customer form eliminates the #1 source of
setup failures — wrong values entered by well-meaning but non-technical users. Customers
feel capable because the form asks questions they can answer. We get accurate
configuration because we handle the technical parts.

---

### "What's an IP Address?" Tooltip Pattern

**Status: Planned**

Every technical term in the device form is followed by a `[?]` link that reveals a
contextual tooltip with a plain-language explanation and, where appropriate, step-by-step
help for finding the value.

Example tooltip for "IP address":

```
┌─────────────────────────────────────────────────────┐
│  What's an IP address?                              │
│                                                     │
│  An IP address is a number that identifies a        │
│  specific device on your network. It looks like     │
│  this: 192.168.1.1                                  │
│                                                     │
│  How to find it:                                    │
│  • On most home routers, log into the admin page    │
│    (usually 192.168.0.1 or 192.168.1.1)             │
│  • On a Windows computer: open Command Prompt,      │
│    type ipconfig, look for "Default Gateway"        │
│  • On a Mac: Apple menu → System Settings →         │
│    Network → your connection → Details              │
│                                                     │
│  Not sure? Leave it blank and add a note. We'll     │
│  work it out with you.                              │
│                                          [Got it ✕] │
└─────────────────────────────────────────────────────┘
```

**WHY:** Contextual help within the form means customers do not have to leave the page
to look something up. The "Leave it blank and add a note" escape hatch is critical —
it tells non-technical users that not knowing something is acceptable and will not break
the process.

---

### Device Status Communication

Once a device is confirmed active, the customer receives a brief email:

```
Subject: [Device Name] is now being monitored

Hi [First Name],

Good news — [Main Router] is now active in your monitoring.

What this means:
  • We check it every few minutes to confirm it's reachable.
  • If it goes offline, you'll receive an alert.
  • You can see its status in your portal at any time.

Log in to see your device →
```

**WHY:** A per-device confirmation email creates a moment of visible value. Each device
confirmed is a small win. Over time, these small wins compound into a sense of confidence
in the service.

---

### Device History & Context

**Status: Planned**

Each device in the portal has a detail view showing:
- Current status (Online / Offline / Checking)
- How long it has been in its current state (in human terms: "Online for 6 days, 14 hours")
- A simplified event timeline showing the last 10 status changes
- The device name, location, and any notes

The detail view does not show raw monitoring data — no response times in milliseconds,
no SNMP OIDs, no protocol details unless the customer specifically requests "Technical Details."

The "Technical Details" toggle (collapsed by default) reveals the underlying data for
customers who want it. This is progressive disclosure in practice: the information exists,
but it does not appear unless invited.

**WHY:** Non-technical customers are overwhelmed by data they cannot interpret. Hiding
advanced data by default — while making it available on request — serves both audiences
without compromising either.

---

## 5. Network Visibility Education

### The Core Translation Problem

"Network monitoring" means something specific to an IT professional. To most customers,
it is abstract at best and intimidating at worst. The first educational job is to translate
"network monitoring" into something concrete and personally meaningful.

The translation is always from mechanism to outcome:

| What it is (technical) | What it means (to the customer) |
|---|---|
| ICMP ping check | "We knock on the door to see if your device answers" |
| Polling interval | "How often we check on each device" |
| Response timeout | "How long we wait before deciding something is wrong" |
| Uptime percentage | "Out of a whole month, how much time was everything running" |
| Alert notification | "We send you a message when something stops responding" |
| Recovery notification | "We tell you when it comes back online" |
| Device reachability | "Whether we can 'see' the device from our monitoring system" |

---

### "How Monitoring Works" Explainer Concept

**Status: Planned**

A short, illustrated explainer — accessible from the portal help menu and the public
knowledge base — explains the monitoring process using a postal analogy:

> **"Think of it like a mail route."**
>
> Every few minutes, our monitoring system sends a small digital "knock" to each device
> on your network — the way a mail carrier checks a box. If the device answers, it's marked
> Online. If it doesn't answer after a few tries, we mark it Offline and send you an alert.
>
> When the device comes back online — because someone rebooted it, the internet came back,
> or the problem resolved itself — we send you a recovery message so you know it's working again.
>
> That's it. We're not reading your data, watching your traffic, or logging what you do online.
> We're just checking whether your devices are there.

This explainer uses no acronyms, no technical terms, and no fear language. It ends with
a clear statement of what monitoring is *not* — because many customers worry about privacy.

**WHY:** Analogies work because they connect unfamiliar concepts to familiar ones. A customer
who understands monitoring as "a regular check-in" is far less likely to panic when they
receive an alert, because they understand what triggered it.

---

### Status Indicator Education

**Status: Planned**

Status indicators — green, amber, red — are never shown alone. Every status indicator has:

1. A text label alongside it (not just a colored dot)
2. A brief plain-language explanation on hover or tap
3. A time context (how long in this state)

```
● Online   ·  12 days, 6 hours
```

```
● Checking   ·  No response for 3 minutes
   We're trying again. If this continues, you'll receive an alert.
```

```
● Offline   ·  Since 9:14 AM today
   We haven't received a response from this device since this morning.
   An alert was sent to your notification contacts.
   [View Alert Details]
```

**WHY:** Color alone fails colorblind users and fails users in bright sunlight on mobile
devices. But more importantly, a colored dot without explanation leaves a customer to guess
what it means. Customers who have to guess generate support tickets. Customers who are
clearly informed take appropriate action on their own.

---

### Uptime Explained in Human Terms

**Status: Planned**

Uptime percentages are always accompanied by a plain-language translation:

| Uptime % | Translation shown in portal |
|---|---|
| 100% | Everything was online all month |
| 99.9% | About 44 minutes of downtime this month |
| 99.5% | About 3.6 hours of downtime this month |
| 99.0% | About 7.3 hours of downtime this month |
| 98.0% | About 14.6 hours of downtime this month |
| 95.0% | About 36 hours of downtime this month |

The portal displays both the percentage and the translation, with the translation in
slightly larger, bolder text — because the translation is what most customers actually
care about.

**WHY:** "99.9% uptime" sounds impressive but is meaningless without context. "About
44 minutes of downtime" is something a business owner can evaluate against their
actual experience. Numbers without context are not information — they are trivia.

---

## 6. WiFi Education Concepts

### Why WiFi Education Matters

WiFi problems are the most common technology frustration for home users and small
businesses. They are also among the most misunderstood — because the symptoms
(slow internet, dropped connections, dead zones) often have multiple possible causes,
and most people have been given incorrect diagnoses ("just restart the router").

BlackStorm's WiFi education is designed to give customers a working mental model of
how WiFi behaves — not the engineering details, but enough to understand what the
problem might be and whether to call us.

---

### WiFi Concept: Signal vs. Speed vs. Congestion

**Status: Current (Knowledge Base content)**

One of the most common misconceptions is that "weak WiFi signal" and "slow internet"
are the same problem. They are often not.

A plain-language knowledge base article explains this in three sections:

**Signal strength** is about whether your device can hear the router.
Think of it like being in a building talking to someone. If you're right next to them,
you can hear every word clearly. If you're across the building with walls between you,
you might still hear them — but you have to strain.

**Internet speed** is about how much data your internet service provider sends to your router.
This is what you're paying for. If you have slow internet from your provider, you will have
slow internet everywhere in your home — whether you're connected by cable or WiFi.

**Congestion** is about how many devices are sharing the connection at once.
Your internet plan has a total speed. If your household has 12 devices streaming video
and video-calling at once, every device gets a smaller share. This is not a WiFi problem
— it is a capacity problem.

Understanding which category your problem falls into helps diagnose it correctly.

---

### WiFi Assessment Education

**Status: Current (Service explanation content)**

Before BlackStorm performs a WiFi assessment, customers receive a plain-language overview
of what the assessment covers and what they will learn:

```
What a WiFi Assessment Looks For
─────────────────────────────────
  Coverage mapping    Where your signal is strong, weak, or absent
  Channel interference Whether neighboring networks are competing with yours
  Band usage          Whether your devices are connecting to the right frequency
  Dead zones          Specific areas with consistently poor coverage
  Equipment age       Whether your hardware is limiting performance
  Placement issues    Whether router location is affecting signal reach
```

Each item links to a brief explanation of what it means and why it matters.

**WHY:** Customers who understand what they are getting before an assessment starts
are more satisfied with the results — even when the news is neutral or mixed — because
they know what questions were being answered.

---

### WiFi Vocabulary Reference

**Status: Planned (Knowledge Base article)**

A simple glossary written for non-technical readers:

| Term | What it means |
|---|---|
| 2.4 GHz | The "longer range but slower" WiFi band. Goes through walls better. |
| 5 GHz | The "faster but shorter range" WiFi band. Best close to the router. |
| 6 GHz | Newest, fastest band. Best within the same room as the router. |
| SSID | The name of your WiFi network (what you see when you choose a network). |
| Channel | Which "lane" of the WiFi frequency your network uses. |
| Access point | A device that extends your WiFi to a new area. |
| Mesh network | Multiple access points that work together as one seamless network. |
| Bandwidth | How much data your connection can carry at once. |
| Latency | How long it takes for a signal to make a round trip. Affects video calls. |
| Dead zone | An area where WiFi signal doesn't reach reliably. |
| Interference | Other devices or networks disrupting your WiFi signal. |

All terms link to longer articles when relevant. The glossary itself stays short —
it is a quick reference, not a textbook.

---

## 7. Privacy & Security Education

### The Philosophy: Honest and Non-Alarmist

Privacy and security education is an area where many companies fail in one of two ways:
either they understate risks to avoid worrying customers, or they overstate risks to
create fear and drive upsells.

BlackStorm's approach is neither. It is:

- Honest about what risks exist
- Clear about what BlackStorm does and does not do about those risks
- Non-alarmist in tone
- Specific about what actions customers can take if they choose to
- Free from pressure, upselling, or scare tactics

The educational goal is to help customers make informed decisions — not to make decisions
for them or manipulate them through fear.

---

### "What We Can and Cannot See" Education

**Status: Current (Privacy Policy + Knowledge Base)**

One of the most important privacy education pieces is a plain-language article titled
exactly: **"What BlackStorm Can and Cannot See."**

```
What BlackStorm CAN see:
  ✓ Whether your devices are online or offline
  ✓ How long a device has been in a given state
  ✓ The IP addresses of your monitored devices
  ✓ Basic response information (did the device answer our check?)

What BlackStorm CANNOT see:
  ✗ What you do online
  ✗ What websites you visit
  ✗ The contents of your files
  ✗ Your passwords, messages, or accounts
  ✗ Traffic on your network beyond the monitoring checks we send
  ✗ What other devices on your network are doing
```

This article lives on the public website, in the portal help section, and is linked
from the first-login welcome screen. It is the most important trust-building document
in the customer education system.

**WHY:** Privacy anxiety is one of the top reasons people hesitate to sign up for any
technology service. Addressing it directly — before customers ask — removes a barrier
that they may not have been willing to raise themselves.

---

### Privacy Guidance Service Education

**Status: Current (Service explanation content)**

For customers who use BlackStorm's privacy guidance service, a separate educational
track helps them understand the difference between:

- **Privacy from BlackStorm** — what we can and cannot access as your service provider
- **Privacy from others** — practical guidance on protecting your data from third parties
- **Network-level privacy considerations** — how traffic is routed and what that means

This educational content is always accompanied by a clear disclaimer:

> BlackStorm does not provide legal, compliance, or cybersecurity services. Our privacy
> guidance service helps customers understand general privacy concepts and make informed
> technology choices. For legal or regulatory compliance needs, consult a qualified attorney
> or compliance professional.

---

### Security Concepts: Non-Alarmist Framing

**Status: Planned (Knowledge Base)**

Security education at BlackStorm is framed around three questions that any non-technical
person can meaningfully act on:

**1. Who can get into your network?**
- Is your WiFi password secure and private?
- Do guests use the same network as your devices?
- Have you changed default login credentials on your router?

**2. Who can see your activity?**
- What does your internet service provider see?
- What does a website see when you visit it?
- What does a VPN change about either of these?

**3. Who has access to your accounts and data?**
- Are important accounts using strong, unique passwords?
- Do important accounts have two-step verification enabled?
- Is your data backed up somewhere you control?

Each question links to a plain-language article — not a lecture, but a short, specific
guide with clear recommended steps. The articles never use fear as motivation. They
use the same tone as a knowledgeable friend explaining something over coffee.

---

## 8. Support Knowledge Base Structure

### Design Philosophy

The BlackStorm knowledge base is not a documentation dump. It is a curated library,
organized for people who arrive with a problem — not people who want to read comprehensively.

Most knowledge bases fail because they are organized by product structure rather than
customer intent. BlackStorm's KB is organized by the question a customer is asking.

---

### Primary Organization: By Question, Not By Feature

**Status: Current (KB structure in place)**

The KB homepage presents six question-based topic areas:

```
Getting Started
  "I'm new here — what do I need to know?"

Understanding Your Dashboard
  "I logged in. What am I looking at?"

Alerts & Notifications
  "I received an alert. What does it mean and what should I do?"

WiFi & Connection Help
  "My WiFi is slow, unreliable, or has dead zones."

Privacy & Technology Guidance
  "I have questions about who can see what on my network."

Billing & Account
  "Questions about my plan, my invoice, or my account settings."
```

Each section shows 5–7 of the most-read articles first. A search bar is prominently
placed above all sections.

**WHY:** Customers who arrive with a problem want to see that problem reflected in the
navigation immediately. A library organized by feature name ("Monitoring Configuration")
is useful only if you already know the system. A library organized by customer question
works regardless of knowledge level.

---

### Article Design Standard

**Status: Current**

Every knowledge base article follows the same structure:

**Title:** A complete question or situation description.
- Good: "My device shows Offline but I can connect to it. What does that mean?"
- Avoid: "Offline Status Troubleshooting"

**Opening summary (1–2 sentences):** What this article covers and who it is for.

**Plain-language explanation:** The concept in question, explained without jargon. If
a technical term must appear, it is defined inline the first time it is used.

**Step-by-step guidance (where applicable):** Numbered steps with screenshots or
illustrations. Each step contains exactly one action.

**"What to do if this doesn't help" section:** A link to the next article in the
diagnostic path, plus a one-click option to open a support ticket with the article
context pre-filled.

**Related articles:** 2–3 links to genuinely related content. Not algorithmically
generated — curated by the support team.

---

### Search Experience

**Status: Planned**

The KB search understands natural-language queries written by non-technical users:

| Customer types | KB matches |
|---|---|
| "my internet is out" | Offline device alert, Router monitoring, ISP vs. router issues |
| "I got an alert but everything looks fine" | Alert false positives, Flapping devices, Recovery notifications |
| "can you see what I do online?" | What BlackStorm can and cannot see, Privacy policy summary |
| "wifi keeps dropping" | WiFi troubleshooting, Channel interference, Band optimization |
| "forgot my password" | Reset portal login, Notification email changes |

Search results show a brief excerpt from each article so customers can confirm the article
addresses their specific situation before clicking.

**WHY:** Non-technical users search in natural language. A search engine that requires
the correct technical term is not a search engine for non-technical users — it is a
search engine for people who already know the answer.

---

### Content Maintenance Standard

Knowledge base articles are reviewed on a quarterly schedule:
- Remove outdated guidance
- Update screenshots when UI changes
- Add new articles within 2 weeks of a new common support question appearing

The KB is treated as a living document, not a static archive. Stale content damages trust
faster than no content — because a customer who follows outdated steps and fails learns
that the KB cannot be trusted.

---

## 9. Video Training Concepts

### Philosophy: Short, Specific, Honest

**Status: Research**

Future video training at BlackStorm follows the same principles as written content: plain
language, no jargon, non-alarmist, honest about complexity.

The video content philosophy is built on three constraints:

**Every video answers exactly one question.**
Not "Introduction to Network Monitoring" — too broad. Instead: "How do I add a new device
to my monitoring?" Each video is complete in itself. Customers watch it, get their answer,
and leave.

**Maximum length: 3 minutes for task-based videos, 5 minutes for concept videos.**
Longer videos lose non-technical viewers at the beginning — before the relevant content
appears. If a topic cannot be covered in 3 minutes, it needs to be split into two videos.

**Every video has a text alternative.**
For accessibility, for search, and for customers who prefer reading. The transcript is
never an afterthought — it is written with the same care as the video script and
published alongside the video in the KB.

---

### Planned Video Categories

**Series 1: Getting Started (5 videos, 2–3 min each)**
1. What to expect when you first log in
2. How to read your dashboard at a glance
3. Understanding the green, amber, and red status indicators
4. How to add a note to a device
5. How to open a support ticket

**Series 2: Understanding Your Network (6 videos, 3–5 min each)**
1. What network monitoring actually checks
2. The difference between WiFi signal and internet speed
3. What an IP address is and why it matters
4. What happens when a device goes offline (and why it comes back on its own)
5. What "uptime" means for your business
6. When to call us vs. when to restart the router yourself

**Series 3: Privacy & Your Data (4 videos, 3–5 min each)**
1. What BlackStorm can and cannot see
2. Who else can see your internet traffic (your ISP, websites you visit)
3. Simple steps to improve your home or business network privacy
4. How to understand your monthly report

**Series 4: Getting the Most From Your Service (4 videos, 2–3 min each)**
1. Setting up alert notifications
2. Reading your monthly report
3. Adding someone to your account
4. Requesting a change through your portal

---

### Interactive Video Concepts

**Status: Research**

Future video training may include branching scenarios — videos where the customer
makes a choice at a decision point and the video follows the relevant path.

Example concept for troubleshooting:
```
  "Your dashboard shows one device offline. What do you do first?"
    → Choice A: "I can physically see and touch the device"
        → Video continues: "Walk over to it. Is the power light on?"
    → Choice B: "The device is in another location"
        → Video continues: "Let's figure out if it's a device problem or
          a connection problem from here."
```

This concept mimics how a support call would actually go — a patient, branching
conversation rather than a one-size-fits-all tutorial.

**WHY:** Interactive scenarios reduce the gap between "watched a tutorial" and
"knows what to do." Customers who have mentally walked through a decision before
they face it in real life are significantly more confident and effective.

---

## 10. Non-Technical User Assistance

### The Core Commitment

BlackStorm's entire service exists at the intersection of technical systems and
non-technical users. Every piece of educational content, every UI decision, and every
support interaction must work for someone who has no IT background.

This is not a constraint — it is the design requirement. Building for the least
technically experienced user makes the product better for everyone.

---

### Language Standards

**Status: Current (applies to all content)**

All customer-facing content — portal UI, emails, KB articles, support responses,
onboarding flows — must pass a plain-language review before publication:

**Avoid:**
- Acronyms without definitions on first use (IP, DNS, DHCP, ICMP, SNMP, SSL, VPN,
  LAN, WAN, AP, SSID, MTU, VLAN, QoS)
- Passive voice in instructions ("The device should be configured to...") → Use active
  voice ("Configure the device to..." or "We configure the device to...")
- Hedged language that increases anxiety ("The monitoring system may or may not detect...")
  → Use specific language ("If a device stops responding, you'll receive an email.")
- Length for its own sake — short explanations are almost always better than long ones

**Use:**
- Everyday analogies (mail carriers, knocking on doors, phone calls)
- Active, direct sentences
- Concrete examples with real names ("Your main office router," not "Node 1")
- Human-readable time formats ("About 3 hours ago," not "10,847 seconds")
- Specific numbers when relevant, with context ("3 times," not "several times")

---

### Jargon Translation Reference (Customer-Facing)

**Status: Current**

| Technical term | Approved plain-language equivalent |
|---|---|
| ICMP ping | A quick check to see if a device answers |
| Polling interval | How often we check on a device |
| Timeout / response timeout | How long we wait before deciding something is wrong |
| Node | Device |
| Host | Device |
| Endpoint | Device |
| NMS | Monitoring system (or "our monitoring system") |
| SNMP | Background monitoring language that devices use to share status |
| Latency | How long it takes for information to travel back and forth |
| Packet loss | Information being dropped before it arrives |
| Bandwidth | How much data your connection can carry at once |
| TTL | How long information stays fresh before being checked again |
| SLA | Service agreement (use "what we promise" or "our commitment") |
| Uptime | How much of the time your devices were online |
| Failover | A backup that takes over when the main thing fails |
| Subnet | A section of your network |
| Gateway | The device that connects your network to the internet (usually your router) |
| DNS | The service that turns website names into addresses |

---

### Contextual Help System

**Status: Planned**

Every form field, status indicator, and data table in the portal has a contextual help
trigger — a small `[?]` or `ⓘ` icon that reveals a short plain-language explanation
without leaving the page.

Contextual help guidelines:
- Maximum 3 sentences
- Must answer: "What is this?" and "Why does it matter?"
- Must include: "If you're not sure, [what to do]"
- Must NOT include: technical terms that require their own explanation

Example — contextual help for "Last Seen" column in device table:

```
[?] Last Seen

This shows the last time we successfully reached this device.
"2 hours ago" means we haven't received a response in 2 hours,
which may mean the device is offline or unreachable.

If this seems wrong, check that the device is powered on and
connected. You can also contact support if you'd like us to
investigate.
```

---

### "I Don't Know" Escape Hatches

**Status: Planned**

Every form that asks for technical information includes an explicit "I'm not sure" option
that prevents customers from getting stuck. When selected, the form captures what the
customer does know, flags the item for BlackStorm follow-up, and allows the customer
to continue.

Examples:
- IP address field: "I don't know the IP address — [ask BlackStorm to find it]"
- Device type field: "I'm not sure what kind of device this is — [describe it instead]"
- Notification timing field: "I'm not sure what makes sense — [use recommended defaults]"

**WHY:** A customer who gets stuck in a form doesn't contact support — they usually just
abandon the process. Escape hatches prevent dropout at the moment of confusion without
requiring the customer to admit to anyone that they were stuck.

---

### Support Ticket Context Pre-Fill

**Status: Planned**

When a customer opens a support ticket from within the portal, the ticket is automatically
pre-filled with context the support team needs — device status at time of submission,
any recent alerts, account type, location — so the customer does not need to describe
the technical state of their system.

The customer is only asked to describe what they noticed in their own words:

```
Tell us what happened in your own words:
[ My internet has been slow all morning and one of my devices
  shows orange in the portal. I'm not sure if they're related. ]

Is anything time-sensitive about this?
  ○ No rush — whenever you can get to it
  ○ This is affecting my work right now
  ○ This is urgent — something is fully down
```

Everything else — account number, device list, alert history, recent changes — is
attached automatically.

**WHY:** Asking non-technical users to describe their system state in technical terms
is a barrier to getting help. Removing that barrier means customers contact support
sooner, when problems are smaller — rather than after they have escalated.

---

## 11. Dashboard Walkthrough Concepts

### Design Principle: Every Metric Earns Its Place

The BlackStorm portal dashboard shows only information that a non-technical customer
can meaningfully interpret and act on. Any metric that requires engineering context
to understand does not belong on the default dashboard — it belongs in a "Technical
Details" view accessible on request.

---

### Dashboard Layout & Explanation

**Status: Planned**

The primary dashboard has three zones, each with a specific communication purpose:

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ZONE 1 — STATUS BAR (always visible, persistent)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │ ● 14 Online  │  │ ● 1 Offline  │  │ ○ No active  │                  │
│  │              │  │  Since 9 AM  │  │   alerts     │                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│                                                                         │
│  ZONE 2 — RECENT ACTIVITY (last 24 hours)                               │
│  ─────────────────────────────────────────────────────────────────────  │
│  Today, 9:14 AM  ●  Main Router went offline                            │
│  Today, 9:22 AM  ●  Main Router came back online  (8 minutes offline)  │
│  Yesterday       ●  Everything was online all day                       │
│                                                                         │
│  ZONE 3 — DEVICE LIST (with inline status)                              │
│  ─────────────────────────────────────────────────────────────────────  │
│  Main Router          ● Online    12 days                               │
│  Office Switch        ● Online    12 days                               │
│  Back Server          ● Online    5 days                                │
│  Backup NAS Drive     ● Online    12 days                               │
└─────────────────────────────────────────────────────────────────────────┘
```

**Zone 1 (Status Bar):** Answers the primary customer question — "Is everything OK?" —
in under 3 seconds. Numbers are large, status is color-coded with text labels, and
offline devices are flagged with the approximate time they went offline.

**Zone 2 (Recent Activity):** Answers the follow-up question — "Did anything happen
recently?" — in a narrative timeline format rather than a data table. Events are
described in plain language with human-readable timestamps.

**Zone 3 (Device List):** Provides the full picture for customers who want to check
specific devices.

---

### Dashboard Walkthrough: Interactive Overlay Concept

**Status: Planned**

The interactive walkthrough is a layered overlay — not a separate page — that highlights
each dashboard zone with an explanation bubble:

```
Walkthrough Step 2 of 4
────────────────────────────────────────────────────────
  [Highlighted: Recent Activity section]

  "Your Recent Activity log shows events from the past
  24 hours in plain language.

  If a device went offline and came back on, you'll see
  both events — along with how long it was down.

  If nothing happened, the log shows that too. Quiet
  is good."

  ○ ● ○ ○                [← Previous]  [Next →]  [Exit]
────────────────────────────────────────────────────────
```

The walkthrough is:
- Accessible from the Help menu at any time
- Skippable at any step
- Safe — it never changes any data or settings
- Resettable from account settings if a customer wants a refresher

**WHY:** Dashboard walkthroughs that can be re-triggered on demand are far more useful
than one-time onboarding flows. A customer who is confused three weeks in can re-run
the walkthrough rather than opening a support ticket.

---

### "What Does This Number Mean?" Inline Education

**Status: Planned**

Every metric on the dashboard responds to a tap or hover with a brief, specific
explanation of what that number represents in the customer's situation — not a generic
definition.

Example:

```
[Tap on: "99.7% uptime this month"]

  ┌────────────────────────────────────────────┐
  │  What does 99.7% uptime mean?              │
  │                                            │
  │  This month, your devices were online for  │
  │  99.7% of the time.                        │
  │                                            │
  │  That's about 2.2 hours of total downtime  │
  │  across all monitored devices this month.  │
  │                                            │
  │  Most of that was the 8-minute outage on   │
  │  Tuesday morning (Main Router).            │
  │                                    [Close] │
  └────────────────────────────────────────────┘
```

The explanation is personalized — it references the actual events from the customer's
own data, not a generic definition.

---

## 12. Notification & Alert Education

### The Alert Communication Problem

Alerts are the most emotionally charged moment in any monitoring relationship.
A notification that something went offline lands in a customer's inbox and
immediately creates a stress response — before they know whether the problem is
serious, minor, or already resolved.

BlackStorm's alert education strategy has one job: reduce the emotional cost of alerts
by giving customers the context they need to respond appropriately.

---

### Alert Email Anatomy Education

**Status: Planned**

The first time a customer receives an alert, a follow-up email (sent after the alert
resolves or after 30 minutes, whichever comes first) explains the parts of the alert
email and what each section communicates:

```
Understanding your alert email
────────────────────────────────────────────────────────────────
[Alert subject line example]  OFFLINE · Main Router · Since 9:14 AM

What the subject line tells you:
  OFFLINE — the device has stopped responding to our checks
  Main Router — the specific device that went offline
  Since 9:14 AM — the exact time we first noticed the problem

[Alert body example]
  Your device "Main Router" has stopped responding.
  We've been checking every 3 minutes since it went offline.
  ...

What the alert body tells you:
  • The exact device (using the name you gave it, not a technical ID)
  • How we've been monitoring since the alert triggered
  • What a recovery notification will look like when the problem resolves
  • One action you can take right now if you choose to
```

**WHY:** Teaching customers how to read an alert — after receiving their first
real one — is far more effective than teaching them before the fact, because the
context is real and personal. The emotional stakes also make it more memorable.

---

### "Alert — But Everything Seems Fine" Education

**Status: Planned — Knowledge Base article**

One of the most common support questions after an alert: "I got a notification that
my router went offline, but when I checked, everything was working. Did something go
wrong?"

A knowledge base article explains this specifically:

> Sometimes a device stops responding to our monitoring check for a brief moment — and
> then comes back before you even read the alert. This can happen for several reasons:
>
> • **Brief internet hiccup** — Your ISP had a moment of instability that lasted only
>   seconds. This is normal and not a cause for concern unless it happens frequently.
>
> • **Device was rebooting** — Routers and switches sometimes restart on their own to
>   apply updates. This is normal behavior and usually resolves in under 2 minutes.
>
> • **Network congestion** — Under very heavy load, some devices temporarily stop
>   responding to monitoring checks. If this happens often, it may be worth investigating.
>
> If you received an alert and a recovery notification within a few minutes, and
> everything seems normal now, you probably don't need to do anything. We call this
> a "transient event."
>
> If it happens frequently — say, more than once or twice a week — that pattern is
> worth looking at, even if each individual event resolves quickly. Contact us and
> we'll review the history with you.

---

### Alert Fatigue Prevention Education

**Status: Planned**

Customers who receive too many alerts stop reading them. This is one of the most
serious operational risks in monitoring services — an ignored alert is a missed outage.

The portal includes an "Alert Patterns" section that shows alert frequency trends and
flags when alert volume is increasing. When alert frequency becomes high, the customer
receives a proactive communication:

```
Subject: We noticed your alerts are increasing

Hi [First Name],

You've received more alerts this week than in previous weeks. This can happen
for a few reasons:

  • A device on your network is having instability issues
  • Network conditions in your area have been less reliable
  • Your notification settings may need adjustment

We can review your alert history and make recommendations. If you'd like,
reply to this email or open a ticket in your portal. We'll take a look
at what's happening and explain what we find.

— BlackStorm Support
```

**WHY:** Proactively addressing alert fatigue signals that BlackStorm is paying attention
and has the customer's long-term interest in mind — not just delivering notifications
on autopilot. It also catches real problems before they become serious.

---

### Alert Severity Framework (Customer-Facing)

**Status: Planned**

Rather than using technical severity levels (P1/P2/P3 or Critical/High/Medium),
BlackStorm uses customer-impact language:

| Indicator | What it means |
|---|---|
| **Needs attention** (amber) | Something changed that is worth knowing about |
| **Something is offline** (red) | A device stopped responding — this may affect your service |
| **Resolved** (green) | A previous alert has been resolved — everything is back |
| **We're looking into it** | BlackStorm has noticed this and is investigating |

The severity framework is explained in the portal help section with examples of what
each level looks like in practice.

---

## 13. Customer Confidence Strategy

### What Confidence Means in This Context

A confident customer is one who:
- Understands what the service is doing on their behalf
- Knows what to do (or who to contact) when something goes wrong
- Does not feel dependent on jargon or specialized knowledge to get value
- Trusts that BlackStorm will tell them the truth — including when the answer is "we don't know yet"

Confidence is built through consistency, transparency, and small moments of demonstrated
competence over time — not through marketing claims.

---

### The Confidence Ladder

**Status: Current (design philosophy)**

Customers move through a natural confidence progression. The education and onboarding
system is designed to support each stage:

**Stage 1: Orientation** (Week 1)
Customer is still figuring out what the service does and whether they made the right choice.
Focus: Welcome experience, first-login walkthrough, first alert handled well, setup confirmation.
Goal: Customer understands the basics and doesn't feel lost.

**Stage 2: Familiarity** (Weeks 2–4)
Customer has received at least one alert, seen the dashboard multiple times, and had at
least one interaction with support.
Focus: KB article suggestions, monthly report walkthrough, "did you know" contextual tips.
Goal: Customer is navigating independently without needing to contact support for routine questions.

**Stage 3: Comfort** (Month 2–3)
Customer treats the portal as a routine tool, checks it without prompting, and notices
changes on their own.
Focus: Proactive communication about what we observed, optional advanced settings, invitation
to provide feedback.
Goal: Customer would notice and miss the service if it went away.

**Stage 4: Advocacy** (Month 4+)
Customer recommends BlackStorm to others — not because they were incentivized, but because
they trust it and understand its value.
Focus: Thank-you acknowledgments, invitation to reviews, referral information without pressure.
Goal: Customer shares their experience voluntarily.

---

### Proactive Communication Strategy

**Status: Planned**

BlackStorm proactively reaches out to customers at key moments — not to sell, but to inform:

**After a notable event:**
"Last night your main router was offline for about 4 minutes (12:18 AM – 12:22 AM). Everything
recovered automatically. No action needed — just wanted you to know we caught it."

**Monthly check-in:**
"Your August monitoring summary is ready. Everything was online 99.8% of the time. One brief
event on August 14 — details in your report."

**Before a maintenance window:**
"We'll be performing maintenance on our monitoring infrastructure [date] from [time] to [time].
You may not receive alerts during this window. Everything will return to normal automatically."

**When something looks unusual:**
"We've noticed [Device Name] has been going offline briefly every few days for the past two
weeks. This could be a sign of an emerging problem. Would you like us to take a look?"

**WHY:** Proactive communication is the highest-leverage trust signal available to a service
company. A customer who receives an email about a problem they did not even notice — and
learns that it resolved automatically — has just experienced exactly why they pay for the service.

---

### "Human Moment" Design Principle

**Status: Current (communication philosophy)**

Automated messages are written to sound like they came from a person — because they represent
a person's work. But they also identify themselves as automated when relevant:

```
Good: "Your Main Router has been offline since 9:14 AM. We're watching it."
      (No false implication that a human is personally watching in real time)

Better: "Your Main Router has been offline since 9:14 AM. Our monitoring system is
         tracking it, and our team will be notified if it stays offline."
         (Honest about automation and human involvement)
```

Support responses always come from a named person. Automated alerts are signed
"BlackStorm Monitoring" or "BlackStorm Support Team." The distinction is honest and
consistent.

---

## 14. Accessibility & Inclusiveness

### Accessibility as Design — Not Compliance

Accessibility at BlackStorm is not a checkbox — it is a design quality standard.
A portal that cannot be used by someone with a visual impairment, a motor impairment,
or limited technology experience is a portal that does not fully serve its customers.

The same design discipline that makes the portal accessible to a screen reader user
also makes it clearer and easier to use for everyone. Accessibility and good design
are not in tension — they reinforce each other.

---

### Visual Accessibility

**Status: Planned (portal implementation)**

**Color is never the only indicator of status.**
Every status color (green/amber/red) is accompanied by a text label. Every chart uses
patterns or labels in addition to color. Status indicators pass WCAG 2.1 AA contrast
ratios in both dark and light mode.

**Text sizing is user-controllable.**
The portal respects the user's system font size settings. All type is specified in `rem`
(relative to user preference), not in fixed `px` values. Minimum touch targets are 44×44px
(WCAG 2.5.5).

**Focus indicators are visible.**
Interactive elements have clear, high-contrast focus rings that are visible on both dark
and light backgrounds. The portal is fully navigable by keyboard without a mouse.

**Images and icons have text alternatives.**
All status icons, logo elements, and decorative graphics have appropriate `alt` text.
Icons used as the sole communication of meaning (without adjacent text) always include
an `aria-label`.

---

### Screen Reader Support

**Status: Planned**

The portal is designed for compatibility with JAWS, NVDA, and VoiceOver screen readers:

- Dashboard status updates use `aria-live="polite"` so changes are announced without
  interrupting the user's current activity
- New critical alerts use `aria-live="assertive"` to be announced immediately
- Status changes in the device list use `aria-atomic="true"` so the full status line
  is read, not just the changed portion
- All modals and overlays trap focus correctly and return focus to the trigger element
  on close
- Page titles update correctly with React Router navigation

---

### Cognitive Accessibility

**Status: Current (design philosophy)**

**Consistent navigation.** The same elements are always in the same place. Customers who
learn the layout once can use it without re-learning. Menus do not move between pages.

**Clear error messages.** Form errors identify specifically what went wrong and how to
fix it. "This field is required" is never used alone — it always says what the field is
for and what a correct response looks like.

**No time pressure.** Sessions do not expire during active use. Inactive sessions display
a clear warning before expiring, with a one-click option to extend. Customers who need
more time to read or navigate are not punished.

**Undo and confirmation.** Destructive actions (removing a device, changing notification
settings) require confirmation. No action is irreversible without warning.

---

### Language Inclusiveness

**Status: Current (content standard)**

All written content is written at or below an 8th-grade reading level. This is not
"dumbing down" — it is the reading level at which the most people can most easily
process new information, regardless of education level. It is also the level at which
content is most scannable for busy professionals.

The portal and knowledge base are designed for English-language delivery as the primary
language. Translation support for Spanish is a **Research** phase consideration as the
customer base grows.

---

### Age-Inclusive Design

**Status: Current (design philosophy)**

Many BlackStorm customers include older adults who are managing technology for their
home, church, or community organization. The design standard accommodates this:

- No hover-only interactions on touch devices
- No time-limited interactions or disappearing elements without user control
- Sufficient line spacing (1.5× minimum) for readability
- No small click targets — minimum 44px touch area on all interactive elements
- No autoplay video or audio
- Motion effects are disabled when the user's system has "Reduce Motion" enabled

---

## 15. Mobile & Tablet Learning Experience

### The Mobile Reality

A significant portion of customers check their portal status on a phone — particularly
in situations like "something seems off, let me quickly check" rather than a planned
review session. The mobile experience must support this use pattern as a first-class
interaction, not a scaled-down afterthought.

Mobile education specifically accommodates:
- Users who are physically at the device they are asking about
- Users who received an alert while away from their desk
- Users who are doing a quick check-in between other tasks

---

### Mobile Dashboard Design Concept

**Status: Planned**

The mobile dashboard is not a shrunk version of the desktop dashboard — it is
a redesigned layout that prioritizes the specific questions a mobile user is asking:

```
┌────────────────────────────────┐
│  BlackStorm            ≡  ···  │
├────────────────────────────────┤
│                                │
│  ● Everything looks good       │
│  15 devices online             │
│  No active alerts              │
│                                │
├────────────────────────────────┤
│  Recent                        │
│  ─────────────────────────     │
│  Main Router ● Online 12d      │
│  Office Switch ● Online 12d    │
│  Back Server ● Online 5d       │
│                                │
│  [View all devices]            │
├────────────────────────────────┤
│  This month                    │
│  ─────────────────────────     │
│  99.8% · 1 brief event         │
│  [View details]                │
├────────────────────────────────┤
│  Need help?  [Contact support] │
└────────────────────────────────┘
```

The "Everything looks good" / "Something needs attention" single-line status at the
top answers the mobile user's primary question immediately — without scrolling.

**WHY:** Mobile users are often in a hurry or in a context where they cannot spend time
reading. Leading with a clear, human-language status line means they can assess the
situation in under 2 seconds and decide whether to dig deeper.

---

### Mobile Education: Short-Form Content

**Status: Planned**

Knowledge base articles are formatted differently for mobile access:

**Mobile article format:**
- Title: the question (same as desktop)
- TL;DR summary (2–3 sentences): answers the question directly, at the top
- Expandable sections: "More detail" toggles for each part of the article
- "Get help with this" button: always visible at the bottom

This allows a mobile user to get their answer in the TL;DR and leave — or expand
sections if they need more context.

**WHY:** Most mobile article reads are problem-specific and time-pressured. A customer
who has to scroll through 800 words to find the sentence that answers their question
will not read 800 words — they will close the article and open a support ticket.
A TL;DR at the top serves both the mobile user and the impatient desktop user.

---

### Push Notification Concepts

**Status: Research**

A future mobile app (currently in research phase) would support push notifications for
monitoring alerts. The notification design follows the same plain-language principles
as email alerts:

```
Push notification concept:
────────────────────────────────
  BlackStorm · Now
  Main Router went offline
  Since 9:14 AM · Tap to view
```

Tapping the notification takes the user directly to the affected device's detail view —
not to the app home screen — so they can assess the situation immediately.

Recovery notifications:
```
  BlackStorm · Now
  Main Router is back online
  Was offline for 8 minutes
```

**WHY:** Specificity in push notifications reduces alarm. "Main Router went offline" is
more actionable than "Alert: network monitoring." The recovery notification is equally
important — it closes the loop and prevents customers from remaining anxious about
an issue that has already resolved.

---

### Tablet Experience: Field Operations

**Status: Planned**

MSP contacts and IT staff who service multiple locations may use a tablet while
physically at a customer site. The tablet layout is designed for this use case:

- Sidebar navigation visible at tablet width (≥768px) — not collapsed to hamburger
- Device list includes location grouping so the technician can quickly find devices
  at the current location
- Touch targets sized for gloved or imprecise input (52px minimum in field mode)
- High contrast option available for outdoor or bright-light environments
- Quick-add device form accessible in two taps from any view

---

### Mobile-Friendly Onboarding

**Status: Planned**

The first-login onboarding experience is fully functional on mobile. Mobile-specific
considerations:

- Checklist items are large tap targets (minimum 48px height)
- Tooltip walkthroughs adapt to vertical layout on phone screens
- No horizontal scrolling required at any step
- Multi-step forms show one question per screen on small devices (not all fields at once)
- "Save and continue later" available at every step — mobile users are more likely to
  be interrupted mid-process

---

## Appendix A: Glossary — Terms Used in This Document

| Term | Meaning in this document |
|---|---|
| Onboarding | The process of orienting a new customer to the product and service |
| Progressive disclosure | Revealing features and information gradually, as the customer is ready for them |
| Contextual help | Explanations that appear inline, near the thing being explained |
| Tooltip | A small popup explanation triggered by hovering or tapping a `[?]` icon |
| Walkthrough | A guided, step-by-step tour of the interface |
| Checklist | A short list of initial actions with automatic progress tracking |
| Role-based onboarding | Tailoring the first-login experience based on the user's permission role |
| Alert fatigue | The tendency to ignore notifications when they occur too frequently |
| Transient event | A monitoring alert that resolves automatically in a short time |
| Plain-language | Writing that communicates clearly without requiring technical knowledge |
| TL;DR | "Too Long; Didn't Read" — a brief summary placed at the top of longer content |
| Flapping | A device that alternates rapidly between online and offline status |
| KB | Knowledge Base — the library of self-service help articles |

---

## Appendix B: Feature Maturity Summary

| Feature / Concept | Status |
|---|---|
| Plain-language content standard | Current |
| Jargon translation reference | Current |
| Knowledge base structure (6 categories) | Current |
| KB article design standard | Current |
| "What BlackStorm can and cannot see" article | Current |
| Welcome screen (first login) | Planned |
| First-login checklist panel | Planned |
| First-login tooltip sequence | Planned |
| Post-setup confirmation email | Planned |
| New account setup flow (4-step) | Planned |
| Role-based onboarding (Admin / Observer) | Planned |
| Device add form (name + IP only) | Planned |
| IP address contextual tooltip | Planned |
| Device detail view (plain-language) | Planned |
| Device history timeline | Planned |
| Dashboard walkthrough overlay | Planned |
| "What does this number mean?" inline education | Planned |
| Status indicator with text + time context | Planned |
| KB natural-language search | Planned |
| Support ticket context pre-fill | Planned |
| Alert anatomy education email | Planned |
| Alert fatigue proactive communication | Planned |
| "Alert but everything seems fine" KB article | Planned |
| Proactive event communication emails | Planned |
| Screen reader support (aria-live, focus management) | Planned |
| Mobile dashboard (status-first layout) | Planned |
| Mobile KB article format (TL;DR first) | Planned |
| Tablet field operations layout | Planned |
| Mobile-friendly onboarding flow | Planned |
| Video training series (4 series, 19 videos) | Research |
| Interactive branching video scenarios | Research |
| Interactive troubleshooting labs | Research |
| Operational simulations | Research |
| Push notification alerts (mobile app) | Research |
| Spanish language support | Research |

---

*BlackStorm, LLC · Education & Onboarding Documentation · Version 1.0 · May 2026*
*This document is internal working documentation. Review before external sharing.*
