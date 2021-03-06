import React from "react";
import Img from "gatsby-image";
import { Link } from 'gatsby';
import _ from 'lodash';

const Card = ({ type, theme, testimonial, post, link }) => {

    return (
        <div className={`bg-white rounded-lg p-4 w-full md:w-brand-46 mb-8 lg:mb-16 relative transition duration-500 ease-in-out transform hover:scale-105`}>
            <div className={`flex flex-col h-full relative ${type === "testimonial" ? "" : "justify-between"}`}>
                {type === 'theme' ?
                    <>
                        <Link to={`/${theme.frontmatter.slug}`} className="absolute top-0 left-0 h-full w-full" />
                        <div>
                            <Img fluid={theme.frontmatter.thumbnail.childImageSharp.fluid} className="rounded-md mb-4 pointer-events-none max-w-full" />
                            <h3>{theme.frontmatter.title}</h3>
                        </div>
                    </>
                    : null
                }
                {type === 'testimonial' ?
                    <>
                        <div>
                            <h3 className="mb-1 leading-normal">{testimonial.name}</h3>
                            <p className="m-0 mb-4 text-brand-black-200 font-semibold text-sm leading-brand-tight">{testimonial.position}</p>
                        </div>
                        <p className="m-0">{testimonial.text}</p>
                    </>
                    : null
                }
                {type === 'post' ?
                    <>
                        <Link to={`/${post.frontmatter.slug}`} className="absolute top-0 left-0 h-full w-full" />
                        <div>
                            <h3 className="mb-2">{post.frontmatter.title}</h3>
                            <p className="mb-4">{post.excerpt}</p>
                        </div>
                        {/* <Link to={`/${post.frontmatter.slug}/`} className={`btn-link ${post.frontmatter.type === 'video' ? "btn-link--red" : ""} self-end hover:text-brand-primary-900 transition duration-200 ease-in-out`}>
                            {post.frontmatter.type === 'post' ? "VIEW" : "WATCH"}
                        </Link> */}
                    </>
                    : null
                }
            </div>
        </div>
    )
}

export default Card;