export default function Card({ as: Component = 'div', className = '', interactive = true, children, ...props }) {
  const hoverRing = interactive ? 'hover:ring-1 hover:ring-brand-navy hover:shadow-lg' : ''

  return (
    <Component
      className={`group rounded-2xl bg-gray-50 dark:bg-slate-800 border-t-4 border-brand-cyan transition-all duration-300 ${hoverRing} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}