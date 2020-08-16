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
    </Layout>
  )
}

export default Themes



