import type { ReactNode } from 'react'

interface ContentWrapperProps {
  children: ReactNode
  className?: string
}

export function ContentWrapper({ children, className = '' }: ContentWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-4xl ${className}`}>
      {children}
    </div>
  )
}