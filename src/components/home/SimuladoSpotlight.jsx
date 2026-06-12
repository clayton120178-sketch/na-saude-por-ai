import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Stat from '../ui/Stat'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../motion/Reveal'
import ProductMockup from './ProductMockup'

const bullets = [
  'Questões reais de concursos comentadas por especialista',
  'Filtro por banca, assunto e grau de dificuldade',
  'Diagnóstico do que você mais erra — por tema',
  'Histórico de evolução semana a semana',
]

export default function SimuladoSpotlight() {
  return (
    <section className="py-section bg-sand-100" aria-labelledby="simulado-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Pitch */}
          <Reveal>
            <SectionHeading
              eyebrow="Plataforma de Simulados"
              title="Como ter um professor particular, 24 horas por dia."
              lead="Treine com questões de concursos reais, entenda seus erros e chegue na prova sabendo exatamente onde está forte — e onde precisou melhorar."
            />

            <ul className="mt-6 flex flex-col gap-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-body text-ink">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6 mb-8">
              <Stat value="1.500+" label="Questões reais" />
              <Stat value="100%" label="Com gabarito comentado" />
            </div>

            <Button as={Link} to="/simulados" size="lg">
              Quero treinar agora
              <ArrowRight size={18} />
            </Button>
          </Reveal>

          {/* Mock do produto */}
          <Reveal delay={0.15}>
            <ProductMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
