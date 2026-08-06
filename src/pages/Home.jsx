import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { estatisticas, diferenciais, servicos } from '../data/conteudo'
import heroImg from '../assets/Unidades/unidade0.png'
import unidade1 from '../assets/Unidades/unidade1.jpg'
import unidade2 from '../assets/Unidades/unidade2.jpg'
import unidade3 from '../assets/Unidades/unidade3.jpg'
import unidade4 from '../assets/Unidades/unidade4.jpg'
import destaque1 from '../assets/Unidades/unidade7.jpg'
import destaque2 from '../assets/Unidades/unidade9.jpg'
import destaque3 from '../assets/Unidades/unidade14.jpg'
import destaque4 from '../assets/Unidades/unidade16.jpg'
import VideoSection from '../components/VideoSection'
import Card from '../components/Card'

const heroImages = [heroImg, unidade1, unidade2, unidade3, unidade4]

const unidadesDestaque = [
  { nome: 'Empresarial Perdizes', bairro: 'Perdizes', imagem: destaque1 },
  { nome: 'Heleno Tower', bairro: 'Perdizes', imagem: destaque2 },
  { nome: 'The Point Office Park', bairro: 'Alto de Pinheiros', imagem: destaque3 },
  { nome: 'TPA Granja Viana', bairro: 'Cotia', imagem: destaque4 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const iconMap = {
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.591 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.285z" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  trophy: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  ),
}

function ScrollReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={delay}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    let frame

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      } else {
        setValue(target)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return value
}

function AnimatedStat({ valor, label, delay = 0 }) {
  const hasNumber = /\d/.test(valor)
  const target = hasNumber ? parseInt(valor.replace(/[^\d]/g, ''), 10) || 0 : 0
  const suffix = hasNumber ? valor.replace(/[\d.,]/g, '') : ''
  const [started, setStarted] = useState(false)
  const count = useCountUp(target, 1800, started)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      onViewportEnter={() => setStarted(true)}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
    >
      <p className="text-5xl font-black text-white">
        {hasNumber ? `${count.toLocaleString('pt-BR')}${suffix}` : valor}
      </p>
      <p className="text-white/70 font-medium mt-1">{label}</p>
    </motion.div>
  )
}

function ParallaxSlideshow({ images }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3300)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 bg-scroll md:bg-fixed bg-cover bg-top"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>
    </div>
  )
}

function UnitShowcaseCard({ nome, bairro, imagem, i }) {
  return (
    <ScrollReveal delay={i} className="h-full">
      <Link
        to="/unidades"
        className="group relative block h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm"
      >
        <img
          src={imagem}
          alt={nome}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/30 to-transparent transition-opacity duration-300 group-hover:from-brand-navy/90" />

        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <p className="font-bold text-lg leading-tight">{nome}</p>
          <p className="text-white/70 text-sm mb-1">{bairro}</p>
          <span className="inline-flex items-center gap-1 text-brand-cyan text-xs font-semibold uppercase tracking-wide opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Ver unidade
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  )
}

export default function Home() {
  return (
    <main>
      <section className="relative">
        <ParallaxSlideshow images={heroImages} />
        <div className="absolute inset-0 bg-brand-navy/75" />

        <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center text-white text-center px-6 pt-24">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-5"
            >
              Desde 1998 em São Paulo
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
            >
              Gestão de <span className="text-brand-cyan">estacionamentos</span>{' '}
              com excelência
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto"
            >
              Administração completa de estacionamentos residenciais e comerciais.
              Segurança, tecnologia e atendimento personalizado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contato"
                className="bg-brand-cyan text-brand-navy font-bold px-8 py-3.5 rounded-full hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide"
              >
                Fale Conosco
              </Link>
              <Link
                to="/servicos"
                className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wide"
              >
                Nossos Serviços
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-6 h-6 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative pt-0 pb-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {estatisticas.map((item, i) => (
              <AnimatedStat key={item.label} valor={item.valor} label={item.label} delay={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-2">O que fazemos</p>
              <h2 className="text-4xl font-black text-brand-navy dark:text-white">Nossos serviços</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((s, i) => (
              <ScrollReveal key={s.id} delay={i}>
                <Card interactive={false} className="h-full p-8 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{s.titulo}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.descricao}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-navy">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-2">Por que a Park Plus?</p>
              <h2 className="text-4xl font-black text-white">Nossos diferenciais</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((item, i) => (
              <ScrollReveal key={item.id} delay={i}>
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-brand-cyan mb-4">{iconMap[item.icone]}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.titulo}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-2">Onde estamos</p>
              <h2 className="text-4xl font-black text-brand-navy dark:text-white">Algumas de nossas unidades</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {unidadesDestaque.map((u, i) => (
              <UnitShowcaseCard key={u.nome} nome={u.nome} bairro={u.bairro} imagem={u.imagem} i={i} />
            ))}
          </div>

          <ScrollReveal className="text-center">
            <Link
              to="/unidades"
              className="inline-block bg-brand-navy dark:bg-brand-cyan text-white dark:text-brand-navy font-bold px-8 py-3.5 rounded-full hover:bg-brand-navy-dark dark:hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide"
            >
              Ver Todas as Unidades
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <VideoSection />

      <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900 transition-colors">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-brand-navy dark:text-white mb-4">
              Quer terceirizar seu estacionamento?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
              Entre em contato e descubra como a Park Plus pode transformar a gestão do seu espaço.
            </p>
            <Link
              to="/contato"
              className="bg-brand-navy dark:bg-brand-cyan text-white dark:text-brand-navy font-bold px-10 py-4 rounded-full hover:bg-brand-navy-dark dark:hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide inline-block"
            >
              Enviar Proposta
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}