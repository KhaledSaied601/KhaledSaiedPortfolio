import React, { useEffect, useRef, useState } from 'react'
import Style from './Avatar.module.css'
import { Html, useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three'


function Avatar() {



    const [material, setMaterial] = useState()
    const avatar = useGLTF("/KhaledSaiedPortfolio/models/KhaledAvatar/KhaledAvatar.gltf")



    const primitive = useRef()
    const animations = useAnimations(avatar.animations, avatar.scene)
    const { camera } = useThree()


    const transformations = gsap.timeline({ defaults: { delay: 6, duration: 3, ease: 'power2.in' } })


    useEffect(() => {


        // avatar.scene.children[0].children.forEach((o) => {
        //     console.log(o.material);
        //     o.material?.color.set(new THREE.Color('red')) 
        // })



        const actions = animations.actions
        actions.Waving.play();

        window.setTimeout(() => {

            actions.NeutralIdle.play();
            actions.NeutralIdle.crossFadeFrom(actions.Waving, 1)

        }, 3000)



        gsap.to(camera.position, { z: 1.8, duration: 3, ease: 'power2.inOut' })

        //Animate Hide of Label1
        gsap.to('.label1', { opacity: 0, delay: 3, duration: 3 })

        //Hide Label2 then show it 
        gsap.to('.label2', { opacity: 0 })
        transformations.fromTo('.label2', { opacity: 0 }, { opacity: 100 })



    }, [])

    useEffect(() => {

        if (window.innerWidth < 750) {


            gsap.to(camera.position, { z: 2.5, duration: 3, ease: 'power2.inOut' })
            gsap.to('.label2', { fontSize: '12px' })

        }

    }, [window.innerWidth])






    return (

        <>

            <meshNormalMaterial color="blue" ref={setMaterial} opacity={0.5} transparent={true} />

            <primitive ref={primitive} object={avatar.scene} >
                <Html
                    style={{

                        fontFamily: 'Helvetica, Arial',
                        position: 'absolute',
                        backgroundColor: ' #ffffff89',
                        color: 'purple',
                        padding: '15px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        borderRadius: '30px',
                        userSelect: 'none',


                    }}
                    position={[0.1, 1.8, 0]}
                    wrapperClass="label1"
                >Hello 👋</Html>
                <Html
                    style={{

                        fontFamily: 'Helvetica, Arial',
                        position: 'absolute',
                        backgroundColor: ' #ffffff89',
                        color: 'purple',
                        padding: '15px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        borderRadius: '30px',
                        userSelect: 'none',




                    }}
                    position={[0.1, 1.8, 0]}
                    wrapperClass="label2"
                >That's my portfolio 👇
                    <br />
                    i hope you enjoy 👍
                </Html>

            </primitive>



        </>


    )
}

useGLTF.preload("/KhaledSaiedPortfolio/models/KhaledAvatar/KhaledAvatar.gltf")

export default Avatar
