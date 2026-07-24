import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
import { useDarkMode } from './hooks/useDarkMode'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Convenios from './pages/Convenios'
import Gestao from './pages/Gestao'
import Unidades from './pages/Unidades'
import Contato from './pages/Contato'

export default function App() {
  const [dark, toggle] = useDarkMode()

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/convenios" element={<Convenios />} />
            <Route path="/gestao" element={<Gestao />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
