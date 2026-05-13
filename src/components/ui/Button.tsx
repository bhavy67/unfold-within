import { forwardRef, type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants = {
      primary: 'bg-brand-700 text-white hover:bg-brand-800 focus:ring-brand-500',
      secondary: 'border border-brand-300 text-brand-700 hover:bg-brand-50 focus:ring-brand-500',
      ghost: 'text-brand-700 hover:bg-brand-50 focus:ring-brand-500',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'