import React from "react";
import { Link } from "gatsby";

const Logo = ({ classes }) => {

    return (
        <Link
            to="/"
            className={`tracking-brand-widest font-bold text-black ${classes}`}
        >
            BAILLIE
        </Link>
    )
}

export default Logo