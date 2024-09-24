import React, { useEffect, useState } from 'react'
import Style from './AirportFamiliesCarousel.module.css'




import MN from '../../assets/images/airport/Fam/MetalNail.webp'
import RH from '../../assets/images/airport/Fam/roofHatch.webp'
import CF from '../../assets/images/airport/Fam/CurtainFixation.webp'
import DI from '../../assets/images/airport/Fam/Door.webp'
import DHA from '../../assets/images/airport/Fam/DoorHardware.webp'
import DHI from '../../assets/images/airport/Fam/DoorHinge.webp'
import LA from '../../assets/images/airport/Fam/Ladder.webp'
import RS from '../../assets/images/airport/Fam/RollerShutter.webp'
import RP from '../../assets/images/airport/Fam/RoofParapet.webp'
import SW from '../../assets/images/airport/Fam/SuspensionWire.webp'
import TL from '../../assets/images/airport/Fam/TieLadder.webp'
import WI from '../../assets/images/airport/Fam/Window.webp'
import CC from '../../assets/images/airport/Fam/CeilingConstruction.webp'
import { Carousel } from '@material-tailwind/react'
import { AirportFamilyItem } from '../AirportFamilyItem/AirportFamilyItem'
import Model3D from '../Model3D/Model3D'



export function AirportFamiliesCarousel() {

    const [is3DShowed, setIs3DShowed] = useState(false)
    const [modelPath, setModelPath] = useState('')




    const familiesElement = [
        { image: RH, title: "Roof Hatch with Fixation", Has3D: true, modelPath: "../../../frag/Fam/roofHatch.frag" },
        { image: CF, title: "Curtain Wall Fixation", Has3D: true, modelPath: "../../../frag/Fam/CurtainFixation.frag" },
        { image: CC, title: "Ceiling Construction", Has3D: true, modelPath: "../../../frag/Fam/CeilingConstruction.frag" },
        { image: SW, title: "Suspension Wire", Has3D: true, modelPath: "../../../frag/Fam/SuspensionWire.frag" },
        { image: TL, title: "Tie Ladder with Fixation", Has3D: true, modelPath: "../../../frag/Fam/TieLadder.frag" },
        { image: RS, title: "Roller Shutter", Has3D: true, modelPath: "../../../frag/Fam/RollerShutter.frag" },
        { image: RP, title: "Roof Parapet", Has3D: true, modelPath: "../../../frag/Fam/RoofParapet.frag" },
        { image: WI, title: "Window Fixation", Has3D: true, modelPath: "../../../frag/Fam/Window.frag" },
        { image: DI, title: "Door with Fixation and Accessories", Has3D: true, modelPath: "../../../frag/Fam/Door.frag" },
        { image: DHA, title: "Door Hardware", Has3D: false, modelPath: null },
        { image: DHI, title: "Door Hinge", Has3D: false, modelPath: null },
        { image: MN, title: "Metal Nail", Has3D: false, modelPath: null },

    ]



    return (
        <>


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






                {familiesElement.map((e, index) => <AirportFamilyItem key={index} image={e.image} title={e.title} Has3D={e.Has3D} modelPath={e.modelPath} setIs3DShowed={setIs3DShowed} setModelPath={setModelPath} />)}










            </Carousel>



            {is3DShowed ? <Model3D model={modelPath} setModelPath={setModelPath} setIsShowed={setIs3DShowed} /> : null}
        </>

    );
}