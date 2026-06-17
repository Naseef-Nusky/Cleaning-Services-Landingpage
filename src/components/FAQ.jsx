import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'

const faqs = [
  {
    q: 'How do I book a cleaning service?',
    a: 'Use the contact form, call us, or send an email. We will discuss your requirements and send a free quote within 24 hours.',
  },
  {
    q: 'Do you bring your own equipment and supplies?',
    a: 'Yes. Our team brings professional equipment and suitable cleaning products. Let us know if you have any specific requirements.',
  },
  {
    q: 'Are your cleaners insured and background-checked?',
    a: 'Yes. All staff are insured, trained and background-checked.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover residential and commercial properties in the local area. Contact us with your postcode and we will confirm coverage.',
  },
  {
    q: 'Do you offer one-off and recurring cleans?',
    a: 'Yes. We offer one-off deep cleans, end-of-tenancy cleans, and regular weekly, fortnightly or monthly contracts.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? 'border-navy-200 bg-navy-50/50 shadow-md shadow-navy-900/5'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="font-display text-base font-bold text-navy-900 sm:text-lg">
          {item.q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? 'bg-orange-500 text-navy-950' : 'bg-slate-100 text-navy-800'
          }`}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="border-t border-slate-200/80 px-5 pb-5 pt-4 leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-3">
          {faqs.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.05}>
              <FaqItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
