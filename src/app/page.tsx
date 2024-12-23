import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/features'
import Testimonials from './components/Testimonial'
import CTA from './components/cta'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

