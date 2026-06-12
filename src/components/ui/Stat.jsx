export default function Stat({ value, label, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <span className="font-mono text-h2 font-medium text-navy-700 leading-none">
        {value}
      </span>
      <span className="font-sans text-eyebrow font-semibold uppercase tracking-widest text-ink-soft">
        {label}
      </span>
    </div>
  )
}
