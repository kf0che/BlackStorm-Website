import { useId } from 'react'

interface ChecklistItem {
  id: string
  label: string
  description?: string
  complete?: boolean
}

interface SetupChecklistProps {
  title: string
  items: ChecklistItem[]
}

/*
  SetupChecklist

  Intended customer psychology:
  - Turns setup into small, finishable tasks instead of one intimidating form.

  Accessibility goals:
  - Uses list semantics and real checkboxes for keyboard and screen reader support.

  Progressive disclosure strategy:
  - Descriptions provide optional context without expanding the whole workflow.

  Future scaling:
  - Completion state can later come from onboarding API progress.
*/
export default function SetupChecklist({ title, items }: SetupChecklistProps) {
  const titleId = useId()

  return (
    <section className="education-checklist" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <label>
              <input type="checkbox" defaultChecked={item.complete} />
              <span>
                <strong>{item.label}</strong>
                {item.description && <small>{item.description}</small>}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
