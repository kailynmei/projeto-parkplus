import { Link } from 'react-router-dom'
import { empresa } from '../data/conteudo'
import Logo from './Logo'

const IconInstagram = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="igGradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="1" y="1" width="30" height="30" rx="8" fill="url(#igGradient)" />
    <rect x="9" y="9" width="14" height="14" rx="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="16" cy="16" r="4" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="20.6" cy="11.4" r="1" fill="#fff" />
  </svg>
)

const IconFacebook = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" fill="#1877F2" />
    <path
      d="M20.2 16.9h-3v10.9c-1.05.16-2.13.2-3.2 0V16.9h-2.4v-3.3h2.4v-2.4c0-2.46 1.62-3.9 4.06-3.9.92 0 1.87.11 2.6.22v2.99h-1.6c-1.24 0-1.66.72-1.66 1.63v1.46h3.16z"
      fill="#fff"
    />
  </svg>
)

const IconLinkedin = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="30" height="30" rx="6" fill="#0A66C2" />
    <rect x="8.2" y="12.6" width="3.2" height="11.2" fill="#fff" />
    <circle cx="9.8" cy="8.6" r="1.9" fill="#fff" />
    <path
      d="M14.8 12.6h3.1v1.53h.04c.43-.8 1.5-1.64 3.08-1.64 3.3 0 3.9 2.13 3.9 4.9v6.4h-3.2v-5.68c0-1.35-.02-3.09-1.9-3.09-1.9 0-2.2 1.47-2.2 2.99v5.78h-3.2z"
      fill="#fff"
    />
  </svg>
)

const redesSociais = [
  {
    nome: 'Instagram',
    url: 'https://www.instagram.com/parkplusestacionamentos',
    Icon: IconInstagram,
  },
  {
    nome: 'LinkedIn',
    url: 'https://www.linkedin.com/company/parkplusestacionamentos',
    Icon: IconLinkedin,
  },
  {
    nome: 'Facebook',
    url: 'https://www.facebook.com/p/Park-Plus-Estacionamentos-61558787810129/',
    Icon: IconFacebook,
  },
]

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

          <div className="flex flex-col gap-3 mt-6">
            {redesSociais.map(({ nome, url, Icon }) => (
              <a
                key={nome}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-brand-cyan transition-colors w-fit"
              >
                <Icon className="w-[18px] h-[18px]" />
                <span>{nome}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <span>© {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.</span>
        <span>www.parkplus.com.br</span>
      </div>
    </footer>
  )
}
