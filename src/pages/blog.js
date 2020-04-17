import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../layout"
import Intro from "../components/Intro"
import SEO from "../components/SEO"

import config from '../../data/SiteConfig'

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.template === "post");
  return (
    <Layout>
      <Intro
        title="Blog"
        text="A collection of blogs about my discoveries in web development."
      />
      <Helmet title={`Blog - ${config.siteTitle}`} />
      <SEO />
      <div className="posts mw7 center ph3 flex flex-wrap justify-between">
        {posts.map((post, i) => (
          <article key={i} className="mb4 m5-ns">
            {console.log(post)}
            <h2 className="f5 f4-ns ma0 mb2">
              <Link to={`/${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</Link>
            </h2>
            <span className="silver f7 db">{post.node.frontmatter.date}</span>
            <p>
              {post.node.excerpt}
            </p>
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
          excerpt
          frontmatter {
            title
            url
            template
            slug
            tags
            date(formatString: "DD/MM/YYYY")
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


