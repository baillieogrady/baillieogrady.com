import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Logo from "../components/Logo"

import favicon from '../images/favicon.png'

import Social from '../components/Social';

import "../styles/main.css"

const Layout = ({ children, padding, dark, alt }) => {
  const [burger, setBurger] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `
  )

  function handleBurger(e) {
    e.preventDefault();
    setBurger(!burger);
  }

  return (
    <div className="flex flex-col min-vh-100 relative" role="document">
      <Helmet>
        <meta name="description" content={data.site.siteMetadata.description} />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <header className={`pt-6 lg:pt-12 w-full relative z-20 ${alt ? "bg-white" : "bg-grey-100"}`}>
        <div className="flex justify-between items-center container relative">
          <Logo />
          <div className="flex items-center">
            <Link to="/contact/" className="btn btn--small mr-2 lg:mr-5">Hire me</Link>
            <a href="#" className="text-transparent hover:text-grey-100 transiton duration-200 ease-in-out" onClick={handleBurger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="32"
                fill="none"
                viewBox="0 0 34 32"
              >
                {/* <rect width="33.646" height="32" fill="currentColor" rx="4"></rect> */}
                <path
                  stroke="#28293D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 13h12M11 18h12"
                ></path>
              </svg>
            </a>
          </div>
          {/* menu */}
          <div className={`${burger ? "block" : "hidden lg:hidden"} rounded-lg absolute right-12 -top-12 bg-white  shadow-lg mt-0 z-10 flex flex-col justify-between lg:w-auto lg:min-w-334 lg:-top-28 lg:-right-26 w-mobile`}>
            <div className="flex justify-between items-start pb-8 w-full pt-6 px-6 lg:pt-8 lg:px-8 border border-grey-100 border-b-0 rounded-t-lg h-full">
              <nav>
                <ul className="ma-0 pa-0">
                  {data.site.siteMetadata.menuLinks.map((link, i) => (
                    <li
                      key={link.name}
                      className="mb-5 text-sm font-semibold"
                    >
                      <Link
                        to={`${link.link}`}
                      >
                        {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <a href="#" className="text-transparent hover:text-grey-100 transiton duration-200 ease-in-out -right-12 -top-12 relative lg:top-0 lg:right-0" onClick={handleBurger}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="32"
                  fill="none"
                >
                  {/* <rect width="33.646" height="32" fill="currentColor" rx="4"></rect> */}
                  <path
                    stroke="#28293D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 12l8.485 8.485M13 20.485L21.485 12"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="bg-black p-6 lg:p-8 rounded-b-lg">
              <Social />
            </div>
          </div>
        </div>
      </header>
      <main className={`flex-auto relative`}>
        {children}
      </main>
      <footer className="bg-black text-white w-full py-16">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-6 lg:-mx-brand-8">
            <div className="lg:w-4/12 px-6 lg:px-brand-8">
              <p className="font-bold mb-2">EST. 2016</p>
              <p className="mb-0">Creating bespoke WordPress themes.</p>
            </div>
            <div className="flex w-full lg:w-4/12 px-6 lg:px-brand-8 justify-start lg:justify-end mt-8 lg:mt-0">
              <Social />
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Layout
