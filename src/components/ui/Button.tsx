import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'accent' | 'ghost'
  size?: 'sm' | 'lg'
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  fullWidth?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  fullWidth,
  disabled,
}: ButtonProps) {
  const cls = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
    size === 'lg' ? 'btn-lg' : '',
    fullWidth ? 'btn-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
