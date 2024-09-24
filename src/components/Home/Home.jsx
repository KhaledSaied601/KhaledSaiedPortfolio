import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'
import NavBar from '../NavBar/NavBar';
import HeadSection from '../HeadSection/HeadSection';
import AboutSection from '../AboutSection/AboutSection';
import BimProjectsSection from '../BIMProjectsSection/BIMProjectsSection';
import WebProjects from '../WebProjects/WebProjects';
import ContactSection from '../ContactSection/ContactSection';


function Home() {




    useEffect(() => {

        console.log('Home Mounting');

    }, [])







    return (
        <>
        <NavBar/>
        <HeadSection/>
        <AboutSection/>
        <BimProjectsSection/>
        <WebProjects/>
        <ContactSection/>
         
        </>
    )
}

export default Home
