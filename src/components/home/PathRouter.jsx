import { Link } from 'react-router-dom'
import { BookOpen, Dumbbell, Zap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'

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
            <Reveal key={title} delay={i * 0.07}>
              <Link
                to={to}
                className={`group relative flex flex-col gap-4 p-6 rounded-lg border transition-all duration-220 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                  highlight
                    ? 'bg-navy-700 border-navy-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                    : 'bg-surface border-line text-ink hover:shadow-md hover:-translate-y-0.5'
                }`}
                aria-label={title}
              >
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-sm ${
                    highlight ? 'bg-white/15' : 'bg-teal-50'
                  }`}
                >
                  <Icon size={20} className={highlight ? 'text-teal-400' : 'text-teal-500'} strokeWidth={1.75} />
                </span>

                <div className="flex-1">
                  <h3 className={`font-sans font-semibold text-h3 leading-snug mb-1 ${highlight ? 'text-white' : 'text-navy-700'}`}>
                    {title}
                  </h3>
                  <p className={`font-sans text-small leading-relaxed ${highlight ? 'text-white/70' : 'text-ink-soft'}`}>
                    {desc}
                  </p>
                </div>

                <div className={`flex items-center gap-1.5 font-sans text-small font-semibold transition-transform duration-200 group-hover:translate-x-1 ${highlight ? 'text-teal-400' : 'text-navy-700'}`}>
                  {cta}
                  <ArrowRight size={15} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
