import { useState } from 'react'
import { Calendar, Users, Clock, Search } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Reveal from '../components/motion/Reveal'
import { editais } from '../data/editais'

const estados = ['Todos', 'SP', 'MG', 'RJ', 'PR', 'Nacional']
const bancas = ['Todas', 'VUNESP', 'FGV', 'IBFC', 'COPS-UEL', 'Própria']
const statusMap = {
  aberto: { label: 'Inscrições abertas', variant: 'success' },
  encerrado: { label: 'Encerradas', variant: 'neutral' },
  breve: { label: 'Em breve', variant: 'warn' },
}

export default function EditaisPage() {
  const [estado, setEstado] = useState('Todos')
  const [banca, setBanca] = useState('Todas')
  const [busca, setBusca] = useState('')

  const filtrados = editais.filter((e) => {
    if (estado !== 'Todos' && e.estado !== estado) return false
    if (banca !== 'Todas' && e.banca !== banca) return false
    if (busca && !e.orgao.toLowerCase().includes(busca.toLowerCase()) && !e.cargo.toLowerCase().includes(busca.toLowerCase())) return false
    return true
  })

  return (
    <>
      <section className="py-section bg-bg" aria-labelledby="editais-page-heading">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Utilidade pública"
              title="Editais e Concursos de Enfermagem"
              lead="Acompanhe os principais concursos para técnicos de enfermagem e enfermeiros em todo o Brasil. Atualizado mensalmente."
            />
            <p className="font-sans text-small text-ink-soft flex items-center gap-1.5 mt-3">
              <Clock size={13} />
              Última atualização: junho de 2026
            </p>
          </Reveal>

          {/* Filtros */}
          <Reveal delay={0.1} className="mt-8 flex flex-col sm:flex-row gap-3 flex-wrap">
            {/* Busca */}
            <label className="relative flex-1 min-w-48" htmlFor="busca-edital">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
              <input
                id="busca-edital"
                type="search"
                placeholder="Buscar órgão ou cargo..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full h-10 pl-9 pr-4 rounded-sm border border-line bg-surface font-sans text-small text-ink placeholder-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </label>

            {/* Estado */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por estado">
              {estados.map((e) => (
                <button
                  key={e}
                  onClick={() => setEstado(e)}
                  className={`h-10 px-3 rounded-sm font-sans text-small font-medium border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                    estado === e
                      ? 'bg-navy-700 border-navy-700 text-white'
                      : 'bg-surface border-line text-ink-soft hover:border-navy-500'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>

            {/* Banca */}
            <select
              value={banca}
              onChange={(e) => setBanca(e.target.value)}
              className="h-10 px-3 rounded-sm border border-line bg-surface font-sans text-small text-ink focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              aria-label="Filtrar por banca"
            >
              {bancas.map((b) => <option key={b} value={b}>{b === 'Todas' ? 'Todas as bancas' : b}</option>)}
            </select>
          </Reveal>

          {/* Lista */}
          <div className="mt-6 flex flex-col gap-4">
            {filtrados.length === 0 && (
              <div className="py-16 text-center">
                <p className="font-sans text-body text-ink-soft">Nenhum edital encontrado com esses filtros.</p>
                <button onClick={() => { setEstado('Todos'); setBanca('Todas'); setBusca('') }} className="mt-3 font-sans text-small font-semibold text-navy-700 hover:text-navy-900 transition-colors">
                  Limpar filtros
                </button>
              </div>
            )}

            {filtrados.map((edital) => {
              const { label, variant } = statusMap[edital.status]
              return (
                <div key={edital.id} className="bg-surface rounded-lg border border-line p-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h2 className="font-sans font-semibold text-navy-700 text-body leading-snug">{edital.orgao}</h2>
                      <p className="font-sans text-small text-ink-soft mt-0.5">{edital.cargo}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant={variant}>{label}</Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-small font-sans text-ink-soft">
                    <span className="flex items-center gap-1.5"><Users size={13} />{edital.vagas} vagas</span>
                    <span className="flex items-center gap-1.5"><Calendar size={13} />Inscrições até {new Date(edital.inscricoes.fim).toLocaleDateString('pt-BR')}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={13} />Prova: {new Date(edital.prova).toLocaleDateString('pt-BR')}</span>
                    <span className="bg-teal-50 text-teal-600 rounded-sm px-2 py-0.5 font-medium">{edital.banca}</span>
                    <span className="bg-sand-100 text-ink-soft rounded-sm px-2 py-0.5">{edital.estado}</span>
                    <span className="text-navy-700 font-semibold">{edital.salario}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
