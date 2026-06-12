import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Stethoscope } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

function stagger(i, reduced) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-bg pt-10 pb-16 md:pt-16 md:pb-24" aria-label="Apresentação">
      {/* Fundo decorativo sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(27,197,197,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Texto */}
          <div>
            <motion.p
              {...stagger(0, reduced)}
              className="font-sans text-eyebrow font-semibold uppercase tracking-[0.12em] text-navy-500 mb-4"
            >
              Concursos · Enfermagem
            </motion.p>

            <motion.h1
              {...stagger(1, reduced)}
              className="font-display font-semibold text-navy-900 leading-tight mb-2"
              style={{ fontSize: 'var(--fs-display)' }}
            >
              Facilitando a sua jornada na enfermagem.
            </motion.h1>

            {/* Assinatura manuscrita — aparece uma vez, animada */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5"
              aria-hidden="true"
            >
              <span className="font-script text-2xl text-teal-600/70">Na Saúde por Aí…</span>
            </motion.div>

            <motion.p
              {...stagger(3, reduced)}
              className="font-sans text-ink-soft leading-relaxed mb-8"
              style={{ fontSize: 'var(--fs-lead)' }}
            >
              Materiais atualizados, simulados com questões reais e a orientação de quem já passou. Eu te acompanho até a aprovação.
            </motion.p>

            <motion.div
              {...stagger(4, reduced)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button as={Link} to="/simulados" size="lg">
                Conhecer os simulados
                <ArrowRight size={18} />
              </Button>
              <Button as={Link} to="/editais" variant="secondary" size="lg">
                Ver editais abertos
              </Button>
            </motion.div>
          </div>

          {/* Placeholder foto da creator */}
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: reduced ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div
              className="w-full max-w-sm mx-auto aspect-[4/5] rounded-xl bg-sand-200 flex flex-col items-center justify-center gap-3 border border-line shadow-lg"
              role="img"
              aria-label="Foto da creator — retrato"
            >
              <div className="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center border-2 border-line">
                <Stethoscope size={28} className="text-navy-500" strokeWidth={1.5} />
              </div>
              <p className="font-sans text-small text-ink-soft text-center px-6">
                Foto da creator<br />
                <span className="text-eyebrow text-navy-500 uppercase tracking-wider">Retrato — substituir</span>
              </p>
            </div>

            {/* Credencial flutuante */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 left-4 bg-surface rounded-lg shadow-md px-4 py-3 border border-line flex items-center gap-2.5"
            >
              <Stethoscope size={16} className="text-teal-500 flex-shrink-0" />
              <div>
                <p className="font-sans text-eyebrow font-semibold text-navy-700 uppercase tracking-wider leading-none">Aprovada</p>
                <p className="font-sans text-small text-ink-soft mt-0.5">Concurso Federal de Enfermagem</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
