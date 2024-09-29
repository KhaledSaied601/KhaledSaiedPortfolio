import React, { useEffect, useRef, useState } from 'react'
import Style from './AboutSection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation, useInView } from "framer-motion"


function AboutSection() {


    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()



    useEffect(() => {

       if(isInView){
        
        mainControls.start("visible")
       }
        

    }, [isInView])

    return (
        <>
            <div ref={ref}

                className='max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto my-16' id='about'

            >

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.25 }}
                >


                    <div className='flex gap-2 mb-1 items-center'>

                        <h3 className='text-purple-500 text-sm sm:text-lg'>About  </h3>
                        <FontAwesomeIcon className='text-purple-500  w-3' icon={faArrowRight} />
                    </div>

                    <h3 className='text-sm sm:text-lg text-white font-semibold mb-2'>Hello, I'm Khaled</h3>

                    <p className="text-white text-xs sm:text-sm">
                        A rising senior BIM Engineer who is determined to make the whole “engineering operation” operated in such a slick and efficient way ,enhances engineering with multi technologies,
                        I graduated with a degree in Civil Engineering in 2020 from Ain Shams university.
                        Following my graduation, I served as a military officer for three years. During my time in the military, I dedicated myself to advancing my skills in Building Information Modeling (BIM),
                        After completing my military service, I transitioned into the role of a BIM Coordinator, working on large-scale projects, This experience allowed me to gain extensive knowledge and practical expertise.
                        Committed to continuous learning, I furthered my education in BIM Development and programming languages This portfolio I have created showcases my proficiency in these areas, I hope you find it insightful and enjoy your experience reviewing it.
                    </p>

                </motion.div>

            </div>
        </>
    )
}

export default AboutSection
