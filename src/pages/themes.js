import React from "react"
import { graphql } from 'gatsby'
import Helmet from "react-helmet"

import Layout from "../layout"
import Intro from "../components/Intro"
import Theme from '../components/Theme';
import SEO from '../components/SEO';

import config from '../../data/SiteConfig'

const Themes = ({ data }) => {
  const Themes = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet title={`Themes - ${config.siteTitle}`} />
      <SEO />
      <Intro
        title="Themes"
        text={`
          <p>A collection of WordPress themes I've built.</p>
          `}
      />
      <div className="posts mw7 center ph3 flex flex-wrap justify-between pb1">
        {Themes.map((theme, i) => (
          <div key={i} className={`mb4 mb5-ns w-100 w-50-ns  ${i === 0 || i % 2 === 0 ? 'pr3-m pr3-l' : 'pl3-m pl3-l'}`}>
            <Theme data={theme.node} />
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





