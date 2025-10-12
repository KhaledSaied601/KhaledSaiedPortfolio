
import React, { Suspense, useEffect, useRef } from 'react'
import { Environment, Float, Lightformer, Sparkles, Text } from '@react-three/drei'
import Avatar from '../Avatar/Avatar'
import gsap from 'gsap'
import PlaceHolder from '../PlaceHolder/PlaceHolder'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import Buildling from '../Building/Building'
import Crane from '../Crane/Crane'

function Enviro() {
  const directionalLight = useRef()
  const ambientLight = useRef()
  const sparkles = useRef()

  useEffect(() => {
    gsap.to(directionalLight.current, { intensity: 2, duration: 5, ease: 'power2.inOut' })
    gsap.to(ambientLight.current, { intensity: 1.5, duration: 5, ease: 'power2.inOut' })
  }, [])




  
  return (
    <>


      {/* Subtle bloom & tone mapping */}
      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        <Bloom mipmapBlur intensity={0.45} luminanceThreshold={1} />
      </EffectComposer>


      {/* Blue key light */}
      <directionalLight
        color="#7aa6ff"
        ref={directionalLight}
        intensity={0.4}
        position={[0, 6, 6]}
      />

      {/* Warm fill light */}
      <ambientLight ref={ambientLight} intensity={0.4} color="#ffdddd" />

      {/* Floating Text */}
      <Float speed={1} floatIntensity={0.1}>
        <Text
          font="/KhaledSaiedPortfolio/bangers-v20-latin-regular.woff"
          fontSize={0.04}
          color="white"
          position={[-0.3, 1.5, 1]}
          maxWidth={4}
          textAlign="center"
        >
          Khaled Saied
        </Text>
        <Text
          font="/KhaledSaiedPortfolio/bangers-v20-latin-regular.woff"
          fontSize={0.04}
          color="#ccccff"
          position={[-0.3, 1.45, 1]}
          maxWidth={6}
          textAlign="center"
        >
          BIM Coordinator
        </Text>
      </Float>


     <Environment preset="city" />
      

      {/* Gentle sparkles */}
      <Sparkles
        ref={sparkles}
        count={60}
        size={0.8}
        scale={[1, 1.5, 0.8]}
        speed={0.1}
        color="lightblue"
        position-y={1.4}
        position-z={-0.1}
      />

    {/* 🌕 Dark yellow floor */}
<mesh
  rotation-x={-Math.PI * 0.5}
  position-z={-20}
  scale-x={40}
  scale-y={500}
>
  <planeGeometry />
  <meshStandardMaterial
    color="#b8860b"   // dark golden yellow
    roughness={0.8}
    metalness={0.15}
  />
</mesh>

      {/* Models */}
      <Suspense fallback={<PlaceHolder position-y={1} scale={[1, 2, 1]} />}>
        <Buildling />
        <Crane />
        <Avatar />
      </Suspense>
      
    </>
  )

}

export default Enviro