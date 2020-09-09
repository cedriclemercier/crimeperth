import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import "@wordpress/block-library/build-style/style.css"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Main = styled.div`
  padding-top: 90px;

  @media (min-width: 768px) {
    padding: 0;
  }
`

const Layout = ({ children, footerContent }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        <main>{children}</main>
        <Footer content={footerContent} />
      </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
