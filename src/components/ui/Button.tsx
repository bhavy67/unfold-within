import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]'

    const variants = {
      primary: 'bg-brand-700 text-white hover:bg-brand-800 focus:ring-brand-500 active:bg-brand-900',
      secondary: 'border border-brand-300 text-brand-700 hover:bg-brand-50 focus:ring-brand-500 active:bg-brand-100',
      ghost: 'text-brand-700 hover:bg-brand-50 focus:ring-brand-500 active:bg-brand-100',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        transition={{ duration: 0.15 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'