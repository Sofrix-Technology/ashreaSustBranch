import HeroSection from '../components/HeroSection'
import CorePillars from '../components/CorePillars'
import StudentResearch from '../components/StudentResearch'
import Partners from '../components/Partners'
import CallToAction from '../components/CallToAction'

const Home = () => {
  return (
    <div>
      <HeroSection />
        <CorePillars />
        <StudentResearch />
        <Partners />
        <CallToAction />
    </div>
  )
}

export default Home