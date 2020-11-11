import React from "react";
import { Link } from 'gatsby';
import _ from 'lodash';

import icons_2 from '../images/icons_2.png'

import Lead from './Lead';
import ThemesListing from './ThemesListing'
import BlogListing from './BlogListing';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import ConvertForm from './ConvertForm';
import Icons from './Icons';
import News from '../images/svg/news.inline.svg'

import NewsletterForm from "../components/NewsletterForm"

const TwoColumn = ({ lead, heading, text, btn, btnLink, classes, lineClass, cards, form, page, img, icons }) => {
    return (
        <div className={classes}>
            <div className={`two-column container  relative ${(cards === 'testimonials' || cards === 'themes') ? "pt-16 lg:pt-32 pb-8 lg:pb-16":"py-16 lg:py-32"}`}>
                {form === 'newsletter' ? <News className="absolute right-brand-5 lg:right-0 -top-brand-6" /> : null}
                <div className="flex flex-wrap -mx-6 lg:-mx-brand-4">
                    <Lead text={{ content: lead.text, class: lead.class }} lineClass={lineClass} />
                    {icons ?
                        <Icons />
                        : null}
                    {cards === undefined ?
                        <div className="w-full lg: lg:w-7/12 px-6 lg:px-brand-4">
                            <h2 className={`mb-6 relative z-10 ${heading.class}`}>{heading.text}</h2>
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
                    {cards === 'testimonials' ?
                        <Testimonials heading={heading} />
                        : null
                    }
                    {img === true ?
                        <img src={icons_2} className="hidden lg:block absolute right-0 bottom-0 lg:h-brand-105" />
                        : null
                    }
                </div>
            </div>
        </div >
    )
}

export default TwoColumn