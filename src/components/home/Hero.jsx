import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Star, CheckCircle2, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Atmosphere from '../ui/Atmosphere'
import Mark from '../ui/Mark'
import Signature from './Signature'
import { springLively } from '../motion/transitions'

const EASE = [0.16, 1, 0.3, 1]

/* entrada confiante: sobe rápido com leve overshoot */
function up(delay, reduced, y = 22) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0.3 : 0.55, delay, ease: EASE },
  }
}

const avatares = [
  { ini: 'F', bg: '#2D2A55' },
  { ini: 'C', bg: '#15A8A8' },
  { ini: 'J', bg: '#4A4778' },
  { ini: 'P', bg: '#1BC5C5' },
]

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-bg pt-10 pb-16 md:pt-16 md:pb-24" aria-label="Apresentação">
      <Atmosphere variant="hero" />

      <Container className="relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          {/* ---------- Texto ---------- */}
          <div>
            {/* Pill com pulso */}
            <motion.div {...up(0, reduced)} className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-500/25 pl-2.5 pr-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              <span className="font-sans text-eyebrow font-bold uppercase tracking-[0.1em] text-teal-600">
                Concursos de Enfermagem
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...up(0.08, reduced)}
              className="font-display font-semibold text-navy-900 leading-[1.05] tracking-[-0.015em]"
              style={{ fontSize: 'var(--fs-display)' }}
            >
              Treine com{' '}
              <Mark delay={0.7}>questões reais</Mark>{' '}
              e chegue na prova sabendo o que cai.
            </motion.h1>

            <motion.div {...up(0.16, reduced)} className="mt-3 mb-5">
              <Signature delay={1.0} />
            </motion.div>

            {/* Subhead */}
            <motion.p
              {...up(0.22, reduced)}
              className="font-sans text-ink-soft leading-relaxed mb-7 max-w-xl"
              style={{ fontSize: 'var(--fs-lead)' }}
            >
              <strong className="text-navy-700 font-semibold">1.500+ questões</strong> de concursos comentadas, com
              diagnóstico do que você mais erra. É como ter um professor particular na sua casa, 24 horas por dia.
            </motion.p>

            {/* CTAs */}
            <motion.div {...up(0.3, reduced)} className="flex flex-col sm:flex-row gap-3">
              <Button as={Link} to="/simulados" variant="cta" size="xl">
                Quero treinar agora
                <ArrowRight size={20} />
              </Button>
              <Button as={Link} to="/editais" variant="secondary" size="xl">
                Ver editais abertos
              </Button>
            </motion.div>

            {/* Reasseguramento */}
            <motion.ul {...up(0.38, reduced)} className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-4">
              {['Comece grátis', '7 dias de garantia', 'Cancele quando quiser'].map((t) => (
                <li key={t} className="flex items-center gap-1.5 font-sans text-small text-ink-soft">
                  <Check size={15} className="text-teal-600" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </motion.ul>

            {/* Prova social */}
            <motion.div {...up(0.46, reduced)} className="flex items-center gap-4 mt-8 pt-7 border-t border-line">
              <div className="flex -space-x-2.5">
                {avatares.map((a) => (
                  <span
                    key={a.ini}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-bg font-sans text-small font-bold text-white"
                    style={{ backgroundColor: a.bg }}
                  >
                    {a.ini}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-sans text-small text-ink-soft mt-0.5">
                  <strong className="text-navy-700 font-bold">2.400+ enfermeiras</strong> aprovadas e treinando
                </p>
              </div>
            </motion.div>
          </div>

          {/* ---------- Showcase do produto ---------- */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 28, scale: reduced ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduced ? 0.3 : 0.7, delay: reduced ? 0 : 0.25, ease: EASE }}
            className="relative"
          >
            {/* blob de cor atrás (estático, intencional) */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[32px] -z-[1]"
              style={{ background: 'radial-gradient(60% 60% at 70% 30%, rgba(27,197,197,0.18), transparent 70%)' }}
            />

            <AppWindow />

            {/* chip flutuante: aprovada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...springLively, delay: reduced ? 0 : 0.9 }}
              className="absolute -top-3 -right-2 sm:-right-4 bg-surface rounded-lg shadow-lg border border-line px-3.5 py-2.5 flex items-center gap-2"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 flex-shrink-0">
                <CheckCircle2 size={16} className="text-green-600" />
              </span>
              <div>
                <p className="font-sans text-eyebrow font-bold text-green-700 uppercase tracking-wide leading-none">Aprovada!</p>
                <p className="font-sans text-[11px] text-ink-soft mt-0.5 leading-none">Prefeitura de SP</p>
              </div>
            </motion.div>

            {/* chip flutuante: evolução */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...springLively, delay: reduced ? 0 : 1.05 }}
              className="absolute -bottom-3 -left-2 sm:-left-5 bg-navy-700 rounded-lg shadow-lg px-3.5 py-2.5 flex items-center gap-2.5"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-teal-500/20 flex-shrink-0">
                <TrendingUp size={16} className="text-teal-400" />
              </span>
              <div>
                <p className="font-mono text-body font-bold text-white leading-none">+23%</p>
                <p className="font-sans text-[11px] text-white/60 mt-0.5 leading-none">de acerto em 3 semanas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* Moldura de app — placeholder DESENHADO (substituir pelo print real do simulado) */
function AppWindow() {
  const alts = [
    { l: 'A', t: 'A velocidade de infusão não influencia.', s: 'idle' },
    { l: 'B', t: 'A via IM é preferível em < 1 ano.', s: 'wrong' },
    { l: 'C', t: 'O cálculo considera peso e superfície.', s: 'right' },
    { l: 'D', t: 'Soluções hipertônicas em veia periférica.', s: 'idle' },
  ]
  return (
    <div className="relative rounded-xl bg-surface border border-line shadow-2xl overflow-hidden">
      {/* chrome da janela */}
      <div className="flex items-center gap-1.5 px-4 h-9 bg-sand-100 border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-sans text-[11px] text-ink-soft bg-surface rounded px-2.5 py-0.5 border border-line">
          app.nasaudeporai.com.br/simulado
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-teal-50 text-teal-600 rounded-sm px-2 py-0.5 font-sans text-[11px] font-semibold">Farmacologia · VUNESP</span>
          <span className="font-mono text-[11px] text-ink-soft">Questão 47/60</span>
        </div>

        <p className="font-sans text-small text-ink leading-relaxed mb-4">
          Sobre a administração de medicamentos por via intravenosa em pacientes pediátricos, é correto afirmar:
        </p>

        <div className="flex flex-col gap-2 mb-4">
          {alts.map((a) => {
            let cls = 'border-line bg-sand-100 text-ink'
            if (a.s === 'right') cls = 'border-green-500 bg-green-50 text-green-800'
            if (a.s === 'wrong') cls = 'border-red-300 bg-red-50 text-red-700'
            return (
              <div key={a.l} className={`flex items-center gap-2.5 rounded-sm border px-3 py-2 text-small font-sans ${cls}`}>
                <span className="font-bold w-4">{a.l}</span>
                <span className="truncate flex-1">{a.t}</span>
                {a.s === 'right' && <CheckCircle2 size={15} className="text-green-600 flex-shrink-0" />}
              </div>
            )
          })}
        </div>

        {/* tira de resultado */}
        <div className="rounded-lg bg-navy-700 px-4 py-3 flex items-center justify-between">
          <div>
            <p className="font-sans text-[11px] text-white/60 uppercase tracking-wide font-semibold">Seu acerto em Farmacologia</p>
            <p className="font-mono text-lead font-bold text-white leading-tight">78%</p>
          </div>
          <div className="w-28">
            <div className="h-2 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full rounded-full bg-teal-400" style={{ width: '78%' }} />
            </div>
            <p className="font-sans text-[11px] text-teal-300 mt-1 text-right font-semibold">acima da média</p>
          </div>
        </div>
      </div>
    </div>
  )
}
