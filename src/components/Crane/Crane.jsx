'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Crane() {
  const primitive = useRef()
  const { scene } = useGLTF("/KhaledSaiedPortfolio/models/Crane/scene.gltf")

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (primitive.current) {
      // Smooth oscillation between -90° and +90°
      const swing = Math.sin(t * 0.1) * (Math.PI / 2) // 0.5 = speed, π/2 = ±90°
      primitive.current.rotation.y = swing
    }
  })

  return (
    <>
      <primitive
        position-z={-10}
        position-x={-6}
        scale={0.2}
        
        object={scene}
        ref={primitive}
      />
    </>
  )
}

useGLTF.preload("/KhaledSaiedPortfolio/models/Crane/scene.gltf")

export default Crane
