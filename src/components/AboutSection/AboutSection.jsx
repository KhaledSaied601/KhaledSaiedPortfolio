import React, { useEffect, useState } from 'react'
import Style from './AboutSection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function AboutSection() {




    return (
        <>
            <div className='max-w-screen-md lg:max-w-screen-xl mx-auto my-16' id='about'>
                <div className='flex gap-2 mb-1 items-center'>

                    <h3 className='text-purple-500 text-sm sm:text-lg'>About  </h3>
                    <FontAwesomeIcon className='text-purple-500  w-3' icon={faArrowRight} />
                </div>

                <h3 className='text-sm sm:text-lg text-white font-semibold mb-2'>Hello, I'm Khaled</h3>

                <p className="text-white text-xs sm:text-sm">
                    A rising senior BIM Engineer who is determined to make the whole “engineering operation” operated in such a slick and efficient way ,enhances engineering with multi technologies.
                     I have experience in tender documents, quantity surveying, pricing information and cost analysis. I have strong knowledge in innovatively engineering softwares,
                      3d modeling up to LOD500, programming and social media.
                    I have worked on myself to make 3d models for both large and small projects.
                     I have knowledge in agile, lean methodologies and BIM management, and am passionate about working with teams to put forth the best project possible.
                    I am a firm believer that coordination is most important key to success, and carry this principle on everything I do. I value forming meaningful relationships,
                     always giving 110%, and making the people I work with satisfied.</p>

            </div>
        </>
    )
}

export default AboutSection
