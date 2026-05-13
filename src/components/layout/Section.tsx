import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  compact?: boolean
}

export function Section({ children, className = '', compact = false }: SectionProps) {
  return (
    <section className={`${compact ? 'py-8 md:py-10' : 'py-12 md:py-16 lg:py-20'} ${className}`}>
      {children}
    </section>
  )
}