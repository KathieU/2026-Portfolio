import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    {
      name: 'PROJECTS',
      href: '#work',
    },
    {
      name: 'SKILLS',
      href: '#skills',
    },
    {
      name: 'CONTACT',
      href: '#contact',
    },
  ]
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-0 ${isScrolled ? 'bg-dark text-light border-b-8 border-accent' : 'bg-transparent border-b-8 border-dark'}`}
    >
      <div className="max-w-480 mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative group">
          <span
            className={`font-archivo text-2xl md:text-4xl tracking-tighter ${isScrolled ? 'text-light' : 'text-dark'}`}
          >
            CATHERINE<span className="text-accent">.</span>
          </span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-archivo text-xl tracking-wide relative group ${isScrolled ? 'text-light' : 'text-dark'}`}
            >
              {link.name}
              <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left"></div>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X
              className={`w-8 h-8 ${isScrolled ? 'text-light' : 'text-dark'}`}
            />
          ) : (
            <Menu
              className={`w-8 h-8 ${isScrolled ? 'text-light' : 'text-dark'}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b-8 border-accent p-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-archivo text-4xl text-light hover:text-accent tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
