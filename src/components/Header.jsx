import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/convenios', label: 'Convênios' },
  { to: '/gestao', label: 'Gestão' },
  { to: '/unidades', label: 'Unidades' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-navy shadow-lg' : 'bg-brand-navy/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" onClick={() => setMenuAberto(false)}>
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.filter(l => l.to !== '/').map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-brand-yellow font-semibold text-sm'
                  : 'text-white/80 hover:text-white text-sm transition-colors'
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="bg-brand-yellow text-brand-navy font-bold text-sm px-5 py-2 rounded-full hover:bg-brand-yellow-dark transition-colors"
          >
            Fale Conosco
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all ${menuAberto ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current my-1 transition-all ${menuAberto ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuAberto ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {menuAberto && (
        <nav className="md:hidden bg-brand-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuAberto(false)}
              className={({ isActive }) =>
                isActive ? 'text-brand-yellow font-semibold' : 'text-white/80'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
