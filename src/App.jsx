import LandingHero from './components/LandingHero'
import Hero from './components/Hero'
import CircleCards from './components/CircleCards'
import SocialProof from './components/SocialProof'
import Branding from './components/Branding'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <LandingHero />
      <CircleCards />
      <Hero />
      <SocialProof />
      <Branding />
    </div>
  )
}

export default App
