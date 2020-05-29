import React from "react"
import { Link, StaticQuery } from "gatsby"
import Helmet from 'react-helmet'

import instagram from "../images/instagram.svg"
// import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
// import codepen from "../images/codepen.svg"
import youtube from "../images/youtube.svg"

import icon from '../images/icon.png'

import "../styles/main.sass"
// import "../styles/main.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks {
              name
              link
            }
            social {
              handle
              youtube
            }
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-column min-vh-100" role="document">
        {console.log(data)}
        <Helmet>
          <meta name="description" content={data.site.siteMetadata.description} />
          <link rel="icon" href={icon} />
        </Helmet>
        <header className="w-100 bg-white sticky top-0 z-1 mt0 mt4-ns">
          <div className="mw7 center ph3 flex flex-wrap justify-between items-center">
            <Link
              to="/"
              className="no-underline lh-solid pv3 f3"
            >
              🧑🏼‍💻
            </Link>
            <nav>
              <ul className="ma0 pa0">
                {data.site.siteMetadata.menuLinks.map((link, i) => (
                  <li
                    key={link.name}
                    className={`dib mb0 ${i > 0 ? "ml3 ml4-ns" : ""}`}
                  >
                    <Link
                      className="no-underline f7 fw4 ttu gray tracked fw5"
                      to={`${link.link}`}
                    >
                      {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-auto">{children}</main>
        <footer className="pv3">
          <div className="mw7 center flex justify-between items-center ph3">
            <ul className="list pa0 ma0 f6">
              <li className="dib mr4 w-auto-ns">
                <a
                  className="no-underline f7 fw4 ttu gray tracked fw5"
                  href="https://ko-fi.com/baillieogrady"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ko-Fi
                </a>
              </li>
              <li className="dib mr4 w-auto-ns">
                <Link
                  className="no-underline f7 fw4 ttu gray tracked fw5"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="pa0 ma0 lh-solid list">
              <li className="dib mr4 w-auto-ns">
                <a
                  className="relative flex items-center justify-center  hover-blue hover-pink"
                  href={`https://instagram.com/${data.site.siteMetadata.social.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" className="h1 w1" />
                </a>
              </li>
              <li className="dib mr4 w-auto-ns">
                <a
                  className="relative flex items-center justify-center  hover-blue"
                  href={`https://github.com/${data.site.siteMetadata.social.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="GitHub" className="h1 w1" />
                </a>
              </li>
              <li className="dib w-auto-ns">
                <a
                  className="relative flex items-center justify-center hover-red"
                  href={`https://www.youtube.com/channel/${data.site.siteMetadata.social.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="youtube" className="h1 w1" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )}
  />
)

export default Layout
