import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

import Hero from "../components/Hero"
import TwoColumn from "../components/TwoColumn"

import Layout from "../layout"

import config from '../../data/SiteConfig'


const custom_404 = () => {
    return (
        <Layout>
            <Helmet title={`Contact - ${config.siteTitle}`} />
            <SEO />
            <Hero
                text="404"
            />
            <TwoColumn
                classes="bg-brand-grey-300 relative z-10"
                lineClass="bg-brand-primary-800"
                lead={{ text: "PAGE NOT FOUND", class: "text-black" }}
                heading={{ text: "Please use the above navigation", class: "" }}
                text=""
            />
        </Layout>
    )
}

export default custom_404