import './index.css'

import { useEffect, useState } from 'react'

import Loader from './components/Loader'
import DotNav from './components/DotNav'

import LandingSection from './components/LandingSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/mac-draco.glb')

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-6 text-center bg-white text-black">
        <h1 className="text-2xl font-semibold mb-4">Mobile version<br/>coming soon ✌︎︎</h1>
        <p className="text-sm text-gray-600 max-w-sm">
          This portfolio is best viewed on a desktop device for now. Thanks for stopping by!
        </p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div id="landing" style={{height: 0}}></div>
      <Loader />
      <LandingSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <DotNav />
    </div>
  )
}

export default App