import { useState } from 'react'
import { Bell, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../motion/Reveal'

export default function LeadCapture() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setEnviado(true)
  }

  return (
    <section className="py-section bg-navy-700" aria-labelledby="lead-capture-heading">
      <Container>
        <Reveal>
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-5">
              <Bell size={22} className="text-teal-500" />
            </div>

            <h2
              id="lead-capture-heading"
              className="font-display font-semibold text-white leading-tight mb-3"
              style={{ fontSize: 'var(--fs-h2)' }}
            >
              Receba um aviso assim que sair o edital do seu concurso.
            </h2>

            <p className="font-sans text-white/60 mb-8" style={{ fontSize: 'var(--fs-lead)' }}>
              Sem spam. Só o que importa para a sua aprovação.
            </p>

            {enviado ? (
              <div className="flex items-center justify-center gap-2 text-teal-400 font-sans font-semibold">
                <CheckCircle2 size={20} />
                Combinado! Você receberá os avisos em primeira mão.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label className="flex-1 relative" htmlFor="lead-email">
                    <span className="sr-only">Seu e-mail</span>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="Seu melhor e-mail"
                      required
                      className={`w-full h-12 rounded-sm px-4 font-sans text-body text-ink bg-white placeholder-ink-soft/60 outline-none transition-all duration-200 ${
                        focused ? 'ring-2 ring-teal-500' : 'ring-1 ring-white/20'
                      }`}
                      aria-required="true"
                    />
                  </label>
                  <button
                    type="submit"
                    className="relative h-12 px-6 rounded-sm bg-teal-500 hover:bg-teal-600 text-white font-sans font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white overflow-hidden group"
                  >
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white/30 transition-all duration-200 group-hover:w-full" aria-hidden="true" />
                    Quero os avisos
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
