import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react'
import { images } from '../config/images'
import Button from './ui/Button'
import FadeIn from './ui/FadeIn'

const serviceLinks = [
  'Commercial Cleaning',
  'Residential Cleaning',
  'Deep & Carpet Cleaning',
  'End of Tenancy',
  'Office Maintenance',
  'Post-Build Cleaning',
]

function SocialIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  }
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    )
  }
  return <MessageCircle className="h-4 w-4" />
}

const socials = [
  { type: 'facebook', label: 'Facebook', href: '#' },
  { type: 'instagram', label: 'Instagram', href: '#' },
  { type: 'whatsapp', label: 'WhatsApp', href: '#' },
]

const inputClass =
  'w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 transition focus:border-orange-500/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-orange-500/20'

export default function Footer() {
  const launchYear = 2026
  const currentYear = new Date().getFullYear()
  const copyrightYear =
    currentYear > launchYear ? `${launchYear}–${currentYear}` : String(currentYear)

  return (
    <>
      <section id="contact" className="surface-dark surface-dark-grid relative overflow-hidden border-t border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Contact Us
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              Request a Free Quote
            </h2>
            <p className="mt-2 text-slate-400">
              Tell us what you need and we will get back to you within 24 hours.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div
              id="contact-form"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 sm:p-8"
            >
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                Contact & Booking
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Send us your details and we will contact you to arrange a quote.
              </p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="name" required placeholder="Your Name" className={inputClass} />
                <input type="email" name="email" required placeholder="Email Address" className={inputClass} />
                <input type="tel" name="phone" placeholder="Phone Number" className={inputClass} />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your cleaning needs..."
                  className={`${inputClass} resize-none`}
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <FadeIn>
              <img
                src={images.logo}
                alt="Safe Choice Cleaning"
                className="h-12 w-auto sm:h-14"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
                Home and commercial cleaning across the local area. Licensed,
                insured and locally run.
              </p>
              <div className="mt-6 flex gap-2">
                {socials.map(({ type, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-orange-500/50 hover:bg-orange-50 hover:text-navy-700"
                  >
                    <SocialIcon type={type} />
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-navy-800">
                Services
              </h3>
              <ul className="mt-5 space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-sm text-slate-600 transition hover:text-navy-800"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-navy-800">
                Contact Us
              </h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                  <span>
                    24 Business Park Drive, Suite 100
                    <br />
                    Your City, UK
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:info@safechoicecleaning.com"
                    className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-navy-800"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-orange-600" />
                    info@safechoicecleaning.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+447386082151"
                    className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-navy-800"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-orange-600" />
                    07386 082151
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {copyrightYear} Safe Choice Cleaning. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">Professional cleaning · Residential & commercial</p>
          </div>
        </div>
      </footer>
    </>
  )
}
