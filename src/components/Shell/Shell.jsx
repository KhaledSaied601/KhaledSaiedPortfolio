    import React, { useEffect, useRef, useState } from 'react'

    import { Html, useAnimations, useGLTF } from '@react-three/drei';
    import { useFrame, useThree } from '@react-three/fiber';
    import gsap from 'gsap';
    import * as THREE from 'three'


    function Shell() {



    
        const shell = useGLTF("/KhaledSaiedPortfolio/models/Shell/Pavilion.gltf")



        const primitive = useRef()
    





        return (

            <>

            

                <primitive   ref={primitive} object={shell.scene} >
                    

                </primitive>



            </>


        )
    }

    useGLTF.preload("/KhaledSaiedPortfolio/models/Shell/Pavilion.gltf")

    export default Shell
