import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import icons_3 from '../images/icons_3.png'
import Arrow from '../images/svg/arrow.inline.svg'


const Hero = ({ text, page }) => {

    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "swirl.jpg" }) {
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
            <div className="flex flex-col relative">
                {page === "convert-your-designs" ?
                    <img src={icons_3} alt="Design programme icons" className="absolute right-0 bottom-0 w-1/2 lg:w-4/12" />
                    : null
                }
                {page === "home" ?
                    <div className="py-20 lg:py-32">
                        <p className="text-blue-100 text-sm font-bold">FREELANCE WORDPRESS DEVELOPER</p>   
                        <h1 className={`relative z-10 w-full p-0 md:w-7/12`} dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                : null }
                {page === 'home' ?
                    <Arrow className="mb-16 lg:mb-32 w-4 lg:w-8 animate-bounce" />
                    : null
                }
            </div>
        </div>
    )
}

export default Hero