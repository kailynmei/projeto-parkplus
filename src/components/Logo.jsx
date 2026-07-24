export default function Logo({ className = 'h-12 w-auto' }) {
  return (
    <svg
      viewBox="0 0 160 56"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ícone quadrado arredondado com P */}
      <rect x="0" y="0" width="56" height="56" rx="10" fill="#f5c518" />
      <text x="14" y="42" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="36" fill="#162155">P</text>

      {/* Texto Park Plus */}
      <text x="66" y="22" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13" fill="white">Park</text>
      <text x="63" y="44" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="22" fill="white">Plus</text>
    </svg>
  )
}
