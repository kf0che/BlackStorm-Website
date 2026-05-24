# BlackStorm — Support & Ticketing Experience
## Version 1.0 · May 2026

This document defines the philosophy, workflow, communication standards, and operational
concepts for customer support at BlackStorm, LLC. It covers how support works today,
what is being built, and what is planned — with honest labels at every stage.

Good support is not a feature. It is the thing that determines whether a customer stays,
leaves, or recommends us to someone else. Every decision in this document is made with
that consequence in mind.

**Status of this document:** Operational and design specification. Features are labeled
with their current maturity: **Current** (active practice), **Planned** (committed
direction, in development), or **Research** (future concept, being considered).

---

## Table of Contents

1. [Support Philosophy](#1-support-philosophy)
2. [Ticket Creation Workflow](#2-ticket-creation-workflow)
3. [Customer Communication Standards](#3-customer-communication-standards)
4. [Priority Levels](#4-priority-levels)
5. [Response Expectations](#5-response-expectations)
6. [Escalation Concepts](#6-escalation-concepts)
7. [Knowledge Base Integration](#7-knowledge-base-integration)
8. [Customer Updates](#8-customer-updates)
9. [Maintenance Notifications](#9-maintenance-notifications)
10. [Post-Issue Follow-Up](#10-post-issue-follow-up)

---

## 1. Support Philosophy

### Support Is the Product

For most customers, their experience with BlackStorm support is their experience with
BlackStorm. Not the portal. Not the reports. Not the uptime percentages. The person
(or the apparent person) on the other end of their support request — and whether that
person was helpful, honest, and responsive.

This means support is not a cost center to be minimized. It is a trust-building surface
that either reinforces or undermines everything else the company does. A technically
excellent monitoring service with poor support loses customers. A service with imperfect
monitoring and genuinely good support builds loyalty.

The support philosophy at BlackStorm is built around one question every customer is
silently asking: **"Does someone actually care about my situation?"**

The answer has to be yes — and it has to be demonstrated in every interaction, not just
claimed in marketing copy.

---

### Seven Support Principles

**1. Acknowledge first. Diagnose second.**

The first response to any support request — regardless of how simple or complex the
issue is — acknowledges that the customer reached out and that their issue matters.
Before offering a solution, before asking clarifying questions, before explaining what
the problem probably is, we confirm that we received the request and that a person
has read it.

This is not a formality. Customers who feel heard before being helped are far more
receptive to the help when it arrives.

*Example:*
> Not: "Have you tried restarting the router? This usually resolves the issue."
> Use: "Thanks for reaching out, [Name]. I can see this is affecting your main office
> connection — let me take a look at what we're seeing on our end."

---

**2. Be honest about what we know and don't know.**

"I'm not sure" is a legitimate and trustworthy answer when it is accurate. What is not
legitimate is manufacturing a confident explanation for something we cannot confirm, or
hedging so aggressively that the customer receives no useful information.

The honest answer when we do not yet know: "I'm looking into this now. I don't have
a clear picture yet, but I'll follow up within [specific timeframe] with what I find."

The honest answer when the cause is outside our control: "This appears to be coming
from your ISP's network, which we cannot directly access or diagnose. Here's what I
can tell you from our monitoring data, and here's what I'd suggest doing next."

---

**3. Never make a customer feel unintelligent.**

Support responses must not assume the customer failed to take an obvious step. Phrases
like "Did you try turning it off and on again?" — without any context — presume the
customer is unsophisticated. "I can see from the monitoring logs that the router restarted
at 9:14 AM and came back at 9:22 AM — were you aware that happened?" is specific,
respectful, and useful.

If a customer is asked to perform a step they may have already taken, acknowledge that:
"I know you may have already tried this — but it's worth confirming for my records:
has the router been restarted in the last hour?"

---

**4. Set specific expectations, not vague reassurances.**

"We'll look into it" is not a commitment. "I'll follow up by end of day tomorrow with
what I find" is a commitment. Customers who receive specific timeframes know whether the
commitment was kept. Customers who receive vague reassurances have no way to know if
they are being handled or forgotten.

If a timeframe cannot be committed to — because the issue requires investigation — say
so explicitly: "I can't give you a resolution time yet because I need to understand what's
happening first. I'll update you tomorrow by noon with either a solution or a clearer
picture of what we're dealing with."

---

**5. Support tickets are conversations, not forms.**

The ticket system exists to organize and track support work. It is not a bureaucratic
process the customer has to fight through to reach a person. Every ticket represents
a customer who had a problem and trusted us enough to ask for help. That is the frame
for every interaction.

Customers should never feel like they are addressing a form. Responses should be written
to a person, using their name, referencing their specific situation, using the names they
gave their devices and locations.

---

**6. No canned responses — ever.**

Templated language is acceptable for structural scaffolding (ticket confirmations, update
cadences). It is not acceptable as the substance of a support response. Every support
response must include at least one sentence that is specific to this customer's situation
and could not have been sent to any other customer without modification.

"I can see that your Main Router has been running without any alerts for the past 12 days,
which suggests the issue from last week resolved cleanly" is specific. "Thank you for
contacting BlackStorm support. We will look into your issue and get back to you shortly"
is not a support response — it is an automated reply.

---

**7. Close the loop, always.**

A ticket that is resolved without customer confirmation is not resolved — it is abandoned.
Every ticket receives an explicit close: a summary of what happened, what was done or
confirmed, and a clear invitation to reopen if anything comes back. Customers who feel
a ticket was closed appropriately are more likely to contact support again when they need
to, rather than sitting on a problem because they expect the same non-closure.

---

### What Support Is Not

**Support is not a sales channel.**
No support interaction ends with a suggestion to upgrade, an offer to purchase an
additional service, or any commercial message. Support is exclusively for helping the
customer who reached out. Period.

**Support is not a KB deflection mechanism.**
"Have you checked our knowledge base?" is acceptable when it is the genuinely most
useful response — and when the specific article is linked, not the KB homepage.
It is not acceptable as a first response to any ticket, or when the answer requires
actual investigation rather than documentation.

**Support is not a blame assignment process.**
Whether a problem is caused by BlackStorm, the customer's equipment, or their ISP, the
support interaction focuses on helping — not on establishing who is at fault. Cause is
documented for accuracy. It is never weaponized to avoid responsibility or minimize
the customer's experience.

---

## 2. Ticket Creation Workflow

### Entry Points

**Status: Current / Planned (varies by channel)**

Customers can open a support ticket through four paths:

**Path 1: Email**
Sending an email to support@blackstorm.llc creates a ticket automatically. The customer
receives a confirmation with their ticket number within a few minutes. This is the
primary entry point for most customers — it requires no portal login and works from
any device. *(Current)*

**Path 2: Contact form (public website)**
The contact form at blackstorm.llc/contact creates a ticket. It asks for name, email,
and a description of the issue. No login required. Useful for prospects, new inquiries,
and customers who cannot access their portal. *(Current)*

**Path 3: Portal ticket form (in-portal)**
A ticket opened from within the portal is pre-filled with monitoring context —
device status at time of submission, recent alerts, account type, and location. The
customer only needs to describe what they noticed. *(Planned)*

**Path 4: Reply to a monitoring alert**
Customers who reply to an alert email are connected to a support ticket pre-linked
to the relevant incident. No separate form required. The reply becomes the ticket
with full monitoring context attached. *(Planned)*

---

### The Ticket Creation Form

**Status: Planned (portal form)**

The in-portal ticket form is minimal. The system captures what it can automatically;
the customer provides only what it cannot:

```
Contact Support
───────────────────────────────────────────────────────────────────────

  What's going on?  (Choose the one that fits best)

  ○  A device is offline or showing an error
  ○  I received an alert and I'm not sure what it means
  ○  Something doesn't look right in the portal
  ○  I want to add, change, or remove a device
  ○  I have a question about my account or billing
  ○  Something else

  Tell us what you noticed — in your own words:

  ┌──────────────────────────────────────────────────────────────────┐
  │                                                                  │
  │  My main office router shows offline in the portal but I         │
  │  can actually browse the internet fine. Not sure if this         │
  │  is a monitoring problem or something else.                      │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘

  Is this affecting you right now?

  ○  Yes — something is currently down or broken
  ○  It just resolved, but I'd like someone to look at it
  ○  No — it's a question or a change request

  Anything else we should know?  (Optional)

  ┌──────────────────────────────────────────────────────────────────┐
  │  This has happened a few times in the past week                  │
  └──────────────────────────────────────────────────────────────────┘

                                                    [Submit]

  We'll include your current device status and recent alerts
  automatically so you don't need to describe the technical state.
```

The form deliberately does not ask for: account number, device IP, monitoring
configuration, or any technical information the system already has.

**WHY:** A customer in the middle of an outage should not have to locate their account
number or describe their network state. The form's job is to capture what only the
customer knows — what they experienced in plain language — and let the system handle
the rest.

---

### Ticket Confirmation

**Status: Current**

Every ticket receives an automated confirmation within a few minutes:

```
Subject: We received your message — [Ticket #1042]

Hi [First Name],

We've received your support request and a member of the BlackStorm
team will review it.

What you told us:
  "My main office router shows offline in the portal but I can
  actually browse the internet fine."

Your ticket number is #1042. You can reference this if you need to
follow up. To add more information, just reply to this email.

We'll be in touch.

— BlackStorm Support
```

The confirmation includes exactly what the customer submitted — not a paraphrase.
This confirms the message arrived correctly and sets a clear record of the original
request.

---

### Context Automatically Captured

**Status: Planned (portal tickets)**

When a ticket is created from the portal, the following is attached automatically —
visible to the BlackStorm team, not displayed to the customer in the confirmation email:

```
=== Support Context (Internal — Not Customer Visible) ===

  Submitted: Dec 22, 2025 at 10:14 AM
  Account: Acme Corporation
  Plan: Business
  Submitted by: Sarah Chen (Owner)

  Device status at submission:
    Main Router         ● Offline  (since 9:14 AM — 1 hour ago)
    Office Switch       ● Online
    Back Server         ● Online

  Recent alerts (last 7 days):
    Dec 22, 9:14 AM  Main Router offline — alert sent
    Dec 18, 11:51 PM  Branch Router offline 12 min — resolved
    Dec 14, 11:52 PM  Branch Router offline 12 min — resolved

  Category selected: A device is offline or showing an error
  Urgency selected: Yes — something is currently down or broken
=========================================================
```

This context ensures the first human response is informed — the team member is not
starting from zero, asking the customer to describe what is already visible in the system.

---

## 3. Customer Communication Standards

### Written Voice Standards

**Status: Current**

All customer-facing support communication — ticket confirmations, responses, updates,
and closures — follows the same written voice standards:

**Written by a named person, not a department:**

> Not: "The BlackStorm Support Team has reviewed your ticket."
> Use: "I've taken a look at what's happening on your account — here's what I found."

Support responses are signed with a first name. Not "Support Team," not "BlackStorm
Support." A person's name. Even when responses are drafted from templates or team
playbooks, the final communication comes from a named person who has reviewed it.

**Specific to this customer and this ticket:**

Every response must reference something specific to the customer's situation. Minimum
requirement: use the customer's name, use their device names, reference the specific
event or question they raised.

> Not: "Device offline events can occur for a variety of reasons."
> Use: "Your Main Router has been offline since 9:14 AM — that's about an hour at this
> point. From what I can see in the monitoring logs, no other devices at your main
> office were affected, which suggests the router itself rather than your internet
> connection."

**Plain language throughout:**

Technical terms must be translated on first use. If a technical term cannot be avoided,
it is explained inline — not defined in a separate glossary the customer has to navigate to.

> Not: "This appears to be an ICMP timeout condition resulting from upstream packet loss."
> Use: "Our monitoring checks are timing out for this device — meaning we send a signal
> and wait for a response, but the response isn't arriving. That usually means the device
> is either offline or something between us and it is blocking the connection."

**Calm and not alarming:**

Support responses never escalate anxiety beyond the level the situation warrants. If a
device went offline for 8 minutes and came back, the response tone is informational —
not urgent. If something is genuinely unresolved and impacting the customer's operations,
the tone is serious and committed — not dismissive or falsely reassuring.

---

### Response Structure

Every support response follows a consistent four-part structure:

```
1. ACKNOWLEDGMENT
   What you told us / what we understand the situation to be.
   One or two sentences. Uses the customer's own words back to them.

2. WHAT WE FOUND
   What the monitoring data, portal context, or investigation shows.
   Specific, named details. Honest about uncertainty when present.

3. WHAT WE'RE DOING OR RECOMMEND
   Specific next steps — either actions we are taking, or actions the
   customer can take, or both.
   If no action is needed, this says so explicitly.

4. WHAT HAPPENS NEXT
   A specific timeframe or next event.
   Never vague. If uncertain, say what we will do and by when.
```

Example response applying this structure:

```
Hi Sarah,

1. ACKNOWLEDGMENT
I can see you're noticing that the portal shows your Main Router as
offline, but your internet seems to be working. That's a reasonable
thing to wonder about — let me explain what's happening.

2. WHAT WE FOUND
Looking at your monitoring logs, Main Router stopped responding to our
checks at 9:14 AM this morning. However, your other devices at the
main office — the Office Switch and Back Server — are both showing
online and responding normally.

This pattern (router offline but internet working) sometimes happens
when the router's management interface stops responding to our specific
check, even though it's still routing traffic correctly. It can also
mean the monitoring check is being blocked by a recent router update.

3. WHAT WE'RE DOING OR RECOMMEND
I'm going to look at the technical configuration for how we're checking
that specific router. I may reach out to adjust the check method. In
the meantime, if your internet continues working normally, there's
nothing urgent you need to do.

4. WHAT HAPPENS NEXT
I'll follow up by end of day today with what I find. If anything
changes with your internet connection before then, reply to this email
and I'll reprioritize.

— Marcus
BlackStorm Support
```

---

### Tone Calibration by Situation

Support responses are calibrated to match the emotional context of the situation:

| Situation | Tone |
|---|---|
| Question about a resolved event | Informational, calm, slightly reassuring |
| Active outage — customer unaware | Clear, action-focused, no alarm inflation |
| Active outage — customer anxious | Acknowledged urgency, confident, specific commitments |
| Billing or account question | Straightforward, complete, no hedging |
| Complaint about service quality | Direct acknowledgment, no defensiveness, clear plan |
| Feature request or suggestion | Appreciated, honest about current roadmap, no false promises |
| Issue we caused | Accountable, specific, no deflection |

The one consistent element across all tones: honesty. The tone adjusts to the situation;
the commitment to accuracy does not.

---

## 4. Priority Levels

### Plain-Language Priority Framework

**Status: Current**

BlackStorm uses four customer-facing priority levels. The names describe the customer's
situation, not an internal engineering tier. Customers should be able to read a priority
name and immediately understand why their ticket might receive that designation.

---

**URGENT — Something is fully down right now**

> Used when: A device or internet connection that is critical to current operations
> is offline and has not resolved on its own. The customer's business or home operations
> are affected right now.

Examples:
- A business's internet connection has been down for more than 30 minutes during business hours
- A critical server is offline and no one can access it
- A monitoring alert arrived and the customer confirmed the device is truly offline and
  not coming back on its own

Who sets it: The customer can self-select Urgent when submitting a ticket. BlackStorm
may also escalate a ticket to Urgent based on monitoring data (e.g., if an active alert
has been running for more than an hour with no recovery).

---

**NEEDS ATTENTION — Something is wrong, but we're managing**

> Used when: A device is offline or behaving unexpectedly, but it is not causing an
> immediate operational crisis. The customer wants it resolved but can wait for
> the next available response.

Examples:
- A non-critical device has been offline since last night
- A customer received an alert that doesn't match what they're seeing in the portal
- Something in the portal looks wrong or confusing
- A device is showing amber (Checking) status and has not recovered

Who sets it: Default priority for most tickets. Customers can request a higher level
if the situation is more urgent than the default reflects.

---

**QUESTION OR CHANGE REQUEST — No active problem**

> Used when: The customer has a question, wants to make a change to their monitoring
> setup, wants to understand something they saw in a report, or has a general inquiry.

Examples:
- "Can you add my new router to my monitoring?"
- "I want to change who receives our alert notifications"
- "I don't understand what this number means in my monthly report"
- "We're moving offices next month — what do we need to do?"

Who sets it: Customers who select the "question or change request" urgency option,
or whose ticket content is clearly a non-urgent inquiry.

---

**WATCH — We noticed something you may want to know about**

> Used when: BlackStorm proactively opens a ticket (or sends a communication) based
> on something observed in monitoring data — without the customer having reported
> anything. Not urgent, but worth a conversation.

Examples:
- A device has had brief offline events on the same three Tuesday nights
- Response patterns suggest a device may be degrading
- Alert frequency has increased significantly over the past two weeks

Who sets it: BlackStorm team only, based on monitoring data. Customers cannot self-select
this priority — it is reserved for proactive outreach. Customers always have the option
to close a Watch ticket with no action if they believe the pattern is expected or
irrelevant.

---

### Priority Is Not Permanent

Ticket priority can change as the situation evolves. A "Question or Change Request"
ticket becomes "Needs Attention" if the customer replies that the situation has gotten
worse. A "Urgent" ticket becomes "Question or Change Request" once the immediate problem
resolves and only a follow-up question remains.

Priority changes are communicated explicitly — customers are not left to infer that
their ticket has been re-categorized.

---

## 5. Response Expectations

### The Honesty Commitment

Response time commitments are only published when they reflect what BlackStorm can
actually deliver. A published SLA that is not met is worse than no published SLA —
because it is a broken promise.

The response time guidance below reflects realistic expectations for a small team
operating during business hours. These are not guarantees — they are commitments
we intend to meet and will say so honestly when we fall short.

---

### Current Response Expectations

**Status: Current (operating practice)**

| Priority | Expected First Response | Expected First Update |
|---|---|---|
| Urgent | As soon as possible — within a few hours during business hours | Every few hours until resolved |
| Needs Attention | Within 1 business day | Within 1 business day of any status change |
| Question or Change Request | Within 1 business day | When complete or when more info is needed |
| Watch (proactive outreach) | BlackStorm initiates — awaiting customer reply | No follow-up pressure; customer controls pace |

**What "response" means:** A response is a reply from a named team member that acknowledges
the specific situation and takes a specific action or commits to one. An automated
confirmation email is not a response.

**What "business hours" means:** BlackStorm is a small team. Business hours are currently
Monday through Friday, 9 AM to 5 PM Eastern Time. Tickets submitted outside business
hours are handled the next business morning. Monitoring alerts continue 24/7 regardless
of business hours — but human support responses follow business hours.

This is stated honestly, without apology. Customers who need 24/7 human support response
should understand this limitation before signing up. We do not promise coverage we do
not currently have.

---

### Plan-Based Response Guidance

**Status: Current (as published on Pricing page)**

Response expectations vary by service plan:

| Plan | Support Response |
|---|---|
| Home | 48 hours |
| Business | 24 hours (priority queue) |
| Professional | Priority phone + email |

These are guidance figures, not contractual SLAs at current company maturity. They
reflect the order and urgency with which tickets are reviewed — Business and Professional
plan tickets are reviewed before Home plan tickets when received at the same time.

**Future SLA Commitment (Planned):** As the team grows, formally documented and
contractually backed response time SLAs will be introduced per plan tier. When that
happens, the published commitments will be updated before the service change — not after.

---

### What to Expect When We Miss a Commitment

When a response does not arrive within the expected window, the customer receives a
proactive update — not silence:

```
Subject: Update on your support ticket #1042

Hi Sarah,

I wanted to reach out because I haven't been able to get back to you
yet on ticket #1042 — your question about the Main Router offline status.

I've been looking into the configuration and I don't have a complete
answer yet. I expect to have one by tomorrow morning. I'll email you
by 10 AM Friday.

I'm sorry for the delay.

— Marcus
BlackStorm Support
```

Two elements that must appear in any delay communication:
1. An honest reason or acknowledgment of the delay (not just "we're working on it")
2. A revised specific commitment (not "as soon as possible")

**WHY:** Customers who receive a proactive delay communication with a new specific
commitment tolerate delays far better than customers who receive silence. Silence
reads as forgotten. A delay communication reads as managed — which is accurate.

---

## 6. Escalation Concepts

### What Escalation Means at BlackStorm

At a small company, escalation does not mean "transferred to a different department."
It means the issue receives more focused attention — reviewed by a more experienced
team member, treated as higher priority in the day's queue, or brought to a team
discussion if the cause is unclear.

Escalation is never a punishment for the customer. It is a signal that the issue
deserves more resources than a routine response.

---

### Customer-Initiated Escalation

**Status: Current**

Customers can request escalation at any time by replying to their ticket with one of:
- "I'd like someone to take another look at this."
- "This is more urgent than I originally described."
- "I'm not satisfied with the response so far."

No explanation required. No justification required. Escalation requests are treated as
good-faith signals from a customer who needs more, not as complaints to be managed.

A customer who escalates receives an acknowledgment within a few hours — and a named
person who has reviewed the full ticket thread, not just the most recent message.

```
Hi Sarah,

I've pulled up ticket #1042 and read through the full thread. I want
to make sure we get this resolved for you.

From what I can see, there's still an open question about why the
Main Router shows offline when your internet is working. Let me
take this from the top and give you a clear answer — I'll follow
up today.

— [Name]
BlackStorm Support
```

---

### Internal Escalation Triggers

**Status: Current**

Tickets are escalated internally (without requiring customer request) when:

- A ticket has been open for more than 2 business days without resolution
- A customer has replied to a ticket 3 or more times without receiving a satisfactory answer
- The issue involves monitoring data that is inconsistent or unexplained
- Multiple customers report similar issues in the same time window (possible systemic problem)
- A billing dispute is involved (reviewed by account management, not front-line support)

Internal escalation is invisible to the customer in terms of routing — the response still
comes from the same team — but the level of attention and the review depth increases.

---

### Systemic Issue Escalation

**Status: Planned**

When multiple tickets arrive about the same apparent issue in a short window, the
support system flags this as a potential systemic event. If confirmed:

1. A proactive communication is sent to all potentially affected customers (not just those
   who already opened tickets)
2. A service status banner is posted in the portal
3. The public status page is updated
4. Individual ticket responses acknowledge the systemic context

Example proactive communication:

```
Subject: We're aware of an issue affecting some customers

Hi [First Name],

We're looking into a monitoring issue that may be affecting some
customers this morning. You may see some devices showing "Checking"
status or receive alerts for devices that appear to be working normally.

We believe this is a problem on our end, not with your devices.

We'll update the portal status page and send another email when
we have more information. You don't need to do anything right now.

If you have an open support ticket about this, we're on it.

— BlackStorm Team
```

**WHY:** Customers who experience a problem and then receive a proactive communication
acknowledging it — without having to ask — have a fundamentally different experience than
customers who submitted a ticket and then received no response while wondering if anyone
else was affected. Proactive systemic communication converts individual anxiety into
shared understanding.

---

## 7. Knowledge Base Integration

### KB as Complement, Not Wall

**Status: Current**

The Knowledge Base exists to help customers find answers to common questions on their own
schedule — not as a mechanism to avoid providing human support. These two purposes are
not in conflict, but they are easily confused.

The wrong use of the KB: responding to a ticket with a KB link and no other content.
This feels like deflection — the customer asks a person for help and is redirected to a
document.

The right use of the KB: including a KB link alongside a human explanation, as a resource
for the customer to reference later.

> Wrong: "This is covered in our Knowledge Base article on alert notifications:
> [link]. Please let us know if you have further questions."

> Right: "The alert you received was triggered because the router stopped responding to
> our checks for about 4 minutes. We've written an article that explains how that
> threshold works in more detail — [link] — if you want the full picture. But in short:
> the alert was accurate, and the router came back on its own."

---

### Smart KB Suggestion (Pre-Ticket)

**Status: Planned**

Before a customer submits a ticket from the portal form, the system suggests relevant
KB articles based on the category they selected and the keywords in their description.
The suggestion is non-intrusive — it appears as a small card below the form, not as
a modal that blocks submission:

```
 ─── Related articles ───────────────────────────────────────────
 You might find these helpful while you wait:

 ·  "My device shows Offline but my internet works — what does that mean?"
 ·  "Understanding the difference between Offline and Checking status"
 ·  "What happens after an alert is sent?"

                                    [Submit my ticket anyway →]
 ────────────────────────────────────────────────────────────────
```

The "[Submit my ticket anyway →]" label matters. It signals that submitting is the
expected outcome — the KB suggestions are optional reading, not a checkpoint.

**WHY:** Some customers will find their answer in a suggested article and not need to
submit a ticket — which is genuinely useful for them. Others will read the article
and still submit the ticket, with better context. Others will ignore the suggestions
entirely and submit directly. All three outcomes are valid. The suggestion creates
value without creating friction.

---

### Support-to-KB Feedback Loop

**Status: Planned**

When the same question appears in three or more tickets within a 30-day period, it
becomes a KB article candidate. The support team drafts the article based on the actual
customer language from those tickets — not technical documentation language.

Article creation timeline:
- Question appears in 3+ tickets: flagged for KB team review
- KB article drafted within 10 business days of flagging
- Article reviewed for plain-language compliance before publishing
- Published article linked in future tickets on the same topic

This process ensures the KB reflects what customers actually ask, in the language
they actually use — not the language engineers would use to describe the same topic.

---

### KB Article in Ticket Response

**Status: Current**

When a KB article is directly relevant to a ticket, it is included in the response
with a brief introduction explaining why it is relevant — never dropped as a bare link:

> "You asked about what it means when a device shows 'Checking' status instead of going
> straight to Offline. The short answer is that we wait for a few failed checks before
> officially marking something offline — that way, a brief network hiccup doesn't
> create an alert. I've written up the full logic here if you want to see the details:
> [article link]. No action needed on your end."

---

## 8. Customer Updates

### Update Cadence Philosophy

**Status: Current**

An open ticket without updates is an abandoned ticket, even if work is actively happening.
Customers have no visibility into what is happening inside a ticket unless someone
tells them. Silence reads as forgetting.

The update cadence is determined by ticket priority:

| Priority | Minimum update frequency |
|---|---|
| Urgent | Every 2–3 hours while unresolved during business hours |
| Needs Attention | Once per business day while open |
| Question or Change Request | When there is something to report; no artificial cadence |
| Watch | No follow-up pressure; customer controls the pace |

These are minimums. Updates should be sent whenever something meaningfully changes —
not on a mechanical schedule when nothing has happened.

---

### What Counts as an Update

**Status: Current**

A meaningful update contains at least one of:
- New information discovered
- An action taken
- A revised timeline
- A confirmed resolution

An update that contains none of these is not an update — it is noise. "We are still
working on your ticket and will get back to you soon" is not a meaningful update
unless it includes what specifically is being worked on, and a specific timeframe.

The only exception: when progress has genuinely stalled (waiting on equipment, waiting
on ISP response, waiting on customer information), an honest stalled-status update
is appropriate:

```
Hi Sarah,

I wanted to update you on ticket #1042, even though I don't have a
resolution yet.

I've identified that the issue with your Main Router showing offline
appears to be related to how the router handles ICMP traffic — basically,
a setting that controls whether it responds to the specific check we
send. I'm looking at how to adjust our check method for this device.

I don't have a final answer today, but I expect to have this configured
and tested by Thursday morning. I'll update you then.

— Marcus
```

This update says: what was found, what the blocker is, and when the next update arrives.
That is everything the customer needs to know.

---

### Update Format Standards

**Status: Current**

Updates do not need to be long. In fact, shorter updates are usually better — they are
easier to read and more likely to be read at all. The structure:

```
[1–2 sentences: what happened since last update, or honest acknowledgment if nothing did]
[1–2 sentences: what is happening right now]
[1 sentence: specific next milestone or timeline]
```

Example — short update during an active investigation:

```
Hi Sarah,

I've confirmed that the monitoring check configuration for your Main Router
needs to be adjusted. I'm making that change now and will test it once
it's applied — should take about 20 minutes.

I'll reply again once we can confirm the router is showing correctly.

— Marcus
```

---

### Portal Ticket Status View

**Status: Planned**

Customers who view their ticket in the portal see a real-time status timeline —
the same information they would get in email, but accessible without waiting for an email:

```
Ticket #1042 — Main Router showing offline but internet works
────────────────────────────────────────────────────────────────
Status: In Progress

Dec 22 at 10:14 AM    Ticket submitted
Dec 22 at 10:28 AM    ✓ Reviewed by Marcus — first response sent
Dec 22 at 12:43 PM    Update sent — investigating check configuration
Dec 22 at 1:15 PM     ● Currently being worked on

Expected next update: Dec 22 by end of day

[Add information]  [This resolved — close ticket]  [I need to escalate]
────────────────────────────────────────────────────────────────
```

The "This resolved — close ticket" and "I need to escalate" options are always visible
at the bottom of any open ticket — giving the customer control without requiring them
to wait for an email prompt.

**WHY:** Customers who can check the current state of their ticket in the portal
generate fewer "what's the status?" follow-up emails — which is good for both sides.
More importantly, they feel informed and in control, rather than dependent on someone
else's communication schedule.

---

## 9. Maintenance Notifications

### Types of Maintenance

Two types of planned maintenance affect BlackStorm customers:

**BlackStorm infrastructure maintenance** — changes to the monitoring system, portal,
or related infrastructure that may temporarily affect monitoring checks or portal access.

**Customer-side maintenance** — planned work the customer is doing on their own equipment
(router replacement, ISP-scheduled downtime, office moves) that will intentionally take
devices offline. BlackStorm needs to know about this to suppress false alerts.

Both types have distinct communication workflows.

---

### BlackStorm Infrastructure Maintenance

**Status: Planned**

When BlackStorm schedules maintenance that may affect customer-visible services, advance
notice is sent at least 24 hours before the window:

```
Subject: Planned maintenance — [Date] from [Time] to [Time]

Hi [First Name],

We're performing scheduled maintenance on [Sunday, December 28]
from [2:00 AM to 4:00 AM Eastern Time].

What this affects:
  ● Monitoring checks may be delayed or paused during this window
  ● You may not receive alerts for devices that go offline during maintenance
  ● The portal will remain accessible

What this does not affect:
  ● Your devices — this is work on our infrastructure, not yours
  ● Your data — no changes to monitoring history or reports

What you need to do:
  Nothing. Monitoring will resume automatically when maintenance ends.

We'll send a confirmation email when it's complete.

— BlackStorm Team
```

Post-maintenance confirmation (sent when complete):

```
Subject: Maintenance complete — monitoring fully restored

Hi [First Name],

Our scheduled maintenance is complete. All monitoring checks have
resumed as of [4:01 AM Eastern Time].

If you notice anything unusual after this, please reply to this email
or open a support ticket.

— BlackStorm Team
```

---

### Maintenance Window Content Standards

Every maintenance notification must include:

| Element | Required? | Notes |
|---|---|---|
| Specific date and time (with timezone) | Yes | Never "later this week" |
| Specific duration | Yes | Never "a few hours" |
| What is affected | Yes | Specific services, not vague "some features" |
| What is not affected | Yes | Reduces unnecessary anxiety |
| What customer should do | Yes | Usually "nothing" — say that explicitly |
| Post-maintenance confirmation commitment | Yes | When they'll hear it's done |

What maintenance notifications must never include:
- Technical infrastructure details customers cannot interpret
- Jargon (failover, cluster migration, CDN propagation)
- Ambiguous language about impact ("may affect some features")
- Missing or vague timezones

---

### Customer-Side Maintenance (Suppressing False Alerts)

**Status: Planned**

When a customer knows their equipment will be offline — planned router replacement,
ISP maintenance, office relocation — they schedule a maintenance window in the portal
(detailed in the Monitoring & Operational Visibility documentation).

The support team also accepts maintenance window requests by email:

> "Hi — we're replacing our main office router on Friday December 27 from
> 10 AM to noon. Can you pause alerts for those devices during that window?"

Support acknowledges within one business day and confirms the window is scheduled:

```
Hi Sarah,

I've set up a maintenance window for Friday December 27 from 10:00 AM
to 12:00 PM for your main office devices (Main Router, Office Switch,
Back-Office Server, Network Printer).

During that window:
  • Those devices will show "Maintenance" status in the portal
  • No alerts will be sent for those devices
  • Monitoring resumes automatically at noon

If the work runs long and you need to extend the window, just reply
to this email and I'll adjust it.

— Marcus
```

**WHY:** Customers who can easily notify BlackStorm about planned maintenance have a
dramatically better experience than customers who receive four simultaneous alerts
during a router replacement they arranged themselves. The maintenance window workflow
exists to prevent the experience of a customer calling support to say "I got all those
alerts — I told you we were replacing the router." We should have that information before
the event.

---

### Unplanned ISP Outages

**Status: Current (communication approach)**

When a widespread ISP outage affects multiple customers in the same area — visible because
multiple unrelated customer accounts experience simultaneous outages — BlackStorm does
not wait for customers to open tickets. A proactive communication goes out:

```
Subject: Internet outage in your area — we're monitoring it

Hi [First Name],

We're seeing a pattern of internet connectivity interruptions in
[region/provider name if known] starting around [time]. This appears
to be affecting multiple customers in the area.

Your monitoring is showing:
  [Device Name] offline since [time]
  [Device Name] offline since [time]

This looks like an ISP-level issue rather than a problem with your
equipment. We'll continue monitoring and alert you as soon as your
connection is restored.

If your internet provider has a status page or outage line, checking
there may give you more information than we can provide from our side.

— BlackStorm Team
```

This communication is factual, honest about the limits of what BlackStorm can see,
and gives the customer an actionable next step (ISP status page) without deflecting
responsibility for keeping them informed.

---

## 10. Post-Issue Follow-Up

### Closing a Ticket Well

**Status: Current**

A ticket close is not a unilateral decision by the support team. Before a ticket is
marked closed, the customer receives a resolution summary and an explicit confirmation
request. Tickets are not marked closed based on "no reply in 3 days" alone — they are
closed when the customer confirms the issue is resolved or acknowledges the ticket
can be closed.

The resolution summary:

```
Subject: Ticket #1042 resolved — follow-up summary

Hi Sarah,

I wanted to make sure we close out ticket #1042 with a clear summary
of what happened and what we did.

What happened:
  Your Main Router was showing Offline in the portal, even though
  your internet was working normally.

What we found:
  The router had a configuration that prevented it from responding
  to the type of check we were using (ICMP ping). The router itself
  was fine — our monitoring method wasn't compatible with its settings.

What we did:
  We adjusted the monitoring configuration for that device to use
  a different check method. The router has been showing Online
  consistently since Dec 22 at 1:45 PM.

What to watch for:
  If you see the router show "Checking" or "Offline" again, let us
  know — that would suggest the configuration needs further adjustment.

Is this resolved for you? If yes, no reply needed. If anything still
seems off, just reply here and I'll reopen the ticket.

— Marcus
```

**WHY:** The resolution summary does three things simultaneously: it documents what
happened (useful for the customer's own records), confirms the fix was effective (not
just "we think we got it"), and sets expectations for what to watch for in the future.
A customer who receives this closes the ticket feeling informed — not just relieved.

---

### Ticket Re-Open Policy

**Status: Current**

Any closed ticket can be reopened by the customer at any time by replying to the
original email thread. There is no time limit, no penalty, and no requirement to
create a new ticket for the same issue.

When a customer reopens a ticket, the reopening is logged with a timestamp and
treated as a new priority "Needs Attention" ticket — because if the customer came back,
the resolution was not complete.

Reopened tickets are handled with additional context: the full prior thread is reviewed
before any response is sent. "We fixed this already" is never an appropriate framing.
"This came back — let's look at it again" is.

---

### Recurrence Awareness

**Status: Planned**

When the same device or the same issue category appears in two or more tickets from
the same customer within 60 days, the support system flags this as a recurrence:

```
=== Recurrence Flag (Internal) ===
  Customer: Acme Corporation
  Device: Branch Office Router
  Prior tickets: #0988 (Dec 9), #1017 (Dec 14), #1042 (Dec 22)
  Category: Device offline — brief events
  Note: Three tickets for same device, same issue pattern.
  Recommend: Proactive reach-out to discuss root cause or replacement.
===================================
```

The customer receives a proactive communication that addresses the pattern directly:

```
Subject: Something we'd like to discuss about your Branch Office Router

Hi Sarah,

I noticed that we've worked on a few separate tickets related to your
Branch Office Router over the past month — brief offline events on
December 9, 14, and 22.

Each one was brief and resolved on its own. But I wanted to flag the
pattern in case it's worth looking at more closely. Recurring brief
outages on the same device sometimes mean the device is aging, or
that something in the network configuration is creating instability.

Would you like us to take a deeper look? Or if you're already aware
of what's causing this, just let me know and I'll note it on the account.

— Marcus
```

**WHY:** Customers who are managing the same recurring problem ticket by ticket are
experiencing a quality failure — even if each individual ticket is handled well.
Pattern recognition that leads to proactive outreach signals that BlackStorm is paying
attention across time, not just within individual interactions. That signal is one of
the highest-trust things a service provider can do.

---

### Optional Feedback Request

**Status: Planned**

After a ticket closes, customers receive a brief, optional feedback request. It is
not aggressive and does not require a review, a rating, or a public post:

```
Subject: Quick question about your recent support experience

Hi Sarah,

We recently resolved ticket #1042 about your Main Router.

If you have 30 seconds — was the support experience helpful?

  [Yes, it was helpful]    [It could have been better]    [Skip]

If you choose "could have been better," you can optionally add a
note — but it's not required. Any feedback goes directly to our team.

Thank you.

— BlackStorm Team
```

Clicking "It could have been better" opens a simple, optional text field:

```
What could we have done differently?

[ optional — no need to respond if you prefer not to ]

                                                     [Send]  [No thanks]
```

The feedback is read by a team member, not auto-processed. If a customer takes the
time to write something, they receive a reply within one business day acknowledging it.

**WHY:** Feedback that is optional, brief, and non-public is more likely to be honest
than feedback requests that feel performative or designed to generate reviews. The
goal of this feedback mechanism is to learn, not to collect testimonials. Keeping it
private and low-pressure signals that distinction.

---

### Annual Account Review (Future)

**Status: Research**

For customers who have been with BlackStorm for 12 months or more, an annual review
concept would provide:

- A summary of the past year's monitoring performance
- A summary of support interactions and resolutions
- An honest assessment of any recurring patterns
- An invitation to discuss equipment, service level, or monitoring scope changes
- Any recommendations the team has based on observed patterns

The review is offered, not imposed. Some customers will want it; some won't. Both
responses are valid.

This concept is appropriate only when the account base and team size support consistent,
high-quality reviews — not before. A perfunctory annual review is worse than none.

---

## Appendix A: Support Quick Reference

### Contact Points

| Channel | Use case | Response |
|---|---|---|
| support@blackstorm.llc | Primary support channel, all ticket types | 1 business day (standard) |
| Reply to monitoring alert | Issue related to a specific alert | Alert-linked ticket created automatically |
| Portal ticket form | In-portal ticket with auto-attached context | 1 business day (standard) |
| Contact form (website) | New inquiries, pre-sales, general questions | 1 business day |

### Priority Summary

| Priority | Trigger | Response target |
|---|---|---|
| Urgent | Device/service critically down, active impact | Same business day |
| Needs Attention | Problem present, not immediately critical | 1 business day |
| Question / Change | Inquiry or non-urgent request | 1 business day |
| Watch | BlackStorm proactive outreach | Customer-paced |

### Ticket Lifecycle

```
Submitted → Confirmed (automated) → Reviewed (human) → In Progress
→ Resolved (resolution summary sent) → Customer confirms or re-opens
→ Closed (with documented summary)
```

---

## Appendix B: Feature Maturity Summary

| Feature / Concept | Status |
|---|---|
| Email-based ticket creation (support@blackstorm.llc) | Current |
| Website contact form ticket creation | Current |
| Ticket confirmation email (automated) | Current |
| Named-person support responses | Current |
| Four-section response structure | Current |
| Plain-language communication standards | Current |
| Priority framework (4 levels) | Current |
| Response expectations (published guidance) | Current |
| Customer-initiated escalation | Current |
| Internal escalation triggers | Current |
| KB links in support responses (with context) | Current |
| Post-ticket resolution summary | Current |
| Ticket re-open by email reply | Current |
| Advance maintenance notification emails | Current |
| Customer-side maintenance alert suppression (email request) | Current |
| Post-maintenance confirmation email | Current |
| Portal ticket form with auto-filled context | Planned |
| Reply-to-alert ticket creation | Planned |
| Portal ticket status timeline view | Planned |
| Smart KB suggestion (pre-ticket) | Planned |
| Support-to-KB feedback loop (3-ticket rule) | Planned |
| Systemic issue proactive communication | Planned |
| Recurrence detection and proactive outreach | Planned |
| Optional post-ticket feedback request | Planned |
| ISP outage proactive communication | Planned |
| Formal per-plan SLA commitments | Planned |
| Annual account review (12-month customers) | Research |

---

*BlackStorm, LLC · Support & Ticketing Experience · Version 1.0 · May 2026*
*This document is internal working documentation. Review before external sharing.*
