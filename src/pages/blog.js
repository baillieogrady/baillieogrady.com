import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../layout"
import Intro from "../components/Intro"
import SEO from "../components/SEO"

import config from '../../data/SiteConfig'
import { formatDate } from '../utils/global'

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.template === "post");
  return (
    <Layout>
      <Intro
        title="Blog"
        text="Blogging my journey."
      />
      <Helmet title={`Blog - ${config.siteTitle}`} />
      <SEO />
      <div className="posts mw7 center ph3 flex flex-wrap flex-column justify-between">
        {posts.map((post, i) => (
          <article key={i} className="mb4">
            <h3 className="ma0 f5 f4-l">
              <Link to={`/${post.node.frontmatter.slug}`} className="dark-gray hover-blue">{post.node.frontmatter.title}</Link>
            </h3>
            <time className="updated dib f7 ttu tracked silver">{formatDate(post.node.frontmatter.date)}</time>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
        limit: 2000
        sort: { fields: [fields___date], order: DESC }
        filter: { frontmatter: { template: { eq: "post" } } }
      ){
      edges {
        node {
          html
          frontmatter {
            title
            url
            template
            slug
            tags
            date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`


