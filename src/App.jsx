import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import HowItWorks from './sections/HowItWorks'
import OrderForm from './sections/OrderForm'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <OrderForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
