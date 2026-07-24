// onDark=true  → versão 4 do PDF: P em ciano, texto branco, sem caixa  (header/footer navy)
// onDark=false → versão 1 do PDF: caixa navy + P ciano + texto branco  (header claro)
export default function Logo({ className = 'h-12 w-auto', onDark = true }) {
  if (onDark) {
    return (
      <svg viewBox="0 0 190 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Park Plus Estacionamentos">
        <rect x="0" y="2" width="58" height="58" rx="11" fill="#00c8c8" />
        <text x="10" y="49" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="44" fill="#162155">P</text>
        <text x="70" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">Park</text>
        <text x="67" y="56" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="30" fill="white">Plus</text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 190 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Park Plus Estacionamentos">
      <rect x="0" y="0" width="64" height="64" rx="12" fill="#162155" />
      <rect x="5" y="5" width="38" height="40" rx="8" fill="#00c8c8" />
      <text x="9" y="37" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#162155">P</text>
      <text x="75" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="white" letterSpacing="1">Park</text>
      <text x="72" y="55" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fill="white">Plus</text>
    </svg>
  )
}
