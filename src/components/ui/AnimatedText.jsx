import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function AnimatedText({ words, className = '', interval = 2800 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className={`relative inline-grid overflow-hidden text-left ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
