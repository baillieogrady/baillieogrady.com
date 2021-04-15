import React from "react";
import { Link } from 'gatsby';
import _ from 'lodash';

import icons_2 from '../images/icons_2.png'
import Figma from "../images/svg/figma.inline.svg"

import Lead from './Lead';
import ThemesListing from './ThemesListing'
import BlogListing from './BlogListing';
import BlogListingSmall from './BlogListingSmall';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import ConvertForm from './ConvertForm';
import Icons from './Icons';
import News from '../images/svg/news.inline.svg'

import NewsletterForm from "../components/NewsletterForm"

const TwoColumn = ({ lead, heading, text, btn, btnLink, classes, lineClass, cards, form, page, img, icons, author }) => {
    return (
        <div className={classes}>
            {lead.text === 'PROCESS' ?
                <div className="hidden lg:block absolute" style={{bottom: '48px', left: '-48px'}}>
                    <Figma/>
                </div>
            : null }
            <div className={`two-column container  relative ${(cards === 'testimonials' || cards === 'themes') ? "pt-16 lg:pt-32 pb-8 lg:pb-16":"py-20 lg:py-32"}`}>
                {form === 'newsletter' ? <News className="absolute right-brand-5 lg:right-0 -top-brand-6" /> : null}
                <div className="flex flex-wrap -mx-6 lg:-mx-brand-4">
                    {lead && page != 'portfolio' ?
                        <Lead text={{ content: lead.text, class: lead.class }} lineClass={lineClass} />
                    : null}
                    {icons ?
                        <Icons />
                        : null}
                    {cards === undefined ?
                        <div className={`w-full ${ lead.text === 'TESTIMONIAL' ? "lg:w-9/12":"lg:w-7/12" } px-6 lg:px-brand-4`}>
                            {form === 'convert' ? 
                                <>
                                    <h2 className="mb-6">
                                        <span className="block">Have a project in mind?</span>
                                        <span>Let's collaborate!</span>
                                    </h2>
                                    <p className="mb-12">Whether the designs are at the ready or you’d just like a chat, drop me a message!</p>   
                                </>
                            : 
                                <h2 className={`mb-6 relative z-10 ${heading.class}`}>{heading.text}</h2>
                            }
                            {author != null ?
                                <>
                                    <h3 className="text-white text-base mt-8 leading-brand-7 font-semibold">{ author.name }</h3>
                                    <p className="mb-0">{ author.company }</p>
                                </>
                             : null}
                            <div dangerouslySetInnerHTML={{ __html: text }} className="realtive z-10" />
                            {!_.isEmpty(btn) ?
                                <Link to={btn.url} className={`btn ${btn.classes} transition duration-200 ease-in-out`}>{btn.text}</Link>
                                : null
                            }
                            {!_.isEmpty(btnLink) ?
                                <Link to={btnLink.url} className={`btn transition duration-200 ease-in-out ${btnLink.classes}`}>{btnLink.text}</Link>
                                : null
                            }
                            {form === 'contact' ?
                                <ContactForm />
                                : null
                            }
                            {form === 'convert' ?
                                <ConvertForm />
                                : null
                            }
                            {form === 'newsletter' ?
                                <NewsletterForm />
                                : null
                            }
                        </div>
                        : null
                    }
                    {cards === 'themes' ?
                        <ThemesListing heading={heading} page={page} />
                        : null
                    }
                    {cards === 'blog' ?
                        <BlogListing heading={heading} />
                        : null
                    }
                    {cards === 'blogSmall' ?
                        <BlogListingSmall heading={heading} />
                        : null
                    }
                    {cards === 'testimonials' ?
                        <Testimonials heading={heading} />
                        : null
                    }
                    {img === true ?
                        <img src={icons_2} className="hidden lg:block absolute right-0 bottom-0 lg:h-brand-105" />
                        : null
                    }
                </div>
            { cards === 'themes' && page === 'home' ? 
                <p className="text-right my-12 lg:my-16">
                    <Link to="/portfolio" className="underline font-semibold">See all</Link>
                </p>
            : null }
            { cards === 'blogSmall' && page === 'home' ? 
                <p className="text-right mt-12 lg:mt-16 mb-0">
                    <Link to="/blog" className="underline font-semibold">See all</Link>
                </p>
            : null }
            </div>
        </div>
    )
}

export default TwoColumn