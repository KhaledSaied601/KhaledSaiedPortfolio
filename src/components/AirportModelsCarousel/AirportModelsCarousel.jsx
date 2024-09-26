import React, { useEffect, useState } from 'react'
import Style from './AirportModelsCarousel.module.css'



import ARP2 from '../../assets/images/airport/P2.webp'
import STP2 from '../../assets/images/airport/P2STR.webp'
import AS from '../../assets/images/airport/AS.webp'
import STSE from '../../assets/images/airport/SESTR.webp'
import ARSE from '../../assets/images/airport/SE.webp'
import ARIS from '../../assets/images/airport/IS.webp'
import STIS from '../../assets/images/airport/ISSTR.webp'
import ARFS from '../../assets/images/airport/FG.webp'
import { Carousel } from '@material-tailwind/react'
import { AirportModelItem } from '../AirportModelItem/AirportModelItem'







export function AirportModelsCarousel() {


    const modelElements = [
        { image: ARP2, title: "Architectural South Car Parking" },
        { image: STP2, title: "Structural South Car Parking" },
        { image: AS, title: "Architectural Ancillary South" },
        { image: ARSE, title: "Architectural Security Check" },
        { image: STSE, title: "Structural Security Check" },
        { image: ARIS, title: "Architectural Irrigation Pump Station" },
        { image: STIS, title: "Structural Irrigation Pump Station" },
        { image: ARFS, title: "Architectural Fuel Storage" },

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






                {modelElements.map((e, index) => <AirportModelItem key={index} image={e.image} title={e.title} />)}




            </Carousel>













        </>


    );
}