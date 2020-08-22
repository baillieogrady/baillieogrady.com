import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

import Hero from "../components/Hero"
import TwoColumn from "../components/TwoColumn"

import Layout from "../layout"

import config from '../../data/SiteConfig'


const ConvertYourDesigns = () => {
    return (
        <Layout>
            <Helmet title={`Convert your designs - ${config.siteTitle}`} />
            <SEO />
            <Hero
                text="Convert your designs..."
                page="convert-your-designs"
            />
            <TwoColumn
                classes="bg-brand-grey-200 relative z-10"
                lineClass="bg-brand-primary-800"
                lead={{ text: "LET'S BEGIN", class: "text-black" }}
                heading={{ text: "to a  unique WordPress theme", class: "" }}
                text="<p class='m-0'>Whichever design programme you use, I love them all. I have extensive experience with all modern programmes like Figma, Sketch and XD but I also love the nostalgia when converting from Photoshop and Illustrator.</p>"
                form="convert"
            />
            <TwoColumn
                classes=""
                lineClass="bg-brand-primary-800"
                lead={{ text: "LET'S CHAT", class: "text-black" }}
                heading={{ text: "Designs not ready?", class: "" }}
                text="<p>Maybe you’re still debating the designs or just want some general help with your WordPress website. I’m happy to have a chat.</p>"
                btn={{ url: "/contact", text: "Contact me", classes: "bg-brand-primary-800 text-white hover:bg-brand-primary-900" }}
            />
        </Layout>
    )
}

export default ConvertYourDesigns