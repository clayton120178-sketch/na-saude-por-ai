import { Link } from 'react-router-dom'
import { BadgeCheck, Stethoscope, ArrowRight } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Reveal from '../components/motion/Reveal'

const conquistas = [
  'Aprovada — Marinha do Brasil (Top 5)',
  'Aprovada — Hospital das Clínicas SP',
  'Aprovada — SES/MG (1º lugar na região)',
  'Aprovada — Concurso Federal MS',
  'Instrutora em cursos de preparação para enfermagem',
]

export default function SobrePage() {
  return (
    <>
      {/* Hero da página */}
      <section className="py-section bg-bg" aria-labelledby="sobre-heading">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Foto placeholder */}
            <Reveal>
              <div
                className="w-full max-w-sm mx-auto aspect-[4/5] rounded-xl bg-sand-200 flex flex-col items-center justify-center gap-3 border border-line shadow-md"
                role="img"
                aria-label="Foto da creator — substituir com retrato real"
              >
                <div className="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center border-2 border-line">
                  <Stethoscope size={28} className="text-navy-500" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-small text-ink-soft text-center px-6">
                  Foto da creator<br />
                  <span className="text-eyebrow text-navy-500 uppercase tracking-wider">Retrato — substituir</span>
                </p>
              </div>

              {/* Assinatura manuscrita */}
              <div className="mt-4 text-center">
                <span className="font-script text-2xl text-navy-500/60">Na Saúde por Aí</span>
              </div>
            </Reveal>

            {/* Texto */}
            <Reveal delay={0.1}>
              <p className="font-sans text-eyebrow font-semibold uppercase tracking-[0.12em] text-navy-500 mb-3">
                Minha História
              </p>
              <h1
                id="sobre-heading"
                className="font-display font-semibold text-navy-900 leading-tight mb-6"
                style={{ fontSize: 'var(--fs-h2)' }}
              >
                De plantão em plantão, até a aprovação.
              </h1>

              <div className="font-sans text-body text-ink leading-relaxed space-y-4">
                <p>
                  Eu sei o que é estudar com o uniforme ainda manchado de plantão. Sei o que é abrir um livro às 23h depois de 12 horas de pé e tentar absorver algo — qualquer coisa — antes de apagar.
                </p>
                <p>
                  Fiz isso por anos. E sei que a maioria das técnicas e enfermeiras que estão nessa jornada também vive essa realidade: tempo curto, energia no limite, e a pressão de que cada hora de estudo precisa valer.
                </p>
                <p>
                  Quando comecei a estudar para concursos, não havia material que entendesse essa realidade. O que existia era genérico, pesado e caro. Aprendi a selecionar o que realmente caía nas provas e a treinar de forma cirúrgica — e foi isso que me aprovou em alguns dos concursos mais disputados do país.
                </p>
                <p>
                  Criei a <strong className="text-navy-700">Na Saúde por Aí</strong> para oferecer para você o mesmo caminho — sem atalhos mágicos, sem método secreto. Só estratégia, questões reais e a orientação de quem já passou pelo que você está passando.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Conquistas */}
      <section className="py-section bg-sand-100" aria-labelledby="conquistas-heading">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Credenciais"
              title="Aprovações que mostram que o método funciona."
              lead="Não falo de concursos que nunca fiz. Cada aprovação aqui foi conquistada nos mesmos moldes que ensino."
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 max-w-xl">
            {conquistas.map((c) => (
              <div key={c} className="flex items-start gap-3 bg-surface rounded-lg border border-line px-4 py-3 shadow-sm">
                <BadgeCheck size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-small text-ink">{c}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section bg-bg" aria-label="Chamada para ação">
        <Container>
          <Reveal>
            <div className="max-w-lg">
              <h2
                className="font-display font-semibold text-navy-700 leading-tight mb-4"
                style={{ fontSize: 'var(--fs-h2)' }}
              >
                Pronta para começar?
              </h2>
              <p className="font-sans text-ink-soft leading-relaxed mb-8">
                Treinar com questões reais, entender seus erros e chegar na prova com confiança — é isso que a plataforma faz por você.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button as={Link} to="/simulados" size="lg">
                  Conhecer os simulados
                  <ArrowRight size={18} />
                </Button>
                <Button as={Link} to="/editais" variant="secondary" size="lg">
                  Ver editais abertos
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
