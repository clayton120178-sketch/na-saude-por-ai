import { motion, useReducedMotion } from 'framer-motion'
import { easeOutExpo } from './transitions'

/**
 * Stagger premium: filhos entram em cascata com blur + y.
 */
export default function Stagger({ children, staggerDelay = 0.09, delayChildren = 0, className = '' }) {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : staggerDelay,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  }

  const item = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 26, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reduced ? 0.3 : 0.75, ease: easeOutExpo },
    },
  }

  const arr = Array.isArray(children) ? children : [children]

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {arr.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
