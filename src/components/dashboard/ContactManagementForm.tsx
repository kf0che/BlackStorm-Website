import TextInput from '../ui/TextInput'
import TextArea from '../ui/TextArea'

interface ContactManagementFormProps {
  mode?: 'create' | 'edit'
}

/*
  ContactManagementForm

  UX purpose:
  - Gives customers a clear structure for managing alert recipients and account contacts.

  Accessibility considerations:
  - Every field has an explicit label and helper text.
  - Uses native form controls for keyboard and mobile compatibility.

  Customer trust considerations:
  - Explains why contact information is requested and reminds users not to submit secrets.

  Future scaling goals:
  - Can connect to RBAC, notification preferences, and customer self-service APIs.
*/
export default function ContactManagementForm({ mode = 'create' }: ContactManagementFormProps) {
  return (
    <form className="portal-contact-form" aria-label={`${mode === 'create' ? 'Create' : 'Edit'} portal contact`}>
      <div className="bs-form-grid">
        <TextInput label="Contact name" name="name" autoComplete="name" required />
        <TextInput label="Email address" name="email" type="email" autoComplete="email" required />
        <TextInput label="Phone number" name="phone" type="tel" autoComplete="tel" helpText="Used only for supported alert or support workflows." />
        <label className="bs-form-field">
          <span className="form-label">Contact role</span>
          <select className="form-select" name="role" defaultValue="technical">
            <option value="owner">Account owner</option>
            <option value="admin">Administrator</option>
            <option value="technical">Technical contact</option>
            <option value="billing">Billing contact</option>
            <option value="alert">Alert recipient</option>
            <option value="readonly">Read-only viewer</option>
          </select>
        </label>
      </div>
      <TextArea
        label="Notes"
        name="notes"
        helpText="Do not include passwords, secrets, or private credentials."
        rows={4}
      />
      <div className="bs-button-row">
        <button className="btn btn-primary" type="submit">[PLACEHOLDER] Save contact</button>
        <button className="btn btn-outline" type="button">Cancel</button>
      </div>
    </form>
  )
}
