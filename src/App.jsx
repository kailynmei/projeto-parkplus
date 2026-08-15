import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeContext } from './context/ThemeContext'
import { useDarkMode } from './hooks/useDarkMode'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import IntroSplash from './components/IntroSplash'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Convenios from './pages/Convenios'
import Gestao from './pages/Gestao'
import Unidades from './pages/Unidades'
import Contato from './pages/Contato'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/sobre" element={<PageTransition><Sobre /></PageTransition>} />
        <Route path="/servicos" element={<PageTransition><Servicos /></PageTransition>} />
        <Route path="/convenios" element={<PageTransition><Convenios /></PageTransition>} />
        <Route path="/gestao" element={<PageTransition><Gestao /></PageTransition>} />
        <Route path="/unidades" element={<PageTransition><Unidades /></PageTransition>} />
        <Route path="/contato" element={<PageTransition><Contato /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [dark, toggle] = useDarkMode()
  const [showIntro, setShowIntro] = useState(
    () => !sessionStorage.getItem('pp_intro_shown')
  )

  const finalizarIntro = () => {
    sessionStorage.setItem('pp_intro_shown', '1')
    setShowIntro(false)
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {showIntro && <IntroSplash onFinish={finalizarIntro} />}

      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          <Header />
          <AnimatedRoutes />
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}