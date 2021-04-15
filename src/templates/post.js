import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
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

    console.log(postNode);

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    }

    const date = formatDate(post.date)
    return (
      <Layout padding={true}>
        <Helmet title={`${post.title} – ${config.siteTitle}`} />
        <SEO postPath={slug} postNode={postNode} postSEO={true} />
        <div className="py-20 pt-20 lg:pt-32 bg-grey-100">
          <div className="container">
            <div className="flex flex-wrap -mx-6 lg:-mx-brand-4">
              <Lead text={{ content: 'BLOG', class: '' }} lineClass="bg-black" />
              <div className="w-full lg:w-7/12 px-6 lg:px-brand-4">
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} className="p-0 mb-6" />
                <time>{date}</time>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="-mx-6 lg:-mx-brand-4">
            <div className="w-full lg:w-9/12 ml-auto mt-16 mb-16 lg:mb-32 px-6 lg:px-brand-4">
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} className="w-full lg:w-brand-76 wysiwyg" />
            </div>
          </div>
        </div>
      <div className="bg-grey-100">
        <TwoColumn
          classes=""
          lineClass="bg-black"
          lead={{ text: "I'M AVAILABLE", class: "text-black" }}
          heading={{ text: "Let's work together!", class: "" }}
          text="<p>I’m currently available to convert your custom web designs to a simple to a highly optimised, intuitive WordPress theme.</p>"
          btn={{ url: "/contact", text: "Hire me", classes: "bg-blue-100 text-white hover:bg-brand-primary-900" }}
        />
      </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`