import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import QI from '../../assets/images/Qiddya/QiddyaFacade.jpg'

import { motion, useAnimation, useInView } from "framer-motion"
import { QiddyaFacadeCarousel } from '../QiddyaFacadeThreeDModelItem/QiddyaFacadeCarousel'




function QiddyaEntertainmentFacadeProject() {





    const [is3DShowed, setIs3DShowed] = useState(false)

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
                                <h1 className='text-xl sm:text-3xl font-bold mb-5'>SOLID WASTE TRANSFER HUB</h1>
                                <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>My role <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                <p className='text-sm sm:text-lg font-light'>In this project, the client requested modeling over 15,000 structural beams forming the structural system for the façade within less than a week. To meet this challenging deadline efficiently, I decided to automate the process using Grasshopper. This approach proved to be the most accurate and time efficient solution, allowing me to complete the entire model in just two days according to the design requirements and the results performed perfectly.</p>
                            </div>


                     <div className='image lg:w-1/2 lg:h-fit h-80 w-full  rounded-xl overflow-hidden relative 
                     bg-clip-padding   border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 group'>
                        {/* Overlay */}
                                    <div className='h-full w-full absolute bg-black bg-opacity-40 group-hover:bg-gray-600 group-hover:bg-opacity-10 duration-200 z-20 rounded-2xl'></div>

                      {/* Image */}
                       <img className='w-full h-full object-cover rounded-2xl' src={QI} alt="Qiddya Image" />
                      </div>



                        </div>

                    </div>


                    <div className='models flex items-center my-5  h-screen'>

                        <div className='inner flex flex-col justify-center  items-start gap-7  ' >



                             <div className='mb-10'>
                          
                                <div className='description flex flex-col items-start text-white w-full'>
                                     <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>Workflow <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                         <p className='text-sm sm:text-lg font-light'>Grasshopper is well known for its powerful integration with Revit and Tekla Structures. In this project, I utilized it to extract the façade geometry from Revit and further manipulate it within Grasshopper and Rhino in accordance with the design specifications. This workflow allowed me to finalize the model in Tekla Structures with high precision and exceptional time efficiency, enabling the detailing team to proceed with fabrication and connection modeling, as demonstrated in the video below. </p>
                          
                                </div>
                          
                                <div className=" aspect-video mt-5  mx-auto  w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">
                          
                                   <iframe width="100%" height="100%"
                                     src="https://www.youtube.com/embed/YC1UOoJjocs?si=w3cF3eftPgbw8g8u"
                                     title="YouTube video player" frameBorder="0"
                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                                     </iframe>


                               </div>
                           </div>











                        </div>

                    </div>

                </motion.div>


                <div className='families  flex items-center justify-between my-5  h-screen '>

                    <div className='inner flex flex-col justify-center  items-start gap-7 ' >



                        <div className='description flex flex-col items-start text-white '>
                            <h1 className='text-xl sm:text-3xl font-bold mb-5'>Discover</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>To LOD 300 <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                <p className='text-sm sm:text-lg font-light'>Discover an in-depth overview of the workflow behind this project.</p>

                        </div>

                        <QiddyaFacadeCarousel />

                    </div>

                </div>



            </div>
        </>
    )

}

export default QiddyaEntertainmentFacadeProject
