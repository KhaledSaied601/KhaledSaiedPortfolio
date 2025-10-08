'use client'
import React, { useEffect, useRef } from 'react'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Building() {
  const primitive = useRef()
  const { scene } = useGLTF("/KhaledSaiedPortfolio/models/Building/Manufactory.gltf")

  // Apply realistic material and shadow settings
  useEffect(() => {
    if (!scene) return

    scene.traverse((child) => {
      if (child.isMesh) {
        // Enable shadows
        child.castShadow = true
        child.receiveShadow = true

        // Apply realistic PBR material
        child.material = new THREE.MeshPhysicalMaterial({
          color: '#d8d8d8',      // neutral steel tone
          metalness: 0.9,        // highly metallic
          roughness: 0.25,       // smooth but not mirror-like
          reflectivity: 1,
          clearcoat: 0.8,        // adds nice glossy finish
          clearcoatRoughness: 0.2,
        })
      }
    })
  }, [scene])

  return (
    <>
      {/* Model */}
      <primitive
        position-z={-10}
       
        scale={0.3}
        object={scene}
        ref={primitive}
      />


      {/* Optional environment lighting for realistic reflections */}

     
    </>
  )
}

useGLTF.preload("/KhaledSaiedPortfolio/models/Building/Manufactory.gltf")

export default Building
