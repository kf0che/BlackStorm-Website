interface CustomerSite {
  id: string
  name: string
  description?: string
}

interface CustomerSiteSelectorProps {
  sites: CustomerSite[]
  value: string
  onChange?: (siteId: string) => void
  label?: string
}

/*
  CustomerSiteSelector

  UX purpose:
  - Lets customers and future MSP users switch between monitored sites.

  Accessibility considerations:
  - Uses a real label and native select for keyboard and mobile support.

  Customer trust considerations:
  - Prevents accidental confusion about which location or customer is being viewed.

  Future scaling goals:
  - Can be backed by an API and RBAC-filtered site list later.
*/
export default function CustomerSiteSelector({
  sites,
  value,
  onChange,
  label = 'Select customer site',
}: CustomerSiteSelectorProps) {
  return (
    <label className="portal-site-selector">
      <span>{label}</span>
      <select
        value={value}
        onChange={event => onChange?.(event.target.value)}
        className="form-select"
      >
        {sites.map(site => (
          <option key={site.id} value={site.id}>
            {site.name}{site.description ? ` - ${site.description}` : ''}
          </option>
        ))}
      </select>
    </label>
  )
}
