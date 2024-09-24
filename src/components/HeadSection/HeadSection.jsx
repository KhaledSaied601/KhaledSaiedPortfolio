import React, { useEffect, useState } from 'react'
import Style from './HeadSection.module.css'
import $ from 'jquery'


function HeadSection() {

    useEffect(() => {




        Array.from(document.querySelectorAll('.slice-1,.slice-2,.slice-3,.slice-4,.head-content')).forEach((e) => {
            e.classList.add('left-0');
            e.classList.remove('left-[100%]');
        })

        document.querySelector('.head-section')?.classList.add('border-opacity-45')
        document.querySelector('.head-section')?.classList.remove('border-opacity-0')


       



    }, [])



    return (
        <>


            <div className='head-section bg-[url("./assets/images/cover.webp")] bg-center bg-fixed flex items-center justify-start bg-contain    md:bg-cover  h-screen head-section w-full mb-32  mx-auto border-s border-gray-500 border-opacity-0 border-dotted delay-400 duration-200  relative ' id='home'>


                <div className=' w-full h-full absolute top-0 left-0 bg-black bg-opacity-75'></div>

                <div className='head-title max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl text-white  text-opacity-85 mx-auto  w-full overflow-hidden  '>
                    <h1 className='text-3xl sm:text-5xl font-bold my-3 head-content delay-200 duration-200 relative left-[100%]'>Khaled Saied</h1>
                    <h3 className='text-lg sm:text-xl font-semibold my-3 head-content delay-200 duration-200 relative left-[100%]'>BIM Coordinator</h3>
                </div>

            </div>

        </>
    )
}

export default HeadSection
