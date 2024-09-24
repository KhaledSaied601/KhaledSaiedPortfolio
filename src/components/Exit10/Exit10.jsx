import React, { useEffect, useState } from 'react'
import Style from './Exit10.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import exit10Image from '../../assets/images/Exit10/Exit10Mall.webp'
import { Exit10Carousel } from '../Exit10Carousel/Exit10Carousel'

function Exit10() {


    useEffect(() => {


        window.scrollTo(0, 0)



    }, [])

    return (
        <>

            <div className='max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto '>






                <div className='project-head flex items-center mb-24  h-screen'>

                    <div className='inner flex lg:flex-row  justify-between items-center sm:px-4 flex-col  gap-14  ' >



                        <div className='description flex flex-col items-start text-white lg:w-1/2 w-full'>
                            <h1 className='text-xl sm:text-3xl font-bold mb-5'>SAUDI ENTERTAINMENT VENTURES EXIT 10</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>My role <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                            <p className='text-sm sm:text-lg font-light'>My role involves creating LOD500 sheets in Revit based on CAD as-built drawings, as per the client’s requirements for LOD500 models and sheets. Our team converts the model from Tekla to Revit, ensuring all parameters are included. From this detailed model, we generate sheets and details to meet the highest level of development standards.</p>
                        </div>


                        <div className='image lg:w-1/2 lg:h-[600px] h-80 w-full  rounded-xl overflow-hidden relative 
                     bg-clip-padding   border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 group'>
                            <div className='h-full w-full absolute bg-black bg-opacity-40 group-hover:bg-gray-600-500  group-hover:bg-opacity-10 duration-200 z-20'></div>

                            <img className='w-full h-full object-cover' src={exit10Image} alt="Exit10 Mall Image" />
                        </div>



                    </div>

                </div>


                <div className='models flex items-center my-5  h-screen'>

                    <div className='inner flex flex-col justify-center  items-start gap-7  ' >



                        <div className='description flex flex-col items-start text-white '>
                            <h1 className='text-xl sm:text-3xl font-bold mb-5'>Sheets created for LOD500</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>What i'm did in the project <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                            <p className='text-sm sm:text-lg font-light'>I successfully created over 30 sheets for various buildings, including cinema, bridges, skylight, and more. These sheets encompassed plans, sections, and connection detailing, all meticulously crafted to meet the specified requirements. Below are examples of these sheets.</p>
                        </div>




                        <Exit10Carousel />



                    </div>

                </div>







            </div>


        </>
    )
}

export default Exit10
