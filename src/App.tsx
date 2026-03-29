import Footer from './pages/Footer'
import CallToAction from './pages/CallToAction'
import Navbar from './pages/Navbar'
import Partners from './pages/Partners'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Partners />
        {/* Main content will go here */}
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
