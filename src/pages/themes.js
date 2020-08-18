import React from "react"
import Helmet from "react-helmet"
import SEO from '../components/SEO';

import Layout from "../layout"
import Hero from '../components/Hero';
import TwoColumn from '../components/TwoColumn';

import config from '../../data/SiteConfig'

const Themes = () => {
  return (
    <Layout>
      <Helmet title={`Themes - ${config.siteTitle}`} />
      <SEO />
      <Hero
        text="Themes"
      />
      <TwoColumn
        classes="bg-brand-grey-200 relative z-10"
        lineClass="bg-brand-primary-800"
        lead={{ text: "CLIENT & OPEN SOURCE", class: "text-black" }}
        heading={{ text: "", class: "" }}
        text=""
        cards="themes"
      />
      <TwoColumn
        classes="bg-brand-primary-900 text-white"
        lineClass="bg-white"
        lead={{ text: "HIRE ME", class: "text-white" }}
        heading={{ text: "Let's work together", class: "text-white" }}
        text="<p>I’m currently available to convert your designs to a simple to use, intuitive, WordPress theme.</p>"
        btn={{ url: "/convert-your-designs", text: "Convert your designs", classes: "bg-white text-brand-primary-800 hover:bg-gray-200" }}
      />
    </Layout>
  )
}

export default Themes



