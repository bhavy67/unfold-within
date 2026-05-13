import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export function PageContainer({ children, className = '', fullWidth = false }: PageContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${fullWidth ? '' : 'max-w-7xl'} ${className}`}>
      {children}
    </div>
  )
}