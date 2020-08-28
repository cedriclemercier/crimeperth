import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoBanner from "../components/Banners/infoBanner"
import ContactForm from "../components/Contact/ContactForm"

const Contact = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <InfoBanner>
        <div className="container">
          <p>
            24/7 BIOREMEDIATION SERVICE | CALL 1300 246 429 |
            admin@forensiccleaning.com.au
          </p>
        </div>
      </InfoBanner>
      <section>
        <div class="container">
          <h1>Contact us</h1>
          <p>
            Crime Scene Cleaner  erth provides forensic cleaning and
            biological remediation services across Australia for any homicide,
            suicide, biohazard contamination, methamphetamine contamination or
            trauma scene. When you are faced with the arduous and painful task
            of cleaning up after a crime, death or trauma in your home or
            business.
          </p>
          <ContactForm id="2124" />
        </div>
      </section>
    </Layout>
  )
}

export default Contact
