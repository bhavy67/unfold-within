import { forwardRef, type ReactNode, type MouseEventHandler } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97]'

    const variants = {
      primary: 'bg-gradient-to-r from-[#9B8AD0] to-[#B8A9E0] text-white hover:from-[#8878C0] hover:to-[#A090D0] focus:ring-[#B8A9E0] shadow-soft hover:shadow-glow-lavender',
      secondary: 'border border-[#D4CBF0] text-[#5C4CA8] hover:bg-[#F7F3FA] hover:border-[#B8A9E0] focus:ring-[#B8A9E0]',
      ghost: 'text-[#7D6BC0] hover:bg-[#F2EDF8] focus:ring-[#B8A9E0]',
    }

    const sizes = {
      sm: 'px-4 py-2.5 text-sm',
      md: 'px-5 py-3 text-sm',
      lg: 'px-6 py-3.5 text-base',
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
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