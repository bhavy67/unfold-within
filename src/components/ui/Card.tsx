import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'elevated'
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white',
    bordered: 'border border-surface-300 bg-white',
    elevated: 'bg-white shadow-soft',
  }

  return (
    <div className={`rounded-3xl p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}