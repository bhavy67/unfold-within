import { useEffect } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cart'
import { Button } from '@/components/ui'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal } = useCartStore()
  const subtotal = getSubtotal()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 bg-brand-900/20 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300, duration: 0.4 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-large"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-brand-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-brand-900">
                  Your Cart ({items.length})
                </h2>
                <button
                  onClick={closeCart}
                  className="p-2 text-brand-500 hover:text-brand-900 transition-colors rounded-full hover:bg-brand-50"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-full flex-col items-center justify-center text-center"
                  >
                    <svg className="h-16 w-16 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p className="mt-4 text-brand-600">Your cart is empty</p>
                    <Link
                      to="/toolkits"
                      onClick={closeCart}
                      className="mt-4 text-sm font-medium text-brand-700 hover:text-brand-900"
                    >
                      Browse Toolkits
                    </Link>
                  </motion.div>
                ) : (
                  <ul className="space-y-4">
                    <AnimatePresence>
                      {items.map((item) => (
                        <motion.li
                          key={item.toolkit.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="flex gap-4 border-b border-brand-100 pb-4"
                        >
                          <div className="flex-1">
                            <Link
                              to={`/toolkits/${item.toolkit.slug}`}
                              onClick={closeCart}
                              className="text-sm font-medium text-brand-900 hover:text-brand-700 transition-colors"
                            >
                              {item.toolkit.title}
                            </Link>
                            <p className="mt-1 text-sm text-brand-600">
                              ₹{item.toolkit.price}
                            </p>
                            <div className="mt-2 flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.toolkit.id, item.quantity - 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-200 text-brand-600 hover:bg-brand-50 transition-colors active:scale-95"
                              >
                                -
                              </button>
                              <span className="text-sm text-brand-900 w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.toolkit.id, item.quantity + 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-200 text-brand-600 hover:bg-brand-50 transition-colors active:scale-95"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.toolkit.id)}
                            className="self-start p-1 text-brand-400 hover:text-brand-700 transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="border-t border-brand-200 px-6 py-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-brand-600">Subtotal</span>
                    <span className="text-lg font-semibold text-brand-900">${subtotal}</span>
                  </div>
                  <p className="mt-1 text-xs text-brand-500">Shipping calculated at checkout</p>
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="mt-4 block"
                  >
                    <Button size="lg" className="w-full justify-center">
                      Checkout
                    </Button>
                  </Link>
                  <Link
                    to="/toolkits"
                    onClick={closeCart}
                    className="mt-3 block text-center text-sm text-brand-600 hover:text-brand-900 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}