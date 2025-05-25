import { useEffect, useState } from 'react'

const sections = ['landing', 'skills', 'projects', 'contact']

export default function DotNav({ scale = 1 }) {
  const [activeSection, setActiveSection] = useState('landing')

  useEffect(() => {
    const observers = []

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { root: null, rootMargin: '0px', threshold: 0.5 }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const scrollTo = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  const dotSize = 16 * scale // default is 16px (w-4/h-4)
  const gap = 16 * scale      // default gap is 1rem (16px)

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
      style={{ gap: `${gap}px` }}
    >
      {sections.map((id) => (
        <button
          key={id}
          aria-label={id}
          onClick={() => scrollTo(id)}
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderWidth: '1px',
            borderColor: 'black',
            borderRadius: '50%',
            backgroundColor: activeSection === id ? 'black' : 'transparent',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  )
}
