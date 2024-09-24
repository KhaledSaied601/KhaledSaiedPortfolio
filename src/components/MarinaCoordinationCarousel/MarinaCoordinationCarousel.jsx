import React, { useEffect, useState } from 'react'
import Style from './MarinaCoordinationCarousel.module.css'


import FBX from '../../assets/Marina/FBX.webp'
import STR from '../../assets/Marina/STR.webp'
import FBXCT from '../../assets/Marina/FBXClashTests.webp'
import FBXGCWT from '../../assets/Marina/FBXGroupingClashsUsingTooliCreated.webp'
import GBXCTG from '../../assets/Marina/FBXClashTestGroups.webp'
import CI from '../../assets/Marina/CreatingIssuesBIM360.webp'
import CII from '../../assets/Marina/CreatingIssuesBIM360_2.webp'
import FBXCR from '../../assets/Marina/FBXClashReports.webp'
import { Carousel } from '@material-tailwind/react'
import { MarinaCoordinationItem } from '../MarinaCoordinationItem/MarinaCoordinationItem'




const coordinationElements = [

    { image: FBX, title: "Coordination of Steel elements with Architecture elements" },
    { image: STR, title: "Coordination of Steel elements with Structure elements" },
    { image: FBXCT, title: "Create Clash Tests" },
    { image: FBXGCWT, title: "Grouping Clash Tests using add-in i created" },
    { image: GBXCTG, title: "Clash Test Groups" },
    { image: CI, title: "Creating Issues" },
    { image: CII, title: "Creating Issues" },
    { image: FBXCR, title: "Creating Reports" },



]


export function MarinaCoordinationCarousel() {






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







                {coordinationElements.map((e, index) => <MarinaCoordinationItem key={index} image={e.image} title={e.title} />)}




            </Carousel>



        </>


    );
}