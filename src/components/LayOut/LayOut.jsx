import React, { useEffect, useState } from 'react'
import Style from './LayOut.module.css'
import { Outlet } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';




function LayOut() {




    useEffect(() => {


    }, [])







    return (
        <>
        
            <Outlet />
            <SideBar/>
        </>
    )
}

export default LayOut
