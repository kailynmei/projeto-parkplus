import { empresa } from '../data/conteudo'

export default function Contato() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">Contato</h1>
          <p className="text-gray-600">Fale com a nossa equipe. Retornamos em até 1 dia útil.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-6">Informações</h2>
            <div className="flex flex-col gap-4 text-gray-600">
              <div>
                <p className="font-semibold text-gray-800">Endereço</p>
                <p>{empresa.endereco}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Telefones</p>
                {empresa.telefones.map((tel) => <p key={tel}>{tel}</p>)}
              </div>
              <div>
                <p className="font-semibold text-gray-800">E-mail</p>
                <a href={`mailto:${empresa.email}`} className="text-brand-navy-light hover:underline">
                  {empresa.email}
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-6">Envie uma mensagem</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <select className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy">
                  <option value="">Selecione...</option>
                  <option value="proposta">Proposta Comercial</option>
                  <option value="convenio">Convênio</option>
                  <option value="trabalhe">Trabalhe Conosco</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-navy text-white font-semibold py-3 rounded-lg hover:bg-brand-navy-light transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
