import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../data/SiteConfig'

import Layout from '../layout'

import Hero from '../components/Hero'
import TagListing from '../components/TagListing'
import SEO from '../components/SEO'

export default class TagTemplate extends Component {
  render() {
    const { tag } = this.props.pageContext
    const postEdges = this.props.data

    return (
      <Layout>
        <Helmet title={`Posts tagged as "${tag}" – ${config.siteTitle}`} />
        <SEO />
        <Hero
          text={`Posts tagged as <u>"${tag}"</u>`}
        />
        <TagListing data={postEdges} heading={{ text: "" }} tag={tag} />
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
          excerpt
          frontmatter {
            slug
            title
            tags
            date
            template
          }
          fields {
            slug
            date
          }
        }
      }
    }
  }
`