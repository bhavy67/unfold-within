import { type ReactNode } from 'react'
import { motion, type MotionProps } from 'framer-motion'

interface FadeInProps extends MotionProps {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({ children, delay = 0.1 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}