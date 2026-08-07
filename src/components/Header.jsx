import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/convenios', label: 'Convênios' },
  { to: '/gestao', label: 'Gestão' },
  { to: '/unidades', label: 'Unidades' },
  { to: '/contato', label: 'Contato' },
]

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerBg = dark
    ? scrolled ? 'bg-brand-navy shadow-lg' : 'bg-brand-navy/95 backdrop-blur-sm'
    : scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="w-full px-6 lg:px-10 flex items-center justify-between gap-6 h-20">
        <Link to="/" onClick={() => setMenuAberto(false)} className="shrink-0">
          <Logo className="h-16 w-auto" onDark={dark} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-brand-cyan font-semibold text-sm'
                  : dark
                    ? 'text-white/70 hover:text-white text-sm transition-colors'
                    : 'text-gray-600 hover:text-brand-navy text-sm transition-colors'
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button
            onClick={toggle}
            aria-label={dark ? 'Modo claro' : 'Modo escuro'}
            className={`p-2 rounded-full transition-colors ${
              dark ? 'text-brand-cyan hover:bg-white/10' : 'text-brand-navy hover:bg-gray-100'
            }`}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <Link
            to="/contato"
            className="bg-brand-cyan text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full hover:bg-brand-cyan-dark transition-colors"
          >
            Fale Conosco
          </Link>
        </nav>

        {/* Mobile: toggle + hambúrguer */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className={`p-2 rounded-full ${dark ? 'text-brand-cyan' : 'text-brand-navy'}`}
            aria-label={dark ? 'Modo claro' : 'Modo escuro'}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={`p-2 ${dark ? 'text-white' : 'text-brand-navy'}`}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${menuAberto ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-current my-1 transition-all duration-200 ${menuAberto ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-200 ${menuAberto ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${
          dark ? 'bg-brand-navy border-white/10' : 'bg-white border-gray-100'
        }`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuAberto(false)}
              className={({ isActive }) =>
                isActive ? 'text-brand-cyan font-semibold' : dark ? 'text-white/80' : 'text-gray-600'
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