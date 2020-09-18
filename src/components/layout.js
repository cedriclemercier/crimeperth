import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigate } from "gatsby"
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

const Loading = styled.div`
  display: flex;
  flex: 1;
  min-height: 400px;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children, footerContent }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userIP, setUserIP] = useState("")

  const setDetails = async ip => {
    await setUserIP(ip)
  }

  useEffect(() => {
    axios
      .get(`https://edns.ip-api.com/json/`)
      .then(response => {
        let responseData = response.data
        setDetails(responseData.dns.ip)
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get(`http://ip-api.com/json/${userIP}?fields=countryCode`)
      .then(response => {
        const resData = response.data
        if (
          resData.countryCode === "CN" ||
          resData.countryCode === "IN" ||
          resData.countryCode === "RU"
        ) {
          navigate("/404")
        }
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [userIP, isLoading])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let content = <main>{children}</main>

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        {!isLoading ? (
          content
        ) : (
          <Loading>
            <div>Loading...</div>
          </Loading>
        )}
        <Footer content={footerContent} />
      </Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
