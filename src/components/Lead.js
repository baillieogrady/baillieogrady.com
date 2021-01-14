import React from "react";
import { Link } from "gatsby";

import Back from '../images/svg/back.inline.svg'


const Lead = ({ text, lineClass, dark }) => {

    return (
        <div className={`w-full lg:w-3/12 px-6 lg:px-brand-4 text-xs lg:text-sm tracking-brand-widest mb-8`}>
            <div>
                <div className={`h-brand-05 rounded w-8 mb-2 ${lineClass}`}></div>
                <span className={`block ${dark ? "text-white":""}`}>{text.content}</span>
            </div>
        </div>
    )
}

export default Lead