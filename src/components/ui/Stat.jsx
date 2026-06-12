import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'
import { easeOutExpo } from '../motion/transitions'

/**
 * Stat com count-up: o número conta da base ao valor final ao entrar na viewport.
 * Preserva prefixo/sufixo (ex.: "1.500+", "100%") e a formatação pt-BR de milhar.
 */
export default function Stat({ value, label, className = '' }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(reduced ? value : null)

  // separa número de prefixo/sufixo (ex.: "R$ 1.500+" → pre="R$ ", num=1500, suf="+")
  const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/)

  useEffect(() => {
    if (reduced || !inView || !match) {
      setDisplay(value)
      return
    }
    const [, pre, numStr, suf] = match
    const target = parseInt(numStr.replace(/\./g, ''), 10)
    const controls = animate(0, target, {
      duration: 1.4,
      ease: easeOutExpo,
      onUpdate: (v) => {
        setDisplay(pre + Math.round(v).toLocaleString('pt-BR') + suf)
      },
    })
    return () => controls.stop()
  }, [inView, reduced, value])

  return (
    <div ref={ref} className={`flex flex-col items-center gap-1 ${className}`}>
      <span className="font-mono text-h2 font-medium text-navy-700 leading-none tabular-nums">
        {display ?? value}
      </span>
      <span className="font-sans text-eyebrow font-semibold uppercase tracking-widest text-ink-soft">
        {label}
      </span>
    </div>
  )
}
