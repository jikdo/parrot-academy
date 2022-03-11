module.exports = {
    siteMetadata: {
        title: 'Parrot Academy',
        siteUrl: `https://www.learn.parrot.fi`,
        description: "",
        twitterUsername: "",
        image: "",
        url: "http://localhost:8000",

    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `getting-started`,
                path: `${__dirname}/getting-started/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `how-to`,
                path: `${__dirname}/how-to/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `strategies`,
                path: `${__dirname}/strategies/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
              gatsbyRemarkPlugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 100,
                  },
                },
              ],
            },
          },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-mdx-embed",
        `gatsby-remark-images`,
        'gatsby-plugin-react-helmet',

    ]
}

