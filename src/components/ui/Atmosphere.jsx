/**
 * Atmosfera: gradiente estático para profundidade — composição intencional, SEM movimento.
 * (O movimento ambiente foi removido: lia como bug e distraía da conversão.)
 */
export default function Atmosphere({ variant = 'hero' }) {
  const presets = {
    hero: [
      { color: 'rgba(27,197,197,0.16)', size: 620, x: '88%', y: '-8%' },
      { color: 'rgba(239,231,220,0.7)', size: 680, x: '-6%', y: '90%' },
    ],
    soft: [
      { color: 'rgba(27,197,197,0.08)', size: 460, x: '92%', y: '10%' },
    ],
    dark: [
      { color: 'rgba(27,197,197,0.28)', size: 560, x: '88%', y: '-5%' },
      { color: 'rgba(27,197,197,0.12)', size: 480, x: '4%', y: '100%' },
    ],
  }
  const orbs = presets[variant] || presets.soft

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  )
}
