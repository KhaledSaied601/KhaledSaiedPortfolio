import React, { useEffect, useRef, useState } from 'react'
import Style from './GrasshopperScripts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation, useInView } from "framer-motion"





function GrasshopperScripts() {


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
                    <div className='project-head flex justify-between items-center mt-28  mb-24 '>



                        <div className='inner flex flex-col  justify-start items-center sm:px-4   gap-12 ' >

                            <h1 className='text-xl text-white sm:text-3xl font-bold mr-auto'>Grasshopper</h1>

                            <div className='mb-10'>

                                <div className='description flex flex-col items-start text-white w-full'>
                                    <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>Interoperability <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                    <p className='text-sm sm:text-lg font-light'>Interoperability refers to the ability to manipulate and exchange geometry between different software applications seamlessly. So i made a Grasshopper script that creates a simple parametric model. This model can then be transferred to Tekla Structure Software and subsequently imported into Revit Software. As a result, I have native elements within both Tekla and Revit, showcasing the smooth interoperability between these platforms. </p>

                                </div>

                                <div className=" aspect-video mt-5  mx-auto  w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">

                                    <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/0WQ4qjjhms4?si=tLXSNhebkQSsijbi"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>


                            <div className='mb-10' >

                                <div className='description flex flex-col items-start text-white w-full'>
                                    <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>Structural analysis and optimization <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                    <p className='text-sm sm:text-lg font-light'>Using Karamba3D, I perform structural analysis and optimization for various structural elements. This is one of my scripts created to analyze and optimize specific parameters using Galapagos for enhanced efficiency and performance. </p>

                                </div>

                                <div className=" aspect-video mt-5  mx-auto  w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">

                                    <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/J-SsrOFff_c?si=M7_HpTtAmrWCFzwN"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>


                            <div className='mb-10' >

                                <div className='description flex flex-col items-start text-white w-full'>
                                    <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>Form Finiding <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                    <p className='text-sm sm:text-lg font-light'>Using Kangaroo within a physics environment, This scripts for form finding. By applying specific constraints and goals, I achieve the desired shapes with precision. </p>

                                </div>

                                <div className=" aspect-video mt-5  mx-auto  w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">

                                    <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/ax--K2Hi8xY?si=It7RmwpqCdyh04TC"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>

                                <div className=" aspect-video mt-5  mx-auto  w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">

                                    <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/BVEnsfOdCTQ?si=BQW-BUHdgaQnlVMa"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className='mb-10 w-full' >

                                <div className='description flex flex-col items-start text-white w-full'>
                                    <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>Other logics <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                                    <p className='text-sm sm:text-lg font-light'>Facade case study using attractor logic. </p>

                                </div>

                                <div className=" aspect-video mt-5  mx-auto  w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">

                                    <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/joXngjbt_ro?si=QHUIRmT7ztg9VnSY"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>


                        </div>

                    </div>

                </motion.div>


            </div>
        </>
    )
}

export default GrasshopperScripts
