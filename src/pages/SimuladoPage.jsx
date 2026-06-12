import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Stat from '../components/ui/Stat'
import Badge from '../components/ui/Badge'
import Reveal from '../components/motion/Reveal'
import Stagger from '../components/motion/Stagger'
import ProductMockup from '../components/home/ProductMockup'
import { depoimentos } from '../data/depoimentos'

const passos = [
  {
    num: '01',
    titulo: 'Escolha o tema',
    desc: 'Selecione a banca, o assunto ou a dificuldade. O sistema monta um simulado personalizado para você.',
  },
  {
    num: '02',
    titulo: 'Faça o simulado',
    desc: 'Questões reais de concursos, cronometradas, com interface que simula o dia da prova. Sem distrações.',
  },
  {
    num: '03',
    titulo: 'Veja onde melhorar',
    desc: 'Após cada simulado, seu diagnóstico por tema é atualizado. Você sabe exatamente o que estudar a seguir.',
  },
]

const amostra = {
  enunciado: 'Um paciente recebe prescrição de 500 mg de amoxicilina a cada 8 horas. O frasco disponível tem concentração de 250 mg/5 mL. Qual o volume a ser administrado em cada dose?',
  alternativas: [
    { letra: 'A', texto: '5 mL', correta: false },
    { letra: 'B', texto: '7,5 mL', correta: false },
    { letra: 'C', texto: '10 mL', correta: true },
    { letra: 'D', texto: '12,5 mL', correta: false },
    { letra: 'E', texto: '15 mL', correta: false },
  ],
  comentario: 'Usando a regra de três: 250 mg → 5 mL / 500 mg → x mL. Portanto x = (500 × 5) / 250 = 10 mL. Sempre confirmar a concentração do frasco antes de preparar.',
}

