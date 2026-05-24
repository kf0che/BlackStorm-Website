interface AISummaryPlaceholderProps {
  title?: string
  description?: string
}

/*
  AISummaryPlaceholder

  Customer trust philosophy:
  - Clearly marks AI summaries as future functionality so customers do not mistake
    placeholders for current automated judgment.

  Accessibility:
  - Uses text labels and a simple note pattern that screen readers can parse.

  Future scalability:
  - Keeps a defined surface for human-reviewed AI-assisted operational summaries.
*/
export default function AISummaryPlaceholder({
  title = 'Future AI summary panel',
  description = 'Placeholder for a future human-reviewed operational summary.',
}: AISummaryPlaceholderProps) {
  return (
    <aside className="monitoring-ai-placeholder" role="note">
      <span className="bs-eyebrow">Future Capability</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </aside>
  )
}

