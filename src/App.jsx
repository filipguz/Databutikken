import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
