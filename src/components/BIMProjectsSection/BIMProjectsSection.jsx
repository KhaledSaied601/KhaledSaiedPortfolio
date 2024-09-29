import React, { useEffect, useRef, useState } from 'react'
import Style from './BimProjectsSection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from "framer-motion"



function BimProjectsSection() {


    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()



    useEffect(() => {

        if (isInView) {

            mainControls.start("visible")
        }


    }, [isInView])

    return (
        <>
            <div ref={ref} className='text-white max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto mt-28 relative z-10' id='projects'>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }

                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.25 }}
                >

                    <div className='BIM-Head flex gap-2 mb-1 items-center'>

                        <h3 className='text-purple-500 text-sm sm:text-lg'>BIM Projects  </h3>
                        <FontAwesomeIcon className='text-purple-500  w-3' icon={faArrowRight} />
                    </div>

                    <div className="BIM-projects-worked-on">

                        <h3 className='text-sm sm:text-lg text-white font-semibold mb-4'>Projects I've Worked On</h3>

                        <div className=" grid text-center  lg:grid-cols-3 lg:text-left text-black  gap-4">

                            <Link
                                to="/bimProjects/exit10"
                                className=" after:absolute bg-clip-padding after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:opacity-25 after:from-pink-500 after:to-purple-600 relative w-full h-full min-h-40 group rounded-lg border border-transparent px-5 py-4 bg-[url('./assets/images/Exit10/exit10.webp')]    bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                            >
                                <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                    <h2 className=" text-xl font-bold"> SAUDI ENTERTAINMENT VENTURES EXIT 10</h2>
                                    <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                                </div>
                                <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                    Find in-depth information about my works on EXIT 10.
                                </p>
                            </Link>


                            <Link
                                to="/bimProjects/rsAmaalaMarina"
                                className=" after:absolute bg-clip-padding after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tr after:opacity-25 after:from-cyan-400 after:to-blue-600 relative w-full h-full min-h-40 group rounded-lg border border-transparent px-5 py-4 bg-[url('./assets/images/Marina/Marina.webp')] bg-center bg-cover  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                            >
                                <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                    <h2 className=" text-xl font-bold"> RED SEA AMAALA MARINA PRECINCT</h2>
                                    <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                                </div>
                                <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                    Find in-depth information about my works on Marina.
                                </p>
                            </Link>


                            <Link
                                to="/bimProjects/rsAirport"
                                className=" after:absolute bg-clip-padding after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tr after:opacity-25 after:from-yellow-400 after:to-orange-400 relative w-full h-52 min-h-40 group rounded-lg border border-transparent px-5 py-4 bg-[url('./assets/images/airport/DAN_Red-Sea-Airport_3.webp')]  bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                            >
                                <div className='flex flex-row gap-2 items-center lg:justify-between mb-3'>

                                    <h2 className=" text-xl font-bold"> RED SEA AIRPORT</h2>
                                    <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                                </div>
                                <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                    Find in-depth information about my works on Airport.
                                </p>
                            </Link>



                        </div>

                    </div>




                    <div className="BIM-development mt-10">

                        <h3 className='text-sm sm:text-lg text-white font-semibold mb-4'>Applications And Codes I've Created</h3>

                        <div className="grid text-center   lg:text-left text-black  gap-4">

                            <Link
                                to="/bimDevelopments/navisworksAddin"
                                className="bg-clip-padding bg-gradient-to-t lg:h-[206px] from-white to-blue-800  w-full  min-h-40 group rounded-lg border border-transparent px-5 py-4   bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                            >
                                <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                    <h2 className=" text-xl font-bold">NAVISWORKS Add-In</h2>
                                    <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                                </div>

                                <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                    Find in-depth information about my Code on Navisworks Add-In.
                                </p>
                            </Link>


                            {/* <a
                            href=""
                            className="bg-clip-padding bg-gradient-to-b  from-white to-black  w-full h-full min-h-40 group rounded-lg border border-transparent px-5 py-4   bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                        >
                            <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                <h2 className=" text-xl font-bold">REVIT API</h2>
                                <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                            </div>

                            <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                Find in-depth information about my Code on Revit API.
                            </p>
                        </a>


                        <a
                            href=""
                            className="bg-clip-padding bg-gradient-to-tr  from-white via-blue-500 to-black  w-full h-full min-h-40 group rounded-lg border border-transparent px-5 py-4   bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                        >
                            <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                <h2 className=" text-xl font-bold">TEKLA API</h2>
                                <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                            </div>

                            <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                Find in-depth information about my Code on Tekla API.
                            </p>
                        </a> */}




                        </div>



                    </div>

                </motion.div>

            </div>
        </>
    )
}

export default BimProjectsSection
