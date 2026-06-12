import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import SimuladoPage from './pages/SimuladoPage'
import EditaisPage from './pages/EditaisPage'
import SobrePage from './pages/SobrePage'
import { easeOutExpo } from './components/motion/transitions'

function PageWrapper({ children }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(8px)' }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, filter: 'blur(6px)' }}
      transition={{ duration: 0.45, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/simulados" element={<PageWrapper><SimuladoPage /></PageWrapper>} />
          <Route path="/editais" element={<PageWrapper><EditaisPage /></PageWrapper>} />
          <Route path="/sobre" element={<PageWrapper><SobrePage /></PageWrapper>} />
          <Route path="*" element={
            <PageWrapper>
              <div className="flex items-center justify-center min-h-[60vh] text-center px-6">
                <div>
                  <p className="font-mono text-5xl text-teal-500/40 font-medium mb-4">404</p>
                  <h1 className="font-display text-3xl font-semibold text-navy-700 mb-2">Página não encontrada</h1>
                  <p className="font-sans text-ink-soft mb-8">O endereço que você buscou não existe ou foi movido.</p>
                  <a href="/" className="font-sans text-sm font-semibold text-navy-700 underline hover:text-navy-900">
                    Voltar para o início
                  </a>
                </div>
              </div>
            </PageWrapper>
          } />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
