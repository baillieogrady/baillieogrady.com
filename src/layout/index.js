import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Logo from "../components/Logo"

import favicon from '../images/favicon.png'

import "../styles/main.css"

const Layout = ({ children, padding }) => {
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <header className="sticky lg:absolute left-0 top-0 z-50 py-6 lg:py-brand-10 bg-white lg:bg-transparent w-full shadow-brand-xs lg:shadow-none">
        <div className="flex justify-between items-center container">
          <Logo />
          <nav className="hidden lg:block">
            <ul className="ma-0 pa-0">
              {data.site.siteMetadata.menuLinks.map((link, i) => (
                <li
                  key={link.name}
                  className={`inline-block ${i > 0 ? "ml-10" : ""}`}
                >
                  <Link
                    to={`${link.link}`}
                  >
                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                  </Link>
                </li>
              ))}
              <li className="inline-block ml-10">
                <Link to="/convert-your-designs/" className="btn hover:bg-brand-primary-900 transition ease-in-out duration-200">Convert your designs</Link>
              </li>
            </ul>
          </nav>
          <a href="#" className="lg:hidden text-brand-grey-400 hover:text-brand-grey-500 transiton duration-200 ease-in-out" onClick={handleBurger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="32"
              fill="none"
              viewBox="0 0 34 32"
            >
              <rect width="33.646" height="32" fill="currentColor" rx="4"></rect>
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
        <div className={`${burger ? "block lg:hidden" : "hidden lg:hidden"} absolute top-0 left-0 w-brand-mobile-full bg-white rounded shadow-brand-xs m-2 p-4 `}>
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <a href="#" className="lg:hidden text-brand-grey-400 hover:text-brand-grey-500 transiton duration-200 ease-in-out" onClick={handleBurger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="32"
                fill="none"
                viewBox="0 0 34 32"
              >
                <rect width="33.646" height="32" fill="currentColor" rx="4"></rect>
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
          <nav>
            <ul className="ma-0 pa-0">
              {data.site.siteMetadata.menuLinks.map((link, i) => (
                <li
                  key={link.name}
                  className="mt-4"
                >
                  <Link
                    to={`${link.link}`}
                  >
                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                  </Link>
                </li>
              ))}
              <li className="block mt-8">
                <Link to="/convert-your-designs" className="btn w-full hover:bg-brand-primary-900 transiton duration-200 ease-in-out">Convert your designs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={`flex-auto relative ${padding ? "" : "lg:mt-32"}`}>
        {children}
      </main>
      <footer className="bg-black text-white w-full pt-16 lg:pt-32 pb-8">
        <div className="container">
          <div className="flex flex-wrap justify-between -mx-6 lg:-mx-brand-8">
            <div className="lg:w-4/12 px-6 lg:px-brand-8">
              <Logo classes="text-white" />
              <p className="text-brand-grey-400 mt-8 mb-20 lg:mb-0">
                Over 4 years experience converting completely custom web designs to unique WordPress themes.
              </p>
            </div>
            <div className="flex w-full lg:w-4/12 px-6 lg:px-brand-8">
              <div className="w-1/2">
                <p className="m-0 tracking-brand-widest font-bold">LINKS</p>
                <nav className="mt-8">
                  <Link to="/about/" className="text-brand-grey-400 block pb-2">About</Link>
                  <Link to="/contact/" className="text-brand-grey-400 block pb-2">Contact</Link>
                  <Link to="/themes/" className="text-brand-grey-400 block pb-2">Themes</Link>
                  <Link to="/blog/" className="text-brand-grey-400 block pb-2">Blog</Link>
                  <Link to="/get-that-developer-job/" className="text-brand-grey-400 block">Get that developer job</Link>
                </nav>
              </div>
              <div className="w-1/2">
                <p className="m-0 tracking-brand-widest font-bold">SOCIAL</p>
                <ul className="list-none mt-8">
                  <li>
                    <a href="https://www.instagram.com/baillieogrady/" target="_blank" className="text-brand-grey-400 block pb-2">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/baillieogrady/" target="_blank" className="text-brand-grey-400 block pb-2">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCNfYodcO72M8CbCdR-pTnGg" target="_blank" className="text-brand-grey-400 block pb-2">YouTube</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/iambaillieogrady" target="_blank" className="text-brand-grey-400 block">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-brand-grey-500 mt-20 mb-0">&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div >
  )
}

export default Layout
