import { unidades } from '../data/conteudo'

export default function Unidades() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Nossas Unidades</h1>
          <p className="text-gray-600">
            Encontre o estacionamento Park Plus mais próximo de você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unidades.map((u) => (
            <div key={u.id} className="border rounded-2xl p-6 hover:shadow-md transition-shadow">
              <h2 className="font-bold text-blue-900 text-lg mb-2">{u.nome}</h2>
              <p className="text-gray-600 text-sm">{u.endereco}</p>
              <p className="text-gray-400 text-sm">{u.cidade}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
