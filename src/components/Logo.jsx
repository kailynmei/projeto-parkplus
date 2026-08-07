import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark.png'

export default function Logo({ className = 'h-14 w-auto', onDark = true }) {
  return (
    <img
      src={onDark ? logoDark : logoLight}
      alt="Park Plus Estacionamentos"
      className={`shrink-0 ${className}`}
    />
  )
}