import React, { useEffect, useState } from 'react'
import Style from './QiddyaFacadeCarousel.module.css'




import FSS from '../../assets/images/Qiddya/FacadeStructuralSystem.png'
import FAS from '../../assets/images/Qiddya/FacadeArchitecturalSystem.png'

import { Carousel } from '@material-tailwind/react'
import { ThreeDEngineeringElement } from '../ThreeDEngineeringElement/ThreeDEngineeringElement'
import Model3D from '../Model3D/Model3D'



export function QiddyaFacadeCarousel() {

    const [is3DShowed, setIs3DShowed] = useState(false)
    const [modelPath, setModelPath] = useState('')




    const threeDElements = [
        { image: FSS, title: "Facade's Stuctural System", Has3D: true, modelPath: "/KhaledSaiedPortfolio/frag/Projects/Qiddya/Qiddya.frag" },
        { image: FAS, title: "Facade's Architectural System", Has3D: false },
     

    ]



    return (

        <div>

            <Carousel

                className="rounded-xl max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto"

                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >






                {threeDElements.map((e, index) => <ThreeDEngineeringElement key={index} image={e.image} title={e.title} Has3D={e.Has3D} modelPath={e.modelPath} setIs3DShowed={setIs3DShowed} setModelPath={setModelPath} />)}










            </Carousel>


            {is3DShowed ? <Model3D model={modelPath} setModelPath={setModelPath} setIsShowed={setIs3DShowed} /> : null}
        </div>

    );
}