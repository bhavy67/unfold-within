import { forwardRef, type InputHTMLAttributes } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
          {label}
        </label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-xl border ${
            error ? 'border-red-500' : 'border-[#E8E6E1]'
          } bg-white text-[#1A1A1A] placeholder:text-[#B5B2AB] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all duration-200 ${className}`}
          {...props}
        />
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-1.5 text-sm text-red-500"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

AuthInput.displayName = 'AuthInput'