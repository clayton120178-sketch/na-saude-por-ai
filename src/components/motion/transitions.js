/**
 * Presets de movimento da marca.
 * Springs calibrados para sensação "premium": entrada com peso, sem overshoot exagerado.
 */

// Spring suave para entradas (peso, assenta com elegância)
export const springSoft = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 1,
}

// Spring com micro-overshoot para elementos vivos (cards, botões)
export const springLively = {
  type: 'spring',
  stiffness: 280,
  damping: 22,
  mass: 0.9,
}

// Spring rápido e preciso para micro-interações (hover)
export const springSnappy = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
}

// Easing cinematográfico (curvas de assinatura)
export const easeOutSoft = [0.22, 1, 0.36, 1]
export const easeInOutCine = [0.65, 0, 0.35, 1]
export const easeOutExpo = [0.16, 1, 0.3, 1]

// Reveal premium: opacity + y + desfoque que assenta
export const revealBlur = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

// Reveal por máscara: linha sobe de baixo (usar dentro de overflow-hidden)
export const maskLineUp = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease: easeOutExpo } },
}

// Container de stagger orquestrado
export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})
