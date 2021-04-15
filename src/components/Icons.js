import React from "react";

import Phone from '../images/svg/phone.inline.svg'
import Mail from '../images/svg/mail.inline.svg'
import Insta from '../images/svg/insta.inline.svg'
import Linkedin from '../images/svg/linkedin.inline.svg'

const Icons = () => {

    return (
        <div className={`w-full lg:w-3/12 px-6 lg:px-brand-8 text-xs lg:text-sm tracking-brand-widest`}>
            <div className="flex items-center">
                <a href="mailto:hello@baillieogrady.com">
                    <Mail className="transition duration-500 ease-in-out transform hover:scale-110 mr-8 lg:mr-12" />
                </a>
                <a href="https://www.linkedin.com/in/baillieogrady" target="_blank">
                    <Linkedin className="transition duration-500 ease-in-out transform hover:scale-110 mr-8 lg:mr-12" />
                </a>
                <a href="https://www.instagram.com/baillieogrady" target="_blank">
                    <Insta className="transition duration-500 ease-in-out transform hover:scale-110" />
                </a>
            </div>
        </div>
    )
}

export default Icons