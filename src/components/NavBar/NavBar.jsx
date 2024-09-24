import React, { useEffect, useState } from 'react'
import Style from './NavBar.module.css'
import { Link, NavLink, useParams } from 'react-router-dom'
import $ from 'jquery'


function NavBar() {


    const [navOpacity, setNavOpacity] = useState('bg-opacity-0')


    useEffect(() => {




        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 0) {

                setNavOpacity('bg-opacity-70')

            }
            else {
                setNavOpacity('bg-opacity-0')
            }


        })

    }, [])



    return (
        <>

            <div className={`navbar max-w-screen-xl mx-auto text-white bg-gray-800  ${navOpacity} w-fit  px-5 py-2 rounded-full mt-2 text-sm sticky top-2 z-20`}>

                <ul className='flex gap-5'>
                    <li className='hover:bg-gray-700 hover:rounded-xl  px-2 py-1 '>
                        <a href="#home">Home</a>
                    </li>
                    <li className='hover:bg-gray-700 hover:rounded-xl  px-2 py-1'>
                        <a href="#about">About</a>
                    </li>
                    <li className='hover:bg-gray-700 hover:rounded-xl  px-2 py-1'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='hover:bg-gray-700 hover:rounded-xl  px-2 py-1'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

            </div>

        </>
    )
}

export default NavBar
