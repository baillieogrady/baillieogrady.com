import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../data/SiteConfig'

import Layout from '../layout'
import PostListing from '../components/PostListing'
import Intro from '../components/Intro'

export default class TagTemplate extends Component {
  render() {
    const { tag } = this.props.pageContext
    const postEdges = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <Helmet title={`Posts tagged as "${tag}" – ${config.siteTitle}`} />
        <Intro title={`Posts tagged as <u>"${tag}"</u>`} />
        <PostListing postEdges={postEdges} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "DD/MM/YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            date(formatString: "DD/MM/YYYY")
            template
          }
        }
      }
    }
  }
`