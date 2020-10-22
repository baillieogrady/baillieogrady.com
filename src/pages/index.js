import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import SEO from "../components/SEO"
import config from '../../data/SiteConfig'

import Hero from "../components/Hero"
import TwoColumn from "../components/TwoColumn"

const Index = () => {

  return (
    <Layout>
      <Helmet
        title={`${config.siteTitle} – Freelance WordPress Developer`}
      />
      <SEO />
      <Hero
        text="<span class='block'>I convert</span> web designs to WordPress themes"
        page="home"
      />
      <TwoColumn
        classes="bg-brand-grey-200 relative z-10"
        lineClass="bg-brand-primary-800"
        lead={{ text: "PROBLEM", class: "text-black" }}
        heading={{ text: "WordPress websites can be slow and ugly.", class: "" }}
        text="<p>After updating over <strong>100</strong> custom WordPress themes, far too many of them use a plethora of redundant plugins, child themes and third party page builders. This leads to frustration for everyone involved.</p>
        <ul class='lg:ml-2 list-inside mt-8'>
          <li class='mb-2'><span>Slow page load times for you and your users</span></li>
          <li class='mb-2'><span>Confusing and slow editing experience</span></li>
          <li><span>Inconsistant styling and structure</span></li>
        </ul>
        "
      />
      <TwoColumn
        classes=""
        lineClass="bg-brand-primary-800"
        lead={{ text: "SOLUTION", class: "text-black" }}
        heading={{ text: "Less is more.", class: "" }}
        text="
        <p>Every website is unique and should be treated as such. Including only what is necessary when building a WordPress theme ensures your websites performance and branding is never compromised.</p>
        <p>What’s more, editing your website should be fun and intuitive. No one likes waiting to make simple text edits. Plugins like <strong>ACF Pro</strong> allow me to extend WordPress natively to cater to your designs.</p>
        "
        btn={{ url: "/convert-your-designs", text: "Convert your designs", classes: "bg-brand-primary-800 text-white hover:bg-brand-primary-900" }}
      />
      <TwoColumn
        classes="bg-brand-grey-200"
        lineClass="bg-brand-primary-800"
        lead={{ text: "LATEST THEMES", class: "text-black" }}
        heading={{ text: "Built completely from scratch.", class: "" }}
        cards="themes"
        page="home"
      />
      <TwoColumn
        classes=""
        lineClass="bg-brand-primary-800"
        lead={{ text: "DESIGNS", class: "text-black" }}
        heading={{ text: "Figma, Illustrator, Invision, Photoshop, Sketch, XD ...", class: "" }}
        text="
        <p>I love them all, I’ve converted over <strong>25</strong> unique designs from all the above programmes into unique WordPress themes.</p>
        "
        btn={{ url: "/building-a-wordpress-theme", text: "View my process", classes: "bg-brand-primary-800 text-white hover:bg-brand-primary-900" }}
        img={true}
      />
      <TwoColumn
        classes="bg-brand-grey-200"
        lineClass="bg-brand-primary-800"
        lead={{ text: "TESTIMONIALS", class: "text-black" }}
        heading={{ text: "What my clients say", class: "" }}
        cards="testimonials"
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

export default Index