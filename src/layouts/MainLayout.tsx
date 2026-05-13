import { Outlet, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { CartDrawer } from '@/components/cart'

export function MainLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}