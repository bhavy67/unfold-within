import { Link } from 'react-router'

const footerLinks = [
  { path: '/about', label: 'About' },
  { path: '/toolkits', label: 'Toolkits' },
  { path: '/journal', label: 'Journal' },
  { path: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#F2EDF8] bg-[#F7F3FA]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link to="/" className="text-base font-semibold text-[#2D2540]">
              Unfold Within
            </Link>
            <p className="text-sm text-[#8B8399]">
              Your journey to emotional wellness starts here.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#8B8399] hover:text-[#7D6BC0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-[#F2EDF8] pt-8">
          <p className="text-center text-xs text-[#B8A9C0]">
            &copy; 2026 Unfold Within. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}