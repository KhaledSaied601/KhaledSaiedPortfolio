import React, { useEffect, useState } from 'react'
import Style from './ZoodCarousel.module.css'

import OA from '../../assets/images/Zood/TowersView.webp'
import TO from '../../assets/images/Zood/Plan1.webp'
import TT from '../../assets/images/Zood/Plan2.webp'
import TTH from '../../assets/images/Zood/Plan3.webp'
import TF from '../../assets/images/Zood/Plan4.webp'


import { Carousel } from '@material-tailwind/react'

import { ImageModelItem } from '../ImageModelItem/ImageModelItem'



export function ZoodCarousel() {






    const ZoodImages = [
        { image: OA, title: "Towers 3D View"},
        { image: TO, title: "First Tower"},
        { image: TT, title: "Second Tower" },
        { image: TTH, title: "Third Tower"},
        { image: TF, title: "Fourth Tower"},
     

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






                {ZoodImages.map((e, index) => <ImageModelItem key={index} image={e.image} title={e.title}  />)}










            </Carousel>


        </div>

    );
}