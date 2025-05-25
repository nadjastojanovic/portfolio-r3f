import { useEffect, useState } from 'react'

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
    </div>
  )
}
