const variants = {
  teal: 'bg-teal-50 text-teal-600',
  success: 'bg-green-50 text-green-700',
  warn: 'bg-amber-50 text-amber-700',
  error: 'bg-red-50 text-red-700',
  neutral: 'bg-sand-100 text-ink-soft',
}

export default function Badge({ children, variant = 'teal', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-small font-medium font-sans ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
