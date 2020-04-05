import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../layout"
import Intro from "../components/Intro"
import Project from "../components/Project"
import SEO from "../components/SEO"

import config from '../../data/SiteConfig'

const Index = ({ data }) => {
  const projects = data.projects;
  const posts = data.posts;
  return (
    <Layout>
      <Helmet title={`${config.siteTitle} – Freelance WordPress Developer`} />
      <SEO />
      <Intro
        title="Baillie O'Grady"
        text={`
          <div>
          <p>I'm a freelance WordPress Developer from <a href="https://en.wikipedia.org/wiki/Manchester"  rel="noopener">Manchester</a>, with over 4 years experience in web development.</p>
          <p>I specialise in converting custom designs to optimised, responsive and accessible websites. I frequently build bespoke <a href="/themes" rel="noopener">WordPress themes</a> and experiment with <a href="https://www.gatsbyjs.org/" rel="noopener">GatsbyJS</a>.</p>
          <p>Visit my <a href="https://www.instagram.com/baillieogrady/">Instagram</a> for a daily documentation of my coding process.</p>
        `}
        page="index"
      />
      <section className="projects pv4 pv5-ns bg-dark-gray white">
        <div className="mw7 center ph3">
          <div className="mb3 mb4-ns">
            <h2 className="mt0">Projects</h2>
          </div>
          <div className="flex-ns justify-between flex-wrap">
            {projects.edges.map((project, i) => (
              <div key={i} className={`w-100 w-50-m w-50-l pb4 pb5-ns ${i === 0 || i % 2 === 0 ? 'pr3-ns' : 'pl3-ns'}`}>
                <Project data={project.node} button={false} />
              </div>
            ))}
          </div>
          <p className="gatsby-link mt4 mt0-ns">
            <Link to="/projects">VIEW MORE</Link>
          </p>
        </div>
      </section>
      <section className="posts pv4 pv5-ns">
        <div className="mw7 center ph3">
          <div className="mb3 mb4-ns">
            <h2 className="mt0">Posts</h2>
          </div>
          {posts.edges.map((post, i) => (
            <article key={i} className="mb3 mb4-ns">
              <h3 className="ma0 mb2 mt4">
                <Link to={`/${post.node.frontmatter.slug}`} >{post.node.frontmatter.title}</Link>
              </h3>
              <span className="silver f7 db">{post.node.frontmatter.date}</span>
            </article>
          ))}
          <p className="gatsby-link mt4 mt0-ns">
            <Link to="/blog">VIEW MORE</Link>
          </p>
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
            date(formatString: "DD/MM/YYYY")
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