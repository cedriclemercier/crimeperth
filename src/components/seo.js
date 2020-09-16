/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, yoast }) {
  const { site, wp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }

        wp {
          seo {
            webmaster {
              googleVerify
            }
            schema {
              logo {
                mediaItemUrl
              }
            }
          }
        }
      }
    `
  )

  let metaDescription = description || site.siteMetadata.description
  let opengraphDescription = `website`
  let opengraphType = metaDescription

  if (yoast) {
    metaDescription = yoast.metaDesc
    opengraphDescription = yoast.opengraphDescription
    opengraphType = yoast.opengraphType
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: opengraphDescription,
        },
        {
          property: `og:type`,
          content: opengraphType,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: wp.seo.webmaster.googleVerify,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={wp.seo.schema.logo.mediaItemUrl}></link>

      {yoast && (
        <link
          rel="canonical"
          href={site.siteMetadata.siteUrl + yoast.canonical}
        ></link>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
