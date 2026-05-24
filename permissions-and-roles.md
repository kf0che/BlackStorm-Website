# Permissions and Roles

BlackStorm customer portal permissions should be simple, clear, and conservative by default.

Role-based access control should help customers give the right people the right level of access without exposing sensitive monitoring or account information unnecessarily.

## RBAC Goals

Future RBAC should support:

- Account owners
- Administrators
- Technical contacts
- Billing contacts
- Alert-only contacts
- MSP or partner users
- Read-only viewers

## Suggested Role Model

### Account Owner

The account owner has full account access.

Potential permissions:

- Manage account settings
- Manage users
- Manage billing contacts
- View all monitoring data
- Create and manage support tickets
- Update notification contacts

### Administrator

Administrators can manage operational portal settings.

Potential permissions:

- Manage monitored sites
- Manage device labels
- View alert history
- Create support tickets
- Manage alert recipients

### Technical Contact

Technical contacts can review monitoring and support details.

Potential permissions:

- View device inventory
- View alert history
- View reports
- Create support tickets
- Receive technical alerts

### Billing Contact

Billing contacts should only access billing-related information when billing features exist.

Potential permissions:

- View plan information
- Receive billing notices
- Update billing-related contact details

### Alert Recipient

Alert recipients may receive notifications without full portal access.

Potential permissions:

- Receive selected alerts
- Receive recovery notifications
- Confirm contact information

### Read-Only Viewer

Read-only viewers can review monitoring data without making changes.

Potential permissions:

- View dashboard
- View device status
- View reports
- View alert history

## Trust Considerations

Permissions should be easy to explain. Customers should not have to guess who can see what.

The portal should show:

- Role name
- Permission summary
- Last updated date
- Who invited the user
- Whether the user receives alerts

## Accessibility Considerations

Permissions screens should:

- Use clear labels
- Avoid icon-only controls
- Support keyboard navigation
- Confirm destructive actions
- Explain permission changes in plain language

## Future Scaling Goals

RBAC should be designed to support:

- Multi-site customers
- MSP-managed customers
- Multiple notification groups
- Customer self-service workflows
- Audit-friendly activity history without claiming compliance certification

## Placeholder CTA

- Role management screen: [UPDATE: add future customer portal link]
- Contact management form: [UPDATE: connect contact management forms]
- Support email: support@blackstorm.example
