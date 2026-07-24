import { empresa, estatisticas } from '../data/conteudo'

export default function Sobre() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Sobre a Park Plus</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Fundada em {empresa.fundacao}, a {empresa.nome} é uma empresa especializada na
          administração e gestão de estacionamentos em São Paulo. Com mais de 25 anos de
          experiência, atuamos em segmentos residenciais, comerciais e hospitalares,
          oferecendo soluções completas de gestão com segurança, tecnologia e atendimento
          personalizado.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-16">
          Nossa missão é entregar excelência operacional para cada cliente, garantindo
          tranquilidade, organização e valorização do espaço de estacionamento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {estatisticas.map((item) => (
            <div key={item.label} className="bg-blue-50 rounded-2xl p-8">
              <p className="text-5xl font-bold text-blue-900">{item.valor}</p>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
