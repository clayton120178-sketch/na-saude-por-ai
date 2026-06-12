import { motion, useReducedMotion } from 'framer-motion'
import { easeOutExpo } from './transitions'

/**
 * Reveal premium: entra com opacity + translateY + desfoque que assenta.
 * O blur é o que dá a sensação de "foco entrando" — distingue de um fade comum.
 */
export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(10px)' }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduced ? 0.3 : 0.85, delay, ease: easeOutExpo }}
    >
      {children}
    </MotionTag>
  )
}
