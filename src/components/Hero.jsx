import { ArrowRight, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { images } from '../config/images'
import Button from './ui/Button'
import { WaveDividerBottom } from './ui/WaveDivider'
import FadeIn from './ui/FadeIn'
import ThemeImage from './ui/ThemeImage'

const trustPoints = ['Licensed & insured', 'Eco-friendly products', 'Flexible scheduling']

export default function Hero() {
  return (
    <section className="surface-dark surface-dark-grid relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-300"
          >
            <ShieldCheck className="h-4 w-4 text-orange-400" />
            Trusted Professional Cleaners
          </motion.span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
            Professional Cleaning{' '}
            <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              Solutions
            </span>{' '}
            You Can Rely On
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            Advanced Cleaning Services delivers spotless homes and workplaces
            with trained specialists, premium equipment, and flexible scheduling.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#services" variant="outline">
              Explore Services
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} direction="left">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-orange-500/20 via-transparent to-navy-600/10 opacity-60 blur-sm" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800 shadow-2xl shadow-black/40 ring-1 ring-white/5">
              <ThemeImage
                src={images.hero}
                alt="Advanced Cleaning Services professional team"
                loading="eager"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-surface-950 via-surface-950/85 to-transparent px-6 pb-6 pt-20">
                <p className="font-semibold text-white">Certified cleaning team</p>
                <p className="mt-0.5 text-sm text-slate-400">
                  Fully insured & background-checked
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 z-20 rounded-xl border border-white/10 bg-white px-6 py-4 shadow-xl"
            >
              <p className="font-display text-3xl font-extrabold text-surface-950">500+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Happy clients
              </p>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      <WaveDividerBottom fill="#ffffff" />
    </section>
  )
}
