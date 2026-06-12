import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Stethoscope } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import MobileNav from './MobileNav'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/simulados', label: 'Simulados' },
  { to: '/editais', label: 'Editais' },
  { to: '/sobre', label: 'Minha História' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md border-b border-line shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm" aria-label="Na Saúde por Aí — Início">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-50">
                <Stethoscope size={18} className="text-teal-500" strokeWidth={1.75} />
              </span>
              <span className="font-sans font-semibold text-navy-700 text-body leading-tight hidden sm:block">
                Na Saúde <span className="text-navy-500">por Aí</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative font-sans text-small font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm py-1 ${
                      isActive ? 'text-navy-700' : 'text-ink-soft hover:text-navy-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <motion.span
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-teal-500 origin-center"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA + hambúrguer */}
            <div className="flex items-center gap-3">
              <Button
                as={Link}
                to="/simulados"
                size="sm"
                className="hidden md:inline-flex"
              >
                Começar agora
              </Button>
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm text-navy-700 hover:bg-navy-700/8 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} navLinks={navLinks} />}
      </AnimatePresence>
    </>
  )
}
