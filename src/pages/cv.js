import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

import Hero from "../components/Hero"
import TwoColumn from "../components/TwoColumn"

import Layout from "../layout"

import config from '../../data/SiteConfig'


const Newsletter = () => {
    return (
        <Layout>
            <Helmet title={`CV - ${config.siteTitle}`} />
            <SEO />
            {/* <Hero
                text="Newsletter"
            /> */}
            <TwoColumn
                classes="bg-brand-grey-200 relative z-10"
                lineClass="bg-brand-primary-800"
                lead={{ text: "JOIN", class: "text-black" }}
                heading={{ text: "Get that developer job", class: "" }}
                text="<p>Get the exact CV template I used to attain two full time developer jobs and healthy freelance clients when you sign up to my newsletter.</p>"
                form="newsletter"
            />
        </Layout>
    )
}

export default Newsletter