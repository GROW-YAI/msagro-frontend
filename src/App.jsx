import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer'

function App() {
  return (
    <>
      <BoafoWidgetInitializer />
      <BackToTop />
      <div className="header header-1">
        <Topbar />
        <Navbar />
      </div>
      <Hero />
      <About />
      <Contact />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App