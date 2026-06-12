/**
 * ProductMockup — representação animada da interface do simulado.
 * TODO: substituir por vídeo-demo real quando disponível.
 * Anima: seleção de alternativa → gabarito comentado, chips de tema, gráfico de desempenho.
 */
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const alternativas = ['A', 'B', 'C', 'D', 'E']
const CORRETA = 'C'

const temas = ['Farmacologia', 'SAE', 'Urgência', 'Ética', 'Anatomia']
let temaLoop = 0

const barras = [
  { tema: 'Farmacologia', pct: 78, cor: '#16A34A' },
  { tema: 'SAE', pct: 62, cor: '#D97706' },
  { tema: 'Urgência', pct: 85, cor: '#16A34A' },
  { tema: 'Ética', pct: 45, cor: '#DC2626' },
  { tema: 'Anatomia', pct: 71, cor: '#16A34A' },
]

/* Barra de desempenho: cresce com spring e a porcentagem conta junto */
function PerfBar({ tema, pct, cor, inView, index, reduced }) {
  const [shown, setShown] = useState(reduced ? pct : 0)

  useEffect(() => {
    if (reduced || !inView) {
      setShown(pct)
      return
    }
    const controls = animate(0, pct, {
      duration: 1,
      delay: index * 0.12,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduced, pct, index])

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="font-sans text-small text-ink">{tema}</span>
        <span className="font-mono text-small font-medium tabular-nums" style={{ color: cor }}>{shown}%</span>
      </div>
      <div className="h-2 rounded-full bg-sand-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: cor }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: reduced ? 0 : index * 0.12 }}
        />
      </div>
    </div>
  )
}

export default function ProductMockup() {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const [selecionada, setSelecionada] = useState(null)
  const [mostrarGabarito, setMostrarGabarito] = useState(false)
  const [temaAtivo, setTemaAtivo] = useState(0)

  /* ciclo automático de seleção de alternativa */
  useEffect(() => {
    if (!inView || reduced) return
    const t1 = setTimeout(() => setSelecionada('B'), 1200)
    const t2 = setTimeout(() => { setSelecionada(CORRETA); setMostrarGabarito(true) }, 2800)
    const t3 = setTimeout(() => {
      setSelecionada(null)
      setMostrarGabarito(false)
    }, 6500)
    const loop = setInterval(() => {
      setSelecionada(null)
      setMostrarGabarito(false)
      setTimeout(() => setSelecionada('D'), 1200)
      setTimeout(() => { setSelecionada(CORRETA); setMostrarGabarito(true) }, 2800)
      setTimeout(() => { setSelecionada(null); setMostrarGabarito(false) }, 6500)
    }, 8000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(loop) }
  }, [inView, reduced])

  /* ciclo de tema ativo */
  useEffect(() => {
    if (!inView || reduced) return
    const id = setInterval(() => {
      temaLoop = (temaLoop + 1) % temas.length
      setTemaAtivo(temaLoop)
    }, 1600)
    return () => clearInterval(id)
  }, [inView, reduced])

  return (
    <div ref={ref} className="w-full max-w-md mx-auto flex flex-col gap-4">
      {/* Card de questão */}
      <div className="bg-surface rounded-lg border border-line shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-line flex items-center justify-between">
          <span className="font-sans text-eyebrow font-semibold uppercase tracking-wider text-navy-500">Questão 47 · VUNESP 2024</span>
          <span className="font-sans text-eyebrow text-ink-soft">Farmacologia</span>
        </div>
        <div className="px-4 py-4">
          <p className="font-sans text-small text-ink leading-relaxed mb-4">
            Sobre a administração de medicamentos por via intravenosa em pacientes pediátricos, é correto afirmar que:
          </p>

          {/* Alternativas */}
          <div className="flex flex-col gap-2">
            {alternativas.map((alt) => {
              const isSelected = selecionada === alt
              const isCorreta = alt === CORRETA
              const showResult = mostrarGabarito

              let cls = 'border border-line bg-sand-100 text-ink'
              if (showResult && isCorreta) cls = 'border-green-500 bg-green-50 text-green-800'
              else if (showResult && isSelected && !isCorreta) cls = 'border-red-400 bg-red-50 text-red-800'
              else if (!showResult && isSelected) cls = 'border-navy-700 bg-navy-700/8 text-navy-700'

              return (
                <motion.div
                  key={alt}
                  className={`flex items-center gap-2.5 rounded-sm px-3 py-2 text-small font-sans transition-colors duration-200 cursor-pointer ${cls}`}
                  animate={isSelected && !showResult ? { x: [0, 2, 0] } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold w-4 flex-shrink-0">{alt}</span>
                  <span className="truncate">
                    {alt === 'A' && 'A velocidade de infusão não influencia efeitos adversos.'}
                    {alt === 'B' && 'A via IM é preferível em crianças menores de 1 ano.'}
                    {alt === 'C' && 'O cálculo deve considerar peso corporal e superfície.'}
                    {alt === 'D' && 'Soluções hipertônicas podem ser administradas em veia periférica.'}
                    {alt === 'E' && 'O acesso central dispensa checagem de compatibilidade.'}
                  </span>
                  {showResult && isCorreta && <CheckCircle2 size={14} className="text-green-600 flex-shrink-0 ml-auto" />}
                  {showResult && isSelected && !isCorreta && <XCircle size={14} className="text-red-500 flex-shrink-0 ml-auto" />}
                </motion.div>
              )
            })}
          </div>

          {/* Gabarito comentado */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: mostrarGabarito ? 'auto' : 0, opacity: mostrarGabarito ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 pt-3 border-t border-line">
              <div className="flex items-center gap-1.5 mb-1.5">
                <CheckCircle2 size={13} className="text-green-600" />
                <span className="font-sans text-eyebrow font-semibold uppercase tracking-wider text-green-700">Gabarito: C — Correto</span>
              </div>
              <p className="font-sans text-small text-ink-soft leading-relaxed">
                Em pediatria, a dose é calculada com base no peso (mg/kg) e, em alguns casos, na superfície corporal (mg/m²). Isso garante precisão e reduz o risco de toxicidade.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filtros de tema */}
      <div className="bg-surface rounded-lg border border-line shadow-sm px-4 py-3">
        <p className="font-sans text-eyebrow font-semibold uppercase tracking-wider text-ink-soft mb-2.5">Filtrar por tema</p>
        <div className="flex flex-wrap gap-2">
          {temas.map((t, i) => (
            <motion.span
              key={t}
              animate={{
                backgroundColor: temaAtivo === i ? 'var(--teal-050)' : '#F3F1EC',
                color: temaAtivo === i ? 'var(--teal-600)' : 'var(--ink-soft)',
                borderColor: temaAtivo === i ? 'var(--teal-500)' : 'var(--line)',
              }}
              transition={{ duration: 0.25 }}
              className="font-sans text-small font-medium px-3 py-1 rounded-sm border cursor-pointer"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Gráfico de desempenho */}
      <div className="bg-surface rounded-lg border border-line shadow-sm px-4 py-4">
        <p className="font-sans text-eyebrow font-semibold uppercase tracking-wider text-ink-soft mb-3">Desempenho por tema</p>
        <div className="flex flex-col gap-2.5">
          {barras.map(({ tema, pct, cor }, i) => (
            <PerfBar key={tema} tema={tema} pct={pct} cor={cor} inView={inView} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </div>
  )
}
