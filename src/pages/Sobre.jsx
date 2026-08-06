import { motion } from 'framer-motion'
import { empresa, estatisticas } from '../data/conteudo'
import SomosDiferentes from '../components/SomosDiferentes'
import PageBanner from '../components/PageBanner'
import sobreBanner from '../assets/Unidades/unidade6.jpg'

export default function Sobre() {
  return (
    <main className="pt-20">
      <PageBanner
        image={sobreBanner}
        positionClass="object-[center_25%] md:object-[center_40%]"
        eyebrow="Nossa história"
        title="Sobre a Park Plus"
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
            Fundada em {empresa.fundacao}, a {empresa.nome} é especializada na administração e gestão de
            estacionamentos em São Paulo. Com mais de 25 anos de experiência, atuamos em segmentos
            residenciais, comerciais e hospitalares, oferecendo soluções completas com segurança,
            tecnologia e atendimento personalizado.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Nossa missão é entregar excelência operacional para cada cliente, garantindo tranquilidade,
            organização e valorização do espaço de estacionamento.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {estatisticas.map((item) => (
            <div key={item.label} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
              <p className="text-5xl font-black text-brand-cyan">{item.valor}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <SomosDiferentes />
    </main>
  )
}