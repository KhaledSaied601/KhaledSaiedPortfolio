import React, { useEffect, useRef, useState } from 'react'
import Style from './RedSeaAmaalaMarina.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import RSM from '../../assets/images/Marina/Marina.webp'
import { MarinaCoordinationCarousel } from '../MarinaCoordinationCarousel/MarinaCoordinationCarousel'
import { motion, useAnimation, useInView } from "framer-motion"



function RedSeaAmaalaMarina() {


    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()



    useEffect(() => {


        if (isInView) {

            mainControls.start("visible")
        }


    }, [isInView])


    useEffect(() => {


        window.scrollTo(0, 0)



    }, [])






    return (
        <>


            <div ref={ref} className='max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto '>


                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.5 }}

                >


                    <div className='project-head flex items-center mb-24  h-screen'>

                        <div className='inner flex lg:flex-row  justify-between items-center sm:px-4 flex-col  gap-14 ' >



                            <div className='description flex flex-col items-start text-white lg:w-1/2 w-full'>
                                <h1 className='text-xl sm:text-3xl font-bold mb-5'>Amaala Marina</h1>
                                <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>My role <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                <p className='text-sm sm:text-lg font-light'>As a BIM Coordinator, my role involves receiving detailed models from the detailing team, exporting these models from Tekla to Revit in IFC format, and then further exporting them to NWC format. I coordinate these models with other disciplines to ensure consistency and accuracy, upload the coordinated models as NWF files, generate clash reports, and create issues for resolution by the respective disciplines.</p>
                            </div>


                            <div className='image lg:w-1/2 lg:h-[600px] h-80 w-full  rounded-xl overflow-hidden relative 
 bg-clip-padding   border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 group'>
                                <div className='h-full w-full absolute bg-black bg-opacity-40 group-hover:bg-gray-600-500  group-hover:bg-opacity-10 duration-200 z-20'></div>

                                <img className='w-full h-full object-cover' src={RSM} alt="Exit10 Mall Image" />
                            </div>



                        </div>

                    </div>




                    <div className='navisworks-section flex items-center my-5  h-screen'>

                        <div className='inner flex flex-col justify-center  items-start gap-7  ' >



                            <div className='description flex flex-col items-start text-white '>
                                <h1 className='text-xl sm:text-3xl font-bold mb-5'>Coordination</h1>
                                <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>What i'm did in project <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                <p className='text-sm sm:text-lg font-light'>I developed a Navisworks Add-in using C# to efficiently group clashes based on any specified conditions for elements. This innovation was driven by the challenge of managing a vast number of clash results and their analysis. The Add-in significantly streamlines the process, allowing for the grouping of any clash test according to desired element properties in just a few moments.</p>
                            </div>




                            <MarinaCoordinationCarousel />



                        </div>

                    </div>
                </motion.div>


            </div>

        </>
    )

}

export default RedSeaAmaalaMarina
