import React from "react"
import Helmet from "react-helmet"
import SEO from '../components/SEO';

import Layout from "../layout"
import Hero from '../components/Hero';
import TwoColumn from '../components/TwoColumn';

import config from '../../data/SiteConfig'

const Blog = () => {
  return (
    <Layout>
      <Helmet title={`Blog - ${config.siteTitle}`} />
      <SEO />
      <Hero
        text="Blog"
      />
      <TwoColumn
        classes="bg-brand-grey-300 relative z-10"
        lineClass="bg-brand-primary-800"
        lead={{ text: "BLOGGING MY JOURNEY", class: "text-black" }}
        heading={{ text: "", class: "" }}
        text=""
        cards="blog"
      />
    </Layout>
  )
}

export default Blog





