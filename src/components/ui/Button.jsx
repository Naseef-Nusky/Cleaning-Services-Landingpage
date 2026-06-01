const variants = {
  primary:
    'bg-orange-500 text-navy-950 shadow-lg shadow-orange-500/25 hover:bg-orange-400 hover:shadow-orange-500/35',
  outline:
    'border-2 border-white/40 bg-white/10 text-white backdrop-blur hover:border-white/60 hover:bg-white/20',
  dark: 'bg-navy-800 text-white shadow-lg shadow-navy-900/20 hover:bg-navy-700',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
