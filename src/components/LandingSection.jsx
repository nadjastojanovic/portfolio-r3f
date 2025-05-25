import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment } from '@react-three/drei'

import Model from './Model'

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="w-screen h-screen bg-radial-gray relative flex items-center justify-center"
    >
      {/* NAVIGATION LINKS */}
      <div className="absolute top-10 w-full flex justify-center gap-20 z-30 text-sm font-medium tracking-wide">
        <a href="#skills" className="hover:underline">SKILLS</a>
        <a href="#projects" className="hover:underline">PROJECTS</a>
        <a href="#contact" className="hover:underline">CONTACT</a>
      </div>

      {/* BACKGROUND CIRCLES */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-full w-[30vw] h-[30vw] shadow-2xl z-20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-[10vw] z-0">
        <div className="bg-white rounded-full w-[30vw] h-[30vw]" />
        <div className="bg-white rounded-full w-[30vw] h-[30vw]" />
      </div>

      {/* LEFT SIDE TEXT */}
      <div className="absolute left-30 top-1/2 -translate-y-1/2 z-10 max-w-6xl">
        <h2 className="text-3xl mb-4">Hey, it's Nađa ˙⋆✮</h2>
        <h1 className="text-6xl font-bold mb-4">
          Full-stack Developer <br />
          & Data Science nerd
        </h1>
        <p className="text-xl">
          Practical experience across software engineering<br />
          and data analysis. Clean code for meaningful results.
        </p>
      </div>

      {/* 3D MACBOOK MODEL */}
      <div className="absolute right-30 w-[600px] h-[600px] z-10">
        <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <Model />
            </group>
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
        </Canvas>
      </div>
    </section>
  )
}
