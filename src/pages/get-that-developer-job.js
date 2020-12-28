import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Helmet from "react-helmet"
import SEO from "../components/SEO"

import Layout from "../layout"
import NewsletterForm from "../components/NewsletterForm"

import config from '../../data/SiteConfig'

const Newsletter = () => {
    const { file } = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "cv.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fluid(maxWidth: 545, maxHeight: 900) {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
        `)
    return (
        <Layout>
            <Helmet title={`Get that developer job - ${config.siteTitle}`} />
            <SEO />
            <section class="flex items-center h-screen relative">
                <div class="absolute left-0 top-0 lg:w-brand-38 hidden lg:block h-full">
                    <Img fluid={file.childImageSharp.fluid} alt="Job Interview" className="object-cover object-center h-full"/>
                </div>
                <div class="container">
                    <div className="flex justify-end items-center">
                        <div class="w-full lg:w-7/12">
                            <div className="lg:w-10/12">
                                <h2 className={`mb-6`}>Get that developer job</h2>
                                <p>
                                    Get the exact CV template I used to attain two full time developer jobs and healthy freelance clients when you sign up to my newsletter.
                                </p>
                                <div className="lg:w-10/12">
                                    <NewsletterForm />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Newsletter