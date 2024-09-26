import React, { useEffect, useState } from 'react'
import Style from './AirportFamilyItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnity } from '@fortawesome/free-brands-svg-icons';



export function AirportFamilyItem({ image, title, Has3D, modelPath, setModelPath, setIs3DShowed }) {






    return (
        <>



            <div className="relative flex flex-col  items-center justify-center gap-3 pb-10">

                {Has3D ? <button
                    onClick={() => {
                        setIs3DShowed(true);
                        setModelPath(modelPath)
                    }}

                    className="absolute z-10 top-0 right-0 translate-y-[25%] -translate-x-[50%]  rounded-xl px-5 py-3  bg-white
bg-opacity-35 text-white hover:outline hover:outline-1  hover:bg-opacity-0 transition-all duration-200 flex flex-row items-center 
justify-center gap-2 text-[10px] sm:text-lg"><span className='font-semibold'>View in 3D</span> <FontAwesomeIcon  color="white" size="2xl" icon={faUnity} spin /> </button> : null}





                <div className="h-[300px] md:h-[500px] w-full relative rounded-xl">

                    <img
                        src={image}
                        alt={title}
                       className='w-full h-full object-cover'

                    />
                </div>



                <h2 className="text-white text-2xl font-semibold">{title}</h2>



            </div>

        </>
    )
}

