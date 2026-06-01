import { Check } from 'lucide-react'
import { images } from '../config/images'
import FadeIn from './ui/FadeIn'
import ThemeImage from './ui/ThemeImage'

const benefits = [
  'Eco-friendly, non-toxic cleaning products',
  'Fully licensed, insured & vetted staff',
  'Transparent pricing with no hidden fees',
  'Same-week booking & flexible time slots',
  '100% satisfaction guarantee on every job',
]

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="right">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange-400/20 via-navy-500/10 to-transparent" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ThemeImage
                  src={images.about}
                  alt="Advanced Cleaning Services team at work"
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-xl font-bold text-white">
                    Advanced Cleaning Services
                  </p>
                  <p className="mt-1 text-sm text-lime-300">
                    Professional results, every visit
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Shine Your Homes with{' '}
              <span className="text-orange-500">Advanced Cleaning Services</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We combine industry-grade equipment with meticulous attention to
              detail. Whether it&apos;s a weekly home refresh or a full commercial
              deep clean, our team treats every space like our own.
            </p>
            <ul className="mt-10 space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
