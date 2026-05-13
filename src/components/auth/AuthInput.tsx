import { forwardRef, type InputHTMLAttributes } from 'react'

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-brand-900 mb-1.5">
          {label}
        </label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-2xl border ${
            error ? 'border-red-500' : 'border-brand-200'
          } bg-white text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

AuthInput.displayName = 'AuthInput'