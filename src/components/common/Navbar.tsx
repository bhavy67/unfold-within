import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { CartIcon } from '@/components/cart'
import { useAuthStore } from '@/store/auth'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/toolkits', label: 'Toolkits' },
  { path: '/journal', label: 'Journal' },
  { path: '/contact', label: 'Contact' },
]

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    setUserMenuOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-brand-50/80 backdrop-blur-lg border-b border-brand-200/50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-brand-900 transition-opacity hover:opacity-80"
        >
          Unfold Within
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-9">
          <ul className="flex gap-9">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative text-sm transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'font-medium text-brand-900'
                      : 'text-brand-600 hover:text-brand-900'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-700 rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <CartIcon />

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-200">
                    <span className="text-sm font-medium text-brand-700">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 rounded-2xl bg-white shadow-medium border border-brand-100 py-2"
                    >
                      <div className="px-4 py-2 border-b border-brand-100">
                        <p className="text-sm font-medium text-brand-900">{user?.name}</p>
                        <p className="text-xs text-brand-500">{user?.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-sm text-brand-600 hover:bg-brand-50 transition-colors"
                      >
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-brand-700 hover:text-brand-900 transition-colors"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>

        {/* Mobile: menu + cart */}
        <div className="flex items-center gap-2 md:hidden">
          <CartIcon />

          {isAuthenticated ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-200">
              <span className="text-sm font-medium text-brand-700">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium text-brand-700"
            >
              Sign in
            </Link>
          )}

          <button
            type="button"
            className="p-2 text-brand-700 transition-colors hover:text-brand-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-brand-200/50 bg-brand-50"
          >
            <ul className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-2.5 text-base transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'font-medium text-brand-900'
                        : 'text-brand-600 hover:text-brand-900'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {isAuthenticated && (
                <li>
                  <button
                    onClick={() => {
                      handleLogout()
                      setMobileMenuOpen(false)
                    }}
                    className="block py-2.5 text-base text-brand-600"
                  >
                    Sign out
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}