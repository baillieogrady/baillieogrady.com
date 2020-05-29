import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../layout"
import Intro from "../components/Intro"
import Project from "../components/Project"
import SEO from "../components/SEO"

import { formatDate } from '../utils/global'
import config from '../../data/SiteConfig'

const Index = ({ data }) => {
  const projects = data.projects;
  const posts = data.posts;

  return (
    <Layout>
      <Helmet title={`${config.siteTitle} – Freelance WordPress Developer`} />
      <SEO />
      <Intro
        title={`<a href="https://instagram.com/baillieogrady" class="dark-gray fw6">@baillieogrady</a>`}
        text={`
          <div>
          <p>A freelance WordPress developer from <a href="https://en.wikipedia.org/wiki/Manchester" rel="noopener">Manchester</a>. I convert custom designs to optimised, responsive and accessible WordPress websites.
          </p>
          <p>
          I enjoy documenting my code through <a href="https://www.instagram.com/baillieogrady/">Instagram</a>, <a href="https://www.youtube.com/channel/UCNfYodcO72M8CbCdR-pTnGg">YouTube</a>, <a href="/blogs">blogs</a> and <a href="/themes">themes.</a></p>
        `}
        page="index"
      />
      <section className="projects pv4 pv5-ns bg-dark-gray white">
        <div className="mw7 center ph3">
          <div className="mb4 mb5-ns">
            <h2 className="ma0">Projects</h2>
          </div>
          <div className="flex-ns justify-between flex-wrap">
            {projects.edges.map((project, i) => (
              <div key={i} className={`w-100 w-50-m w-50-l pb4 pb5-ns ${i === 0 || i % 2 === 0 ? 'pr3-ns' : 'pl3-ns'}`}>
                <Project data={project.node} button={false} page="index" />
              </div>
            ))}
          </div>
          <Link className="f7 fw6 pv2 ph3 ttu white tracked br2 dim  bg-blue" to="/projects">VIEW MORE</Link>
        </div>
      </section>
      <section className="posts pv4 pv5-ns">
        <div className="mw7 center ph3">
          <div className="mb4 mb5-ns">
            <h2 className="ma0">Posts</h2>
          </div>
          {posts.edges.map((post, i) => (
            <article key={i} className="mb4 mb5-ns">
              <h3 className="ma0 mb2">
                <Link to={`/${post.node.frontmatter.slug}`} className="hover-blue dark-gray">{post.node.frontmatter.title}</Link>
              </h3>
              <time className="updated dib f7 ttu tracked silver">{formatDate(post.node.frontmatter.date)}</time>
            </article>
          ))}
          <Link className="f7 fw6 pv2 ph3 ttu white tracked br2 dim  bg-blue" to="/blog">VIEW MORE</Link>
        </div>
      </section>
    </Layout>
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
    projects: allMarkdownRemark(
      limit: 2
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
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