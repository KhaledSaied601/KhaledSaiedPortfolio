import React, { useEffect, useRef, useState } from 'react'
import Style from './ComputationalDesignSection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from "framer-motion"



function ComputationalDesignSection() {


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
            <div ref={ref} className='text-white max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto mt-10 relative z-10' id='projects'>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }

                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.25 }}
                >

                    <div className='Grasshopper-Head flex gap-2 mb-1 items-center'>

                        <h3 className='text-purple-500 text-sm sm:text-lg'>Grasshopper  </h3>
                        <FontAwesomeIcon className='text-purple-500  w-3' icon={faArrowRight} />
                    </div>




                    <div className="Grasshopper-tasks mt-5">

                       

                        <div className="grid text-center   lg:text-left text-white  gap-4">

                            <Link
                                to="/computationalDesign/grasshopperScripts"
                                className=" after:absolute bg-clip-padding after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-25  relative w-full h-52 min-h-40 group rounded-lg border border-transparent px-5 py-4   bg-[url('./assets/images/Computational/Grasshopper.jpg')]  bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                            >
                                <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                    <h2 className=" text-xl font-bold">Grasshopper Scripts</h2>
                                    <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                                </div>

                                <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                    Find in-depth information about my Scripts on Grasshopper.
                                </p>
                            </Link>


            


                        </div>



                    </div>

                </motion.div>

            </div>
        </>
    )
}

export default ComputationalDesignSection
