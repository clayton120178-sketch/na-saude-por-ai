/**
 * Atmosfera: orbes de gradiente que respiram lentamente atrás do conteúdo.
 * Profundidade e movimento ambiente sem distrair. Cores da marca, baixa opacidade.
 * Movimento via CSS keyframes (GPU, performático, respeita reduced-motion no CSS).
 */
export default function Atmosphere({ variant = 'hero' }) {
  const presets = {
    hero: [
      { color: 'rgba(27,197,197,0.18)', size: 560, x: '70%', y: '10%', anim: 'orb-a' },
      { color: 'rgba(45,42,85,0.12)', size: 480, x: '2%', y: '58%', anim: 'orb-b' },
      { color: 'rgba(239,231,220,0.55)', size: 640, x: '48%', y: '85%', anim: 'orb-c' },
    ],
    soft: [
      { color: 'rgba(27,197,197,0.10)', size: 440, x: '86%', y: '18%', anim: 'orb-a' },
      { color: 'rgba(45,42,85,0.07)', size: 400, x: '8%', y: '72%', anim: 'orb-b' },
    ],
    dark: [
      { color: 'rgba(27,197,197,0.22)', size: 520, x: '82%', y: '15%', anim: 'orb-a' },
      { color: 'rgba(27,197,197,0.10)', size: 460, x: '10%', y: '85%', anim: 'orb-c' },
    ],
  }
  const orbs = presets[variant] || presets.soft

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`atmosphere-orb ${orb.anim}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 68%)`,
          }}
        />
      ))}
    </div>
  )
}
