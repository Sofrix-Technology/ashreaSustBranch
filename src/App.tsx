import Footer from './pages/Footer'
import CallToAction from './pages/CallToAction'
import Navbar from './pages/Navbar'
import Partners from './pages/Partners'
import TooltipCursor from './components/TooltipCursor'
import AshraeLogo from './components/AshraeLogo'
import HeroSection from './pages/HeroSection'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection/>
        <Partners />
        {/* Main content will go here */}
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
