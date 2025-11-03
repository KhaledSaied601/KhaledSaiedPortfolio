import React, { useEffect, useState } from 'react'
import Style from './QiddyaFacadeCarousel.module.css'




import RVTAS from '../../assets/images/Qiddya/FacadeArchitecturalSystem.webp'
import RHINOAS from '../../assets/images/Qiddya/RhinoFacadeGeo.webp'
import RHINOCSS from '../../assets/images/Qiddya/RhinoCurvesToBeBeams.webp'
import TSS from '../../assets/images/Qiddya/FacadeStructuralSystem.webp'

import { Carousel } from '@material-tailwind/react'

import { ImageModelItem } from '../ImageModelItem/ImageModelItem'



export function QiddyaFacadeCarousel() {

    const [is3DShowed, setIs3DShowed] = useState(false)
    const [modelPath, setModelPath] = useState('')




    const threeDElements = [
        { image: RVTAS, title: "Facade Architectural System on Revit" },
        { image: RHINOAS, title: "I extracted Facade Geometry from Revit by Grasshopper using RhinoInside"},
        { image: RHINOCSS, title: "Then i obtained Structural System Curves from the Facade Geometry according to the design" },
        { image: TSS, title: "This allowed me to model those curves on Tekla Structures by Grasshopper using Tekla Live Link"},
     

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






                {threeDElements.map((e, index) => <ImageModelItem key={index} image={e.image} title={e.title}  />)}










            </Carousel>


        </div>

    );
}