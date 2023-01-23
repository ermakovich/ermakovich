import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site, favicon } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          siteUrl
        }
      }
      favicon: file(relativePath: { eq: "images/avatar.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 120, height: 120, layout: FIXED)
        }
      }
    }
  `)

  return { ...site.siteMetadata, favicon }
}
