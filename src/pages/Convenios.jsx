import { motion } from 'framer-motion'
import { convenios } from '../data/conteudo'
import PageBanner from '../components/PageBanner'
import conveniosBanner from '../assets/Unidades/unidade16.jpg'

export default function Convenios() {
  return (
    <main className="pt-20">
      <PageBanner
        image={conveniosBanner}
        positionClass="object-[center_30%] md:object-[center_50%]"
        eyebrow="Parceiros e descontos"
        title="Convênios"
        subtitle={convenios.descricao}
      />

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
              Clique no botão abaixo e escolha o tipo de selo e características que deseja oferecer.
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