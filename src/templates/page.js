import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from "../components/Banners/heroBanner"
import InfoBanner from "../components/Banners/infoBanner"
import BlogItem from "../components/Blog/BlogItem"

export const query = graphql`
  query($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      title
      slug
      content
      isPostsPage
      seo {
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
      acfFooter {
        numberOfColumns
        footerColumn4
        footerColumn3
        footerColumn2
        footerColumn1
      }
    }
    allWpPost {
      edges {
        node {
          date
          title
          content
          slug
          tags {
            nodes {
              name
              slug
              id
            }
          }
          author {
            node {
              name
            }
          }
          excerpt
        }
      }
    }
  }
`

const Page = props => {
  let pageContent = (
    <section>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: props.data.wpPage.content }}
      ></div>
    </section>
  )

  // If the current page queried is a blog "posts" page, then query list of posts
  if (props.data.wpPage.isPostsPage) {
    pageContent = (
      <section>
        <div className="container">
          {props.data.allWpPost.edges.map(el => {
            return (
              <BlogItem
                title={el.node.title}
                content={el.node.content}
                excerpt={el.node.excerpt}
                author={el.node.author}
                tags={el.node.tags}
                slug={el.node.slug}
                date={el.node.date}
                key={el.node.slug}
              />
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <Layout footerContent={props.data.wpPage.acfFooter}>
      <SEO title={props.data.wpPage.title} yoast={props.data.wpPage.seo} />
      <InfoBanner>
        <div className="container">
          <p>{props.data.wpPage.acfBanner.bannerContent}</p>
        </div>
      </InfoBanner>
      <HeroBanner size="small">
        <div className="container">
          <h1 className="text-primary">{props.data.wpPage.title}</h1>
        </div>
      </HeroBanner>

      {pageContent}
    </Layout>
  )
}

export default Page
