import { forwardRef, type InputHTMLAttributes } from 'react'

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B5B2AB]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={ref}
          type="search"
          className={`w-full pl-11 pr-4 py-3 rounded-xl border border-[#E8E6E1] bg-white text-[#1A1A1A] placeholder:text-[#B5B2AB] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all duration-200 ${className}`}
          {...props}
        />
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'