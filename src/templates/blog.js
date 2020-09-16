import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoBanner from "../components/Banners/infoBanner"

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      slug
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
      acfBanner {
        bannerContent
      }
    }
  }
`

const Blog = props => {
  let pageContent = (
    <section>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: props.data.wpPost.content }}
      ></div>
    </section>
  )

  return (
    <Layout>
      <SEO title={props.data.wpPost.title} yoast={props.data.wpPost.seo} />
      <InfoBanner>
        <div className="container">
          <p>{props.data.wpPost.acfBanner.bannerContent}</p>
        </div>
      </InfoBanner>
      {pageContent}
    </Layout>
  )
}

export default Blog
