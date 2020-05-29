import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/SEO'
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
    // const { comments, error } = this.state
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
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} />
        <div className="mw7 ph3 center flex items-start mb3 mb5-ns pt5">
          <article className="w-100">
            <header className="mb4 mb5-ns">
              <h1 className="ma0 mb3" dangerouslySetInnerHTML={{ __html: post.title }} />
              <time className="updated dib f7 mb3 ttu tracked mb4 silver">{date}</time>
              {post.tags != undefined ? (
                <ul className="list pa0 ma0">
                  {post.tags.map(tag => (
                    <li key={`${tag}`} className="dib bg-light-grey ma0 mr2">
                      <Link to={`/tags/${tag}/`} className="dark-gray fw5 dib pv1 ph2 bg-near-white br1 f7 dim mid-gray">
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </header>
            <div className="flex flex-column relative wysiwyg">
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </div>
          </article>
        </div>
        {/* <div className="mw7 ph3 center">
          <hr style={{ borderBottom: "1px solid #999" }} className="bn mv4 mv5-ns" />
          <h3>Helpful?</h3>
          <p>I really enjoy writing these articles and any support will only fuel me to create more. You can support me <a href="https://ko-fi.com/baillieogrady">here</a>.</p>
        </div> */}
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