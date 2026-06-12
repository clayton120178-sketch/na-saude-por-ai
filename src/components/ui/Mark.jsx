import { motion, useReducedMotion } from 'framer-motion'

/**
 * Marca-texto: traço de marcador desenhado atrás de uma palavra-chave do título.
 * Cresce da esquerda p/ direita uma vez quando entra na tela — movimento proposital,
 * que reforça a mensagem (não decoração ambiente).
 */
export default function Mark({ children, color = 'rgba(27,197,197,0.35)', delay = 0.5, className = '' }) {
  const reduced = useReducedMotion()

  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        aria-hidden="true"
        className="absolute left-[-0.08em] right-[-0.08em] bottom-[0.06em] -z-[1] rounded-[3px]"
        style={{ height: '0.62em', background: color, transformOrigin: 'left center' }}
        initial={{ scaleX: reduced ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: reduced ? 0 : delay, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      />
      <span className="relative">{children}</span>
    </span>
  )
}
