import { motion } from 'framer-motion'
import { unidades } from '../data/conteudo'
import Card from '../components/Card'
import unidadesBanner from '../assets/Unidades/unidade3.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
}

export default function Unidades() {
  return (
    <main className="pt-20">
      <section
        className="relative py-20 px-6 text-center text-white bg-cover"
        style={{ backgroundImage: `url(${unidadesBanner})`, backgroundPosition: 'center 35%' }}
      >
        <div className="absolute inset-0 bg-brand-navy/80" />

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="relative text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-3">
          Estamos em toda São Paulo
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="relative text-4xl md:text-5xl font-black mb-4">
          Nossas unidades
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="relative text-white/60 max-w-md mx-auto">
          {unidades.length} unidades operando em São Paulo e Grande SP.
        </motion.p>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {unidades.map((u, i) => (
            <Card
              key={u.id}
              as={motion.a}
              href={`https://www.google.com/maps/search/${encodeURIComponent(u.endereco + ', ' + u.cidade)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              variants={fadeUp}
              className="p-6 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-brand-cyan/15 text-brand-cyan text-xs font-bold px-3 py-1 rounded-full">
                  {u.bairro || u.cidade.split('–')[0].trim()}
                </span>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-brand-cyan transition-colors mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <h2 className="font-bold text-brand-navy dark:text-white text-lg mb-0.5">{u.nome}</h2>
              <p className="text-brand-cyan font-semibold text-xs mb-2">{u.edificio}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{u.endereco}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">{u.cidade}</p>
              {u.cep && <p className="text-gray-300 dark:text-gray-600 text-xs mt-1">CEP {u.cep}</p>}
              <div className="mt-4 w-8 h-0.5 bg-brand-cyan rounded-full group-hover:w-16 transition-all duration-300" />
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}