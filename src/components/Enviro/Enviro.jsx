import React, { Suspense, useEffect, useState } from 'react'
import Style from './Enviro.module.css'
import { Environment, Float, Lightformer, OrbitControls, Sparkles, Stars, Text } from '@react-three/drei';
import Avatar from '../Avatar/Avatar';
import gsap from 'gsap';
import { useRef } from 'react';

function Enviro() {

    const directionalLight = useRef()
    const ambientLight = useRef()

    useEffect(() => {

        // console.log(directional.current);

        gsap.to(directionalLight.current, { intensity: 5, duration: 5, ease: 'power2.inOut' })
        gsap.to(ambientLight.current, { intensity: 1.5, duration: 5, ease: 'power2.inOut' })


    }, [])


    return (
        <>


            {/* <OrbitControls /> */}


            <directionalLight castShadow

                color="blue"
                ref={directionalLight}
                intensity={1}
                position={[0, 6, 6]} />



            <ambientLight ref={ambientLight} intensity={0} />



            <Float speed={1}
                floatIntensity={0.1}>

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
                    color="white"
                    position={[-0.3, 1.45, 1]}
                    maxWidth={6}
                    textAlign="center"
                >
                    BIM Coordinator


                </Text>

            </Float>

            <Environment

            >
                {/* <color args={['#4A47A4']} attach="background" /> */}
                <Lightformer color="red" intensity={0.5} position={[-1, 0, 0]} rotation-y={Math.PI * 0.5} scale={20} />
            </Environment>


            <Sparkles size={0.5} speed={0.1} color="lightblue" position-y={1.4} position-z={0} ></Sparkles>



            <mesh receiveShadow rotation-x={-Math.PI * 0.5} scale={10}  >

                <planeGeometry />
                <meshBasicMaterial color="#9D5F01" />
            </mesh>

            <Suspense >

                <Avatar />

            </Suspense>

        </>
    )
}

export default Enviro
