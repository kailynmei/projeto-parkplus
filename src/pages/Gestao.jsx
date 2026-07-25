import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { diferenciais } from '../data/conteudo'
import Faq from '../components/Faq'

export default function Gestao() {
  return (
    <main className="pt-20">
      <section className="bg-brand-navy py-20 px-6 text-center text-white">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-3">
          Terceirize com quem entende
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black">
          Gestão de estacionamento
        </motion.h1>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            A Park Plus assume a operação completa do seu estacionamento: contratação e treinamento
            de equipe, implantação de sistemas de controle de acesso, gestão financeira, monitoramento
            e toda a parte operacional do dia a dia.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-16">
            Com nossa expertise, você reduz custos operacionais, elimina dores de cabeça com RH e
            garante uma operação profissional que valoriza seu empreendimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {diferenciais.map((item) => (
              <div key={item.id} className="border-t-4 border-brand-cyan bg-gray-50 dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-brand-navy dark:text-white mb-2">{item.titulo}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contato"
              className="bg-brand-cyan text-brand-navy font-bold px-8 py-3.5 rounded-full hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide">
              Solicitar Proposta Comercial
            </Link>
          </div>
        </div>
      </section>

      <Faq />
    </main>
  )
}