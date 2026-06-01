import { images } from '../config/images'
import Button from './ui/Button'
import FadeIn from './ui/FadeIn'
import ThemeImage from './ui/ThemeImage'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Our Featured Cleaning Projects
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              From corporate offices to family homes, see the results our team
              delivers — consistent quality, every single visit.
            </p>
            <div className="mt-8">
              <Button href="#contact">View All Work</Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
              {images.projects.map((img) => (
                <div
                  key={img.src}
                  className={`overflow-hidden rounded-2xl shadow-lg ${img.span} ${
                    img.span.includes('row-span-2') ? 'min-h-[200px]' : 'min-h-[120px]'
                  }`}
                >
                  <ThemeImage
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
