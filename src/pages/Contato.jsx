import { motion } from 'framer-motion'
import { empresa } from '../data/conteudo'

export default function Contato() {
  return (
    <main className="pt-20">
      <section className="bg-brand-navy py-20 px-6 text-center text-white">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-3">
          Fale com a gente
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black mb-4">
          Contato
        </motion.h1>
        <p className="text-white/60">Retornamos em até 1 dia útil.</p>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white mb-6">Informações</h2>
            <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-400">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Endereço</p>
                <p className="text-sm">{empresa.endereco}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Telefones</p>
                {empresa.telefones.map((tel) => (
                  <p key={tel} className="text-sm">
                    <a href={`tel:${tel}`} className="hover:text-brand-cyan transition-colors">{tel}</a>
                  </p>
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">E-mail</p>
                <a href={`mailto:${empresa.email}`} className="text-sm text-brand-cyan hover:text-brand-cyan-dark transition-colors">
                  {empresa.email}
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white mb-6">Envie uma mensagem</h2>
            <form className="flex flex-col gap-4">
              {[
                { label: 'Nome', type: 'text', placeholder: 'Seu nome' },
                { label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
                  <input type={type} placeholder={placeholder}
                    className="w-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan placeholder-gray-400 dark:placeholder-gray-500 transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assunto</label>
                <select className="w-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors">
                  <option value="">Selecione...</option>
                  <option value="proposta">Proposta Comercial</option>
                  <option value="convenio">Convênio</option>
                  <option value="trabalhe">Trabalhe Conosco</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
                <textarea rows={4} placeholder="Como podemos ajudar?"
                  className="w-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan resize-none placeholder-gray-400 dark:placeholder-gray-500 transition-colors" />
              </div>
              <button type="submit"
                className="bg-brand-cyan text-brand-navy font-bold py-3 rounded-lg hover:bg-brand-cyan-dark transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
