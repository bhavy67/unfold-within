import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'elevated'
  interactive?: boolean
}

export function Card({ children, className = '', variant = 'default', interactive = false }: CardProps) {
  const variants = {
    default: 'bg-white',
    bordered: 'border border-[#E6DFF0] bg-white',
    elevated: 'bg-white shadow-soft',
  }

  const baseClasses = `rounded-2xl p-6 ${variants[variant]}`

  if (interactive) {
    return (
      <motion.div
        className={`${baseClasses} ${className}`}
        whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(45, 37, 64, 0.12)' }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  )
}