import Button from '../ui/Button'
import TextArea from '../ui/TextArea'
import TextInput from '../ui/TextInput'

interface TicketCreationFormProps {
  onSubmit?: () => void
}

/*
  TicketCreationForm

  UX and trust goals:
  - Keeps ticket creation approachable for non-technical business owners.
  - Requests impact and affected service instead of forcing customers into technical categories.
  - Reminds users not to submit passwords or secrets.

  Accessibility:
  - Uses semantic form markup, real labels, native selects, and clear helper text.

  Future scalability:
  - Can connect to a ticketing API, customer portal identity, and notification preferences later.
*/
export default function TicketCreationForm({ onSubmit }: TicketCreationFormProps) {
  return (
    <form className="support-ticket-form" onSubmit={event => {
      event.preventDefault()
      onSubmit?.()
    }}>
      <div className="bs-form-grid">
        <TextInput
          label="Name"
          name="name"
          autoComplete="name"
          required
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <TextInput
        label="Ticket subject"
        name="subject"
        required
        helpText="Use a short description, such as Monitoring alert question or Device offline."
      />
      <div className="bs-form-grid">
        <label className="bs-form-field">
          <span className="form-label">Priority</span>
          <select className="form-select" name="priority" defaultValue="normal">
            <option value="low">Low - general question</option>
            <option value="normal">Normal - workflow affected</option>
            <option value="high">High - business impact</option>
            <option value="urgent">Urgent - active disruption</option>
          </select>
        </label>
        <TextInput
          label="Affected service or device"
          name="affectedItem"
          helpText="Optional. Add a device name, location, or service if known."
        />
      </div>
      <TextArea
        label="What is happening?"
        name="description"
        rows={6}
        required
        helpText="Include what changed, who is affected, and any useful screenshots or ticket references. Do not include passwords or secrets."
      />
      <footer className="support-form-actions">
        <p>Placeholder: [POST-LAUNCH: connect customer portal ticket endpoint]</p>
        <Button type="submit">Create support ticket</Button>
      </footer>
    </form>
  )
}
