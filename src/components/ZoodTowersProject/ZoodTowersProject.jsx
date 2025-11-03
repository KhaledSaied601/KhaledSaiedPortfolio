import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation, useInView } from "framer-motion"

import ZT from '../../assets/images/Zood/RenderedZood2.webp'
import { ZoodCarousel } from '../ZoodModelItem/ZoodCarousel'

function ZoodTowersProject() {
  const [is3DShowed, setIs3DShowed] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) mainControls.start("visible")
  }, [isInView])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={ref} className="my-14 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >

        {/* -------------------- HEADER SECTION -------------------- */}
        <div className="project-head flex flex-col lg:flex-row items-center justify-between gap-10 mb-24 min-h-[80vh] text-white">
          {/* Text */}
          <div className="description flex flex-col items-start lg:w-1/2 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
              ZOOD TOWERS
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-purple-500 mb-3">
              My role{" "}
              <FontAwesomeIcon
                className="w-4 inline-block transition-transform group-hover:translate-x-1 duration-300"
                icon={faArrowRight}
              />
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
              In this project, My role is to go through the Detailed Design stage until reaching the Issue for Construction stage LOD(300).
            </p>
          </div>

          {/* Image */}
          <div className="image lg:w-1/2 w-full h-64 sm:h-80 md:h-[28rem] rounded-2xl overflow-hidden relative bg-clip-padding border border-transparent transition-all hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-gray-600/10 duration-300 z-10 rounded-2xl"></div>
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={ZT}
              alt="Zood Towers Rendered"
            />
          </div>
        </div>
       {/* -------------------- WORKFLOW SECTION -------------------- */}
           <div className="flex flex-col items-center text-white my-10 min-h-[70vh]">
             <div className="w-full flex flex-col justify-center items-start gap-7">
               <div className="mb-10">
                 <div className="description flex flex-col items-start w-full">
                   <h3 className="text-base sm:text-lg md:text-xl font-semibold text-purple-500 mb-3">
                     Workflow{" "}
                     <FontAwesomeIcon
                       className="w-4 inline-block transition-transform group-hover:translate-x-1 duration-300"
                       icon={faArrowRight}
                     />
                   </h3>
                   <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                     I received a Rhino model and CAD files to reach the required level of detail. I converted the Rhino model including floors and façade systems into Revit, linked the CAD files, and began modeling the interior elements for the four towers.
                   </p>
                 </div>
   
                 <div className="aspect-video mt-6 w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500">
                   <iframe
                     width="100%"
                     height="100%"
                     src="https://www.youtube.com/embed/p0dYwceVMKM?si=t91qsYxjSit6Ly2W"
                     title="ZOOD Workflow"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     allowFullScreen
                     className="w-full h-full"
                   ></iframe>
                 </div>
               </div>
             </div>
           </div>

        {/* -------------------- DISCOVER SECTION -------------------- */}
        <div className="flex flex-col items-center justify-between text-white my-10 min-h-[70vh]">
          <div className="w-full flex flex-col justify-center items-start gap-7">
            <div className="description flex flex-col items-start w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">Discover</h1>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-purple-500 mb-3">
                To LOD 300{" "}
                <FontAwesomeIcon
                  className="w-4 inline-block transition-transform group-hover:translate-x-1 duration-300"
                  icon={faArrowRight}
                />
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Some examples from the project are shown below.
              </p>
            </div>

            <ZoodCarousel />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ZoodTowersProject
