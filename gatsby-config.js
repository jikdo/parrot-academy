module.exports = {
    siteMetadata: {
        title: 'Parrot Academy',
        siteUrl: `https://www.yourdomain.tld`,
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
        'gatsby-plugin-mdx',
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    ]
}