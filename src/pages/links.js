import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../layout"
import Intro from "../components/Intro"
import SEO from "../components/SEO"

import baillie from "../images/baillie.jpg"

import config from '../../data/SiteConfig'


const Links = () => {
    return (
        <Layout>
            <Helmet title={`Links - ${config.siteTitle}`} />
            <SEO />
            {/* <Intro
                title="Links"
            /> */}
            <section class="mb4 mb5-ns">
                <div class="mw7 center ph3 tc">
                    <img src={baillie} alt="Baillie O'Grady" className="h4 br-pill" />
                    <ul className="ma0 list mt3">
                        <li className="mb3">
                            <a href="https://codepen.io/collection/nVybwy" class="pv3 white bg-blue w-100 db">CodePen</a>
                        </li>
                        <li className="mb3">
                            <a href="https://github.com/baillieogrady" class="pv3 white bg-blue w-100 db">GitHub</a>
                        </li>
                        <li className="mb3">
                            <Link to="/themes" className="pv3 white bg-blue w-100 db">Themes</Link>
                        </li>
                        <li className="mb3">
                            <a href="https://www.youtube.com/channel/UCNfYodcO72M8CbCdR-pTnGg" class="pv3 white bg-blue w-100 db">YouTube</a>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default Links