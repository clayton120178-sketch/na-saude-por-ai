export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-container px-[clamp(1.25rem,5vw,2rem)] ${className}`}>
      {children}
    </div>
  )
}
