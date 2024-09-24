import React, { useEffect, useState } from 'react'
import Style from './Exit10SheetItem.module.css'



export function Exit10SheetItem({ image, title }) {






    return (
        <>


            <div className="flex flex-col items-center justify-center gap-3 pb-10">

                <div className="h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden relative">



                    <img
                        src={image}
                        alt={title}
       
                        className='w-full h-full object-contain'
                        
                    />



                </div>


                <h2 className="text-white text-lg sm:text-2xl font-semibold">{title}</h2>



            </div>

           
        </>
    )
}
