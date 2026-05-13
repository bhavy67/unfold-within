import { forwardRef, type InputHTMLAttributes } from 'react'

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={ref}
          type="search"
          className={`w-full pl-12 pr-4 py-3 rounded-2xl border border-brand-200 bg-white text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 ${className}`}
          {...props}
        />
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'