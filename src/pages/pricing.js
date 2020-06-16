import React from "react"
import { Link } from 'gatsby'
import Helmet from "react-helmet"

import Layout from "../layout"
import Intro from "../components/Intro"
import SEO from '../components/SEO';

import config from '../../data/SiteConfig'

const Pricing = () => {
    return (
        <Layout>
            <Helmet title={`Pricing - ${config.siteTitle}`} />
            <SEO />
            <Intro
                title="Pricing"
                text={`
                    <p>Simple pricing guidelines to convert your custom designs to a modern WordPress theme.</p>
                    <p>See my process <a href="/building-a-wordpress-theme/">here.</a></p>
                `}
            />
            <div className="mw7 center ph3 flex flex-wrap justify-between mb4 mb5-ns">
                <div className="w-100 w-auto-md w-auto-l br2 shadow-4 mr2-l flex flex-column justify-between mb4 mb0-l">
                    <div className="pa4 pb0">
                        <h2 className="ma0">Landing</h2>
                        <p className="ma0 f3">£750</p>
                        <ul className="list pa0 pt4">
                            <li>Tailored to your custom designs</li>
                            <li>Up to 4 x custom Gutenberg blocks</li>
                            <li>Responsive</li>
                            <li>Optimised</li>
                            <li className="mb0">Modern browser tested</li>
                        </ul>
                    </div>
                    <div className="pa4">
                        <Link to="/contact" className="f7 fw7 pv2 ph3 ttu tracked br2 dim dib white bg-blue mt4 w-100 tc">CONVERT MY DESIGN</Link>
                    </div>
                </div>
                <div className="w-100 w-auto-md w-auto-l br2 shadow-4 ml2-l flex flex-column justify-between">
                    <div className="pa4 pb0">
                        <h2 className="ma0">Brochure</h2>
                        <p className="ma0 f3">£1,500</p>
                        <ul className="list pa0 pt4">
                            <li>Tailored to your custom designs</li>
                            <li>Up to 13 x custom Gutenberg blocks</li>
                            <li>Blog</li>
                            <li>Responsive</li>
                            <li>Optimised</li>
                            <li className="mb0">Modern browser tested</li>
                        </ul>
                    </div>
                    <div className="pa4">
                        <Link to="/contact" className="f7 fw7 pv2 ph3 ttu tracked br2 dim dib white bg-blue mt4 w-100 tc">CONVERT MY DESIGN</Link>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Pricing





