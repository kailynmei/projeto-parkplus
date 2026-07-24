import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Convenios from './pages/Convenios'
import Gestao from './pages/Gestao'
import Unidades from './pages/Unidades'
import Contato from './pages/Contato'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
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
      </div>
    </BrowserRouter>
  )
}
