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
      wpPage(isFrontPage: { eq: true }) {
        id
        slug
        title
        content
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

  return (
    <Layout>
      <SEO title={data.wpPage.title} />
      <InfoBanner>
        <div className="container">
          <p>24/7 BIOREMEDIATION SERVICE | CALL 1300 246 429</p>
        </div>
      </InfoBanner>
      <HeroBanner size="large">
        <div className="container">
          <div className="row-flex">
            <div className="col-1">
              <WhiteBox>
                <h2 className="text-primary">
                  The Biohazard Cleaners Experts in Perth
                </h2>
                <p>
                  Look no further for unexpected bio hazardous situations that
                  requires a company with a discrete service
                </p>
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
        <div class="container">
          <h2>Contact us</h2>
          <ContactForm id="2124" />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
