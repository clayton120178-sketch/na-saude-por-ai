import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, UserCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Stat from '../ui/Stat'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'
import { depoimentos } from '../../data/depoimentos'

const numeros = [
  { value: '2.400+', label: 'Alunas' },
  { value: '780+', label: 'Aprovações' },
  { value: '1.500+', label: 'Questões' },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function SocialProof() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1))

  return (
    <section className="py-section bg-sand-100" aria-labelledby="prova-social-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Resultados reais"
            title="Quem treinou, passou."
            center
          />
        </Reveal>

        {/* Depoimentos desktop: grid */}
        <Stagger className="hidden md:grid grid-cols-3 gap-5 mt-10">
          {depoimentos.slice(0, 3).map((d) => (
            <div key={d.id} className="bg-surface rounded-lg border border-line p-6 flex flex-col gap-4 shadow-sm">
              <Stars />
              <p className="font-sans text-body text-ink leading-relaxed flex-1">"{d.texto}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-line">
                <div className="w-9 h-9 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0">
                  <UserCircle2 size={20} className="text-navy-500" />
                </div>
                <div>
                  <p className="font-sans text-small font-semibold text-navy-700">{d.nome}</p>
                  <p className="font-sans text-eyebrow text-ink-soft">{d.concurso}</p>
                </div>
              </div>
            </div>
          ))}
        </Stagger>

        {/* Depoimentos mobile: carrossel */}
        <div className="md:hidden mt-8">
          <div className="bg-surface rounded-lg border border-line p-6 shadow-sm">
            <Stars />
            <p className="font-sans text-body text-ink leading-relaxed mt-3 mb-4">
              "{depoimentos[current].texto}"
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-line">
              <div className="w-9 h-9 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0">
                <UserCircle2 size={20} className="text-navy-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-small font-semibold text-navy-700">{depoimentos[current].nome}</p>
                <p className="font-sans text-eyebrow text-ink-soft truncate">{depoimentos[current].concurso}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={prev}
                  className="w-8 h-8 rounded-sm border border-line flex items-center justify-center text-navy-500 hover:bg-sand-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-8 h-8 rounded-sm border border-line flex items-center justify-center text-navy-500 hover:bg-sand-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-navy-700' : 'bg-line'}`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Números */}
        <Reveal delay={0.1} className="mt-12 pt-10 border-t border-line flex flex-wrap gap-8 justify-center">
          {numeros.map((n) => (
            <Stat key={n.label} value={n.value} label={n.label} />
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
