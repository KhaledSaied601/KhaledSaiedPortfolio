import React, { useEffect, useState } from 'react'
import Style from './QiddyaFacadeCarousel.module.css'




import RVTAS from '../../assets/images/Qiddya/FacadeArchitecturalSystem.png'
import RHINOAS from '../../assets/images/Qiddya/RhinoFacadeGeo.png'
import RHINOCSS from '../../assets/images/Qiddya/RhinoCurvesToBeBeams.png'
import TSS from '../../assets/images/Qiddya/FacadeStructuralSystem.png'

import { Carousel } from '@material-tailwind/react'
import { ThreeDEngineeringElement } from '../ThreeDEngineeringElement/ThreeDEngineeringElement'
import Model3D from '../Model3D/Model3D'



export function QiddyaFacadeCarousel() {

    const [is3DShowed, setIs3DShowed] = useState(false)
    const [modelPath, setModelPath] = useState('')




    const threeDElements = [
        { image: RVTAS, title: "Facade Architectural System on Revit", Has3D: false },
        { image: RHINOAS, title: "I extracted Facade Geometry from Revit by Grasshopper using RhinoInside", Has3D: false },
        { image: RHINOCSS, title: "Then i obtained Structural System Curves from the Facade Geometry according to the design", Has3D: false },
        { image: TSS, title: "This allowed me to model those curves on Tekla Structures by Grasshopper using Tekla Live Link", Has3D: false },
     

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