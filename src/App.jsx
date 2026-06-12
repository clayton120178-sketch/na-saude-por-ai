import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import SimuladoPage from './pages/SimuladoPage'
import EditaisPage from './pages/EditaisPage'
import SobrePage from './pages/SobrePage'

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
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
