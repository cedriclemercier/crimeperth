import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/Banners/heroBanner"
import InfoBanner from "../components/Banners/infoBanner"
import WhiteBox from "../components/Boxes/whitebox"
import DefaultButton from "../components/UI/Button/DefaultButton"
import ContactForm from "../components/Contact/ContactForm"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          adminUrl
        }
      }
    

      wpPage(isFrontPage: { eq: true }) {
        id
        slug
        title
        content
        seo {
          canonical
          metaDesc
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphDescription
          opengraphModifiedTime
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          canonical
        }
        acfHeader {
          bannerHeight
          bannerImage
          subtitle
          title
        }
        acfBanner {
          bannerContent
        }
        acfFooter {
          numberOfColumns
          footerColumn4
          footerColumn3
          footerColumn2
          footerColumn1
        }
      }
    }
  `)

  const func = () => {
    let acc = document.querySelectorAll(".accordion")
    let i

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active")
        let panel = this.nextElementSibling
        if (panel.style.display === "block") {
          panel.style.display = "none"
        } else {
          panel.style.display = "block"
        }
      })
    }
  }

  useEffect(() => {
    func()
  }, [])

  console.log("LINK TO BANNER" + data.wpPage.acfHeader.bannerImage);

  return (
    <Layout footerContent={data.wpPage.acfFooter}>
      <SEO title={data.wpPage.title} yoast={data.wpPage.seo} />
      <InfoBanner>
        <div className="container">
          <p>{data.wpPage.acfBanner.bannerContent}</p>
        </div>
      </InfoBanner>
      <HeroBanner
        size="large"
        imageUrl={data.site.siteMetadata.adminUrl+data.wpPage.acfHeader.bannerImage}
        height={data.wpPage.acfHeader.bannerHeight}
      >
        <div className="container">
          <div className="row-flex">
            <div className="col-1">
              <WhiteBox>
                <h2 className="text-primary">{data.wpPage.acfHeader.title}</h2>
                <p>{data.wpPage.acfHeader.subtitle}</p>
                <DefaultButton to="tel:1300246429">
                  CALL 1300 249 429
                </DefaultButton>
              </WhiteBox>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </HeroBanner>

      <section>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }}></div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Contact us</h2>
          <ContactForm id="2124" />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
