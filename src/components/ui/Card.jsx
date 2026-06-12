import { motion } from 'framer-motion'

export default function Card({ children, className = '', clickable = false, onClick }) {
  const base =
    'bg-surface border border-line rounded-lg shadow-sm'

  if (clickable) {
    return (
      <motion.div
        className={`${base} cursor-pointer ${className}`}
        whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={`${base} ${className}`}>
      {children}
    </div>
  )
}
