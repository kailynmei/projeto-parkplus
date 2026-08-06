import { motion } from 'framer-motion'

export default function PageBanner({
  image,
  eyebrow,
  title,
  subtitle,
  positionClass = 'object-center',
}) {
  return (
    <section className="relative py-16 md:py-24 px-6 text-center text-white overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover ${positionClass}`}
      />
      <div className="absolute inset-0 bg-brand-navy/80" />

      {eyebrow && (
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="relative text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-3">
          {eyebrow}
        </motion.p>
      )}

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="relative text-4xl md:text-5xl font-black mb-4">
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="relative text-white/60 max-w-md mx-auto">
          {subtitle}
        </motion.p>
      )}
    </section>
  )
}