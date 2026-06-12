export default function SectionHeading({ eyebrow, title, lead, center = false, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="font-sans text-eyebrow font-semibold uppercase tracking-[0.12em] text-navy-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-h2 font-semibold text-navy-700 leading-tight">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 font-sans text-lead text-ink-soft max-w-2xl leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  )
}
