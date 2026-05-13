import { Link } from 'react-router'

const footerLinks = [
  { path: '/about', label: 'About' },
  { path: '/toolkits', label: 'Toolkits' },
  { path: '/journal', label: 'Journal' },
  { path: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-200/50 bg-brand-100/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2.5 md:items-start">
            <Link to="/" className="text-lg font-semibold text-brand-900">
              Unfold Within
            </Link>
            <p className="text-sm text-brand-600 max-w-xs text-center md:text-left leading-relaxed">
              Your journey to emotional wellness starts here.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-7">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-600 hover:text-brand-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-brand-200/50 pt-8">
          <p className="text-center text-sm text-brand-500">
            &copy; 2026 Unfold Within. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}