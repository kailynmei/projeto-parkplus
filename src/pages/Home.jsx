import { Link } from 'react-router-dom'
import { estatisticas, diferenciais, unidades } from '../data/conteudo'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Gestão de estacionamentos<br />com excelência
        </h1>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          Mais de 25 anos administrando estacionamentos residenciais e comerciais em São Paulo.
        </p>
        <Link
          to="/contato"
          className="bg-white text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          Fale Conosco
        </Link>
      </section>

      {/* Estatísticas */}
      <section className="bg-brand-navy-light text-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {estatisticas.map((item) => (
            <div key={item.label}>
              <p className="text-5xl font-bold">{item.valor}</p>
              <p className="text-white/70 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-12">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unidades destaque */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-12">Nossas Unidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {unidades.map((u) => (
              <div key={u.id} className="border rounded-2xl p-6 text-left hover:shadow-md transition-shadow">
                <h3 className="font-bold text-brand-navy mb-1">{u.nome}</h3>
                <p className="text-gray-600 text-sm">{u.endereco}</p>
                <p className="text-gray-400 text-sm">{u.cidade}</p>
              </div>
            ))}
          </div>
          <Link to="/unidades" className="mt-8 inline-block text-brand-navy-light font-semibold hover:underline">
            Ver todas as unidades →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Quer terceirizar seu estacionamento?</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Entre em contato e descubra como a Park Plus pode ajudar seu negócio.
        </p>
        <Link
          to="/contato"
          className="bg-white text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          Enviar Proposta
        </Link>
      </section>
    </main>
  )
}
