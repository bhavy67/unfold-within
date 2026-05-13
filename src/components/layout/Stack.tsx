import type { ReactNode } from 'react'

interface StackProps {
  children: ReactNode
  className?: string
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}

export function Stack({ children, className = '', gap = 'md' }: StackProps) {
  return (
    <div className={`flex flex-col ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}