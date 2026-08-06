import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { somosDiferentes } from '../data/conteudo'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12.5 10.5 15 16 9" />
    </svg>
  )
}

export default function SomosDiferentes() {
  return (
    <section className="py-24 px-6 bg-brand-navy">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <h2 className="text-4xl font-black text-white mb-4 uppercase">
            Somos Diferentes
          </h2>
          <div className="w-12 h-1 bg-brand-cyan rounded-full mb-6" />
          <Link
            to="/contato"
            className="inline-block bg-brand-cyan text-brand-navy font-bold px-8 py-3.5 rounded-full hover:bg-brand-cyan-dark transition-colors text-sm uppercase tracking-wide"
          >
            Fale Conosco
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 flex flex-col gap-6"
        >
          {somosDiferentes.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-brand-cyan mt-0.5">
                <CheckIcon />
              </span>
              <span className="text-white/85 leading-relaxed">{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}