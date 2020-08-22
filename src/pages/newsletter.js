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
            <Helmet title={`Newsletter - ${config.siteTitle}`} />
            <SEO />
            <Hero
                text="Newsletter"
            />
            <TwoColumn
                classes="bg-brand-grey-200 relative z-10"
                lineClass="bg-brand-primary-800"
                lead={{ text: "JOIN", class: "text-black" }}
                heading={{ text: "My weekly newsletter", class: "" }}
                text="<p>Summarizing all my weekly coding content including live code examples, blogs, YouTube tutorials and Instagram carousels.</p>"
                form="newsletter"
            />
        </Layout>
    )
}

export default Newsletter