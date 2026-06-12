import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Stethoscope, BadgeCheck } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Atmosphere from '../ui/Atmosphere'
import Signature from './Signature'
import { easeOutExpo } from '../motion/transitions'

/* Linhas do H1 reveladas por máscara (cada uma sobe de baixo) */
const linhasH1 = ['Facilitando a sua', 'jornada na enfermagem.']

function MaskLine({ children, delay }) {
  const reduced = useReducedMotion()
  if (reduced) {
    return <span className="block">{children}</span>
  }
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '115%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 0.95, ease: easeOutExpo }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function fade(delay, reduced, y = 18) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : y, filter: reduced ? 'none' : 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.7, delay, ease: easeOutExpo },
  }
}

export default function Hero() {
  const reduced = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.06])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -40])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-bg pt-12 pb-20 md:pt-20 md:pb-28"
      aria-label="Apresentação"
    >
      <Atmosphere variant="hero" />

      <Container className="relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Texto */}
          <motion.div style={{ y: textY }}>
            <motion.div {...fade(0, reduced)} className="flex items-center gap-2.5 mb-5">
              <span className="h-px w-8 bg-teal-500/60" />
              <span className="font-sans text-eyebrow font-semibold uppercase tracking-[0.18em] text-navy-500">
                Concursos · Enfermagem
              </span>
            </motion.div>

            <h1
              className="font-display font-semibold text-navy-900 leading-[1.04] tracking-[-0.01em] mb-3"
              style={{ fontSize: 'var(--fs-display)' }}
            >
              {linhasH1.map((linha, i) => (
                <MaskLine key={linha} delay={0.15 + i * 0.12}>
                  {linha}
                </MaskLine>
              ))}
            </h1>

            <div className="mb-6 -mt-1">
              <Signature delay={1.0} />
            </div>

            <motion.p
              {...fade(0.55, reduced)}
              className="font-sans text-ink-soft leading-relaxed mb-8 max-w-md"
              style={{ fontSize: 'var(--fs-lead)' }}
            >
              Materiais atualizados, simulados com questões reais e a orientação de
              quem já passou. Eu te acompanho até a aprovação.
            </motion.p>

            <motion.div {...fade(0.68, reduced)} className="flex flex-col sm:flex-row gap-3">
              <Button as={Link} to="/simulados" size="lg">
                Conhecer os simulados
                <ArrowRight size={18} />
              </Button>
              <Button as={Link} to="/editais" variant="secondary" size="lg">
                Ver editais abertos
              </Button>
            </motion.div>
          </motion.div>

          {/* Foto com parallax */}
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.94, filter: reduced ? 'none' : 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: reduced ? 0 : 0.3, ease: easeOutExpo }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <motion.div
                style={{ y: photoY, scale: photoScale }}
                className="aspect-[4/5] rounded-xl bg-gradient-to-b from-sand-200 to-sand-100 flex flex-col items-center justify-center gap-3 border border-line shadow-lg overflow-hidden"
                role="img"
                aria-label="Foto da creator — retrato"
              >
                <div className="w-16 h-16 rounded-full bg-surface/70 backdrop-blur-sm flex items-center justify-center border-2 border-line shadow-sm">
                  <Stethoscope size={28} className="text-navy-500" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-small text-ink-soft text-center px-6">
                  Foto da creator
                  <br />
                  <span className="text-eyebrow text-navy-500 uppercase tracking-wider">
                    Retrato — substituir
                  </span>
                </p>
              </motion.div>

              {/* Credencial flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 18,
                  delay: reduced ? 0 : 1.0,
                }}
                className="absolute -bottom-5 -left-3 sm:-left-5 bg-surface/90 backdrop-blur-md rounded-lg shadow-lg px-4 py-3 border border-line flex items-center gap-2.5"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 flex-shrink-0">
                  <BadgeCheck size={16} className="text-teal-500" />
                </span>
                <div>
                  <p className="font-sans text-eyebrow font-semibold text-navy-700 uppercase tracking-wider leading-none">
                    Aprovada
                  </p>
                  <p className="font-sans text-small text-ink-soft mt-0.5">
                    Concurso Federal de Enfermagem
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
