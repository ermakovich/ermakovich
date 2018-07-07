module.exports = {
  siteMetadata: {
    title: 'Siarhei Yermakovich',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-38766823-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
