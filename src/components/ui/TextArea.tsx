import { forwardRef, useId, type TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  helpText?: string
  error?: string
}

/*
  TextArea

  UX behavior: supports longer contact, support, and incident descriptions.
  Accessibility: label and descriptive text are wired to the field.
  Trust choice: helper copy can tell users not to submit passwords or secrets.
*/
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
        <textarea
          ref={ref}
          id={inputId}
          required={required}
          className={`form-textarea ${className}`.trim()}
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

TextArea.displayName = 'TextArea'

export default TextArea
