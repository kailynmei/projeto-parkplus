import { servicos } from '../data/conteudo'
import { Link } from 'react-router-dom'

export default function Servicos() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Nossos Serviços</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Oferecemos soluções completas de gestão de estacionamentos para diferentes
            segmentos e necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div key={servico.id} className="bg-white border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-blue-900 mb-3">{servico.titulo}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{servico.descricao}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contato"
            className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </main>
  )
}
