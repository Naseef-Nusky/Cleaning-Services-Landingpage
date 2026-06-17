import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const offsets = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 16 },
    right: { x: -16 },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-full ${className}`}
    >
      {children}
    </motion.div>
  )
}
