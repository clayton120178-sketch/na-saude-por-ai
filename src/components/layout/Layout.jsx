import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
