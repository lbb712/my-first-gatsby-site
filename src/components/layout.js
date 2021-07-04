import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    header,
    footer,
    siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={header}>
        <nav>
          <ul>
            <li className={navLinkItem} list-style="none" float="left">
              <a href="/" className={navLinks}>
                Home
              </a>
            </li>
            <li className={navLinkItem} list-style="none" float="left">
              <a href="/about" className={navLinks}>
                About
              </a>
            </li>
            <li className={navLinkItem} list-style="none" float="left">
              <a href="/week1" className={navLinks}>
                Week 1
              </a>
            </li>
            <li className={navLinkItem} list-style="none" float="left">
              <a href="/test" className={navLinks}>
                Comments
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>     
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </body>
    </main>
  )
}

export default Layout
