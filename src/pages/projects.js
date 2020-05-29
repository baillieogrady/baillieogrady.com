import React from "react"
import { graphql } from 'gatsby'
import Helmet from "react-helmet"

import Layout from "../layout"
import Intro from "../components/Intro"
import Project from '../components/Project';
import SEO from '../components/SEO';

import config from '../../data/SiteConfig'

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet title={`Projects - ${config.siteTitle}`} />
      <SEO />
      <Intro
        title="Projects"
        text={`
          <p>Most of my client projects are under an <a href="https://en.wikipedia.org/wiki/Non-disclosure_agreement" target="_blank">NDA</a> but here are some recent projects I can share.</p>
          `}
      />
      <div className="posts mw7 center ph3 flex flex-wrap justify-between pb1">
        {projects.map((project, i) => (
          <div className={`mb4 mb5-ns w-100 w-50-ns  ${i === 0 || i % 2 === 0 ? 'pr3-m pr3-l' : 'pl3-m pl3-l'}`}>
            <Project data={project.node} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
            url
            type
            code
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





