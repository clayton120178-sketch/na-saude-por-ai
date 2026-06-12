import { Link } from 'react-router-dom'
import { Stethoscope, Globe, Play, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'

const cols = [
  {
    label: 'Produtos',
    links: [
      { to: '/simulados', label: 'Plataforma de Simulados' },
      { to: '/cursos', label: 'Plano de Estudo Guiado' },
      { to: '/cursos', label: 'Intensivo Reta Final' },
    ],
  },
  {
    label: 'Conteúdo',
    links: [
      { to: '/editais', label: 'Editais e Concursos' },
      { to: '/editais', label: 'Calendário de Provas' },
      { to: '/blog', label: 'Blog' },
    ],
  },
  {
    label: 'Links úteis',
    links: [
      { to: '/sobre', label: 'Minha História' },
      { to: '/contato', label: 'Contato' },
      { to: '/termos', label: 'Termos de Uso' },
      { to: '/privacidade', label: 'Privacidade' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" aria-label="Rodapé">
      <Container>
        <div className="py-14 grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                <Stethoscope size={18} className="text-teal-500" strokeWidth={1.75} />
              </span>
              <span className="font-sans font-semibold text-white/90 text-body">
                Na Saúde por Aí
              </span>
            </div>
            <p className="font-sans text-small text-white/50 leading-relaxed mb-5">
              Facilitando a jornada de enfermeiros e técnicos de enfermagem rumo à aprovação em concursos públicos.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-white/40 hover:text-teal-500 transition-colors" aria-label="Instagram">
                <Globe size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-teal-500 transition-colors" aria-label="YouTube">
                <Play size={18} />
              </a>
              <a href="#" className="text-white/40 hover:text-teal-500 transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Colunas de links */}
          {cols.map((col) => (
            <div key={col.label}>
              <h3 className="font-sans text-eyebrow font-semibold uppercase tracking-[0.12em] text-white/40 mb-4">
                {col.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-small text-white/60 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-small text-white/30">
            © 2026 Na Saúde por Aí. Todos os direitos reservados.
          </p>
          <span className="font-script text-base text-white/20 tracking-wide">Na Saúde por Aí</span>
        </div>
      </Container>
    </footer>
  )
}
