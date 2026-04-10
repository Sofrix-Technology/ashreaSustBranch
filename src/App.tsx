import Footer from './components/Footer'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import ComingSoon from './components/ComingSoon'
import JoinSection from './components/JoinSection'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<ComingSoon />} />
          <Route path="/team" element={<ComingSoon />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/join" element={<JoinSection />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
