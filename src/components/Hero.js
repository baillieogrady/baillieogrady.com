import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import icons_3 from '../images/icons_3.png'
import Arrow from '../images/svg/arrow.inline.svg'


const Hero = ({ text, page }) => {

    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "dream.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 555, height: 684) {
                    ...GatsbyImageSharpFixed
                    }
                }
                }
            }
        `)
    return (
        <div className="container">
            <div className="flex flex-col relative hero">
                {page === "convert-your-designs" ?
                    <img src={icons_3} alt="Design programme icons" className="absolute right-0 bottom-0 w-1/2 lg:w-4/12" />
                    : null
                }
                <h1 className={`relative z-10 w-full  ${page === "convert-your-designs" ? "md:w-8/12" : "md:w-7/12"} ${page === "home" ? "" : "py-16 lg:py-32"}`} dangerouslySetInnerHTML={{ __html: text }} />
                {page === 'home' ?
                    <Arrow className="mb-16 lg:mb-32 w-4 lg:w-8 animate-bounce" />
                    : null
                }
                {page === 'home' ?
                    <Img fixed={file.childImageSharp.fixed} alt="Swirling gradient" className="absolute right-0 top-0 shadow-brand-3xl hidden lg:block w-1/2 rounded" />
                    : null}
            </div>
        </div>
    )
}

export default Hero