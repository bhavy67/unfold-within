import type { ReactNode } from 'react'
import { Link } from 'react-router'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="text-xl font-semibold tracking-tight text-brand-900">
            Unfold Within
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-brand-900 md:text-3xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-brand-600">{subtitle}</p>
            )}
          </div>

          <div className="bg-white rounded-3xl shadow-soft p-6 sm:p-8">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 text-center">
        <p className="text-sm text-brand-500">
          &copy; 2026 Unfold Within. All rights reserved.
        </p>
      </footer>
    </div>
  )
}