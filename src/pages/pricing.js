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
                    <p>See my process <a href="/building-a-wordpress-theme/">here</a>.</p>
                `}
            />
            <div className="mw7 center ph3 flex flex-wrap justify-between mb5">
                <div className="w-100 w-50-m w-50-l pr3-m pr3-l mb5 mb0-ns">
                    <div className="shadow-4 flex flex-column justify-between h-100 br2">
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
                </div>
                <div className="w-100 w-50-m w-50-l pl3-m pl3-l">
                    <div className="shadow-4 flex flex-column justify-between br2">
                        <div className="pa4 pb0">
                            <h2 className="ma0">Brochure</h2>
                            <p className="ma0 f3">£1,700</p>
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
            </div>

        </Layout>
    )
}

export default Pricing





