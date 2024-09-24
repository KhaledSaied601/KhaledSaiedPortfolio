import React, { useEffect, useState } from 'react'
import Style from './WebProjects.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function WebProjects() {




    return (
        <>
            <div className='text-white max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto mt-10 mb-28 relative z-10' id='projects'>

                <div className='Web-Head flex gap-2 mb-4 items-center'>

                    <h3 className='text-purple-500 text-sm sm:text-lg'>Web Projects  </h3>
                    <FontAwesomeIcon className='text-purple-500  w-3' icon={faArrowRight} />
                </div>

                <div className="web-projects-worked-on">


                    <div className=" grid text-center  lg:grid-cols-3 lg:text-left text-white  gap-4">

                        <Link
                            to="https://khaledsaied601.github.io/Ecommerce"
                            target='_blank'
                            className="bg-clip-padding lg:h-[206px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:opacity-25 after:from-black after:to-green-800 relative w-full  min-h-40 group rounded-lg border border-transparent px-5 py-4 bg-[url('./assets/images/Web/eCommerce3.webp')]  bg-cover bg-center   transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                        >
                            <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                <h2 className=" text-xl font-bold">REACT APP E-COMMERCE</h2>
                                <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                            </div>
                            <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                Find in-depth information about my React App.
                            </p>
                        </Link>



                        <Link
                            to="https://khaledsaied601.github.io/Galaxy/"
                            target='_blank'
                            className="bg-clip-padding lg:h-[206px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tr after:opacity-25 after:from-black after:to-pink-500 relative w-full  min-h-40 group rounded-lg border border-transparent px-5 py-4 bg-[url('./assets/images/Web/Galaxy.webp')]  bg-cover bg-center lg:bg-left-bottom  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                        >
                            <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                <h2 className=" text-xl font-bold">THREE.JS WEB GALAXY</h2>
                                <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                            </div>
                            <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                Find in-depth information about my Three.JS Web.
                            </p>
                        </Link>



                        <Link
                            to="https://khaledsaied601.github.io/Hunted-House/"
                            target='_blank'
                            className="bg-clip-padding lg:h-[206px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-br after:opacity-25 after:from-black after:to-purple-500 relative w-full  min-h-40 group rounded-lg border border-transparent px-5 py-4 bg-[url('./assets/images/Web/HuntedHouse.webp')]  bg-cover bg-center lg:bg-left  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                        >
                            <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                <h2 className=" text-xl font-bold">THREE.JS WEB Hunted House</h2>
                                <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faArrowRight} />
                            </div>
                            <p className="m-0 max-w-[30ch] text-sm font-semibold">
                                Find in-depth information about my Three.JS Web.
                            </p>
                        </Link>




                    </div>

                </div>


                <div className="more-projects-links mt-10">

                    <h3 className='text-sm sm:text-lg text-white font-semibold mb-4'>More of my works</h3>

                    <div className="grid text-center  lg:grid-cols-4 lg:text-left text-black  gap-4">

                        <Link
                            target='_blank' to="https://www.linkedin.com/in/khaled-saed-09a1a0260/"
                            className=" bg-gradient-to-t bg-clip-padding from-black to-white  w-full   group rounded-lg border border-transparent px-5 py-4   bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                        >
                            <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                <h2 className=" text-xl font-bold">LinkdIn</h2>
                                <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faLinkedin} />
                            </div>


                        </Link>


                        <Link
                            target='_blank' to="https://github.com/KhaledSaied601?tab=repositories"
                            className=" bg-gradient-to-t  from-black to-white  w-full   group rounded-lg border border-transparent px-5 py-4   bg-cover bg-center transition-colors hover:border-gray-300 hover:bg-gray-100 bg-clip-padding hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 overflow-hidden"

                        >
                            <div className='flex flex-row gap-2 items-center mb-3 lg:justify-between'>

                                <h2 className=" text-xl font-bold">GitHub</h2>
                                <FontAwesomeIcon className=' w-5  transition-transform group-hover:translate-x-1 motion-reduce:transform-none' icon={faGithub} />
                            </div>


                        </Link>





                    </div>



                </div>


            </div>
        </>
    )
}

export default WebProjects
