import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../motion/Reveal'

export default function SecondAxis() {
  return (
    <section className="py-section" style={{ backgroundColor: 'var(--champagne)' }} aria-labelledby="segundo-eixo-heading">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-xl">
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-white/50 flex items-center justify-center mt-0.5">
                <Briefcase size={20} className="text-navy-700" strokeWidth={1.75} />
              </div>
              <div>
                <h2
                  id="segundo-eixo-heading"
                  className="font-display font-semibold text-navy-700 leading-snug mb-2"
                  style={{ fontSize: 'var(--fs-h3)' }}
                >
                  Passou? Agora vem a próxima etapa.
                </h2>
                <p className="font-sans text-body text-ink-soft leading-relaxed">
                  Eu te ajudo a montar um currículo irresistível e a planejar seus próximos passos na carreira de enfermagem.
                </p>
              </div>
            </div>

            <Button as={Link} to="/cursos" variant="secondary" className="flex-shrink-0">
              Saber mais
              <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
