import { Sparkles } from 'lucide-react'
import Button from './ui/Button'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-surface-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-black/20 transition group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-surface-950" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <span className="block font-display text-sm font-extrabold tracking-tight text-white sm:text-base">
              Advanced Cleaning
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-400 sm:text-xs">
              Services
            </span>
          </div>
        </a>

        <Button href="#contact">Book Now</Button>
      </nav>
    </header>
  )
}
