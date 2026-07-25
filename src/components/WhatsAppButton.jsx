import { motion } from 'framer-motion'

// Ícone do WhatsApp (glifo padrão, vetor livre para indicar o serviço)
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.65 4.468 1.778 6.304L4 29l7.873-1.746A11.94 11.94 0 0016.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75a9.71 9.71 0 01-4.95-1.36l-.355-.21-4.67 1.036 1.05-4.552-.232-.372A9.7 9.7 0 016.25 15c0-5.385 4.376-9.75 9.754-9.75 5.377 0 9.746 4.365 9.746 9.75s-4.369 9.75-9.746 9.75zm5.35-7.297c-.293-.147-1.735-.857-2.004-.955-.269-.098-.465-.147-.66.147-.196.293-.758.955-.929 1.152-.171.196-.343.22-.636.073-.293-.147-1.236-.455-2.354-1.452-.87-.776-1.458-1.735-1.629-2.028-.171-.293-.018-.452.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.59-.904-2.177-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.025 1.002-1.025 2.442 0 1.44 1.05 2.833 1.196 3.03.147.196 2.066 3.156 5.007 4.427.7.302 1.246.483 1.672.618.702.223 1.341.191 1.846.116.563-.084 1.735-.71 1.98-1.395.244-.685.244-1.272.171-1.395-.073-.122-.269-.196-.562-.343z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const numero = '5511993284343' // +55 11 99328-4343
  const mensagem = 'Olá! Vim pelo site e gostaria de mais informações sobre a Park Plus.'
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#1ebe57] transition-colors"
    >
      <WhatsAppIcon />
    </motion.a>
  )
}