// src/components/IntroSplash.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import logoLight from '../assets/logo-light.png'; // logo clara, mesma usada no onDark do Logo.jsx

const SPLASH_SESSION_KEY = 'pp_intro_shown';

export default function IntroSplash({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Marca a sessão logo de cara, assim mesmo que o usuário
    // recarregue no meio da animação, ela não repete
    sessionStorage.setItem(SPLASH_SESSION_KEY, 'true');

    // Trava o scroll do body enquanto a splash está visível
    document.body.style.overflow = 'hidden';

    const delay = prefersReducedMotion ? 400 : 1900;
    const timeout = setTimeout(() => setVisible(false), delay);

    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const handleSkip = () => setVisible(false);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = '';
        onFinish();
      }}
    >
      {visible && (
        <motion.div
          key="intro-splash"
        //   className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0A1628] cursor-pointer"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-50 cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={handleSkip}
        >
          <motion.img
            src={logoLight}
            alt="Park Plus Estacionamentos"
            className="w-40 sm:w-52 md:w-60"
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.85 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}