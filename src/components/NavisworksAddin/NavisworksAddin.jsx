import React, { useEffect, useState } from 'react'
import Style from './NavisworksAddin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'





function NavisworksAddin() {


    useEffect(() => {


        window.scrollTo(0, 0)



    }, [])


    return (
        <>
            <div className='max-w-screen-md lg:max-w-screen-xl mx-auto '>



                <div className='project-head flex justify-between items-center mb-24  h-screen'>

                    <div className='inner flex flex-col  justify-start items-center sm:px-4   gap-12 ' >





                        <div className=" aspect-video   mx-auto  w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">

                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/Zo_cN0YFDQU?si=zI8xGqqTE-23p33a"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>




                        <div className='description flex flex-col items-start text-white w-full'>
                            <h1 className='text-xl sm:text-3xl font-bold '>Navisworks Addin</h1>
                            <h3 className='text-sm sm:text-xl font-semibold text-purple-500 mb-3'>What i did <FontAwesomeIcon className=' w-4  transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block' icon={faArrowRight} /> </h3>
                            <p className='text-sm sm:text-lg font-light'>I developed this Add-in to assist my team and me in grouping clash results in clash tests based on any specified conditions. As demonstrated in the video, I utilized C# and the Navisworks API to create this tool, which took one month to build. This Add-in not only facilitates clash grouping but also offers numerous other features. Please watch the video to see its full capabilities.</p>

                        </div>

                    </div>

                </div>




            </div>
        </>
    )
}

export default NavisworksAddin
