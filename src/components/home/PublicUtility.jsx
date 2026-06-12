import { Link } from 'react-router-dom'
import { Calendar, Users, ArrowRight, Clock } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'
import { editais } from '../../data/editais'

const statusMap = {
  aberto: { label: 'Inscrições abertas', variant: 'success' },
  encerrado: { label: 'Encerradas', variant: 'neutral' },
  breve: { label: 'Em breve', variant: 'warn' },
}

export default function PublicUtility() {
  const destaques = editais.filter((e) => e.status !== 'encerrado').slice(0, 4)

  return (
    <section className="py-section bg-bg" aria-labelledby="editais-heading">
      <Container>
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Utilidade pública"
              title="Fique por dentro dos concursos"
              lead="Editais selecionados e atualizados para técnicos de enfermagem e enfermeiros."
            />
            <p className="font-sans text-small text-ink-soft flex-shrink-0 flex items-center gap-1.5">
              <Clock size={13} />
              Atualizado em jun/2026
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destaques.map((edital) => {
            const { label, variant } = statusMap[edital.status]
            return (
              <div
                key={edital.id}
                className="bg-surface border border-line rounded-lg p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-sans font-semibold text-navy-700 text-body leading-snug">
                      {edital.orgao}
                    </p>
                    <p className="font-sans text-small text-ink-soft mt-0.5">{edital.cargo}</p>
                  </div>
                  <Badge variant={variant}>{label}</Badge>
                </div>

                <div className="flex flex-wrap gap-3 text-small font-sans text-ink-soft">
                  <span className="flex items-center gap-1">
                    <Users size={13} />
                    {edital.vagas} vagas
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    Prova: {new Date(edital.prova).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="bg-teal-50 text-teal-600 rounded-sm px-2 py-0.5">{edital.banca}</span>
                </div>
              </div>
            )
          })}
        </Stagger>

        <Reveal delay={0.1} className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <Button as={Link} to="/editais" variant="secondary">
            Ver todos os editais
            <ArrowRight size={16} />
          </Button>
          <Link
            to="/editais"
            className="font-sans text-small text-navy-500 hover:text-navy-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm"
          >
            Calendário completo de provas →
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
