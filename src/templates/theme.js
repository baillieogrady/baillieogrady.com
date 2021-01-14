import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layout'
import SEO from '../components/SEO'
import Lead from '../components/Lead'
import TwoColumn from '../components/TwoColumn'
import config from '../../data/SiteConfig'
import { formatDate } from '../utils/global'

export default class PostTemplate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: false,
        }
    }

    render() {
        const { slug } = this.props.pageContext
        const postNode = this.props.data.markdownRemark
        const post = postNode.frontmatter
        const thumbnail = post.thumbnail.childImageSharp.fluid

        if (!post.id) {
            post.id = slug
        }

        if (!post.category_id) {
            post.category_id = config.postDefaultCategoryID
        }

        const date = formatDate(post.date)

        return (
            <Layout padding={true} dark={true}>
                <Helmet title={`${post.title} – ${config.siteTitle}`} />
                <SEO postPath={slug} postNode={postNode} />
                <div className="py-16 lg:py-32 bg-black">
                    <div className="container lg:pt-32">
                        <div className="flex flex-wrap -mx-6 lg:-mx-brand-4">
                            <Lead text={{ content: 'THEME', class: ''}} lineClass="bg-white" dark={true} />
                            <div className="w-full lg:w-7/12 px-6 lg:px-brand-4">
                                <h1 dangerouslySetInnerHTML={{ __html: post.title }} className="mb-3 lg:mb-6 p-0 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="-mx-6 lg:-mx-brand-4">
                        <div className="w-full mb-8 lg:mb-16 px-6 lg:px-brand-4 -mt-8 lg:-mt-16">
                            <Img fluid={thumbnail} className="rounded w-full shadow-brand-xs" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="-mx-6 lg:-mx-brand-4">
                        <div className="flex flex-wrap justify-between items-start">
                            <div className="lg:w-7/12 mb-32 px-6 lg:px-brand-4 order-1 lg:order-0">
                                <div dangerouslySetInnerHTML={{ __html: postNode.html }} className=" wysiwyg wysiwyg--alt" />
                            </div>
                            <div className="lg:w-4/12 px-6 lg:px-brand-4 lg:sticky lg:top-brand-64 order-0 lg:order-1 pb-16">
                                {post.date !== undefined || null ? 
                                <p>
                                    <span className="block text-black font-bold">Last updated:</span>
                                    {date}
                                </p>
                                : null}
                                {post.length !== undefined && post.length !== null ? 
                                <p>
                                    <span className="block text-black font-bold">Project length:</span>
                                    {post.length}
                                </p>
                                : null}
                                {post.stack !== undefined && post.stack !== null ? 
                                <p>
                                    <span className="block text-black font-bold">Stack:</span>
                                    {post.stack}
                                </p>
                                : null}
                                {post.designs !== undefined && post.designs !== null ? 
                                <p>
                                    <span className="block text-black font-bold">Built from:</span>
                                    {post.designs}
                                </p>
                                : null}
                                {(post.visit !== undefined && post.visit !== null) ||
                                 (post.buy !== undefined && post.buy !== null) || 
                                 (post.code !== undefined && post.code !== null) ? 
                                <div>
                                    {post.visit !== undefined && post.visit !== null ? 
                                        <a href={post.visit} target="_blank" className="btn">Visit</a>
                                    : null }
                                    {post.buy !== undefined && post.buy !== null ? 
                                        <a href={post.buy} target="_blank" className="btn btn--ghost ml-3">Buy</a>
                                    : null }
                                    {post.code !== undefined && post.code !== null ? 
                                        <a href={post.code} target="_blank" className="btn btn--ghost ml-3">Code</a>
                                    : null }
                                </div>
                                : null}

                                {console.log(post.code)}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <TwoColumn
                    classes="bg-brand-primary-900 text-white"
                    lineClass="bg-white"
                    lead={{ text: "HIRE ME", class: "text-white" }}
                    heading={{ text: "Let's work together", class: "text-white" }}
                    text="<p>I’m currently available to convert your designs to a simple to use, intuitive, WordPress theme.</p>"
                    btn={{ url: "/convert-your-designs", text: "Convert your designs", classes: "bg-white text-brand-primary-800 hover:bg-gray-200 border-white hover:border-white" }}
                />
            </Layout>
        )
    }
}

/* eslint no-undef: "off" */
export const themeQuery = graphql`
  query ThemeBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        template
        slug
        title
        date
        length
        stack
        designs
        visit
        buy
        code
        thumbnail {
            childImageSharp {
                fluid(maxWidth: 1400, maxHeight: 900){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
      fields {
        slug
        date
      }
    }
  }
`