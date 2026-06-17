import { images } from '../config/images'
import Button from './ui/Button'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center transition group-hover:opacity-90">
          <img
            src={images.logo}
            alt="Safe Choice Cleaning"
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <Button href="#contact">Book Now</Button>
      </nav>
    </header>
  )
}
