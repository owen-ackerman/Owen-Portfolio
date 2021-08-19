module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Owen-Portfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/pages`,
      },
    },

    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mediaTypes: [`text/markdown`, `text/x-markdown`],
      },
      defaultLayouts: {
        default: require.resolve(
          "C:/Users/13479/desktop/gatsbyportfoliosite/owen-portfolio/src/components/mdLayout.js"
        ),
      },
    },
  ],
};
