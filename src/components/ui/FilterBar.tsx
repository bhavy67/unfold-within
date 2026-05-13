import type { ReactNode } from 'react'

interface FilterOption {
  value: string
  label: string
}

interface FilterBarProps {
  label?: string
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function FilterBar({ label, options, value, onChange, className = '' }: FilterBarProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {label && (
        <span className="text-sm text-brand-600 mr-2">{label}</span>
      )}
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            value === option.value
              ? 'bg-brand-700 text-white'
              : 'bg-brand-100 text-brand-600 hover:bg-brand-200'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}