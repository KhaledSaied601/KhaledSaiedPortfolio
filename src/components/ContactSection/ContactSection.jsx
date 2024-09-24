import React, { useEffect, useState } from 'react'
import Style from './ContactSection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function ContactSection() {




    return (
        <>
            <div className='max-w-screen-md lg:max-w-screen-xl mx-auto my-16 relative z-10' id='contact'>
                <div className='flex gap-2 mb-1'>

                    <h3 className='text-purple-500 text-sm sm:text-lg'>Contact  </h3>
                    <FontAwesomeIcon className='text-purple-500  w-3' icon={faArrowRight} />
                </div>

                <h3 className='text-sm sm:text-lg text-white font-semibold mb-2'>Let us keep in touch</h3>

                <p className="text-white text-xs sm:text-sm">To keep in touch with me is to send me a message on <a className=" text-purple-500" target='_blank' href="https://www.linkedin.com/in/khaled-saed-09a1a0260/">LinkedIn</a> or <a className=" text-purple-500" target='_blank' href="https://mail.google.com/mail/u/0/?hl=ar#inbox?compose=GTvVlcSKjsqjgjDlxKNfKjnJRkfGqJnTMBPHnNfxfvFPSFPGKwFRBTDKBXDKKSLjpDSXPDDBNxZst">Email</a>  .</p>

            </div>
        </>
    )
}

export default ContactSection
