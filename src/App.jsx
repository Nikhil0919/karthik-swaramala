import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import OrderForm from './components/OrderForm'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
