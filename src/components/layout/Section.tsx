import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  compact?: boolean
}

export function Section({ children, className = '', compact = false }: SectionProps) {
  return (
    <section className={`${compact ? 'py-6 md:py-8' : 'py-8 md:py-12 lg:py-16'} ${className}`}>
      {children}
    </section>
  )
}