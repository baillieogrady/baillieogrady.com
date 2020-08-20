import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import _ from 'lodash';

import Card from './Card';

const ThemesListing = ({ heading, page }) => {
  return (
    <StaticQuery
      query={graphql`
        query ThemeListingQuery {
          allMarkdownRemark(filter: {frontmatter: {template: {eq: "theme", }}}, limit: 999, sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                html
                excerpt
                frontmatter {
                  title
                  date
                  slug
                  url
                  code
                  thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 348, maxHeight: 256){
                          ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                  }
                }
              }
            }
          }
        }
    `}
      render={data => (
        <div className="w-full lg:w-9/12 px-6 lg:px-brand-4">
          {heading.text.length > 0 ?
            <h2 className="mb-16">{heading.text}</h2>
            : null
          }
          <div className="flex flex-wrap justify-between">
            {data.allMarkdownRemark.edges.map((item, i) => {
              let data = item.node;

              if (i > 3 && page === "home") {
                return;
              } else {
                return <Card type="theme" theme={data} key={`themeCard-${i}`} />;
              }

            })}
            {/* {page === "home" ? <Link to="/themes/" className="btn-link">VIEW MORE THEMES</Link> : null} */}
          </div>
        </div>
      )}
    />
  )
}

export default ThemesListing