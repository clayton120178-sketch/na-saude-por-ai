import { motion } from 'framer-motion'
import { springSnappy } from '../motion/transitions'

const variants = {
  primary: 'bg-navy-700 text-white hover:bg-navy-900',
  secondary: 'border border-navy-700 text-navy-700 bg-transparent hover:bg-navy-700/[0.07]',
  ghost: 'text-navy-500 bg-transparent hover:bg-navy-500/[0.07]',
}

const sizes = {
  sm: 'min-h-[36px] px-4 text-small',
  md: 'min-h-[44px] px-6 text-body',
  lg: 'min-h-[52px] px-8 text-lead',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  const base =
    'relative inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 cursor-pointer select-none overflow-hidden group'

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={springSnappy}
      className="inline-flex"
    >
      <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {/* brilho que cruza no hover */}
        {variant === 'primary' && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        )}
        {/* sublinhado teal — micro-assinatura da marca */}
        {variant === 'primary' && (
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-300 ease-out group-hover:w-full"
          />
        )}
        <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
      </Tag>
    </motion.div>
  )
}
