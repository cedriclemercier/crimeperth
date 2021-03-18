module.exports = {
  siteMetadata: {
    title: `Crime Scene Cleaner Perth`,
    description: `The Industry Experts in Crime Scene Cleaning, Forensic Cleaning, Biological Remediation and Meth Lab Decontamination throughout Perth and regional Western Australia.`,
    author: `Forensic Cleaning`,
    siteUrl: `https://crimescenecleanerperth.com.au`,
    adminUrl: `https://admin.crimescenecleanerperth.com.au`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://crimescenecleanerperth.com.au",
        sitemap: "https://crimescenecleanerperth.com.au/sitemap_index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://admin.crimescenecleanerperth.com.au/graphql`,
        schema: {
          typePrefix: "Wp",
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-152062411-11",
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crime Scene cleaner Perth`,
        short_name: `CSC Perth`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/perth-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: "https://admin.crimescenecleanerperth.com.au/",
        uploadsUrl:
          "https://admin.crimescenecleanerperth.com.au/wp-content/uploads/",
        // processPostTypes: ["Page", "Post", "CustomPost"],
        graphqlTypeName: "WPGraphQL",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1978402,
        sv: 6,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
