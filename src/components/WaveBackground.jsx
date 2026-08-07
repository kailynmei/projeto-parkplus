export default function WaveBackground({ flip = false, tone = 'auto', className = '' }) {
  const toneClass =
    tone === 'onNavy'
      ? 'text-brand-cyan'
      : 'text-brand-navy dark:text-brand-cyan'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${flip ? '-scale-x-100' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 400 220"
        preserveAspectRatio="none"
        className={`absolute inset-0 w-full h-full ${toneClass}`}
      >
        <path
          d="M-20,0 C50,55 150,-15 230,35 C310,80 370,15 420,45 L420,-20 L-20,-20 Z"
          fill="currentColor"
          className="opacity-[0.06]"
        />
        <path
          d="M-20,210 C60,150 140,225 240,165 C320,120 380,185 420,145 L420,220 L-20,220 Z"
          fill="currentColor"
          className="opacity-[0.11]"
        />
        <path
          d="M-20,170 C60,112 140,190 240,130 C320,85 380,148 420,108"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="opacity-[0.22]"
        />
      </svg>
    </div>
  )
}