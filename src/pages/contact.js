import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import Intro from "../components/Intro"
import SEO from "../components/SEO"

import config from '../../data/SiteConfig'


const Contact = () => {
  return (
    <Layout>
      <Helmet title={`Contact - ${config.siteTitle}`} />
      <SEO />
      <Intro
        title="Contact"
        text={`<p><span style="color: #3fc380;"><strong>Available</strong></span> for new projects</p>`}
      />
      <section class="mb4 mb5-ns">
        <div class="mw7 center ph3">
          {/* <h2>Take your pick</h2> */}
          <ul className="ma0">
            {/* <li><a href="tel:07939818296">07939818296</a></li> */}
            <li><a href="mailto:hello@baillieogrady.com">hello@baillieogrady.com</a></li>
            <li><a href="https://www.facebook.com/iambaillieogrady" rel="noopener">Facebook</a></li>
            <li><a href="https://www.instagram.com/baillieogrady/" rel="noopener">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/baillieogrady/" rel="noopener">LinkedIn</a></li>
            <li><a href="https://twitter.com/baillieogrady" rel="noopener">Twitter</a></li>
          </ul>
        </div>
      </section>
      {/* <section class="dn db-ns mb4 mb5-ns">
        <div class="mw7 center ph3">
          <h2>Crypto</h2>
          <ul className="ma0">
            <li><strong>BTC:</strong> 1AK4C5wMKvFmjNXMUdqNw5y5XY9piSNWn8</li>
            <li><strong>ETH:</strong> 0x0f6765417988D19F5745823bF89C75826A63C045</li>
            <li><strong>LTC:</strong> LafofH2bt4kZu95szSQic9cz4VTWXk8kEZ</li>
          </ul>
        </div>
      </section> */}
    </Layout>
  )
}

export default Contact