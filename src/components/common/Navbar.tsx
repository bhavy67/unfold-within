import { useState, useRef, useEffect } from 'react'
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
  const userMenuRef = useRef<HTMLDivElement>(null)

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setUserMenuOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FBFAFC]/85 backdrop-blur-lg border-b border-[#F2EDF8]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-[#2D2540] hover:opacity-70"
        >
          Unfold Within
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-[#7D6BC0]'
                      : 'text-[#8B8399] hover:text-[#5C4CA8]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <CartIcon />

            {isAuthenticated ? (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 text-sm text-[#5C5675] hover:text-[#2D2540] transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#E8D8E8] to-[#D4CBF0]">
                  <span className="text-xs font-semibold text-[#5C4CA8]">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-[#5C4CA8] hover:text-[#7D6BC0] transition-colors"
              >
                Sign in
              </Link>
            )}

            <AnimatePresence>
              {userMenuOpen && isAuthenticated && (
                <motion.div
                  ref={userMenuRef}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-8 top-14 mt-2 w-44 rounded-2xl bg-white shadow-medium border border-[#F2EDF8] py-1.5"
                >
                  <div className="px-3 py-2 border-b border-[#F2EDF8]">
                    <p className="text-sm font-medium text-[#2D2540]">{user?.name}</p>
                    <p className="text-xs text-[#8B8399] truncate">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 text-left text-sm text-[#5C5675] hover:bg-[#F7F3FA] transition-colors"
                  >
                    Sign out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <CartIcon />
          {isAuthenticated && (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#E8D8E8] to-[#D4CBF0]">
              <span className="text-xs font-semibold text-[#5C4CA8]">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <button
            type="button"
            className="p-2 text-[#5C5675]"
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
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden border-t border-[#F2EDF8] bg-[#FBFAFC]"
          >
            <ul className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2.5 text-sm font-medium ${
                      location.pathname === link.path
                        ? 'text-[#7D6BC0]'
                        : 'text-[#8B8399]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              {isAuthenticated && (
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <button
                    onClick={() => {
                      handleLogout()
                      setMobileMenuOpen(false)
                    }}
                    className="block py-2.5 text-sm text-[#8B8399]"
                  >
                    Sign out
                  </button>
                </motion.li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}