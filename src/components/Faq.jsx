import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqGestao } from '../data/conteudo'

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Faq() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-black text-brand-navy dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Confira algumas perguntas frequentes sobre o nosso serviço de gestão de estacionamentos:
          </p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3">
          {faqGestao.map((item) => {
            const open = openId === item.id
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold transition-colors ${
                    open
                      ? 'bg-brand-navy text-white'
                      : 'bg-white dark:bg-slate-800 text-brand-navy dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{item.pergunta}</span>
                  <ChevronIcon open={open} />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden bg-white dark:bg-slate-800"
                    >
                      <p className="px-5 py-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}