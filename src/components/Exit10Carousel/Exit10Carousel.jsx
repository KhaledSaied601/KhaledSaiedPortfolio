import React, { useEffect, useState } from 'react'
import Style from './Exit10Carousel.module.css'


import { Carousel } from "@material-tailwind/react";



import FP from "../../assets/images/Exit10/EkartFP.webp"
import CD from "../../assets/images/Exit10/EkartCD.webp"
import ABD from "../../assets/images/Exit10/EkartABDetails.webp"
import ABP from "../../assets/images/Exit10/EkartABPlans.webp"
import EPD from "../../assets/images/Exit10/EkartEPDetails.webp"
import EPP from "../../assets/images/Exit10/EkartEPPlans.webp"
import { Exit10SheetItem } from '../Exit10SheetItem/Exit10SheetItem';




export function Exit10Carousel() {


    const sheetElements = [

        { image: FP, title: "Framing Plan Sheet" },
        { image: CD, title: "Connection Details Sheet" },
        { image: ABD, title: "Anchor Bolts Details Sheet" },
        { image: ABP, title: "Anchor Bolts Plan Sheet" },
        { image: EPD, title: "Embeded Plates Details Sheet" },
        { image: EPP, title: "Embeded Plates Plan Sheet" },


    ]



    return (
        <>

       
            <Carousel
                className="rounded-xl max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto "
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



    


            {sheetElements.map((e, index) => <Exit10SheetItem key={index} image={e.image} title={e.title} />)}
























            </Carousel>
        </>

    );
}