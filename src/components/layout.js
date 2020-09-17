import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

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
  const [userIP, setUserIP] = useState("")

  useEffect(() => {
    axios
      .get("https://edns.ip-api.com/json", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(response => {
        let responseData = response.data
        console.log(responseData)
        setUserIP(responseData.dns.ip)
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get(`https://ip-api.com/json/${userIP}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(response => {
        const resData = response.data
        if (
          resData.countryCode === "CN" ||
          resData.countryCode === "IN" ||
          resData.countryCode === "RU"
        ) {
          window.location("/404")
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [userIP])

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
