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
        <SEO postPath={slug} postNode={postNode} />
        <div className="py-16 lg:py-32 bg-brand-grey-200">
          <div className="container lg:pt-32">
            <div className="flex flex-wrap -mx-6 lg:-mx-brand-4">
              <Lead text={{ content: 'BLOG', class: '' }} lineClass="bg-brand-primary-800" />
              <div className="w-full lg:w-7/12 px-6 lg:px-brand-4">
                {post.tags != undefined ? (
                  <ul className="flex mb-6">
                    {post.tags.map(tag => (
                      <li key={`${tag}`} className="inline-block bg-light-grey mr-4">
                        <Link to={`/tags/${tag}`} className="bg-white shadow-brand-xs rounded py-2 px-3 inline-block text-xs uppercase font-medium">
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} className="p-0 mb-6" />
                <time>{date}</time>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="-mx-6 lg:-mx-brand-4">
            <div className="w-full lg:w-9/12 ml-auto mt-16 mb-32 px-6 lg:px-brand-4">
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} className="w-full lg:w-brand-76 wysiwyg" />
            </div>
          </div>
        </div>
        <TwoColumn
          classes="bg-brand-grey-200 relative z-10"
          lineClass="bg-brand-primary-800"
          lead={{ text: "JOIN", class: "text-black" }}
          heading={{ text: "My weekly newsletter", class: "" }}
          text="<p>Summarizing all my weekly coding content including live code examples, blogs, YouTube tutorials and Instagram carousels.</p>"
          form="newsletter"
        />
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