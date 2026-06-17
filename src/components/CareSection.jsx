import { Sun, HeartHandshake } from 'lucide-react'
import { images } from '../config/images'
import FadeIn from './ui/FadeIn'
import ThemeImage from './ui/ThemeImage'

const points = [
  {
    icon: Sun,
    title: 'Careful, Thorough Cleaning',
    description:
      'We work room by room, handle your property with respect, and do not cut corners.',
  },
  {
    icon: HeartHandshake,
    title: 'Reliable Local Team',
    description:
      'Punctual visits, clear communication, and a tidy finish every time.',
  },
]

export default function CareSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <h2 className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Cleaning Done{' '}
              <span className="text-orange-500">Properly</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Good cleaning is about more than surface dirt. We help keep homes
              and workplaces clean, hygienic and presentable.
            </p>
            <div className="mt-10 space-y-8">
              {points.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.title} className="flex gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-900">
                        {point.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} direction="left">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
              <ThemeImage
                src={images.care}
                alt="Deep and carpet cleaning service"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
