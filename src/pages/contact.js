import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

import Hero from "../components/Hero"
import TwoColumn from "../components/TwoColumn"

import Layout from "../layout"

import config from '../../data/SiteConfig'


const Contact = () => {
  return (
    <Layout>
      <Helmet title={`Contact - ${config.siteTitle}`} />
      <SEO />
      <Hero
        text="Contact"
      />
      <TwoColumn
        classes="bg-grey-100 relative z-10"
        lineClass="bg-black"
        lead={{ text: "GET IN TOUCH", class: "text-black" }}
        heading={{ text: "", class: "" }}
        text=""
        form="convert"
      />
      {/* <TwoColumn
        classes="relative z-10"
        lineClass="bg-brand-primary-800"
        lead={{ text: "LET'S CHAT", class: "text-black" }}
        heading={{ text: "Response within 24 hours", class: "" }}
        text=""
        form="contact"
      /> */}
    </Layout>
  )
}

export default Contact