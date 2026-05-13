import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="py-8 md:py-12">
      <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
      {subtitle && <p className="mt-2 text-gray-600 md:mt-3">{subtitle}</p>}
      {children}
    </header>
  )
}