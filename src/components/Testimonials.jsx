import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import FadeIn from './ui/FadeIn'

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Office Manager',
    initials: 'SM',
    text: 'Safe Choice Cleaning keeps our office clean and well maintained. The team is professional, thorough and always on time. We have used them monthly for over a year.',
  },
  {
    name: 'James Cooper',
    role: 'Homeowner',
    initials: 'JC',
    text: 'Excellent end-of-tenancy clean. The landlord was happy with the standard and we received our full deposit back. Would recommend.',
  },
  {
    name: 'Emma Richardson',
    role: 'Retail Store Owner',
    initials: 'ER',
    text: 'A reliable team who clean our shop before opening each morning. Good communication and consistent results.',
  },
]

const highlights = [
  { value: '500+', label: 'Customers served' },
  { value: '5★', label: 'Client rating' },
  { value: '100%', label: 'Insured work' },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="group relative flex min-h-[280px] flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/60 sm:min-h-[260px] sm:p-10">
      <Quote
        className="h-10 w-10 text-navy-200 transition group-hover:text-orange-500/60"
        strokeWidth={1.5}
        aria-hidden
      />
      <p className="mt-4 flex-1 text-lg leading-relaxed text-slate-700 sm:text-xl">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 font-display text-lg font-bold text-white shadow-md">
          {review.initials}
        </span>
        <div>
          <p className="font-display font-bold text-navy-900">{review.name}</p>
          <p className="text-sm text-slate-500">{review.role}</p>
          <div className="mt-2">
            <Stars />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = (index) => {
    setActive((index + reviews.length) % reviews.length)
  }

  const goNext = () => goTo(active + 1)
  const goPrev = () => goTo(active - 1)

  useEffect(() => {
    if (paused) return undefined

    const id = setInterval(() => {
      setActive((i) => (i + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section id="reviews" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-navy-600">
            Client Reviews
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Feedback from homes and businesses we clean across the local area.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-8 sm:gap-14">
            {highlights.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-navy-800 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div
            className="relative mx-auto mt-14 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <ReviewCard review={reviews[active]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous review"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-800 shadow-sm transition hover:border-navy-300 hover:bg-navy-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((review, i) => (
                  <button
                    key={review.name}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={i === active ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-navy-700' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next review"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-800 shadow-sm transition hover:border-navy-300 hover:bg-navy-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
