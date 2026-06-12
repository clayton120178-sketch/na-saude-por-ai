import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-navy-700 text-white hover:bg-navy-900',
  secondary: 'border border-navy-700 text-navy-700 bg-transparent hover:bg-navy-700/8',
  ghost: 'text-navy-500 bg-transparent hover:bg-navy-500/8',
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
    'relative inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 cursor-pointer select-none overflow-hidden'

  const sizes = {
    sm: 'min-h-[36px] px-4 text-small',
    md: 'min-h-[44px] px-6 text-body',
    lg: 'min-h-[52px] px-8 text-lead',
  }

  return (
    <motion.div
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex"
    >
      <Tag
        className={`${base} ${variants[variant]} ${sizes[size]} group ${className}`}
        {...props}
      >
        {variant === 'primary' && (
          <span
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-200 group-hover:w-full"
            aria-hidden="true"
          />
        )}
        {children}
      </Tag>
    </motion.div>
  )
}
