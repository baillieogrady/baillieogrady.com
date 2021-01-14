import React from "react";
import { Link } from "gatsby";

const Logo = ({ classes, dark }) => {

    return (
        <Link
            to="/"
            className={`tracking-brand-widest font-bold text-black ${classes} ${dark ? "lg:text-white":""}`}
        >
            BAILLIE
        </Link>
    )
}

export default Logo