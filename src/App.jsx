import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CareSection from './components/CareSection'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CareSection />
        <Testimonials />
        <Projects />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
