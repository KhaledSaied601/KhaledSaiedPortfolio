import React, { useEffect, useState } from 'react'
import Style from './RedSeaAirport.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import RSI from '../../assets/images/airport/airportHead.webp'

import CT from '../../assets/images/airport/Clash/Test.webp'
import CR from '../../assets/images/airport/Clash/Report.webp'
import {AirportFamiliesCarousel} from '../AirportFamiliesCarousel/AirportFamiliesCarousel'
import { AirportModelsCarousel } from '../AirportModelsCarousel/AirportModelsCarousel'




function RedSeaAirport() {

    return (
        <>

            <div className='max-w-screen-md lg:max-w-screen-xl mx-auto '>






                <div className='project-head flex items-center mb-24  h-screen'>

                    <div className='inner flex lg:flex-row  justify-between items-center sm:px-4 flex-col  gap-14 ' >



                        <div className='description flex flex-col items-start text-white lg:w-1/2 w-full'>
                            <h1 className='text-xl sm:text-3xl font-bold mb-5'>Red Sea Airport</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>My role <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                            <p className='text-sm sm:text-lg font-light'>In my role as the BIM Coordinator, I was responsible for creating my first Master Information Delivery Plan (MIDP). I actively participated in BIM meetings with various experts in the field, ensuring effective coordination and collaboration among all technical disciplines to achieve our project goals. One of the most exciting aspects of my role was developing all families to Level of Development (LOD) 500. Our scope included advancing the BIM model from LOD 300 to LOD 500, passing through the LOD 400 Fabrication Stage.</p>
                        </div>


                        <div className='image lg:w-1/2 lg:h-[600px] h-80 w-full  rounded-xl overflow-hidden relative 
                     bg-clip-padding   border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 group'>
                            <div className='h-full w-full absolute bg-black bg-opacity-40 group-hover:bg-gray-600-500  group-hover:bg-opacity-10 duration-200 z-20'></div>

                            <img className='w-full h-full object-cover' src={RSI} alt="Airport Image" />

                        </div>



                    </div>

                </div>


                <div className='models flex items-center my-5  h-screen'>

                    <div className='inner flex flex-col justify-center  items-start gap-7  ' >



                        <div className='description flex flex-col items-start text-white '>
                            <h1 className='text-xl sm:text-3xl font-bold mb-5'>Models</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>What i'm did in modeling <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                            <p className='text-sm sm:text-lg font-light'>I developed central models for all disciplines to collaborate effectively using work sharing. I utilized C# code to rename all families according to our project scope and ensured that all shared parameters were accurately filled. Additionally, I created structural openings in the structural models for MEP systems and wrote a C# code to automate the creation of openings in the architectural models for MEP. Furthermore, I developed all architectural families to Level of Development (LOD) 500, as detailed below.</p>
                        </div>




                        <AirportModelsCarousel />












                    </div>

                </div>



                <div className='families  flex items-center justify-between my-5  h-screen '>

                    <div className='inner flex flex-col justify-center  items-start gap-7 ' >



                        <div className='description flex flex-col items-start text-white '>
                            <h1 className='text-xl sm:text-3xl font-bold mb-5'>Families</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>To LOD 500<FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                            <p className='text-sm sm:text-lg font-light'>One of the most interesting aspects of my role was upgrading and creating families to Level of Development (LOD) 500 according to vendor designs. You can now explore these detailed models in 3D and enjoy them in this portfolio.</p>
                        </div>

                        <AirportFamiliesCarousel />






                    </div>

                </div>









                <div className='clash-detaction flex items-center mb-24  h-screen'>

                    <div className='inner flex lg:flex-row  justify-between items-center sm:px-4 flex-col  gap-14 ' >


                        <div className='description flex flex-col items-start text-white lg:w-1/2 w-full'>
                            <h1 className='text-xl sm:text-3xl font-bold mb-5'>Clash Detaction</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>Weekly updating Clash Tests <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                            <p className='text-sm sm:text-lg font-light'>Every week, I updated the clash tests for all disciplines and generated detailed clash reports. I then uploaded the RVT, NWC, and NWD files, along with the clash reports, to BIM 360 for team access and review.</p>
                        </div>



                        <div className='flex flex-col gap-3 lg:w-1/2 w-full '>

                            <div className='h-60 lg:h-72  relative'>

                                <img className='rounded-xl w-full h-full object-cover' src={CT} alt="" />
                            </div>

                            <div className='h-60 lg:h-72  relative'>

                                <img className='rounded-xl w-full h-full object-cover' src={CR} alt="" />
                            </div>



                        </div>




                    </div>

                </div>



            </div>
        </>
    )

}

export default RedSeaAirport
