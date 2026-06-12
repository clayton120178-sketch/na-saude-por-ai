import { motion, useReducedMotion } from 'framer-motion'

/**
 * Assinatura da marca que "se escreve à mão" no load.
 * Técnica: a tinta é revelada por um wipe (clip-path) da esquerda p/ direita,
 * sincronizado com uma ponta de caneta (nib) que percorre o traço com leve
 * oscilação vertical — lê como escrita, não como fade. Uma vez só.
 */
export default function Signature({ delay = 0.9, className = '' }) {
  const reduced = useReducedMotion()
  const DRAW = 1.7 // duração da escrita

  if (reduced) {
    return (
      <span className={`font-script text-3xl text-teal-600/80 ${className}`}>
        Na Saúde por Aí
      </span>
    )
  }

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Tinta revelada pelo wipe */}
      <motion.span
        className="font-script text-3xl md:text-4xl text-teal-600/85 inline-block"
        initial={{ clipPath: 'inset(0 100% -20% 0)' }}
        animate={{ clipPath: 'inset(0 0% -20% 0)' }}
        transition={{ delay, duration: DRAW, ease: [0.5, 0, 0.2, 1] }}
        style={{ willChange: 'clip-path' }}
      >
        Na Saúde por Aí
      </motion.span>

      {/* Ponta da caneta percorrendo o traço */}
      <motion.span
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-2.5 w-2.5 rounded-full bg-teal-500"
        style={{ boxShadow: '0 0 10px 2px rgba(27,197,197,0.6)' }}
        initial={{ left: '0%', opacity: 0, y: '-50%' }}
        animate={{
          left: ['0%', '100%'],
          opacity: [0, 1, 1, 0],
          y: ['-40%', '-62%', '-45%', '-58%', '-50%'],
        }}
        transition={{
          delay,
          duration: DRAW,
          ease: [0.5, 0, 0.2, 1],
          opacity: { delay, duration: DRAW, times: [0, 0.05, 0.92, 1] },
          y: { delay, duration: DRAW, ease: 'easeInOut' },
        }}
      />
    </span>
  )
}
