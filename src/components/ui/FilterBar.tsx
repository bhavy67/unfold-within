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
        <span className="text-sm text-[#7A7A7A] mr-2">{label}</span>
      )}
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
            value === option.value
              ? 'bg-[#1A1A1A] text-white'
              : 'bg-[#F5F4F1] text-[#4A4A4A] hover:bg-[#E8E6E1] hover:text-[#1A1A1A]'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}