import { ArrowRight, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { images } from '../config/images'
import Button from './ui/Button'
import { WaveDividerBottom } from './ui/WaveDivider'
import FadeIn from './ui/FadeIn'
import ThemeImage from './ui/ThemeImage'
import AnimatedText from './ui/AnimatedText'

const trustPoints = ['Licensed & insured', 'Eco-friendly products', 'Flexible scheduling']
const heroWords = ['Homes', 'Offices', 'Carpets', 'Workspaces']

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
            Licensed & Insured Cleaners
          </motion.span>

          <p className="mb-4 text-sm font-medium text-slate-400">
            Cleaning for{' '}
            <AnimatedText
              words={heroWords}
              className="min-w-[6.5rem] font-semibold text-orange-400 sm:min-w-[7.5rem]"
            />
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
            Professional Cleaning for{' '}
            <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              Homes & Businesses
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            Safe Choice Cleaning provides reliable home and commercial cleaning
            across the local area. Fully equipped teams and flexible booking.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-nowrap items-center gap-2 sm:gap-4">
            <Button
              href="#contact"
              className="shrink-0 whitespace-nowrap px-4 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Contact Us
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <Button
              href="#services"
              variant="outline"
              className="shrink-0 whitespace-nowrap px-4 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-sm"
            >
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
                alt="Safe Choice Cleaning professional team"
                loading="eager"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-surface-950 via-surface-950/90 to-transparent px-4 pb-4 pt-14 sm:px-6 sm:pb-6 sm:pt-20">
                <p className="pr-28 text-sm font-semibold leading-snug text-white sm:pr-0 sm:text-base">
                  Certified team
                </p>
                <p className="mt-1 max-w-[calc(100%-6.5rem)] text-xs leading-relaxed text-slate-400 sm:mt-0.5 sm:max-w-none sm:text-sm">
                  Insured and background-checked
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-3 right-3 z-20 max-w-[42%] rounded-lg border border-white/10 bg-white px-3 py-2.5 shadow-xl sm:-bottom-4 sm:-right-4 sm:max-w-none sm:rounded-xl sm:px-6 sm:py-4"
            >
              <p className="font-display text-xl font-extrabold leading-none text-navy-900 sm:text-3xl">500+</p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase leading-tight tracking-wide text-slate-500 sm:text-xs sm:tracking-wider">
                Happy customers
              </p>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      <WaveDividerBottom fill="#ffffff" />
    </section>
  )
}
