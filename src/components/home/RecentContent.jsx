import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'

const artigos = [
  {
    id: 1,
    titulo: 'Como montar um cronograma de estudos realista para concursos de enfermagem',
    categoria: 'Estratégia de estudos',
    tempo: '6 min de leitura',
    slug: '#',
  },
  {
    id: 2,
    titulo: 'Os 10 assuntos mais cobrados em provas de técnico de enfermagem — 2025/2026',
    categoria: 'Conteúdo de prova',
    tempo: '8 min de leitura',
    slug: '#',
  },
  {
    id: 3,
    titulo: 'Farmacologia para concursos: o que estudar e o que ignorar',
    categoria: 'Farmacologia',
    tempo: '5 min de leitura',
    slug: '#',
  },
]

export default function RecentContent() {
  return (
    <section className="py-section bg-bg" aria-labelledby="conteudo-heading">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Blog"
              title="Conteúdo para a sua aprovação"
            />
            <Link
              to="/blog"
              className="flex-shrink-0 font-sans text-small font-semibold text-navy-700 hover:text-navy-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm hidden sm:flex items-center gap-1"
            >
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {artigos.map((a) => (
            <Link
              key={a.id}
              to={a.slug}
              className="group bg-surface border border-line rounded-lg p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-220 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              <Badge variant="neutral">{a.categoria}</Badge>
              <h3 className="font-sans font-semibold text-navy-700 leading-snug group-hover:text-navy-900 transition-colors flex-1">
                {a.titulo}
              </h3>
              <div className="flex items-center gap-1.5 text-ink-soft">
                <Clock size={13} />
                <span className="font-sans text-eyebrow">{a.tempo}</span>
              </div>
            </Link>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
