import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { images } from '../config/images'
import Button from './ui/Button'
import { WaveDividerBottom } from './ui/WaveDivider'
import FadeIn from './ui/FadeIn'
import ThemeImage from './ui/ThemeImage'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-24 pt-28 sm:pb-32 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(16,185,129,0.28),_transparent_50%)]" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <FadeIn>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400"
          >
            Trusted Professional Cleaners
          </motion.span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Professional Cleaning{' '}
            <span className="text-amber-300">Solutions</span> Services!
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Advanced Cleaning Services delivers spotless homes and workplaces
            with eco-friendly products, trained specialists, and flexible
            scheduling — every time.
          </p>
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
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30">
              <ThemeImage
                src={images.hero}
                alt="Advanced Cleaning Services professional team"
                loading="eager"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-navy-900/95 via-navy-900/75 to-transparent px-6 pb-6 pt-16">
                <p className="font-semibold text-white">Certified cleaning team</p>
                <p className="text-sm text-slate-200">Fully insured & background-checked</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 z-20 rounded-2xl border border-white/10 bg-navy-950/90 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-6"
            >
              <p className="text-2xl font-bold text-amber-400">500+</p>
              <p className="text-xs font-medium text-white/80">Happy clients</p>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      <WaveDividerBottom fill="#ffffff" />
    </section>
  )
}
