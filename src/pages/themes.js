import React from "react"
import { graphql } from 'gatsby'
import Helmet from "react-helmet"

import Layout from "../layout"
import Intro from "../components/Intro"
import Project from '../components/Project';
import SEO from '../components/SEO';

import config from '../../data/SiteConfig'

const Themes = ({ data }) => {
  const themes = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet title={`Themes - ${config.siteTitle}`} />
      <SEO />
      <Intro
        title="Themes"
        page="themes"
        text={`
          <p><strong>Note:</strong> all my themes are built with <a href="https://roots.io/sage/">Roots Sage</a>, so once you've downloaded the theme, you have to upload it via FTP rather than through the WordPress GUI.</p>
          `}
      />
      <div className="mw7 center ph3 flex flex-wrap justify-between">
        {themes.map((theme, i) => (
          <div className={`mb4 mb5-ns w-100 w-50-ns  ${i === 0 || i % 2 === 0 ? 'pr3-m pr3-l' : 'pl3-m pl3-l'}`}>
            <Project data={theme.node} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Themes

export const query = graphql`
  query ThemesQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "theme"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
            type
            demo
            code
            download
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





