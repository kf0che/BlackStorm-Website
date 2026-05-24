interface KnowledgeBaseSuggestion {
  id: string
  title: string
  summary: string
  href?: string
}

interface KnowledgeBaseSuggestionPanelProps {
  suggestions: KnowledgeBaseSuggestion[]
  emptyMessage?: string
}

/*
  KnowledgeBaseSuggestionPanel

  UX and trust goals:
  - Offers self-service help without making customers feel deflected.
  - Keeps suggestions optional and leaves ticket creation available.

  Accessibility:
  - Uses list semantics and descriptive link text.

  Future scalability:
  - Can later connect to article search, ticket category matching, or portal context.
*/
export default function KnowledgeBaseSuggestionPanel({
  suggestions,
  emptyMessage = 'Knowledge base suggestions will appear here when articles are connected.',
}: KnowledgeBaseSuggestionPanelProps) {
  return (
    <aside className="support-kb-panel" aria-label="Knowledge base suggestions">
      <span className="bs-eyebrow">Suggested Help</span>
      <h2>Related knowledge base articles</h2>
      {suggestions.length ? (
        <ul>
          {suggestions.map(suggestion => (
            <li key={suggestion.id}>
              {suggestion.href ? (
                <a href={suggestion.href}>{suggestion.title}</a>
              ) : (
                <strong>{suggestion.title}</strong>
              )}
              <p>{suggestion.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{emptyMessage}</p>
      )}
      <small>Placeholder: [UPDATE: connect article recommendations]</small>
    </aside>
  )
}
