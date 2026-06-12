import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function MobileNav({ onClose, navLinks }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-navy-900/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col bg-bg"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-line">
          <span className="font-sans font-semibold text-navy-700">Menu</span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-sm text-navy-700 hover:bg-navy-700/8 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Navegação mobile">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `font-sans text-h3 font-semibold py-4 border-b border-line transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm ${
                  isActive ? 'text-navy-700' : 'text-ink-soft hover:text-navy-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-8 pb-10">
          <Button as={Link} to="/simulados" size="lg" className="w-full" onClick={onClose}>
            Começar agora
          </Button>
        </div>
      </motion.div>
    </>
  )
}
