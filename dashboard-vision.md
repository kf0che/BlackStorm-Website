# Dashboard Vision

The BlackStorm dashboard should provide operational clarity without visual noise.

The dashboard is not intended to impress users with dense graphs or a wall of flashing alerts. It should help customers quickly understand what is healthy, what needs review, and where to go next.

## Dashboard Goals

The dashboard should:

- Summarize current monitoring health
- Show alerts that need attention
- Provide access to device inventory
- Surface recent support activity
- Link to reports and educational content
- Provide clear next steps

## Recommended Dashboard Sections

### Status Summary

A simple summary of monitored environments.

Placeholder widgets:

- Total monitored devices
- Online devices
- Devices needing review
- Open alerts
- Recent recoveries

### Monitoring Charts

Charts should be useful, not decorative.

Potential chart types:

- Uptime over time
- Response time trend
- Alert count by day
- Device status distribution

Placeholder: [UPDATE: connect monitoring charts to monitoring API]

### Operational Visibility Widgets

Widgets should answer practical questions.

Examples:

- "Devices needing review"
- "Recently recovered"
- "Most active alerts"
- "Sites with open issues"
- "Support tickets waiting on customer"

Placeholder: [UPDATE: connect operational visibility widgets]

### Support Ticket Metrics

Support metrics should be simple and transparent.

Examples:

- Open tickets
- Waiting on BlackStorm
- Waiting on customer
- Recently updated

Placeholder: [UPDATE: connect support ticket metrics]

## UX Guidelines

### Keep It Calm

Use status labels and restrained colors. Red should be reserved for issues that genuinely need attention.

### Prioritize Action

Every dashboard item should make the next step clear:

- Review alert
- Open device
- Update contact
- Create ticket
- Download report

### Avoid Visual Clutter

Avoid dense grids, excessive charting, and constantly moving elements.

## Accessibility Guidelines

Dashboard content should:

- Use semantic headings
- Avoid color-only status indicators
- Support keyboard navigation
- Provide table captions where tables are used
- Collapse cleanly on mobile screens

## Future API Integration

Dashboard components should be prepared to receive future API data for:

- Device inventory
- Alert summaries
- Ticket metrics
- Notification preferences
- Site selector data
- User roles and permissions

## Placeholder CTA

- Dashboard route: [UPDATE: add future customer portal route]
- Monitoring API: [UPDATE: add future API integration notes]
- Support email: support@blackstorm.example
