import { Quote, Star } from 'lucide-react'
import FadeIn from './ui/FadeIn'

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Office Manager',
    initials: 'SM',
    text: 'Advanced Cleaning Services transformed our office. Professional, thorough, and always on time. We have used them monthly for over a year.',
  },
  {
    name: 'James Cooper',
    role: 'Homeowner',
    initials: 'JC',
    text: 'Outstanding end-of-tenancy clean. The landlord was impressed and we got our full deposit back. Could not recommend them more highly.',
  },
]

const highlights = [
  { value: '500+', label: 'Happy clients' },
  { value: '5★', label: 'Average rating' },
  { value: '100%', label: 'Satisfaction focus' },
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

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-navy-600">
            Client Stories
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            We Care About Our Customer Growth And Experience
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real feedback from homes and businesses we proudly serve every day.
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

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={0.12 + i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/60 transition duration-300 hover:border-navy-200 hover:shadow-xl">
                <Quote
                  className="h-10 w-10 text-navy-200 transition group-hover:text-orange-500/60"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="mt-4 flex-1 text-lg leading-relaxed text-slate-700">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
