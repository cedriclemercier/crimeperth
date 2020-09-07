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
          }
        }
        wp {
          seo {
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
      ].concat(meta)}
    >
      <link rel="icon" href={wp.seo.schema.logo.mediaItemUrl}></link>

      {/* Analytics */}
      {(function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            ;(h.hj.q = h.hj.q || []).push(arguments)
          }
        h._hjSettings = { hjid: 1978402, hjsv: 6 }
        a = o.getElementsByTagName("head")[0]
        r = o.createElement("script")
        r.async = 1
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
      })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")}
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
