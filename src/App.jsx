import './index.css'
import LandingSection from './components/LandingSection'
import DotNav from './components/DotNav'

import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="app-container">
      <div id="landing" style={{height: 0}}></div>
      <div className="background-gradient" />
      <LandingSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />
      <DotNav />
    </div>
  )
}

export default App