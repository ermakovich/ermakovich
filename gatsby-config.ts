const title = 'Сергей Ермакович'

module.exports = {
  siteMetadata: {
    title,
    author: title,
    description: 'Веб-разработчик JavaScript (React) в Санкт-Петербурге',
    siteUrl: 'https://ermakovich.ru',
    email: 's.ermakovich@gmail.com',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-code-titles',
          { resolve: 'gatsby-remark-vscode', options: { injectStyles: false } },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }
              }),
            title,
            query: `{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
}`,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://ermakovich.ru',
        stripQueryString: true,
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-no-javascript-utils',
  ],
}
