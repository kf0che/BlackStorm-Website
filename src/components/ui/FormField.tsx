import { useId, type ReactNode } from 'react'

interface FormFieldProps {
  label: string
  children: ReactNode
  helpText?: string
  error?: string
  required?: boolean
}

/*
  FormField

  UX behavior: standardizes labels, help text, and error text for contact,
  support, portal, and billing forms.
  Accessibility: labels and descriptions are explicit; form controls should receive
  the generated id and aria-describedby from future adapters.
  Trust choice: clear help text lowers anxiety before a customer submits information.
*/
export default function FormField({ label, children, helpText, error, required }: FormFieldProps) {
  const id = useId()
  const descriptionId = helpText || error ? `${id}-description` : undefined

  return (
    <div className="bs-form-field" data-field-id={id}>
      <label className="form-label">
        {label}
        {required && <span aria-label="required"> *</span>}
      </label>
      {children}
      {(helpText || error) && (
        <div id={descriptionId} className={error ? 'bs-form-error' : 'bs-form-help'}>
          {error || helpText}
        </div>
      )}
    </div>
  )
}
