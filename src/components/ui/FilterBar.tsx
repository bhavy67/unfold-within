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
    <div className={`flex flex-nowrap items-center gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide ${className}`}>
      {label && (
        <span className="text-sm text-[#7A7A7A] shrink-0">{label}</span>
      )}
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 shrink-0 whitespace-nowrap ${
            value === option.value
              ? 'bg-[#2D2540] text-white shadow-soft'
              : 'bg-[#F2EDF8] text-[#5C5675] hover:bg-[#E8DFF5] hover:text-[#2D2540]'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}