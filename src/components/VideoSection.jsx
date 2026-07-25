import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlaying(true)
  }

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-brand-cyan font-semibold text-xs uppercase tracking-widest mb-2">
            Conheça a Park Plus
          </p>
          <h2 className="text-4xl font-black text-brand-navy dark:text-white">
            Veja como trabalhamos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-brand-navy"
        >
          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Reproduzir vídeo"
              className="absolute inset-0 z-10 group"
            >
              <img
                src={heroImg}
                alt="Park Plus Estacionamentos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/50 group-hover:bg-brand-navy/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-cyan text-brand-navy flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <PlayIcon />
                </div>
              </div>
            </button>
          )}

          {playing && (
            <video
              ref={videoRef}
              src="/videos/park-plus.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}