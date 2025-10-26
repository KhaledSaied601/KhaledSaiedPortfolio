import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation, useInView } from "framer-motion"

import TT from '../../assets/images/TitanTurtle/TitanTurtle.png'
import PC from '../../assets/images/TitanTurtle/Nodes.png'
import ABP from '../../assets/images/TitanTurtle/AnchorBoltPattern.png'
import PPP from '../../assets/images/TitanTurtle/PlateByPointsAndPlane.png'

import { ImageModelItem } from '../ImageModelItem/ImageModelItem'
import Style from './TitanTurtlePackage.module.css'

function TitanTurtlePackage() {
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
        <div className="project-head flex flex-col lg:flex-row items-center justify-between mb-24 min-h-[80vh] text-white gap-12">
          <div className="description flex flex-col items-start lg:w-1/2 w-full">
            <h1 className="text-2xl sm:text-4xl font-bold mb-5">TitanTurtle Package</h1>
            <h3 className="text-base sm:text-xl font-semibold text-purple-500 mb-3">
              My role{" "}
              <FontAwesomeIcon
                className="w-4 inline-block transition-transform group-hover:translate-x-1 duration-300"
                icon={faArrowRight}
              />
            </h3>
            <p className="text-sm sm:text-lg font-light leading-relaxed">
              Creating a Grasshopper package in C# that integrates all Revit Steel functionalities.
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <div className="z-20 w-fit flex items-center justify-center hover:bg-white/10 rounded-xl duration-700 shadow-lg">
              <img src={TT} alt="TitanTurtle" className="w-4/5 sm:w-3/5 lg:w-full object-contain" />
            </div>
          </div>
        </div>

        {/* -------------------- DISCOVER SECTION -------------------- */}
        <div className="models flex flex-col lg:flex-row items-center justify-between text-white my-10 min-h-[70vh]">
          <div className="w-full flex flex-col justify-center items-start gap-7">
            <div className="description flex flex-col items-start">
              <h1 className="text-2xl sm:text-3xl font-bold mb-5">Discover</h1>
              <h3 className="text-base sm:text-xl font-semibold text-purple-500 mb-3">
                Parameters and Components{" "}
                <FontAwesomeIcon
                  className="w-4 inline-block transition-transform group-hover:translate-x-1 duration-300"
                  icon={faArrowRight}
                />
              </h3>
            </div>

            <ImageModelItem image={PC} />
          </div>
        </div>

        {/* -------------------- VIDEOS SECTION -------------------- */}
        <div className="families flex flex-col items-center justify-between text-white my-10 min-h-[70vh]">
          <div className="w-full flex flex-col justify-center items-start gap-7">
            <div className="w-full mb-10">
              <div className="description flex flex-col items-start w-full">
                <h3 className="text-base sm:text-xl font-semibold text-purple-500 mb-3">
                  Videos{" "}
                  <FontAwesomeIcon
                    className="w-4 inline-block transition-transform group-hover:translate-x-1 duration-300"
                    icon={faArrowRight}
                  />
                </h3>
                <p className="text-sm sm:text-lg font-light leading-relaxed">
                  These videos demonstrate the package functionalities.
                </p>
              </div>

              <div className="inner w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {[
                  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7381728369131900928?compact=1",
                  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7374034467268476929?compact=1",
                  "https://www.youtube.com/embed/nf6uyJ4g7b0?si=3o8PGaii3SUu6Xjg",
                  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7343394791411408898?compact=1",
                  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7353850299234627585?compact=1",
                  "https://www.youtube.com/embed/lgKHVAIFxU8?si=QTfXVVN6YRR8ZU0y",
                  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7340708450085023744?compact=1",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="aspect-video w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-white duration-500"
                  >
                    <iframe
                      src={src}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      title={`Video ${i + 1}`}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TitanTurtlePackage
