import { motion } from 'framer-motion'
import { convenios } from '../data/conteudo'

export default function Convenios() {
  return (
    <main className="pt-20">
      <section className="bg-brand-navy py-20 px-6 text-center text-white">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-3">
          Parceiros e descontos
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black mb-4">
          Convênios
        </motion.h1>
        <p className="text-white/60 max-w-xl mx-auto">{convenios.descricao}</p>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {convenios.modalidades.map((m) => (
              <div key={m.titulo} className="border-t-4 border-brand-cyan bg-gray-50 dark:bg-slate-800 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{m.titulo}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{m.descricao}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Quer oferecer esse benefício aos seus clientes? Escolha o tipo de convênio ideal para o seu negócio.
            </p>
            <a href={convenios.linkFormulario} target="_blank" rel="noopener noreferrer"
              className="bg-brand-cyan text-brand-navy font-bold px-8 py-3.5 rounded-full hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide">
              Escolha seu Selo
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
