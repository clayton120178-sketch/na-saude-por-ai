import { motion } from 'framer-motion'
import { springSnappy } from '../motion/transitions'

const variants = {
  // CTA de conversão — vívido, preenchido, alto contraste. Impossível de ignorar.
  cta: 'bg-teal-600 text-white shadow-[0_8px_24px_-6px_rgba(21,168,168,0.6)] hover:bg-teal-500 hover:shadow-[0_12px_32px_-6px_rgba(27,197,197,0.7)] font-bold',
  primary: 'bg-navy-700 text-white hover:bg-navy-900',
  secondary: 'border-[1.5px] border-navy-700 text-navy-700 bg-transparent hover:bg-navy-700/[0.07]',
  ghost: 'text-navy-500 bg-transparent hover:bg-navy-500/[0.07]',
}

const sizes = {
  sm: 'min-h-[38px] px-4 text-small',
  md: 'min-h-[46px] px-6 text-body',
  lg: 'min-h-[54px] px-8 text-lead',
  xl: 'min-h-[62px] px-10 text-lead',
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

  const isCta = variant === 'cta'

  return (
    <motion.div
      whileHover={{ y: -2, scale: isCta ? 1.02 : 1 }}
      whileTap={{ scale: 0.97 }}
      transition={springSnappy}
      className="inline-flex"
    >
      <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {/* brilho que cruza no hover */}
        {(isCta || variant === 'primary') && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
          />
        )}
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
