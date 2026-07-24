import { Link } from 'react-router-dom'
import { empresa } from '../data/conteudo'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo className="h-14 w-auto mb-4" onDark={true} />
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Administração profissional de estacionamentos em São Paulo há mais de 25 anos.
          </p>
          <div className="mt-6 w-12 h-1 bg-brand-cyan rounded-full" />
        </div>

        <div>
          <p className="font-bold text-xs uppercase tracking-widest text-white/40 mb-4">Páginas</p>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            {[
              { to: '/sobre', label: 'Sobre' },
              { to: '/servicos', label: 'Serviços' },
              { to: '/convenios', label: 'Convênios' },
              { to: '/gestao', label: 'Gestão' },
              { to: '/unidades', label: 'Unidades' },
              { to: '/contato', label: 'Contato' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-brand-cyan transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-xs uppercase tracking-widest text-white/40 mb-4">Contato</p>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li className="leading-relaxed">
              <span className="block text-white/40 text-xs uppercase tracking-wide mb-1">
                {empresa.enderecoLabel}
              </span>
              {empresa.endereco}
            </li>
            {empresa.telefones.map((tel) => (
              <li key={tel}>
                <a href={`tel:${tel}`} className="hover:text-brand-cyan transition-colors">{tel}</a>
              </li>
            ))}
            <li className="break-words">
              <a href={`mailto:${empresa.email}`} className="hover:text-brand-cyan transition-colors">
                {empresa.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <span>© {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.</span>
        <span>www.parkplus.com.br</span>
      </div>
    </footer>
  )
}