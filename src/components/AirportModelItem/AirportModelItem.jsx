import React, { useEffect, useState } from 'react'
import Style from './AirportModelItem.module.css'


export function AirportModelItem({ image, title }) {






    return (
        <>


            <div className=" flex flex-col items-center justify-center gap-3 pb-10">





                <div className="h-[200px] md:h-[500px] w-full relative rounded-xl">

                    <img
                        src={image}
                        alt={title}
                       className='w-full h-full object-cover'

                    />
                </div>


                <h2 className="text-white text-lg sm:text-2xl font-semibold">{title}</h2>



            </div>
        </>
    )
}

