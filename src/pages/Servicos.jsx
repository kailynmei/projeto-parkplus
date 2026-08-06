import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { servicos } from '../data/conteudo'
import PageBanner from '../components/PageBanner'
import servicosBanner from '../assets/Unidades/unidade13.jpg'

export default function Servicos() {
  return (
    <main className="pt-20">
      <PageBanner
        image={servicosBanner}
        positionClass="object-[70%_center] md:object-[center_55%]"
        eyebrow="O que oferecemos"
        title="Nossos serviços"
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {servicos.map((s) => (
              <div key={s.id} className="border-t-4 border-brand-cyan bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{s.titulo}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.descricao}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contato"
              className="bg-brand-cyan text-brand-navy font-bold px-8 py-3.5 rounded-full hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}