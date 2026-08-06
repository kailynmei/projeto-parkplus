import { empresa, estatisticas } from '../data/conteudo'
import SomosDiferentes from '../components/SomosDiferentes'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'
import sobreBanner from '../assets/Unidades/unidade6.jpg'
import escritorioImg from '../assets/Unidades/escritorio-alamedaolga.jpg'

const enderecoEscritorio = 'Alameda Olga, 422, Barra Funda, São Paulo - SP'

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
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={escritorioImg}
                alt="Fachada do escritório central da Park Plus, na Alameda Olga"
                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-3">
              Onde tudo acontece
            </p>
            <h2 className="text-3xl font-black text-brand-navy dark:text-white mb-4">
              Nosso escritório
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Nossa sede administrativa fica na Alameda Olga, no bairro da Barra Funda — de onde
              coordenamos a operação de todas as nossas unidades espalhadas pela cidade de São Paulo
              e Grande São Paulo. É por aqui que passam a gestão financeira, o suporte a clientes e
              o planejamento de cada estacionamento que administramos.
            </p>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(enderecoEscritorio)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-brand-navy dark:text-white font-semibold text-sm hover:text-brand-cyan dark:hover:text-brand-cyan transition-colors"
            >
              <svg className="w-4 h-4 text-brand-cyan shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="border-b border-transparent group-hover:border-brand-cyan transition-colors">
                Alameda Olga, 422 — Barra Funda, São Paulo — SP
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {estatisticas.map((item, i) => (
            <ScrollReveal key={item.label} delay={i} className="h-full">
              <div className="h-full bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
                <p className="text-5xl font-black text-brand-cyan">{item.valor}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SomosDiferentes />
    </main>
  )
}
