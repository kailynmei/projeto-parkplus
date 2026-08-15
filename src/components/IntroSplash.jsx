import { useCallback, useEffect, useState } from 'react'

const DURACAO = 4900
const FADE = 600

export default function IntroSplash({ onFinish }) {
  const [saindo, setSaindo] = useState(false)

  const encerrar = useCallback(() => setSaindo(true), [])

  useEffect(() => {
    if (saindo) return
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(encerrar, reduzido ? 1000 : DURACAO)
    return () => clearTimeout(t)
  }, [saindo, encerrar])

  useEffect(() => {
    if (!saindo) return
    const t = setTimeout(() => onFinish(), FADE)
    return () => clearTimeout(t)
  }, [saindo, onFinish])

  useEffect(() => {
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = anterior
    }
  }, [])

  useEffect(() => {
    const aoTeclar = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') encerrar()
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [encerrar])

  return (
    <div
      onClick={encerrar}
      className={`fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-white transition-opacity duration-[600ms] ease-out ${
        saindo ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="/parkplus-intro.svg"
        alt="Park Plus Estacionamentos"
        draggable="false"
        className={`w-[min(62vw,62vh,340px)] select-none transition-transform duration-[600ms] ease-out ${
          saindo ? 'scale-[1.06]' : 'scale-100'
        }`}
      />
    </div>
  )
}