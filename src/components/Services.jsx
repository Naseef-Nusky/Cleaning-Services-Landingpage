import { Building2, Home, SprayCan, Layers } from 'lucide-react'
import { images } from '../config/images'
import FadeIn from './ui/FadeIn'
import ThemeImage from './ui/ThemeImage'

const services = [
  {
    icon: Building2,
    image: images.services.commercial,
    title: 'Commercial Cleaning',
    description:
      'Offices, retail spaces, and workplaces kept pristine with flexible after-hours scheduling and minimal disruption.',
    featured: false,
  },
  {
    icon: Home,
    image: images.services.residential,
    title: 'Residential Cleaning',
    description:
      'Regular and one-off home cleans tailored to your lifestyle — kitchens, bathrooms, and living areas spotless.',
    featured: false,
  },
  {
    icon: SprayCan,
    image: images.services.deepCarpet,
    title: 'Deep & Carpet Cleaning',
    description:
      'Steam extraction, stain removal, and allergen reduction for carpets, rugs, and upholstery that look brand new.',
    featured: false,
  },
  {
    icon: Layers,
    image: images.services.endOfTenancy,
    title: 'End of Tenancy',
    description:
      'Landlord and tenant move-in/out deep cleans with inspection-ready standards and fast turnaround.',
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            What We Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Explore Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Comprehensive cleaning solutions for homes and businesses — one
            trusted team for every need.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            const isFeatured = service.featured

            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
                    isFeatured
                      ? 'bg-navy-900 text-white shadow-xl shadow-navy-900/20 hover:shadow-2xl'
                      : 'border border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:-translate-y-1 hover:shadow-xl'
                  }`}
                >
                  <div className="relative h-52 overflow-hidden sm:h-56">
                    <ThemeImage
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isFeatured
                          ? 'bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent'
                          : 'bg-gradient-to-t from-white/90 via-transparent to-transparent'
                      }`}
                    />
                    <span
                      className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                        isFeatured
                          ? 'bg-orange-500 text-white'
                          : 'bg-orange-100 text-orange-600'
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3
                      className={`font-display text-xl font-bold ${
                        isFeatured ? 'text-white' : 'text-navy-900'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-3 flex-1 leading-relaxed ${
                        isFeatured ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className={`mt-6 inline-flex items-center text-sm font-semibold ${
                        isFeatured
                          ? 'text-orange-400 hover:text-orange-300'
                          : 'text-orange-600 hover:text-orange-500'
                      }`}
                    >
                      Get a quote →
                    </a>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
