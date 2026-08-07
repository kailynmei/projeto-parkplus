import { Link } from 'react-router-dom'
import Faq from '../components/Faq'
import PageBanner from '../components/PageBanner'
import ScrollReveal from '../components/ScrollReveal'
import WaveBackground from '../components/WaveBackground'
import gestaoBanner from '../assets/Unidades/unidade12.jpg'

const etapas = [
  {
    numero: '01',
    titulo: 'Diagnóstico e Proposta',
    descricao: 'Visita técnica ao local, análise do fluxo de veículos e elaboração de uma proposta personalizada para o seu espaço.',
  },
  {
    numero: '02',
    titulo: 'Implantação',
    descricao: 'Contratação e treinamento da equipe, instalação de sistemas de controle de acesso e sinalização do estacionamento.',
  },
  {
    numero: '03',
    titulo: 'Operação Contínua',
    descricao: 'Gestão diária da operação, atendimento aos usuários, manutenção de equipamentos e suporte permanente.',
  },
  {
    numero: '04',
    titulo: 'Relatórios e Acompanhamento',
    descricao: 'Envio periódico de relatórios financeiros e operacionais, com reuniões de alinhamento para ajustes contínuos.',
  },
]

export default function Gestao() {
  return (
    <main className="pt-20">
      <PageBanner
        image={gestaoBanner}
        positionClass="object-[center_60%] md:object-[center_45%]"
        eyebrow="Terceirize com quem entende"
        title="Gestão de estacionamento"
      />

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              A Park Plus assume a operação completa do seu estacionamento: contratação e treinamento
              de equipe, implantação de sistemas de controle de acesso, gestão financeira, monitoramento
              e toda a parte operacional do dia a dia.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Com nossa expertise, você reduz custos operacionais, elimina dores de cabeça com RH e
              garante uma operação profissional que valoriza seu empreendimento.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors overflow-hidden">
        <WaveBackground flip />
        <div className="relative max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-2">O processo</p>
              <h2 className="text-3xl font-black text-brand-navy dark:text-white">Como funciona a terceirização</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {etapas.map((etapa, i) => (
              <ScrollReveal key={etapa.numero} delay={i} className="h-full">
                <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
                  <span className="text-brand-cyan/40 font-black text-4xl">{etapa.numero}</span>
                  <h3 className="font-bold text-brand-navy dark:text-white text-lg mt-2 mb-2">{etapa.titulo}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{etapa.descricao}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center">
            <Link to="/contato"
              className="bg-brand-cyan text-brand-navy font-bold px-8 py-3.5 rounded-full hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide">
              Solicitar Proposta Comercial
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Faq />
    </main>
  )
}