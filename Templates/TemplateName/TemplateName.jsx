import React, { useEffect, useState } from 'react'
import Style from './TemplateName.module.css'


function TemplateName() {




    useEffect(() => {

        console.log('TemplateName Mounting');

    }, [])







    return (
        <>
            <h2 className='text-4xl text-green-500  '>TemplateName</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis?</p>
        </>
    )
}

export default TemplateName
