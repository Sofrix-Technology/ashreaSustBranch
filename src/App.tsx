import Footer from './pages/Footer'
import CallToAction from './pages/CallToAction'
import Navbar from './pages/Navbar'
import Partners from './pages/Partners'
import HeroSection from './pages/HeroSection'
import StudentResearch from './components/StudentResearch'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection/>
        
        {/* Main content will go here */}
        <StudentResearch/>
        <Partners />
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
