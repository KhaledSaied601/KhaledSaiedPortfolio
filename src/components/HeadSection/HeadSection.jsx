import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Enviro from '../Enviro/Enviro'

function HeadSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between 
                 w-full max-w-screen-xl mx-auto px-6 pt-10 pb-20gap-10"
    >
      {/* ---------- LEFT TEXT CONTENT ---------- */}
      <div className="flex-1 text-white text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Khaled Saied</h1>
        <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-4">
          BIM Coordinator
        </h3>

        <p className="text-sm sm:text-base font-light leading-relaxed text-gray-300 mb-3">
I’m a BIM Coordinator and Computational Engineer focused on coordination, workflow automation, and improving collaboration across disciplines.        </p>


      </div>

      {/* ---------- RIGHT 3D CARD ---------- */}
      <div
        className="flex-1 w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden 
                   border border-gray-600/30 shadow-xl bg-gradient-to-br 
                   from-gray-900/60 to-black/70 backdrop-blur-sm relative 
                   transition-all duration-500"
        style={{
          height: isLargeScreen
            ? 'clamp(500px, 65vh, 900px)' // ✅ Taller for large screens and up
            : 'clamp(250px, 40vh, 700px)', // ✅ Normal height for small/medium screens
        }}
      >
        <Canvas
          camera={{ position: [0, 1.4, 5] }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Enviro />
        </Canvas>
      </div>
    </section>
  )
}

export default HeadSection
