import type { ReactNode } from 'react'

interface KnowledgeBaseArticleLayoutProps {
  title: string
  description?: string
  updatedAt?: string
  children: ReactNode
  aside?: ReactNode
}

/*
  KnowledgeBaseArticleLayout

  Intended customer psychology:
  - Gives educational articles a predictable shape and a calm reading width.

  Accessibility goals:
  - Uses article semantics and one H1.
  - Aside content remains optional supporting material.

  Progressive disclosure:
  - Main content carries the answer; aside can hold related links, videos, or diagrams.

  Future localization:
  - Metadata can be fed by a content system later.
*/
export default function KnowledgeBaseArticleLayout({
  title,
  description,
  updatedAt,
  children,
  aside,
}: KnowledgeBaseArticleLayoutProps) {
  return (
    <article className="education-article">
      <header className="education-article-header">
        <span className="bs-eyebrow">Knowledge Base</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {updatedAt && <small>Last updated: {updatedAt}</small>}
      </header>
      <div className="education-article-layout">
        <div className="education-article-body">{children}</div>
        {aside && <aside className="education-article-aside">{aside}</aside>}
      </div>
    </article>
  )
}
