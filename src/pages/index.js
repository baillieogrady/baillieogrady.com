import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import SEO from "../components/SEO"
import config from '../../data/SiteConfig'

import Hero from "../components/Hero"
import TwoColumn from "../components/TwoColumn"
import BlogListing from "../components/BlogListing"

const Index = () => {

  return (
    <Layout alt={true}>
      <Helmet
        title={`${config.siteTitle} – Freelance WordPress Developer`}
      />
      <SEO />
      <Hero
        text="<span class='block'>I convert</span> web designs to WordPress themes"
        page="home"
      />
      <TwoColumn
        classes="bg-grey-100"
        lineClass="bg-black"
        lead={{ text: "LATEST WORK", class: "text-black" }}
        heading={{ text: "Built completely from scratch.", class: "" }}
        cards="themes"
        page="home"
        lead={false}
      />
      <TwoColumn
        classes="bg-black text-white"
        lineClass="bg-white"
        lead={{ text: "TESTIMONIAL", class: "" }}
        heading={{ text: "“Baillie has been great to work with. He's fast, thorough and communicates well. Very happy working with him.”", class: "text-white" }}
        author={{name: "Phillip Johnson", company: "Head of development - Bolster"}}
      />
      <TwoColumn
        classes="relative"
        lineClass="bg-black"
        lead={{ text: "PROCESS", class: "text-black" }}
        heading={{ text: 'Figma, Illustrator, Invision, Photoshop, Sketch, XD ...', class: "" }}
        text="<p>I love them all. I have over 5 years experience converting custom web designs from a plethora of design software, to highly optimised WordPress themes.  <span class='block'>(Full disclosure, Figma is my favourite.)</span></p>"
        btn={{ url: "/building-a-wordpress-theme", text: "View my process", classes: "bg-blue-100 text-white hover:bg-brand-primary-900" }}
      />
      <TwoColumn
        classes="bg-grey-100"
        lineClass="bg-black"
        lead={{ text: "LATEST BLOGS", class: "text-black" }}
        heading={{ text: '', class: "" }}
        text=""
        cards="blogSmall"
        page="home"
      />
      <TwoColumn
        classes=""
        lineClass="bg-black"
        lead={{ text: "I'M AVAILABLE", class: "text-black" }}
        heading={{ text: "Let's work together!", class: "" }}
        text="<p>I’m currently available to convert your custom web designs to a simple to a highly optimised, intuitive WordPress theme.</p>"
        btn={{ url: "/contact", text: "Hire me", classes: "bg-blue-100 text-white hover:bg-brand-primary-900" }}
      />
    </Layout>
  )
}

export default Index