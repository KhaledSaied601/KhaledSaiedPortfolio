import React, { useEffect, useState } from 'react'
import Style from './ImageModelItem.module.css'



export function ImageModelItem({ image, title }) {






    return (
        <>


            <div className="flex w-full flex-col items-center justify-center gap-3 pb-10  ">

                <div className="h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden relative">



                    <img
                        src={image}
                        alt={title}
       
                        className='w-full h-full object-contain  overflow-hidden shadow-lg hover:scale-110 hover:shadow-white duration-500'
                        
                    />



                </div>


                <h2 className="text-white text-lg sm:text-2xl font-semibold">{title}</h2>



            </div>

           
        </>
    )
}
