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
            <Layout padding={true}>
                <Helmet title={`${post.title} – ${config.siteTitle}`} />
                <SEO postPath={slug} postNode={postNode} />
                <div className="py-16 lg:py-32 bg-brand-grey-200">
                    <div className="container lg:pt-32">
                        <div className="flex flex-wrap -mx-6 lg:-mx-brand-8">
                            <Lead text={{ content: 'THEMES', class: '' }} lineClass="bg-brand-primary-800" />
                            <div className="w-full lg:w-7/12 px-6 lg:px-brand-8">
                                <h1 dangerouslySetInnerHTML={{ __html: post.title }} className="mb-3 lg:mb-6 p-0" />
                                <time>{date}</time>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-brand-xs sticky top-brand-80 lg:top-0 left-0 z-20">
                    <div className="container">
                        <div className="-mx-6 lg:-mx-brand-8">
                            <div className="w-full lg:w-9/12 ml-auto px-6 lg:px-brand-8">
                                <ul className="text-black sticky top-0 z-10 bg-white">
                                    {post.url != undefined ?
                                        <li className="mr-8 inline-block">
                                            <a href={post.url} target="_blank" className="py-6 inline-block">Visit</a>
                                        </li>
                                        : null
                                    }
                                    {post.download != undefined ?
                                        <li className="mr-8 inline-block">
                                            <a href={post.download} className="py-6 inline-block" download>Download</a>
                                        </li>
                                        : null
                                    }
                                    {post.code != undefined ?
                                        <li className="mr-8 inline-block">
                                            <a href={post.code} target="_blank" className="py-6 inline-block">Code</a>
                                        </li>
                                        : null
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="-mx-6 lg:-mx-brand-8">
                        <div className="w-full lg:w-9/12 ml-auto mb-32 px-6 lg:px-brand-8">
                            <Img fluid={thumbnail} className="mt-16 rounded w-full lg:w-brand-76" />
                            <div dangerouslySetInnerHTML={{ __html: postNode.html }} className="w-full lg:w-brand-76 mt-8 wysiwyg" />
                        </div>
                    </div>
                </div>
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
}

/* eslint no-undef: "off" */
export const themeQuery = graphql`
  query ThemeBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        date
        template
        code
        url
        download
        thumbnail {
            childImageSharp {
                fluid(maxWidth: 629, maxHeight: 440){
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