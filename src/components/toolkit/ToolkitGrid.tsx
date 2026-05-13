import type { ReactNode } from 'react'

interface ToolkitGridProps {
  children: ReactNode
}

export function ToolkitGrid({ children }: ToolkitGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  )
}