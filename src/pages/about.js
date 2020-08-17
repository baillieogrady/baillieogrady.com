import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

import Hero from "../components/Hero"
import TwoColumn from "../components/TwoColumn"

import Layout from "../layout"

import config from '../../data/SiteConfig'


const About = () => {
    return (
        <Layout>
            <Helmet title={`About - ${config.siteTitle}`} />
            <SEO />
            <Hero
                text="About"
            />
            <TwoColumn
                classes="bg-brand-grey-200 relative z-10"
                lineClass="bg-brand-primary-800"
                lead={{ text: "LITTLE ABOUT ME", class: "text-black" }}
                heading={{ text: "Hi, I'm Baillie", class: "" }}
                text="<p>A Freelance WordPress developer from Manchester, England. I started my developer journey in 2016 after finding no fufillment with a career in finance. I enjoy the entire process of taking a completely fresh web design to converting it into a fully functional WordPress website.</p>
                    
                <p>When not coding away, I enjoy reading, running and generally learning about anything. I recently decided to document my daily coding on my <a href='https://instagram.com/baillieogrady' target='_blank'>Instagram</a>.</p>

                <p>What’s more, I love to travel. In August 2019 I went to Rome solo for a weekend and enjoyed every minute of it. It was unusual travelling alone but certainly worth it. I’m still astounded by the free fresh water taps everywhere, not to mention the breath taking views, recommend it to anyone.</p>"
            />
        </Layout>
    )
}

export default About