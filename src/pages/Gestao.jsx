import { Link } from 'react-router-dom'
import { diferenciais } from '../data/conteudo'

export default function Gestao() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Gestão de Estacionamento</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Terceirize a gestão do seu estacionamento com quem tem mais de 25 anos de
            experiência no mercado paulistano.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          A Park Plus assume a operação completa do seu estacionamento: contratação e
          treinamento de equipe, implantação de sistemas de controle de acesso, gestão
          financeira, monitoramento e toda a parte operacional do dia a dia.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-16">
          Com nossa expertise, você reduz custos operacionais, elimina dores de cabeça com
          RH e garante uma operação profissional que valoriza seu empreendimento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {diferenciais.map((item) => (
            <div key={item.id} className="border rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">{item.titulo}</h3>
              <p className="text-gray-600 text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contato"
            className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
          >
            Solicitar Proposta Comercial
          </Link>
        </div>
      </div>
    </main>
  )
}
