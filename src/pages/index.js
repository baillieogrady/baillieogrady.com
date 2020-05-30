import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../layout"
import Intro from "../components/Intro"
import Theme from "../components/Theme"
import SEO from "../components/SEO"

import { formatDate } from '../utils/global'
import config from '../../data/SiteConfig'

const Index = ({ data }) => {
  const themes = data.themes;
  const posts = data.posts;

  return (
    <Layout>
      <Helmet title={`${config.siteTitle} – Freelance WordPress Developer`} />
      <SEO />
      <Intro
        title={`<a href="https://instagram.com/baillieogrady" class="dark-gray fw6">Hi, I'm Baillie</a>`}
        text={`
          <p class="pr4-ns">A freelance WordPress developer from <a href="https://en.wikipedia.org/wiki/Manchester" rel="noopener">Manchester</a>. I convert custom web designs to WordPress themes.
          </p>
        `}
        page="index"
      />
      <section className="themes mb5 mb6-ns">
        <div className="mw7 center ph3">
          <div className="mb4">
            <h2 className="ma0">Themes</h2>
          </div>
          <div className="flex-ns justify-between flex-wrap">
            {themes.edges.map((theme, i) => (
              <div key={i} className={`w-100 w-50-m w-50-l pb3 ${i === 0 || i % 2 === 0 ? 'pr3-ns' : 'pl3-ns'}`}>
                <Theme data={theme.node} button={false} page="index" />
              </div>
            ))}
          </div>
          <Link className="f7 fw6 pv2 ph3 ttu white tracked br2 dim bg-blue" to="/themes">VIEW MORE</Link>
        </div>
      </section>
      <section className="posts mb5">
        <div className="mw7 center ph3">
          <div className="mb4">
            <h2 className="ma0">Posts</h2>
          </div>
          {posts.edges.map((post, i) => (
            <article key={i} className="mb4">
              <h3 className="ma0 f5 f4-l">
                <Link to={`/${post.node.frontmatter.slug}`} className="hover-blue dark-gray">{post.node.frontmatter.title}</Link>
              </h3>
              <time className="updated dib f7 ttu tracked silver">{formatDate(post.node.frontmatter.date)}</time>
            </article>
          ))}
          <div className="mt3">
            <Link className="f7 fw6 pv2 ph3 ttu white tracked br2 dim  bg-blue" to="/blog">VIEW MORE</Link>
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            url
            type
            template
            slug
            date
          }
        }
      }
    }
    themes: allMarkdownRemark(
      limit: 2
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { type: { eq: "theme" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title 
            url
            type
            slug
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