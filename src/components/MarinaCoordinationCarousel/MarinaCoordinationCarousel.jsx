import React, { useEffect, useState } from 'react'
import Style from './MarinaCoordinationCarousel.module.css'


import FBX from '../../assets/images/Marina/FBX.webp'
import STR from '../../assets/images/Marina/STR.webp'
import FBXCT from '../../assets/images/Marina/FBXClashTests.webp'
import FBXGCWT from '../../assets/images/Marina/FBXGroupingClashsUsingTooliCreated.webp'
import GBXCTG from '../../assets/images/Marina/FBXClashTestGroups.webp'
import CI from '../../assets/images/Marina/CreatingIssuesBIM360.webp'
import CII from '../../assets/images/Marina/CreatingIssuesBIM360_2.webp'
import FBXCR from '../../assets/images/Marina/FBXClashReports.webp'
import { Carousel } from '@material-tailwind/react'
import { ImageModelItem } from '../ImageModelItem/ImageModelItem'




const coordinationElements = [

    { image: FBX, title: "Coordinate Steel elements with Architectural elements" },
    { image: STR, title: "Coordinate Steel elements with Structural elements" },
    { image: FBXCT, title: "Create Clash Tests" },
    { image: FBXGCWT, title: "Grouping Clash Results using add-in that i've created" },
    { image: GBXCTG, title: "Clash Result Groups" },
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







                {coordinationElements.map((e, index) => <ImageModelItem key={index} image={e.image} title={e.title} />)}




            </Carousel>



        </>


    );
}