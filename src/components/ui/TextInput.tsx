import { forwardRef, useId, type InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  helpText?: string
  error?: string
}

/*
  TextInput

  UX behavior: provides a calm, reusable field for contact, support, portal,
  and dashboard forms.
  Accessibility: label, help text, and error text are wired with id/aria attributes.
  Trust choice: explicit helper text reduces hesitation before users submit data.
  Mobile scalability: maps directly to native TextInput label/error patterns later.
*/
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, helpText, error, id, required, className = '', ...props }, ref) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const descriptionId = helpText || error ? `${inputId}-description` : undefined

    return (
      <div className="bs-form-field">
        <label className="form-label" htmlFor={inputId}>
          {label}
          {required && <span aria-label="required"> *</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          className={`form-input ${className}`.trim()}
          aria-invalid={Boolean(error)}
          aria-describedby={descriptionId}
          {...props}
        />
        {(helpText || error) && (
          <div id={descriptionId} className={error ? 'bs-form-error' : 'bs-form-help'}>
            {error || helpText}
          </div>
        )}
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput
