import type { ReactNode } from 'react'

interface DataTableProps {
  caption: string
  children: ReactNode
  className?: string
}

/*
  DataTable

  UX behavior: wraps dense operational data in a scroll-safe surface.
  Accessibility: requires a caption so screen reader users know what the table describes.
  Trust choice: tables are for real comparisons, status logs, and reports, not decoration.
  Scalability: useful for pricing, device lists, alert history, and portal reports.
*/
export default function DataTable({ caption, children, className = '' }: DataTableProps) {
  return (
    <div className={`bs-table-wrap ${className}`.trim()}>
      <table className="bs-table">
        <caption className="sr-only">{caption}</caption>
        {children}
      </table>
    </div>
  )
}
