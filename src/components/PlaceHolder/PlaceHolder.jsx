import React, { useEffect, useRef, useState } from 'react'
import Style from './PlaceHolder.module.css'
import { useFrame } from '@react-three/fiber'


function PlaceHolder(props) {
    
    const box = useRef()

    useFrame((state, delta) => {

        box.current.rotation.y += delta

    })

    return (
        <>
            <mesh ref={box} {...props}>
                <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
                <meshBasicMaterial wireframe color="red" />
            </mesh>
        </>
    )
}

export default PlaceHolder
