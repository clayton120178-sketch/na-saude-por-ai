import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import Grain from '../ui/Grain'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Barra de progresso de scroll (suavizada por spring)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <div className="relative flex flex-col min-h-screen bg-bg">
      <Grain />
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-teal-500"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <Header />
      <main id="main-content" className="relative z-[2] flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
