import { BadgeCheck } from 'lucide-react'
import Container from '../ui/Container'

const conquistas = [
  'Aprovada — Marinha do Brasil',
  'Aprovada — Hospital das Clínicas SP',
  'Aprovada — SES/MG (1º lugar)',
  'Instrutora em Cursos de Preparação',
]

export default function AuthorityBar() {
  return (
    <div className="border-y border-line bg-surface py-4" aria-label="Credenciais">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {conquistas.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <BadgeCheck size={15} className="text-teal-500 flex-shrink-0" />
              <span className="font-sans text-small text-ink-soft whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
