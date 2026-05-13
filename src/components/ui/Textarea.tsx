import { forwardRef, type TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 rounded-xl border ${error ? 'border-red-500' : 'border-[#E8E6E1]'} bg-white text-[#1A1A1A] placeholder:text-[#B5B2AB] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all duration-200 ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'