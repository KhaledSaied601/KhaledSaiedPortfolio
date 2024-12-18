import React, { useEffect, useRef, useState } from 'react'
import Style from './Home.module.css'
import NavBar from '../NavBar/NavBar';
import HeadSection from '../HeadSection/HeadSection';
import AboutSection from '../AboutSection/AboutSection';
import BimProjectsSection from '../BIMProjectsSection/BIMProjectsSection';
import WebProjects from '../WebProjects/WebProjects';
import ContactSection from '../ContactSection/ContactSection';
import { motion, useAnimation, useInView } from "framer-motion"
import { use } from 'framer-motion/client';
import ComputationalDesign from '../ComputationalDesignSection/ComputationalDesignSection';


function Home() {


    useEffect(() => {


        window.scrollTo(0, 0)



    }, [])


    return (
        <>
            <NavBar />
            <HeadSection />


            <AboutSection />
            <BimProjectsSection />
            <ComputationalDesign/>
            <WebProjects />
            <ContactSection />



        </>
    )
}

export default Home
