import { motion, useReducedMotion } from 'framer-motion'

export default function Stagger({ children, staggerDelay = 0.06, className = '' }) {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item}>{children}</motion.div>}
    </motion.div>
  )
}
