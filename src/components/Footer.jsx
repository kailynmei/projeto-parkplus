import { Link } from 'react-router-dom'
import { empresa } from '../data/conteudo'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">{empresa.nome}</h3>
          <p className="text-blue-200 text-sm">{empresa.endereco}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-blue-200">
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
            <li><Link to="/convenios" className="hover:text-white transition-colors">Convênios</Link></li>
            <li><Link to="/unidades" className="hover:text-white transition-colors">Unidades</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Contato</h3>
          <ul className="flex flex-col gap-2 text-sm text-blue-200">
            {empresa.telefones.map((tel) => (
              <li key={tel}>{tel}</li>
            ))}
            <li>
              <a href={`mailto:${empresa.email}`} className="hover:text-white transition-colors">
                {empresa.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800 text-center text-blue-300 text-xs py-4">
        © {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
