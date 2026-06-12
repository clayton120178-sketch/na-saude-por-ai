import { Link } from 'react-router-dom'
import { BookOpen, Dumbbell, Zap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'
import { springLively } from '../motion/transitions'

const paths = [
  {
    icon: BookOpen,
    title: 'Vou começar a estudar',
    desc: 'Cursos e plano de estudo para partir do zero com confiança.',
    cta: 'Ver cursos',
    to: '/cursos',
    highlight: false,
  },
  {
    icon: Dumbbell,
    title: 'Preciso treinar',
    desc: 'Simulados com 1.500+ questões reais comentadas e diagnóstico por tema.',
    cta: 'Conhecer os simulados',
    to: '/simulados',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'A prova está chegando',
    desc: 'Revisão e intensivo de reta final com o que mais cai nas provas.',
    cta: 'Ver intensivo',
    to: '/cursos',
    highlight: false,
  },
]

export default function PathRouter() {
  return (
    <section className="py-section bg-bg" aria-labelledby="pathrouter-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Seu ponto de partida"
            title="Por onde você quer começar?"
            center
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {paths.map(({ icon: Icon, title, desc, cta, to, highlight }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <motion.div whileHover={{ y: highlight ? -6 : -4 }} transition={springLively}>
                <Link
                  to={to}
                  className={`group relative flex flex-col gap-4 p-6 rounded-lg border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                    highlight
                      ? 'bg-navy-700 border-navy-700 text-white shadow-lg hover:shadow-2xl'
                      : 'bg-surface border-line text-ink shadow-sm hover:shadow-md'
                  }`}
                  aria-label={title}
                >
                  {/* anel de brilho teal no card em destaque */}
                  {highlight && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ boxShadow: '0 0 0 1px rgba(27,197,197,0.5), 0 18px 50px -12px rgba(27,197,197,0.45)' }}
                    />
                  )}

                  <span
                    className={`relative inline-flex items-center justify-center w-11 h-11 rounded-sm transition-transform duration-300 group-hover:scale-110 ${
                      highlight ? 'bg-white/15' : 'bg-teal-50'
                    }`}
                  >
                    <Icon size={20} className={highlight ? 'text-teal-400' : 'text-teal-500'} strokeWidth={1.75} />
                  </span>

                  <div className="relative flex-1">
                    <h3 className={`font-sans font-semibold text-h3 leading-snug mb-1 ${highlight ? 'text-white' : 'text-navy-700'}`}>
                      {title}
                    </h3>
                    <p className={`font-sans text-small leading-relaxed ${highlight ? 'text-white/70' : 'text-ink-soft'}`}>
                      {desc}
                    </p>
                  </div>

                  <div className={`relative flex items-center gap-1.5 font-sans text-small font-semibold transition-transform duration-300 group-hover:translate-x-1.5 ${highlight ? 'text-teal-400' : 'text-navy-700'}`}>
                    {cta}
                    <ArrowRight size={15} />
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
