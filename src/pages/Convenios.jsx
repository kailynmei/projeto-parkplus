import { convenios } from '../data/conteudo'

export default function Convenios() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Convênios</h1>
          <p className="text-gray-600 max-w-xl mx-auto">{convenios.descricao}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {convenios.modalidades.map((modalidade) => (
            <div key={modalidade.titulo} className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-blue-900 mb-3">{modalidade.titulo}</h2>
              <p className="text-gray-600 leading-relaxed">{modalidade.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Quer oferecer esse benefício aos seus clientes? Escolha o tipo de convênio ideal para o seu negócio.
          </p>
          <a
            href={convenios.linkFormulario}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
          >
            Escolha seu Selo
          </a>
        </div>
      </div>
    </main>
  )
}