const faqs = [
  {
    q: 'As questões são mesmo de concursos reais?',
    a: 'Sim. Todas as questões são extraídas de provas reais de concursos públicos das últimas edições. Você vai treinar com o mesmo nível e formato do dia da prova.',
  },
  {
    q: 'Posso usar pelo celular?',
    a: 'Claro. A plataforma é mobile-first — foi desenhada para quem estuda entre um plantão e outro, no ônibus ou em qualquer lugar.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Garantia de 7 dias. Se dentro de uma semana você achar que não valeu, devolvemos o investimento sem burocracia.',
  },
  {
    q: 'Com que frequência novas questões são adicionadas?',
    a: 'A base é atualizada mensalmente com questões dos concursos mais recentes. Você sempre treina com conteúdo atual.',
  },
]

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-line">
      <button
        className="w-full flex items-center justify-between gap-4 py-4 text-left font-sans font-semibold text-body text-navy-700 hover:text-navy-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {q}
        {open ? <ChevronUp size={18} className="flex-shrink-0 text-ink-soft" /> : <ChevronDown size={18} className="flex-shrink-0 text-ink-soft" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-body text-ink-soft pb-4 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function QuestaoAmostra() {
  const [selecionada, setSelecionada] = useState(null)
  const [revelado, setRevelado] = useState(false)

  const handleSelect = (letra) => {
    setSelecionada(letra)
    setRevelado(true)
  }

  return (
    <div className="bg-surface rounded-lg border border-line shadow-md overflow-hidden max-w-lg mx-auto">
      <div className="px-5 py-4 border-b border-line flex items-center justify-between">
        <span className="font-sans text-eyebrow font-semibold uppercase tracking-wider text-navy-500">Questão de amostra · Farmacologia</span>
        <Badge>VUNESP</Badge>
      </div>
      <div className="px-5 py-5">
        <p className="font-sans text-body text-ink leading-relaxed mb-5">{amostra.enunciado}</p>
        <div className="flex flex-col gap-2">
          {amostra.alternativas.map((alt) => {
            let cls = 'border border-line bg-sand-100 text-ink hover:border-navy-500 cursor-pointer'
            if (revelado && alt.correta) cls = 'border-green-500 bg-green-50 text-green-800 cursor-default'
            else if (revelado && selecionada === alt.letra && !alt.correta) cls = 'border-red-400 bg-red-50 text-red-800 cursor-default'
            else if (!revelado && selecionada === alt.letra) cls = 'border-navy-700 bg-navy-700/8 text-navy-700 cursor-pointer'

            return (
              <button
                key={alt.letra}
                className={`flex items-center gap-2.5 rounded-sm px-3 py-2.5 text-small font-sans text-left transition-colors ${cls} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500`}
                onClick={() => !revelado && handleSelect(alt.letra)}
                disabled={revelado}
              >
                <span className="font-semibold w-4 flex-shrink-0">{alt.letra}</span>
                {alt.texto}
              </button>
            )
          })}
        </div>

        <AnimatePresence>
          {revelado && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-line">
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 size={14} className="text-green-600" />
                  <span className="font-sans text-eyebrow font-semibold uppercase tracking-wider text-green-700">Gabarito: C — Comentário</span>
                </div>
                <p className="font-sans text-small text-ink-soft leading-relaxed">{amostra.comentario}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function SimuladoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-section bg-bg" aria-labelledby="simulado-hero-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="font-sans text-eyebrow font-semibold uppercase tracking-[0.12em] text-navy-500 mb-3">
                Plataforma de Simulados
              </p>
              <h1
                id="simulado-hero-heading"
                className="font-display font-semibold text-navy-900 leading-tight mb-4"
                style={{ fontSize: 'var(--fs-display)' }}
              >
                É como ter um professor particular dedicado, na sua casa, 24 horas por dia.
              </h1>
              <p className="font-sans text-ink-soft leading-relaxed mb-8" style={{ fontSize: 'var(--fs-lead)' }}>
                1.500+ questões reais comentadas, diagnóstico do que você mais erra e uma plataforma feita para estudar onde e quando você puder.
              </p>
              <Button as={Link} to="#precos" size="lg">
                Quero começar agora
                <ArrowRight size={18} />
              </Button>
            </Reveal>
            <Reveal delay={0.15}>
              <ProductMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section className="py-section bg-sand-100" aria-labelledby="como-funciona-heading">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Como funciona" title="Três passos para chegar mais perto da aprovação." center />
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {passos.map((p) => (
              <div key={p.num} className="bg-surface rounded-lg border border-line p-6 shadow-sm">
                <span className="font-mono text-h2 font-medium text-teal-500/30 leading-none block mb-3">{p.num}</span>
                <h3 className="font-sans font-semibold text-navy-700 mb-2" style={{ fontSize: 'var(--fs-h3)' }}>{p.titulo}</h3>
                <p className="font-sans text-small text-ink-soft leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Amostra de questão */}
      <section className="py-section bg-bg" aria-labelledby="amostra-heading">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Experimente" title="Veja como são as questões." center />
          </Reveal>
          <div className="mt-10">
            <QuestaoAmostra />
          </div>
        </Container>
      </section>

      {/* Números */}
      <section className="py-section bg-sand-100" aria-label="Números da plataforma">
        <Container>
          <Reveal className="flex flex-wrap justify-center gap-10">
            <Stat value="1.500+" label="Questões reais" />
            <Stat value="100%" label="Com gabarito comentado" />
            <Stat value="780+" label="Aprovações" />
            <Stat value="7 dias" label="Garantia de reembolso" />
          </Reveal>
        </Container>
      </section>

      {/* Depoimentos */}
      <section className="py-section bg-bg" aria-labelledby="depoimentos-simulado-heading">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Quem aprovou" title="Elas treinaram aqui." center />
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {depoimentos.slice(0, 2).map((d) => (
              <div key={d.id} className="bg-surface rounded-lg border border-line p-6 shadow-sm">
                <p className="font-sans text-body text-ink leading-relaxed mb-4">"{d.texto}"</p>
                <p className="font-sans text-small font-semibold text-navy-700">{d.nome}</p>
                <p className="font-sans text-eyebrow text-ink-soft">{d.concurso}</p>
              </div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Preço / CTA */}
      <section id="precos" className="py-section bg-navy-700" aria-labelledby="preco-heading">
        <Container>
          <Reveal>
            <div className="max-w-md mx-auto text-center">
              <h2
                id="preco-heading"
                className="font-display font-semibold text-white leading-tight mb-3"
                style={{ fontSize: 'var(--fs-h2)' }}
              >
                Invista na sua aprovação.
              </h2>
              <p className="font-sans text-white/60 mb-8">Acesso completo à plataforma com todas as questões, filtros e diagnóstico.</p>

              <div className="bg-white rounded-xl p-8 text-left shadow-lg mb-6">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-mono text-h2 font-medium text-navy-700">R$ 29,90</span>
                  <span className="font-sans text-small text-ink-soft">/mês</span>
                </div>
                <p className="font-sans text-small text-ink-soft mb-5">ou R$ 24,90/mês no plano anual</p>

                <ul className="flex flex-col gap-2.5 mb-6">
                  {['1.500+ questões de concursos reais', 'Gabarito comentado em todas', 'Filtro por banca, tema e dificuldade', 'Diagnóstico por tema', 'Simulado cronometrado', 'Acesso pelo celular'].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                      <span className="font-sans text-small text-ink">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" className="w-full justify-center">
                  Começar com garantia de 7 dias
                </Button>
              </div>

              <p className="font-sans text-small text-white/40">
                Garantia de reembolso total em 7 dias — sem perguntas.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-section bg-bg" aria-labelledby="faq-heading">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Dúvidas frequentes" title="Antes de começar." className="mb-8" />
          </Reveal>
          <div className="max-w-2xl">
            {faqs.map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
