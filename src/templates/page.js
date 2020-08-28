import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoBanner from "../components/Banners/infoBanner"
import BlogItem from "../components/Blog/BlogItem"

export const query = graphql`
  query($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      title
      slug
      content
      isPostsPage
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
    console.log(props.data.allWpPost.edges)
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
              />
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <Layout>
      <SEO title={props.data.wpPage.title} />
      <InfoBanner>
        <div className="container">
          <p>24/7 BIOREMEDIATION SERVICE | CALL 1300 246 429</p>
        </div>
      </InfoBanner>
      {pageContent}
    </Layout>
  )
}

export default Page
