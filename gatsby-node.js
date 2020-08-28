const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  const response = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            slug
          }
        }
      }
      allWpPost {
        edges {
          node {
            author {
              node {
                name
                slug
              }
            }
            title
            tags {
              nodes {
                slug
                name
              }
            }
            slug
            content
          }
        }
      }
    }
  `)

  response.data.allWpPage.edges.forEach(el => {
    createPage({
      component: pageTemplate,
      path: `/${el.node.slug}`,
      context: {
        slug: el.node.slug,
      },
    })
  })

  response.data.allWpPost.edges.forEach(el => {
    createPage({
      component: blogTemplate,
      path: `/${el.node.slug}`,
      context: {
        slug: el.node.slug,
      },
    })
  })
}
