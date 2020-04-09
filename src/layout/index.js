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
        <Helmet>
          <meta name="description" content={data.site.siteMetadata.description} />
          <link rel="icon" href={icon} />
        </Helmet>
        <header className="w-100 bg-white sticky top-0 z-1 mt0 mt4-ns">
          <div className="mw7 center ph3 flex flex-wrap justify-between items-center">
            <Link
              to="/"
              className="near-black no-underline b lh-solid pv3 box-shadow-none tracked f3"
            >
              {/* <img src={icon} alt="logo" className="h2 w2" /> */}
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
                      className="no-underline dark-gray box-shadow-none f6 f5-ns"
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
        <main className="pt4 pt5-ns flex-auto">{children}</main>
        <footer className="pv4 pv5-l">
          <div className="mw7 center flex justify-between items-center">
            <ul className="pa0 ma0 lh-solid list ph3 f7 f6-ns">
              <li className="dib mr4 w-auto-ns">
                <a
                  className="box-shadow-none"
                  href="https://ko-fi.com/baillieogrady"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ko-Fi
                </a>
              </li>
              <li className="dib mr4 w-auto-ns">
                <Link
                  className="box-shadow-none"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="pa0 ma0 lh-solid list ph3">
              <li className="dib mr4 w-auto-ns">
                <a
                  className="relative flex items-center justify-center box-shadow-none hover-blue hover-pink"
                  href={`https://instagram.com/${data.site.siteMetadata.social.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" className="h1 w1" />
                </a>
              </li>
              {/* <li className="dib mr4 w-auto-ns">
                <a
                  className="relative flex items-center justify-center box-shadow-none hover-blue"
                  href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" className="h1 w1" />
                </a>
              </li> */}
              <li className="dib mr4 w-auto-ns">
                <a
                  className="relative flex items-center justify-center box-shadow-none hover-blue"
                  href={`https://github.com/${data.site.siteMetadata.social.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="GitHub" className="h1 w1" />
                </a>
              </li>
              {/* <li className="dib mr4 w-auto-ns">
                <a
                  className="relative flex items-center justify-center box-shadow-none hover-blue"
                  href={`https://codepen.io/${data.site.siteMetadata.social.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={codepen} alt="codepen" className="h1 w1" />
                </a>
              </li> */}
              <li className="dib w-auto-ns">
                <a
                  className="relative flex items-center justify-center box-shadow-none hover-red"
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
